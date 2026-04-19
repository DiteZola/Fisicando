import { GoogleGenAI, Type } from "@google/genai";
import { Question } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

let isQuotaExhausted = false;
let quotaResetTime = 0;

export async function generateNewQuestions(
  grade: 7 | 8 | 9, 
  topic: string, 
  count: number = 5,
  seenQuestions: string[] = []
): Promise<Question[]> {
  // Check if we are in "cooling down" period
  if (isQuotaExhausted && Date.now() < quotaResetTime) {
    console.warn("Gemini Quota exhausted. Falling back to local questions.");
    return [];
  }

  const prompt = `Gere ${count} perguntas de Física SUPER CURTAS e DIVERTIDAS para a ${grade}ª classe sobre o tema: "${topic}".
  As perguntas devem ser em Português de Angola/Brasil, com linguagem simples para CRIANÇAS.
  IMPORTANT: 
  - Perguntas e opções devem ser CURTAS (máximo 80 caracteres).
  - Use emojis ocasionais no texto se ajudar na diversão.
  - Não repita perguntas. Explore o mundo real das crianças!
  
  JÁ FORAM FEITAS PERGUNTAS COM ESTES IDs: ${seenQuestions.slice(-20).join(", ")}.
  
  Siga o currículo:
  7ª Classe: Universo, Grandezas, Estados da Matéria, Força, Pressão.
  8ª Classe: Trabalho, máquinas, Calor, Som, Luz.
  9ª Classe: Movimento, Electrizar, Energia Eléctrica, Ímanes.
  
  Retorne um JSON seguindo este esquema ARRAY de objetos:
  {
    "id": "string única",
    "text": "pergunta curta e divertida",
    "options": ["curta 1", "curta 2", "curta 3", "curta 4"],
    "correctAnswer": 0-3,
    "explanation": "explicação muito simples",
    "grade": ${grade},
    "topic": "${topic}"
  }`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              id: { type: Type.STRING },
              text: { type: Type.STRING },
              options: { 
                type: Type.ARRAY,
                items: { type: Type.STRING }
              },
              correctAnswer: { type: Type.INTEGER },
              explanation: { type: Type.STRING },
              grade: { type: Type.INTEGER },
              topic: { type: Type.STRING }
            },
            required: ["id", "text", "options", "correctAnswer", "explanation", "grade", "topic"]
          }
        }
      }
    });

    const text = response.text;
    if (!text) return [];
    
    // Success! Reset exhausted flag if it was set
    isQuotaExhausted = false;
    
    return JSON.parse(text);
  } catch (error: any) {
    console.error("Error generating questions:", error);
    
    // Detect 429 (Too Many Requests / Quota Exhausted)
    if (error?.status === 429 || (error?.message && error.message.includes("429")) || (error?.message && error.message.includes("quota"))) {
      isQuotaExhausted = true;
      quotaResetTime = Date.now() + 1000 * 60 * 5; // 5 minutes cooldown
      console.warn("Gemini Quota triggered. Cooling down for 5 minutes.");
    }
    
    return [];
  }
}
