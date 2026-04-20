/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Heart, 
  Flame, 
  Trophy, 
  X, 
  CheckCircle2, 
  AlertCircle, 
  ArrowLeft,
  BookOpen,
  Atom,
  Zap,
  Globe,
  Sun,
  Layout,
  Medal,
  Award,
  Lock,
  Volume2,
  VolumeX,
  RotateCcw,
  AlertTriangle
} from 'lucide-react';
import { Question, UserStats, GradeContent, Achievement, Difficulty } from './types';
import { INITIAL_QUESTIONS } from './data/questions';
import { ACHIEVEMENTS } from './data/achievements';
import { generateNewQuestions } from './services/geminiService';

const GRADES: GradeContent[] = [
  {
    grade: 7,
    topics: [
      { title: 'O Universo', description: 'Terra, Sistema Solar e fenómenos astronómicos.' },
      { title: 'Física e Grandezas', description: 'Métodos de medição e protecção da natureza.' },
      { title: 'Estados de Agregação', description: 'Propriedades físicas da matéria.' },
      { title: 'Força e Massa', description: 'Densidade e interacções entre corpos.' },
      { title: 'Pressão', description: 'Fluídos, vasos comunicantes e gases.' },
    ]
  },
  {
    grade: 8,
    topics: [
      { title: 'Trabalho e Energia', description: 'Máquinas simples e conceitos de energia.' },
      { title: 'Energia Calorífica', description: 'Movimento térmico e calor.' },
      { title: 'Fenómenos Acústicos', description: 'Produção e propagação do som.' },
      { title: 'Fenómenos Luminosos', description: 'Luz, espelhos e óptica.' },
    ]
  },
  {
    grade: 9,
    topics: [
      { title: 'Movimento', description: 'Repouso, MRU e variado.' },
      { title: 'Electrostática', description: 'Cargas e fenómenos eléctricos.' },
      { title: 'Energia Eléctrica', description: 'Circuitos, Lei de Ohm e Potência.' },
      { title: 'Electricidade e Magnetismo', description: 'Efeitos magnéticos e indução.' },
    ]
  }
];

const MASCOTS = ['👩‍🔬', '👨‍🚀', '🦁', '🤖', '🐵', '🐼', '🦊', '🦄', '🐯', '🦸‍♂️'];

