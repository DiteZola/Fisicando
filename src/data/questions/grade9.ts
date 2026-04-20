import { Question } from '../../types';

export const GRADE_9_QUESTIONS: Question[] = [
  // --- MOVIMENTO (9ª Classe) ---
  { id: '9-m-001', text: 'O que define se um corpo está em repouso ou movimento?', options: ['A sua cor', 'O referencial', 'A sua massa', 'A temperatura'], correctAnswer: 1, explanation: 'Tudo depende de quem olha (referencial)! 🚂', grade: 9, topic: 'Movimento' },
  { id: '9-m-002', text: 'No MRU, a velocidade é?', options: ['Variável', 'Constantemente zero', 'Constante', 'Aumenta sempre'], correctAnswer: 2, explanation: 'MRU = Movimento Rectilíneo Uniforme (Velocidade igual)! 📏', grade: 9, topic: 'Movimento' },
];

const generateGrade9 = () => {
  const qs: Question[] = [...GRADE_9_QUESTIONS];
  
  // Topic: Eletricidade (Ohm's Law variations) - Generate ~600 questions
  for(let v=1; v<=30; v++) {
    for(let r=1; r<=20; r++) {
       qs.push({
         id: `9-e-${v}-${r}`,
         text: `Num circuito com tensão de ${v*5}V e resistência de ${r}Ω, qual é a intensidade da corrente?`,
         options: [`${((v*5)/r).toFixed(2)}A`, `${((v*5)*r).toFixed(2)}A`, `${((v*5)+r).toFixed(2)}A`, `${((v*5)-r).toFixed(2)}A`],
         correctAnswer: 0,
         explanation: 'Pela Lei de Ohm: Corrente (I) = Tensão (U) / Resistência (R). ⚡',
         grade: 9,
         topic: 'Energia Eléctrica'
       });
    }
  }

  // Topic: Movimento (Speed = Distance / Time) - Generate 100 questions
  for(let d=10; d<=100; d+=10) {
    for(let t=1; t<=10; t++) {
      qs.push({
        id: `9-v-m-${d}-${t}`,
        text: `Se um carro percorre ${d*10} metros em ${t*5} segundos, qual a sua velocidade média?`,
        options: [`${(d*10)/(t*5)} m/s`, `${(d*10)*(t*5)} m/s`, `${(d*10)+(t*5)} m/s`, `${(d*10)-(t*5)} m/s`],
        correctAnswer: 0,
        explanation: 'Velocidade Média = Distância / Tempo! 🚗',
        grade: 9,
        topic: 'Movimento'
      });
    }
  }

  return qs;
};

export const ALL_GRADE_9 = generateGrade9();
