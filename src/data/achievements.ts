import { Achievement } from '../types';

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'first-steps',
    name: 'Primeiros Passos',
    description: 'Acertaste 10 perguntas! Estás a começar bem. 👣',
    icon: '👣',
    criteria: (stats) => stats.totalCorrect >= 10
  },
  {
    id: 'topic-master',
    name: 'Mestre da Matéria',
    description: 'Acertaste 20 perguntas num único tema. Especialista! 📚',
    icon: '📚',
    criteria: (stats) => (Object.values(stats.correctPerTopic) as number[]).some(count => count >= 20)
  },
  {
    id: 'streak-fire',
    name: 'Em Chamas',
    description: '15 perguntas seguidas sem errar! Incrível. 🔥',
    icon: '🔥',
    criteria: (stats) => stats.maxStreak >= 15
  },
  {
    id: 'curious-explorer',
    name: 'Explorador Curioso',
    description: 'Completaste o nível "Curioso" em 5 temas diferentes. 🔍',
    icon: '🔍',
    criteria: (stats) => Object.values(stats.completedLevels).filter(levels => levels.includes('curious')).length >= 5
  },
  {
    id: 'grade-7-hero',
    name: 'Herói da 7ª Classe',
    description: 'Dominaste todos os temas da 7ª Classe. 🏆',
    icon: '🥇',
    criteria: (stats) => {
      const g7Topics = ['7-O Universo', '7-Física e Grandezas', '7-Estados de Agregação', '7-Força e Massa', '7-Pressão'];
      return g7Topics.every(topic => (stats.completedLevels[topic] || []).length >= 1);
    }
  },
  {
    id: 'physics-master',
    name: 'Mestre da Física',
    description: 'Chegaste ao nível "Mestre" em qualquer tema. Fantástico! 🎓',
    icon: '🎓',
    criteria: (stats) => Object.values(stats.completedLevels).some(levels => levels.includes('master'))
  },
  {
    id: 'challenge-bronze',
    name: 'Desafiador Bronze',
    description: 'Fizeste 10 pontos no Modo Desafio. 🥉',
    icon: '🥉',
    criteria: (stats) => (stats.bestChallengeScore || 0) >= 10
  },
  {
    id: 'challenge-gold',
    name: 'Campeão de Elite',
    description: 'Fizeste 30 pontos no Modo Desafio! És um génio. 👑',
    icon: '👑',
    criteria: (stats) => (stats.bestChallengeScore || 0) >= 30
  },
  {
    id: 'xp-titan',
    name: 'Titã do Conhecimento',
    description: 'Chegaste aos 5000 XP. Estás no topo! 💎',
    icon: '💎',
    criteria: (stats) => stats.xp >= 5000
  },
  {
    id: 'persistent-student',
    name: 'Estudante Dedicado',
    description: 'Jogaste 50 vezes. A prática leva à perfeição! 📖',
    icon: '📖',
    criteria: (stats) => (stats.gamesPlayed || 0) >= 50
  }
];
