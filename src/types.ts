/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: number; // index in options
  explanation: string;
  grade: 7 | 8 | 9;
  topic: string;
}

export interface UserStats {
  xp: number;
  level: number;
  streak: number;
  maxStreak: number;
  lastPlayed: string;
  completedQuestions: string[];
  lives: number;
  achievements: string[]; // list of achievement IDs
  correctPerTopic: Record<string, number>;
  totalCorrect: number;
  completedLevels: Record<string, Difficulty[]>; // topicKey -> ['easy', 'medium', 'hard']
  bestChallengeScore: number;
  gamesPlayed: number;
  topicLevels: Record<string, number>; // topicKey -> level (every 20 correct)
}

export type Difficulty = 'curious' | 'easy' | 'medium' | 'hard' | 'master';

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  criteria: (stats: UserStats) => boolean;
}

export interface GradeContent {
  grade: 7 | 8 | 9;
  topics: {
    title: string;
    description: string;
  }[];
}