export default function App() {
  const [view, setView] = useState<'home' | 'path' | 'quiz' | 'result' | 'achievements' | 'challenge'>('home');
  const [stats, setStats] = useState<UserStats>(() => {
    const saved = localStorage.getItem('fisicando_stats');
    const initial = saved ? JSON.parse(saved) : {
      xp: 0,
      level: 1,
      streak: 0,
      maxStreak: 0,
      lastPlayed: new Date().toISOString(),
      completedQuestions: [],
      lives: 5,
      achievements: [],
      correctPerTopic: {},
      totalCorrect: 0,
      completedLevels: {},
      bestChallengeScore: 0,
      gamesPlayed: 0,
      topicLevels: {}
    };

    // Migration and defaults
    if (!initial.maxStreak) initial.maxStreak = 0;
    if (!initial.achievements) initial.achievements = [];
    if (!initial.correctPerTopic) initial.correctPerTopic = {};
    if (!initial.totalCorrect) initial.totalCorrect = 0;
    if (!initial.completedLevels) initial.completedLevels = {};
    if (initial.bestChallengeScore === undefined) initial.bestChallengeScore = 0;
    if (initial.gamesPlayed === undefined) initial.gamesPlayed = 0;
    if (initial.topicLevels === undefined) initial.topicLevels = {};
    
    // Convert old completedTopics to completedLevels if needed
    if (initial.completedTopics) {
      initial.completedTopics.forEach((t: string) => {
        if (!initial.completedLevels[t]) {
          initial.completedLevels[t] = ['easy', 'medium', 'hard']; // Assume old ones were fully done
        }
      });
      delete initial.completedTopics;
    }

    // Calculate streak
    const lastDate = new Date(initial.lastPlayed);
    const today = new Date();
    const diffDays = Math.floor((today.getTime() - lastDate.getTime()) / (1000 * 3600 * 24));
    
    if (diffDays === 1) {
      // Streak continues - this is a simplification for demo
    } else if (diffDays > 1) {
      initial.streak = 0;
    }
    
    return initial;
  });

  const [currentGrade, setCurrentGrade] = useState<7 | 8 | 9>(7);
  const [currentTopic, setCurrentTopic] = useState<string>('');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswering, setIsAnswering] = useState(false);
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null);
  const [currentDifficulty, setCurrentDifficulty] = useState<Difficulty>('easy');
  const [isLoading, setIsLoading] = useState(false);
  const [isSoundEnabled, setIsSoundEnabled] = useState(true);
  const [bgMusic] = useState(() => {
    const audio = new Audio("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3");
    audio.loop = true;
    audio.volume = 0.2;
    return audio;
  });

  const playSound = (type: 'correct' | 'wrong' | 'celebrate') => {
    if (!isSoundEnabled) return;
    let url = "";
    switch(type) {
      case 'correct':
        url = "https://assets.mixkit.co/active_storage/sfx/2012/2012-preview.mp3"; // Ding alegria
        break;
      case 'wrong':
        url = "https://assets.mixkit.co/active_storage/sfx/2013/2013-preview.mp3";
        break;
      case 'celebrate':
        url = "https://assets.mixkit.co/active_storage/sfx/2019/2019-preview.mp3"; // Vitória curta
        break;
    }
    const sound = new Audio(url);
    sound.volume = 0.5;
    sound.play().catch(e => console.log("Sound play error", e));
  };

  useEffect(() => {
    if (view === 'quiz' && isSoundEnabled) {
      bgMusic.play().catch(e => console.log("BG Music play error", e));
    } else {
      bgMusic.pause();
    }
  }, [view, isSoundEnabled, bgMusic]);
  const [newAchievement, setNewAchievement] = useState<Achievement | null>(null);
  const [showDifficultyModal, setShowDifficultyModal] = useState(false);
  const [showResetModal, setShowResetModal] = useState(false);
  const [pendingTopic, setPendingTopic] = useState<{grade: 7|8|9, topic: string} | null>(null);
  const [isOfflineMode, setIsOfflineMode] = useState(false);
  
  // Challenge Mode State
  const [challengeTimer, setChallengeTimer] = useState(60);
  const [challengeScore, setChallengeScore] = useState(0);
  const [isChallengeActive, setIsChallengeActive] = useState(false);

  const [levelUpInfo, setLevelUpInfo] = useState<{ topic: string, level: number } | null>(null);
  const [topicTransitionInfo, setTopicTransitionInfo] = useState<{ from: string, to: string } | null>(null);

  useEffect(() => {
    localStorage.setItem('fisicando_stats', JSON.stringify(stats));
  }, [stats]);

  // Challenge Mode Timer Logic
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (view === 'challenge' && isChallengeActive && challengeTimer > 0) {
      timer = setInterval(() => {
        setChallengeTimer(prev => prev - 1);
      }, 1000);
    } else if (challengeTimer === 0 && isChallengeActive) {
      handleEndChallenge();
    }
    return () => clearInterval(timer);
  }, [view, isChallengeActive, challengeTimer]);

  const handleStartChallenge = () => {
    setChallengeScore(0);
    setChallengeTimer(60);
    setIsChallengeActive(true);
    setView('challenge');
    setCurrentIndex(0);
    setSelectedOption(null);
    setFeedback(null);
    setIsAnswering(false);
    
    // Pick 50 random questions from all grades
    const shuffled = [...INITIAL_QUESTIONS].sort(() => Math.random() - 0.5).slice(0, 50);
    setQuestions(shuffled);
    
    setStats(prev => ({
      ...prev,
      gamesPlayed: (prev.gamesPlayed || 0) + 1,
      lastPlayed: new Date().toISOString()
    }));
  };

  const handleEndChallenge = () => {
    setIsChallengeActive(false);
    setStats(prev => ({
      ...prev,
      bestChallengeScore: Math.max(prev.bestChallengeScore || 0, challengeScore),
      xp: prev.xp + (challengeScore * 5) // 5 XP per correct answer in challenge
    }));
    setView('result');
  };

  const handleResetProgress = () => {
    setShowResetModal(true);
  };

  const confirmReset = () => {
    const initialStats = {
      xp: 0,
      level: 1,
      streak: 0,
      maxStreak: 0,
      lastPlayed: new Date().toISOString(),
      completedQuestions: [],
      lives: 5,
      achievements: [],
      correctPerTopic: {},
      totalCorrect: 0,
      completedLevels: {},
      bestChallengeScore: 0,
      gamesPlayed: 0,
      topicLevels: {}
    };
    setStats(initialStats);
    localStorage.setItem('fisicando_stats', JSON.stringify(initialStats));
    setShowResetModal(false);
    setView('home');
    window.location.reload(); 
  };

  const handleStartTopic = async (grade: 7 | 8 | 9, topic: string, difficulty?: Difficulty) => {
    setIsLoading(true);
    setView('quiz'); 
    setCurrentGrade(grade);
    setCurrentTopic(topic);
    setShowDifficultyModal(false);
    
    // Atualizar data do último jogo para salvar progresso
    setStats(prev => ({
      ...prev,
      lastPlayed: new Date().toISOString()
    }));
    
    const topicKey = `${grade}-${topic}`;
    const completed = stats.completedLevels[topicKey] || [];
    
    // Determine the required difficulty if not provided
    let targetDifficulty: Difficulty = 'curious';
    if (difficulty) {
      targetDifficulty = difficulty;
    } else {
      if (!completed.includes('curious')) targetDifficulty = 'curious';
      else if (!completed.includes('easy')) targetDifficulty = 'easy';
      else if (!completed.includes('medium')) targetDifficulty = 'medium';
      else if (!completed.includes('hard')) targetDifficulty = 'hard';
      else targetDifficulty = 'master';
    }
    
    setCurrentDifficulty(targetDifficulty);
    setQuestions([]); 
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswering(false);
    setFeedback(null);
    
    const countMap: Record<Difficulty, number> = {
      curious: 5,
      easy: 10,
      medium: 15,
      hard: 20,
      master: 25
    };
    const targetCount = countMap[targetDifficulty];
    
    try {
      // 1. Get seed questions from massive internal bank first (Filter out duplicates by text)
      const internalQuestions = INITIAL_QUESTIONS.filter(q => 
        q.grade === grade && 
        q.topic === topic && 
        !stats.completedQuestions.includes(q.id)
      );
      
      let pool = [...internalQuestions];

      // 2. If pool is small, try AI as a bonus/variety boost (but don't wait long/fail if it fails)
      // Only request a few AI questions if we have less than enough in the local bank
      if (pool.length < targetCount) {
        const aiQuestions = await generateNewQuestions(grade, topic, 5, stats.completedQuestions);
        pool.push(...aiQuestions);
      }
      
      // 3. Remove duplicates by text to ensure quality
      const unique = pool.filter((q, index, self) => 
        index === self.findIndex((t) => t.text === q.text)
      );

      // 4. Fill if still needed using already completed questions (resetting the cycle)
      if (unique.length < targetCount) {
        const fallback = INITIAL_QUESTIONS.filter(q => q.grade === grade && q.topic === topic);
        unique.push(...fallback.sort(() => Math.random() - 0.5).slice(0, targetCount - unique.length));
      }

      // Shuffling final set
      const shuffled = unique.sort(() => Math.random() - 0.5).slice(0, targetCount);
      setQuestions(shuffled);
      setIsOfflineMode(true); // Defaulting to offline mode since we have a massive bank
    } catch (e) {
      // Fallback to initial seeds if something fails
      const basicQuestions = INITIAL_QUESTIONS.filter(q => q.grade === grade);
      setQuestions(basicQuestions.slice(0, targetCount));
    } finally {
      setIsLoading(false);
    }
  };

  const prefetchExtraQuestions = async () => {
    // Background task to refine/add more questions during quiz if pool is low
    // Don't prefetch if we are already in offline/quota-exhausted mode
    if (isOfflineMode) return;

    if (view === 'quiz' && questions.length < (currentIndex + 5)) {
      const extra = await generateNewQuestions(currentGrade, currentTopic, 3, stats.completedQuestions);
      if (extra.length > 0) {
        setQuestions(prev => {
          const combined = [...prev, ...extra];
          // Filter out questions already in state or already completed
          return combined.filter((q, idx, self) => 
            !stats.completedQuestions.includes(q.id) &&
            idx === self.findIndex(t => t.text === q.text)
          );
        });
      } else {
        // If prefetch fails, stop trying for this session
        setIsOfflineMode(true);
      }
    }
  };

  const handleAnswer = (index: number) => {
    if (isAnswering) return;
    setSelectedOption(index);
  };

  const checkAnswer = () => {
    const currentQuestion = questions[currentIndex];
    const isCorrect = selectedOption === currentQuestion.correctAnswer;
    setIsAnswering(true);
    setFeedback(isCorrect ? 'correct' : 'wrong');
    
    if (isCorrect) {
      playSound('celebrate'); // Joyful sound
      
      if (view === 'challenge') {
        setChallengeScore(prev => prev + 1);
      } else {
        // Refine/Prefetch more questions after a successful answer to keep the pool fresh
        prefetchExtraQuestions();

        setStats(prev => {
          const topicKey = `${currentGrade}-${currentQuestion.topic}`;
          const newTopicCount = (prev.correctPerTopic[topicKey] || 0) + 1;
        const newTotalCorrect = prev.totalCorrect + 1;
        const newStreak = prev.streak + 1;
        const newMaxStreak = Math.max(prev.maxStreak, newStreak);
        const newXP = prev.xp + 10;
        const newLevel = Math.floor(newXP / 200) + 1;
        
        const topicLevel = Math.floor(newTopicCount / 20) + 1;
        const oldTopicLevel = prev.topicLevels?.[topicKey] || 1;

        if (topicLevel > oldTopicLevel) {
          setLevelUpInfo({ topic: currentQuestion.topic, level: topicLevel });
          playSound('celebrate');
          setTimeout(() => setLevelUpInfo(null), 4000);
        }

        const updatedStats = {
          ...prev,
          xp: newXP,
          level: newLevel,
          completedQuestions: [...prev.completedQuestions, currentQuestion.id],
          totalCorrect: newTotalCorrect,
          streak: newStreak,
          maxStreak: newMaxStreak,
          correctPerTopic: {
            ...prev.correctPerTopic,
            [topicKey]: newTopicCount
          },
          topicLevels: {
            ...prev.topicLevels,
            [topicKey]: topicLevel
          }
        };

        // Check for new achievements
        const unlockedNow: string[] = [];
        ACHIEVEMENTS.forEach(ach => {
          if (!prev.achievements.includes(ach.id) && ach.criteria(updatedStats)) {
            unlockedNow.push(ach.id);
            setNewAchievement(ach);
            setTimeout(() => setNewAchievement(null), 5000);
          }
        });

        if (unlockedNow.length > 0) {
          updatedStats.achievements = [...prev.achievements, ...unlockedNow];
        }

        return updatedStats;
      });
    }
  } else {
    setStats(prev => ({
        ...prev,
        lives: Math.max(0, prev.lives - 1),
        streak: 0
      }));
    }
  };

  const nextQuestion = () => {
    if (currentIndex + 1 < questions.length && stats.lives > 0) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswering(false);
      setFeedback(null);
    } else {
      if (view === 'challenge') {
        handleEndChallenge();
      } else {
        if (stats.lives > 0) {
          const topicKey = `${currentGrade}-${currentTopic}`;
          const totalCorrectInTopic = stats.correctPerTopic[topicKey] || 0;
          
          // Check if we should auto-transition to next topic
          if (totalCorrectInTopic >= 100) {
            const allTopicsFlat = GRADES.flatMap(g => g.topics.map(t => ({ grade: g.grade, title: t.title })));
            const currentIdx = allTopicsFlat.findIndex(t => t.grade === currentGrade && t.title === currentTopic);
            
            if (currentIdx !== -1 && currentIdx + 1 < allTopicsFlat.length) {
              const nextTopic = allTopicsFlat[currentIdx + 1];
              
              setTopicTransitionInfo({ from: currentTopic, to: nextTopic.title });
              playSound('celebrate');
              
              setTimeout(() => {
                setTopicTransitionInfo(null);
                handleStartTopic(nextTopic.grade as 7|8|9, nextTopic.title);
              }, 3000);
              
              return; // Stay in transition, don't show result
            }
          }

          setStats(prev => {
            const currentCompleted = prev.completedLevels[topicKey] || [];
            
            if (!currentCompleted.includes(currentDifficulty)) {
              const newCompleted = [...currentCompleted, currentDifficulty];
              return {
                ...prev,
                completedLevels: {
                  ...prev.completedLevels,
                  [topicKey]: newCompleted
                },
                xp: prev.xp + 50 
              };
            }
            return prev;
          });
          setView('result');
        } else {
          setView('result');
        }
      }
    }
  };

  const renderHome = () => (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center justify-center min-h-svh text-center p-6 bg-gradient-to-b from-white to-sky-50"
    >
      <div className="relative mb-8 md:mb-12">
        <div className="w-40 h-40 md:w-56 md:h-56 bg-duo-green rounded-[32px] md:rounded-[48px] flex items-center justify-center shadow-2xl rotate-3 relative z-10">
          <span className="text-6xl md:text-8xl">🦉</span>
        </div>
        <div className="absolute inset-0 bg-duo-blue rounded-[48px] -rotate-3 blur-2xl opacity-20" />
      </div>

      <h1 className="text-4xl md:text-6xl font-black text-duo-green mb-4 md:mb-6 tracking-tight">Fisicando</h1>
      <p className="text-lg md:text-2xl text-gray-500 mb-8 md:mb-12 max-w-lg font-bold leading-relaxed px-4">
        Domine a Física com o poder da IA. <br className="hidden md:block"/>
        <span className="text-duo-blue">1500+ desafios</span> te esperam!
      </p>
      
      <div className="flex flex-col gap-4 w-full max-w-xs md:max-w-sm px-4">
        <button 
          onClick={() => setView('path')}
          className="btn-check text-xl md:text-2xl h-14 md:h-16 shadow-[0_6px_0_var(--color-duo-green-dark)] active:shadow-none bg-duo-green"
        >
          Iniciar Jogo
        </button>
        <button 
          onClick={handleStartChallenge}
          className="btn-check text-xl md:text-2xl h-14 md:h-16 shadow-[0_6px_0_#9a2b2b] active:shadow-none bg-duo-red flex items-center justify-center gap-3"
        >
          <Zap className="w-6 h-6 fill-current" />
          Modo Desafio
        </button>
        <button 
          className="btn-skip text-base md:text-lg h-12 md:h-14 border-2"
          onClick={() => setView('achievements')}
        >
          Ver Minhas Medalhas
        </button>
        
        {stats.totalCorrect > 0 && (
          <button 
            className="text-gray-400 hover:text-duo-red text-xs font-bold uppercase tracking-widest mt-4 transition-colors"
            onClick={handleResetProgress}
          >
            Recomeçar do Início 🔄
          </button>
        )}
      </div>
    </motion.div>
  );

  const renderPath = () => (
    <div className="max-w-2xl mx-auto p-4 pb-24 relative">
      <header className="flex justify-between items-center mb-8 sticky top-0 bg-white/80 backdrop-blur-md z-10 py-4 border-b border-duo-gray">
        <div className="flex items-center gap-4">
          <button
            onClick={handleResetProgress}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-400 hover:text-duo-red"
            title="Reiniciar Progresso"
          >
            <RotateCcw className="w-4 h-4 md:w-5 md:h-5" />
          </button>
          
          <div className="flex gap-4">
            <div className="flex items-center gap-1 text-orange-500 font-bold">
              <Flame className="w-6 h-6 fill-current" />
              <span>{stats.streak}</span>
            </div>
            <div className="flex items-center gap-1 text-duo-red font-bold">
              <Heart className="w-6 h-6 fill-current" />
              <span>{stats.lives}</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 bg-duo-blue/10 px-3 py-1 rounded-full">
          <Trophy className="w-5 h-5 text-duo-blue" />
          <span className="text-duo-blue font-bold">{stats.xp} XP</span>
        </div>
      </header>

      {GRADES.map((gradeInfo, gradeIdx) => (
        <section key={gradeInfo.grade} className="mb-12">
          <h2 className="text-2xl font-black text-gray-400 mb-6 uppercase tracking-widest border-b-2 border-duo-gray pb-2 ml-4">
            {gradeInfo.grade}ª CLASSE
          </h2>
          <div className="flex flex-col items-center gap-8">
            {gradeInfo.topics.map((topic, i) => {
              const topicKey = `${gradeInfo.grade}-${topic.title}`;
              const allTopicsFlat = GRADES.flatMap(g => g.topics.map(t => ({ grade: g.grade, title: t.title })));
              const currentTopicIdx = allTopicsFlat.findIndex(t => t.grade === gradeInfo.grade && t.title === topic.title);
              
              const totalCorrectInTopic = stats.correctPerTopic[topicKey] || 0;
              const isTopicFullyDone = totalCorrectInTopic >= 100;
              const masteryLevel = stats.topicLevels?.[topicKey] || 1;
              
              let isActive = false;
              if (currentTopicIdx === 0) {
                isActive = true; 
              } else {
                const prevTopic = allTopicsFlat[currentTopicIdx - 1];
                const prevTopicKey = `${prevTopic.grade}-${prevTopic.title}`;
                // Previous topic must have 100 correct answers to unlock next topic
                isActive = (stats.correctPerTopic[prevTopicKey] || 0) >= 100;
              }

              return (
                <motion.button
                  key={topic.title}
                  whileHover={isActive ? { scale: 1.05 } : {}}
                  whileTap={isActive ? { scale: 0.95 } : {}}
                  onClick={() => isActive && handleStartTopic(gradeInfo.grade as 7|8|9, topic.title)}
                  className={`
                    w-20 h-20 md:w-24 md:h-24 rounded-full border-b-8 flex items-center justify-center transition-all relative
                    ${isActive 
                      ? isTopicFullyDone ? 'bg-duo-yellow border-duo-yellow shadow-lg' : 'bg-duo-green border-duo-green-dark text-white shadow-lg' 
                      : 'bg-duo-gray border-gray-300 text-gray-400 cursor-not-allowed'}
                  `}
                >
                  {isTopicFullyDone ? (
                    <Trophy className="w-8 h-8 md:w-10 md:h-10 text-white" />
                  ) : isActive ? (
                    <div className="flex flex-col items-center">
                      <BookOpen className="w-8 h-8 md:w-10 md:h-10 text-white" />
                      <div className="absolute -bottom-2 bg-white px-2 rounded-full border border-gray-200 min-w-[32px]">
                        <span className="text-[10px] text-duo-green font-black">{totalCorrectInTopic}/100</span>
                      </div>
                    </div>
                  ) : (
                    <Lock className="w-8 h-8 md:w-10 md:h-10 text-gray-300" />
                  )}

                  {isActive && masteryLevel > 1 && (
                    <div className="absolute -top-2 -right-2 bg-duo-blue text-white w-7 h-7 md:w-9 md:h-9 rounded-full border-2 border-white flex items-center justify-center font-black text-[10px] md:text-sm shadow-md animate-bounce">
                      {masteryLevel}
                    </div>
                  )}
                  
                  <div className="absolute top-20 md:top-24 w-32 md:w-40 text-center">
                    <span className={`text-xs md:text-sm font-bold ${isActive ? 'text-gray-700' : 'text-gray-400'}`}>
                      {topic.title}
                    </span>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );

  const renderQuiz = () => {
    if (isLoading && view !== 'challenge') return (
      <div className="flex flex-col items-center justify-center h-[80vh]">
        <Atom className="w-16 h-16 text-duo-green animate-spin mb-4" />
        <p className="text-gray-500 font-bold">Preparando perguntas do laboratório...</p>
      </div>
    );

    const isChallenge = view === 'challenge';
    const question = questions[currentIndex];
    const progress = isChallenge ? (challengeTimer / 60) * 100 : ((currentIndex + 1) / questions.length) * 100;

    return (
      <div className="max-w-4xl mx-auto h-full flex flex-col p-4 font-sans bg-white relative">
        <AnimatePresence>
          {isLoading && !isChallenge && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[200] bg-white flex flex-col items-center justify-center p-10"
            >
              <motion.div 
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="text-9xl mb-12"
              >
                🦉
              </motion.div>
              <h2 className="text-4xl font-black text-duo-green mb-4 text-center">A carregar o laboratório...</h2>
              <p className="text-xl text-gray-400 font-bold text-center">A IA está a preparar os teus desafios exclusivos!</p>
              
              <div className="w-full max-w-xs h-4 bg-duo-gray rounded-full mt-10 overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="h-full bg-duo-green"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <header className="flex items-center gap-3 md:gap-6 mb-6 md:mb-12 h-16 md:h-20 px-2 md:px-4">
          <button onClick={() => setView('path')} className="text-gray-400 hover:text-gray-600">
            <X className="w-6 h-6 md:w-8 md:h-8" />
          </button>
          <div className="flex-1 h-3 md:h-4 bg-duo-gray rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              className={`h-full rounded-full ${isChallenge ? 'bg-duo-red' : 'bg-duo-green'}`}
            />
          </div>
          <div className="flex items-center gap-2 md:gap-4 font-bold text-sm md:text-lg">
            {isChallenge ? (
              <div className="flex items-center gap-2 text-duo-red animate-pulse">
                <Zap className="w-5 h-5 md:w-6 md:h-6 fill-current" />
                <span className="text-xl">{challengeTimer}s</span>
              </div>
            ) : (
              <>
                <button 
                  onClick={() => setIsSoundEnabled(!isSoundEnabled)}
                  className="text-gray-400 hover:text-duo-blue flex items-center justify-center p-1 rounded-lg transition-colors"
                  title={isSoundEnabled ? "Desativar Sons" : "Ativar Sons"}
                >
                  {isSoundEnabled ? <Volume2 className="w-5 h-5 md:w-6 md:h-6" /> : <VolumeX className="w-5 h-5 md:w-6 md:h-6" />}
                </button>
                <div className="flex items-center gap-1 md:gap-2 text-orange-500">
                  <Flame className="w-5 h-5 md:w-6 md:h-6 fill-current" />
                  <span>{stats.streak}</span>
                </div>
                <div className="flex items-center gap-1 md:gap-2 text-duo-red">
                  <Heart className="w-5 h-5 md:w-6 md:h-6 fill-current" />
                  <span>{stats.lives}</span>
                </div>
              </>
            )}
          </div>
        </header>

        <div className="absolute top-[80px] md:top-[100px] left-6 md:left-10 z-10 flex flex-col gap-2">
          <div className="level-tag uppercase tracking-wider text-[10px] md:text-xs">
            {isChallenge ? `MODO DESAFIO: ${challengeScore} PONTOS` : `${currentGrade}ª CLASSE: ${currentTopic}`}
          </div>
          {isOfflineMode && !isChallenge && (
            <div className="bg-amber-100 text-amber-700 px-2 py-0.5 rounded text-[8px] md:text-[10px] font-bold flex items-center gap-1 border border-amber-200">
              <Zap className="w-3 h-3" /> MODALIDADE LOCAL
            </div>
          )}
        </div>

        <AnimatePresence mode="wait">
          <motion.div 
            key={currentIndex}
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -20, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="flex-1 flex flex-col items-center justify-center pt-4 md:pt-8 w-full max-w-[1000px] mx-auto px-4"
          >
            <div className="flex items-end gap-3 md:gap-6 mb-6 md:mb-10 w-full max-w-[800px]">
              <motion.div 
                key={`${currentIndex}-mascot`}
                initial={{ scale: 0.5, y: 20, opacity: 0 }}
                animate={{ 
                  scale: 1, 
                  y: [0, -10, 0],
                  opacity: 1 
                }}
                transition={{ 
                  y: { repeat: Infinity, duration: 4, ease: "easeInOut" },
                  scale: { duration: 0.3 }
                }}
                className="mascot shrink-0 bg-white w-20 h-20 md:w-28 md:h-28 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border-b-8 border-r-2 border-duo-gray/30 flex items-center justify-center relative overflow-hidden"
              >
                {/* 3D background light effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-white/80 pointer-events-none" />
                <span className="text-5xl md:text-7xl drop-shadow-2xl relative z-10 filter saturate-125">
                  {MASCOTS[currentIndex % MASCOTS.length]}
                </span>
              </motion.div>
              <div className="speech-bubble shrink min-h-[80px] flex items-center">
                <h2 className="text-xl md:text-[28px] font-bold leading-tight m-0 text-gray-800">
                  {question?.text}
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-[15px] w-full max-w-[800px] pb-32 md:pb-0">
              {question?.options.map((option, idx) => {
                let stateClasses = "";
                if (selectedOption === idx) {
                  stateClasses = "border-sky-300 bg-sky-50 shadow-[0_4px_0_theme(colors.sky.300)] text-sky-600";
                }
                if (isAnswering) {
                  if (idx === question.correctAnswer) {
                    stateClasses = "border-duo-green bg-duo-green/10 text-duo-green shadow-[0_4px_0_var(--color-duo-green)]";
                  } else if (selectedOption === idx) {
                    stateClasses = "border-duo-red bg-duo-red/10 text-duo-red shadow-[0_4px_0_var(--color-duo-red)]";
                  }
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleAnswer(idx)}
                    disabled={isAnswering}
                    className={`
                      option-card
                      ${stateClasses}
                    `}
                  >
                    <span className="option-number">{idx + 1}</span>
                    {option}
                  </button>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Feedback Bar */}
        <AnimatePresence>
          {isAnswering && (
            <motion.div
              initial={{ y: 200 }}
              animate={{ y: 0 }}
              exit={{ y: 200 }}
              className={`
                fixed bottom-0 left-0 right-0 p-4 md:p-8 z-30 border-t-2 shadow-[0_-10px_40px_rgba(0,0,0,0.1)]
                ${feedback === 'correct' ? 'bg-green-100 border-green-200' : 'bg-red-100 border-red-200'}
              `}
            >
              <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
                <div className="flex items-start gap-4 md:gap-6 w-full relative">
                  {feedback === 'correct' && (
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: [1, 1.2, 1], opacity: 1 }}
                      className="absolute -top-12 left-0 text-3xl pointer-events-none"
                    >
                      ✨ 🌟 ✨
                    </motion.div>
                  )}
                  
                  <motion.div 
                    initial={{ scale: 0.8 }}
                    animate={{ scale: feedback === 'correct' ? [1, 1.1, 1] : 1 }}
                    className={`p-2 md:p-3 rounded-2xl flex items-center justify-center shadow-md shrink-0 border-2 ${feedback === 'correct' ? 'bg-white border-duo-green' : 'bg-white border-duo-red'}`}
                  >
                    {feedback === 'correct' ? (
                      <CheckCircle2 className="w-8 h-8 md:w-12 md:h-12 text-duo-green" />
                    ) : (
                      <AlertCircle className="w-8 h-8 md:w-12 md:h-12 text-duo-red" />
                    )}
                  </motion.div>
                  
                  <div className="flex-1">
                    <p className={`font-black text-xl md:text-2xl mb-1 ${feedback === 'correct' ? 'text-duo-green' : 'text-duo-red'}`}>
                      {feedback === 'correct' ? (
                        <motion.span animate={{ x: [0, 5, 0] }}>Muito Bem! 🥳</motion.span>
                      ) : 'Resposta Incorreta'}
                    </p>
                    
                    {feedback === 'wrong' && (
                      <div className="mb-2">
                        <span className="text-xs font-black text-duo-red uppercase tracking-widest bg-red-200/50 px-2 py-0.5 rounded">A resposta correta era:</span>
                        <p className="text-gray-800 font-bold text-base md:text-lg">
                          {question.options[question.correctAnswer]}
                        </p>
                      </div>
                    )}
                    
                    <div className={`mt-2 p-3 rounded-xl ${feedback === 'correct' ? 'bg-green-200/30' : 'bg-red-200/30'}`}>
                      <p className="text-xs font-black uppercase tracking-widest text-gray-500 mb-1">Explicação:</p>
                      <p className="text-sm md:text-base text-gray-700 font-bold leading-tight md:leading-relaxed">
                        {question.explanation}
                      </p>
                    </div>
                  </div>
                </div>
                <button 
                  onClick={nextQuestion}
                  className={`btn-check w-full md:w-auto h-14 px-10 shadow-lg ${feedback === 'correct' ? 'bg-duo-green' : 'bg-duo-red shadow-[0_6px_0_#CC3A3A]'} whitespace-nowrap`}
                >
                  Continuar
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <footer className={`h-24 md:h-[120px] px-6 md:px-10 flex items-center justify-between border-t-2 border-duo-gray bg-white fixed md:static bottom-0 left-0 right-0 z-20 transition-opacity ${isAnswering ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
          <button 
            onClick={() => setView('path')} 
            className="btn-skip h-10 md:h-12 px-4 md:px-[30px]"
          >
            Pular
          </button>
          
          <div className="hidden sm:block text-center flex-1">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
              PERGUNTA {currentIndex + 1} / {questions.length}
            </span>
          </div>

          <button 
            onClick={checkAnswer}
            disabled={selectedOption === null}
            className={`
              btn-check h-10 md:h-14 px-6 md:px-[60px]
              ${selectedOption !== null ? 'bg-duo-green' : 'bg-duo-gray text-gray-400 cursor-not-allowed shadow-[0_4px_0_#ccc] pointer-events-none'}
            `}
          >
            Verificar
          </button>
        </footer>
      </div>
    );
  };

  const renderResult = () => {
    const isChallenge = view === 'result' && isChallengeActive === false && challengeTimer === 0;

    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center min-h-[80vh] text-center p-6"
      >
        <div className={`w-32 h-32 rounded-full flex items-center justify-center mb-6 ${stats.lives > 0 || isChallenge ? 'bg-duo-yellow' : 'bg-duo-red'}`}>
          {stats.lives > 0 || isChallenge ? <Trophy className="w-16 h-16 text-white" /> : <X className="w-16 h-16 text-white" />}
        </div>
        <h2 className="text-3xl font-black mb-4 uppercase">
          {isChallenge ? 'Desafio Encerrado!' : stats.lives > 0 ? 'Lição Concluída!' : 'Sem Vidas Restantes'}
        </h2>
        <div className="flex gap-4 mb-8">
          <div className="duo-card flex flex-col items-center px-8 border-duo-yellow bg-duo-yellow/5">
            <span className="text-duo-yellow font-black text-2xl">
              {isChallenge ? `+${challengeScore * 5}` : `+${questions.length * 10}`}
            </span>
            <span className="text-gray-500 font-bold uppercase text-[10px]">XP GANHO</span>
          </div>
          {isChallenge && (
            <div className="duo-card flex flex-col items-center px-8 border-duo-blue bg-duo-blue/5">
              <span className="text-duo-blue font-black text-2xl">{challengeScore}</span>
              <span className="text-gray-500 font-bold uppercase text-[10px]">PONTOS</span>
            </div>
          )}
        </div>
        
        {isChallenge && challengeScore >= (stats.bestChallengeScore || 0) && (
          <motion.div 
            initial={{ scale: 0 }} 
            animate={{ scale: 1 }} 
            className="mb-8 p-3 bg-duo-yellow rounded-xl text-white font-black uppercase text-xs shadow-lg"
          >
            🌟 NOVO RECORDE PESSOAL! 🌟
          </motion.div>
        )}

        <button 
          onClick={() => {
            if (stats.lives === 0) setStats(prev => ({ ...prev, lives: 5 }));
            setView('path');
          }}
          className="duo-button bg-duo-green w-full max-w-sm text-xl uppercase"
        >
          {stats.lives > 0 || isChallenge ? 'Continuar No Mapa' : 'Tentar Novamente'}
        </button>
      </motion.div>
    );
  };

  const renderAchievements = () => (
    <div className="max-w-4xl mx-auto p-4 md:p-10 pb-32">
      <header className="flex items-center gap-6 mb-10">
        <button onClick={() => setView('path')} className="text-gray-400 hover:text-gray-600 transition-transform hover:-translate-x-1">
          <ArrowLeft className="w-8 h-8" />
        </button>
        <h1 className="text-3xl font-black text-gray-800 tracking-tight">O Teu Cofre</h1>
      </header>

      {/* Stats Bento Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        <div className="bg-duo-yellow/10 p-4 rounded-2xl border-2 border-duo-yellow text-center shadow-sm">
          <p className="text-duo-yellow font-black text-2xl truncate">{stats.xp}</p>
          <p className="text-gray-500 font-bold uppercase text-[10px] tracking-widest">XP Total</p>
        </div>
        <div className="bg-duo-blue/10 p-4 rounded-2xl border-2 border-duo-blue text-center shadow-sm">
          <p className="text-duo-blue font-black text-2xl truncate">{stats.totalCorrect}</p>
          <p className="text-gray-500 font-bold uppercase text-[10px] tracking-widest">Acertos</p>
        </div>
        <div className="bg-duo-red/10 p-4 rounded-2xl border-2 border-duo-red text-center shadow-sm">
          <p className="text-duo-red font-black text-2xl truncate">{stats.bestChallengeScore || 0}</p>
          <p className="text-gray-500 font-bold uppercase text-[10px] tracking-widest">Recorde</p>
        </div>
        <div className="bg-duo-green/10 p-4 rounded-2xl border-2 border-duo-green text-center shadow-sm">
          <p className="text-duo-green font-black text-2xl truncate">{stats.level}</p>
          <p className="text-gray-500 font-bold uppercase text-[10px] tracking-widest">Nível</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {ACHIEVEMENTS.filter(ach => stats.achievements.includes(ach.id)).map((ach) => {
          const isUnlocked = true; // Since we filtered
          
          return (
            <motion.div
              key={ach.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative p-6 rounded-3xl border-2 border-duo-yellow bg-white shadow-md transition-all group overflow-hidden"
            >
              {/* Shine effect */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-duo-yellow opacity-10 blur-3xl -mr-10 -mt-10 group-hover:opacity-20 transition-opacity" />
              
              <div className="flex items-start gap-5 relative z-10">
                <div className="text-5xl shrink-0 transition-transform group-hover:scale-110 duration-300">
                  {ach.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-black mb-1 truncate text-gray-800">
                    {ach.name}
                  </h3>
                  <p className="text-sm text-gray-500 font-bold leading-tight mb-4">
                    {ach.description}
                  </p>
                  
                  <div className="flex items-center gap-2 text-duo-yellow font-black text-xs uppercase tracking-widest">
                    <CheckCircle2 className="w-4 h-4" /> CONCLUÍDO
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
        {stats.achievements.length === 0 && (
          <div className="col-span-full py-20 text-center">
            <div className="text-6xl mb-4 opacity-20">🔒</div>
            <p className="text-gray-400 font-bold text-xl">Ainda não tens medalhas. <br/> Começa a jogar para desbloquear!</p>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white pb-20">
      <AnimatePresence>
        {newAchievement && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 20, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            className="fixed top-0 left-1/2 -translate-x-1/2 z-[100] w-full max-w-sm px-4"
          >
            <div className="bg-duo-yellow text-white p-4 rounded-2xl shadow-2xl flex items-center gap-4 border-b-4 border-black/20">
              <div className="text-4xl">{newAchievement.icon}</div>
              <div>
                <p className="font-black text-xs uppercase tracking-widest opacity-80">Nova Conquista!</p>
                <p className="font-black text-lg">{newAchievement.name}</p>
              </div>
            </div>
          </motion.div>
        )}
        
        {levelUpInfo && (
          <motion.div
            initial={{ scale: 0, opacity: 0, rotate: -20 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            exit={{ scale: 1.5, opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center pointer-events-none"
          >
            <div className="bg-duo-blue text-white p-10 rounded-[40px] shadow-2xl text-center border-b-8 border-duo-blue-dark relative">
              <motion.div 
                animate={{ y: [-10, 10, -10] }} 
                transition={{ repeat: Infinity, duration: 2 }}
                className="text-8xl mb-6"
              >
                🎊
              </motion.div>
              <h2 className="text-4xl font-black mb-2 uppercase tracking-tight">Subiste de Nível!</h2>
              <p className="text-2xl font-bold opacity-90">{levelUpInfo.topic}</p>
              <div className="mt-6 flex items-center justify-center gap-4">
                <div className="h-0.5 w-12 bg-white/30" />
                <span className="text-5xl font-black">NÍVEL {levelUpInfo.level}</span>
                <div className="h-0.5 w-12 bg-white/30" />
              </div>
              
              <div className="absolute -top-10 -left-10 text-6xl animate-bounce">✨</div>
              <div className="absolute -bottom-10 -right-10 text-6xl animate-bounce delay-150">⭐</div>
            </div>
          </motion.div>
        )}

        {topicTransitionInfo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[250] bg-duo-green flex flex-col items-center justify-center p-8 text-white text-center"
          >
            <motion.div
              initial={{ scale: 0.8, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="flex flex-col items-center"
            >
              <div className="bg-white/20 p-8 rounded-full mb-8">
                <Trophy className="w-24 h-24 text-white drop-shadow-lg" />
              </div>
              <h2 className="text-2xl font-black uppercase tracking-widest mb-4 opacity-80">Tema Concluído!</h2>
              <div className="flex items-center gap-6 mb-8">
                <span className="text-xl font-bold opacity-60 italic">{topicTransitionInfo.from}</span>
                <motion.div
                  animate={{ x: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <Zap className="w-8 h-8 fill-current text-duo-yellow" />
                </motion.div>
                <span className="text-3xl font-black">{topicTransitionInfo.to}</span>
              </div>
              <p className="text-xl font-medium italic animate-pulse">A carregar o próximo desafio...</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showResetModal && (
          <div className="fixed inset-0 z-[300] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowResetModal(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white rounded-[32px] w-full max-w-sm p-8 relative z-10 shadow-2xl border-2 border-duo-red"
            >
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <AlertTriangle className="w-10 h-10 text-duo-red" />
              </div>
              
              <h2 className="text-2xl font-black text-gray-800 mb-4 text-center uppercase tracking-tight">Reiniciar Jogo?</h2>
              
              <div className="bg-red-50 p-4 rounded-2xl mb-8 border border-red-100">
                <p className="text-duo-red font-bold text-sm text-center leading-relaxed">
                  ATENÇÃO: Todo o teu progresso, XP e medalhas serão apagados para sempre. O sistema voltará a ser novo.
                </p>
              </div>
              
              <div className="flex flex-col gap-3">
                <button 
                  onClick={confirmReset}
                  className="btn-check bg-duo-red h-14 shadow-[0_4px_0_#9a2b2b]"
                >
                  SIM, REINICIAR TUDO
                </button>
                <button 
                  onClick={() => setShowResetModal(false)}
                  className="btn-skip h-14 border-gray-200 text-gray-500 font-bold"
                >
                  CANCELAR
                </button>
              </div>
            </motion.div>
          </div>
        )}

        {showDifficultyModal && pendingTopic && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowDifficultyModal(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-[24px] w-full max-w-sm p-6 md:p-8 relative z-10 shadow-2xl border-2 border-duo-gray max-h-[90vh] overflow-y-auto"
            >
              <h2 className="text-2xl font-black text-gray-800 mb-2 text-center">Laboratório: 5 Fases</h2>
              <p className="text-gray-500 font-bold mb-6 text-center uppercase tracking-widest text-xs">{pendingTopic.topic}</p>
              
              <div className="flex flex-col gap-3">
                {(() => {
                  const topicKey = `${pendingTopic.grade}-${pendingTopic.topic}`;
                  const completed = stats.completedLevels[topicKey] || [];
                  
                  const levels: { id: Difficulty, name: string, desc: string, icon: string, count: number, color: string }[] = [
                    { id: 'curious', name: 'Curioso', desc: 'Conceitos base', icon: '🔍', count: 5, color: 'text-gray-400' },
                    { id: 'easy', name: 'Ligeiro', desc: 'Aquecimento', icon: '🌱', count: 10, color: 'text-duo-green' },
                    { id: 'medium', name: 'Intermédio', desc: 'Foco total', icon: '⚡', count: 15, color: 'text-duo-blue' },
                    { id: 'hard', name: 'Explosivo', desc: 'Alta pressão', icon: '🔥', count: 20, color: 'text-duo-red' },
                    { id: 'master', name: 'Mestre', desc: 'Nível Cientista', icon: '🧬', count: 25, color: 'text-duo-yellow' }
                  ];

                  let lastUnlocked = true;

                  return levels.map((lvl) => {
                    const isDone = completed.includes(lvl.id);
                    const canPlay = lastUnlocked;
                    lastUnlocked = isDone;

                    return (
                      <button 
                        key={lvl.id}
                        onClick={() => canPlay && handleStartTopic(pendingTopic.grade, pendingTopic.topic, lvl.id)}
                        className={`
                          text-left group relative p-3 rounded-xl border-2 transition-all
                          ${isDone ? 'bg-duo-yellow/5 border-duo-yellow' : 
                            canPlay ? `bg-white border-duo-gray hover:border-current ${lvl.color.replace('text-', 'hover:bg-')}/5` : 
                            'bg-gray-50 border-gray-100 opacity-50 grayscale pointer-events-none'}
                        `}
                        style={{ borderColor: !isDone && canPlay ? 'var(--color-duo-gray)' : undefined }}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className={`font-black text-base ${isDone ? 'text-duo-yellow' : canPlay ? 'group-hover:' + lvl.color : 'text-gray-400'}`}>
                              {lvl.name}
                            </h3>
                            <p className="text-[10px] text-gray-400 font-bold uppercase">
                              {lvl.count} Questões • {isDone ? 'Concluído' : lvl.desc}
                            </p>
                          </div>
                          <span className={`text-xl ${isDone ? '' : canPlay ? 'opacity-40 group-hover:opacity-100' : 'opacity-20'}`}>
                            {isDone ? '⭐' : canPlay ? lvl.icon : <Lock className="w-4 h-4" />}
                          </span>
                        </div>
                      </button>
                    );
                  });
                })()}
              </div>

              <button 
                onClick={() => setShowDifficultyModal(false)}
                className="w-full mt-6 text-gray-400 font-black text-xs uppercase tracking-widest hover:text-gray-600"
              >
                Voltar
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <main className="min-h-screen">
        <AnimatePresence mode="wait">
          {view === 'home' && renderHome()}
          {view === 'path' && renderPath()}
          {(view === 'quiz' || view === 'challenge') && renderQuiz()}
          {view === 'result' && renderResult()}
          {view === 'achievements' && renderAchievements()}
        </AnimatePresence>
      </main>

      {/* Navigation Rail */}
      {view === 'path' && (
        <div className="fixed bottom-0 left-0 right-0 h-20 bg-white border-t-2 border-duo-gray flex items-center justify-around px-4 z-20">
          <button className="flex flex-col items-center gap-1 text-duo-blue font-bold">
            <Layout className="w-7 h-7" />
            <span className="text-[10px] uppercase tracking-wider">Aulas</span>
          </button>
          <button 
            onClick={() => setView('achievements')}
            className="flex flex-col items-center gap-1 text-gray-400 hover:text-duo-blue transition-colors font-bold"
          >
            <Medal className="w-7 h-7" />
            <span className="text-[10px] uppercase tracking-wider">Conquistas</span>
          </button>
        </div>
      )}

      {/* Footer Copyright */}
      {view !== 'path' && view !== 'quiz' && (
        <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-duo-gray p-4 text-center text-gray-400 text-sm font-medium z-10 font-sans">
          copyright ©️ 2026 Dite Zola NG
        </footer>
      )}
    </div>
  );
}
