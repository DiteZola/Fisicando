import { Question } from '../../types';

export const GRADE_8_QUESTIONS: Question[] = [
  // --- TRABALHO E ENERGIA (8ª Classe) ---
  { id: '8-t-001', text: 'O que é necessário para realizar Trabalho na Física?', options: ['Só força', 'Só movimento', 'Força e deslocamento', 'Apenas pensar'], correctAnswer: 2, explanation: 'Trabalho exige que uma força mova algo! 🏗️', grade: 8, topic: 'Trabalho e Energia' },
  { id: '8-t-002', text: 'Qual é a unidade de Trabalho no Sistema Internacional?', options: ['Newton', 'Watt', 'Joule', 'Pascal'], correctAnswer: 2, explanation: 'O Joule (J) mede a energia transferida! ⚡', grade: 8, topic: 'Trabalho e Energia' },
  { id: '8-t-003', text: 'Uma máquina que facilita o trabalho é chamada de?', options: ['Máquina Simples', 'Máquina Complexa', 'Motor', 'Robô'], correctAnswer: 0, explanation: 'Alavancas e roldanas são máquinas simples! ⚙️', grade: 8, topic: 'Trabalho e Energia' },
];

const generateGrade8 = () => {
  const qs: Question[] = [...GRADE_8_QUESTIONS];
  
  // Topic: Calor
  for(let i=0; i<200; i++) {
    qs.push({
      id: `8-c-${i}`,
      text: `Se a temperatura sobe de ${20+i}ºC para ${25+i}ºC, o corpo ganhou?`,
      options: ['Calor', 'Frio', 'Massa', 'Peso'],
      correctAnswer: 0,
      explanation: 'Ganhar calor faz a temperatura subir! Lembra-te: calor é energia em movimento. 🔥',
      grade: 8,
      topic: 'Energia Calorífica'
    });
  }

  // Topic: Acústica (Sound)
  for(let i=0; i<200; i++) {
    qs.push({
      id: `8-a-${i}`,
      text: `O som de ${100 + i*10}Hz é mais agudo que ${50 + i*10}Hz?`,
      options: ['Verdadeiro', 'Falso', 'Depende da massa', 'Impossível dizer'],
      correctAnswer: 0,
      explanation: 'Sim! Maior frequência resultará num som mais agudo ou alto. 🎶',
      grade: 8,
      topic: 'Fenómenos Acústicos'
    });
  }

  return qs;
};

export const ALL_GRADE_8 = generateGrade8();
