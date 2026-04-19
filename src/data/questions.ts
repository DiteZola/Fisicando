import { Question } from '../types';

export const INITIAL_QUESTIONS: Question[] = [
  // --- 7ª CLASSE ---
  {
    id: '7-uni-1',
    text: 'Qual planeta está mais perto do Sol?',
    options: ['Terra', 'Marte', 'Mercúrio', 'Vénus'],
    correctAnswer: 2,
    explanation: 'Mercúrio é o vizinho mais próximo do Sol! ☀️',
    grade: 7,
    topic: 'O Universo'
  },
  {
    id: '7-uni-2',
    text: 'Quanto tempo a Terra leva para dar 1 volta ao Sol?',
    options: ['24 horas', '30 dias', '365 dias', '12 horas'],
    correctAnswer: 2,
    explanation: 'Leva um ano inteirinho (365 dias)! 🌍',
    grade: 7,
    topic: 'O Universo'
  },
  {
    id: '7-uni-3',
    text: 'Que movimento da Terra cria o dia e a noite?',
    options: ['Translação', 'Rotação', 'Precessão', 'Nutação'],
    correctAnswer: 1,
    explanation: 'É a Rotação! A Terra gira como um pião. 🔄',
    grade: 7,
    topic: 'O Universo'
  },
  {
    id: '7-uni-4',
    text: 'O que ocupa quase todo o nosso Sistema Solar?',
    options: ['Os planetas', 'O Sol', 'Os asteróides', 'A Lua'],
    correctAnswer: 1,
    explanation: 'O Sol é o rei! Ele é gigante. 👑',
    grade: 7,
    topic: 'O Universo'
  },
  {
    id: '7-uni-5',
    text: 'Quem é o satélite natural da Terra?',
    options: ['Marte', 'Vénus', 'Lua', 'Estrela Polar'],
    correctAnswer: 2,
    explanation: 'A Lua é a nossa companheira nocturna! 🌙',
    grade: 7,
    topic: 'O Universo'
  },
  {
    id: '7-fis-1',
    text: 'Qual destas é uma grandeza básica na Física?',
    options: ['Velocidade', 'Comprimento', 'Força', 'Energia'],
    correctAnswer: 1,
    explanation: 'O comprimento mede o tamanho das coisas! 📏',
    grade: 7,
    topic: 'Física e as Grandezas Físicas'
  },
  {
    id: '7-fis-2',
    text: 'Qual a unidade de massa mais usada?',
    options: ['Grama', 'Quilograma', 'Tonelada', 'Newton'],
    correctAnswer: 1,
    explanation: 'Usamos o Quilograma (kg) para pesar quase tudo! ⚖️',
    grade: 7,
    topic: 'Física e as Grandezas Físicas'
  },
  {
    id: '7-fis-3',
    text: 'O que a Física estuda principalmente?',
    options: ['A Natureza', 'As estrelas', 'Os animais', 'As plantas'],
    correctAnswer: 0,
    explanation: 'A Física explica como o mundo funciona! 🔬',
    grade: 7,
    topic: 'Física e as Grandezas Físicas'
  },
  {
    id: '7-fis-4',
    text: 'Que objeto usamos para medir o tempo?',
    options: ['Termómetro', 'Régua', 'Cronómetro', 'Balança'],
    correctAnswer: 2,
    explanation: 'O cronómetro conta cada segundo! ⏱️',
    grade: 7,
    topic: 'Física e as Grandezas Físicas'
  },
  {
    id: '7-fis-5',
    text: 'Para que serve uma régua?',
    options: ['Ver massa', 'Ver tempo', 'Ver comprimento', 'Ver calor'],
    correctAnswer: 2,
    explanation: 'Régua serve para medir tamanhos! 📏',
    grade: 7,
    topic: 'Física e as Grandezas Físicas'
  },
  {
    id: '7-est-1',
    text: 'Em qual estado as partículas estão mais "soltas"?',
    options: ['Sólido', 'Líquido', 'Gasoso', 'Plasmático'],
    correctAnswer: 2,
    explanation: 'No Gás! Elas voam para todo lado. 🎈',
    grade: 7,
    topic: 'Estados de agregação das substâncias'
  },
  {
    id: '7-est-2',
    text: 'Gelo derretendo é que tipo de mudança?',
    options: ['Solidificação', 'Fusão', 'Vaporização', 'Condensação'],
    correctAnswer: 1,
    explanation: 'Chama-se FUSÃO! O gelo vira água. 🧊💧',
    grade: 7,
    topic: 'Estados de agregação das substâncias'
  },
  {
    id: '7-est-3',
    text: 'Qual estado tem forma e tamanho fixos?',
    options: ['Líquido', 'Gasoso', 'Sólido', 'Vácuo'],
    correctAnswer: 2,
    explanation: 'O SÓLIDO! Ele não muda de forma sozinho. 🧱',
    grade: 7,
    topic: 'Estados de agregação das substâncias'
  },
  {
    id: '7-est-4',
    text: 'O que é a Solidificação?',
    options: ['Líquido vira gás', 'Sólido vira líquido', 'Líquido vira sólido', 'Gás vira líquido'],
    correctAnswer: 2,
    explanation: 'É quando a água vira gelo, por exemplo! ❄️',
    grade: 7,
    topic: 'Estados de agregação das substâncias'
  },
  {
    id: '7-est-5',
    text: 'O vapor que sai da sopa é que estado?',
    options: ['Sólido', 'Líquido', 'Gasoso', 'Gelatina'],
    correctAnswer: 2,
    explanation: 'É o estado GASOSO! 💨',
    grade: 7,
    topic: 'Estados de agregação das substâncias'
  },
  {
    id: '7-for-1',
    text: 'Como calculamos a densidade?',
    options: ['Massa / Volume', 'Massa * Volume', 'Força / Área', 'Peso * Massa'],
    correctAnswer: 0,
    explanation: 'É a massa dividida pelo volume! 📦',
    grade: 7,
    topic: 'Força e Massa'
  },
  {
    id: '7-for-2',
    text: 'A Força é medida em qual unidade?',
    options: ['Joule', 'Pascal', 'Newton', 'Watt'],
    correctAnswer: 2,
    explanation: 'Medimos força em Newtons (N)! 💪',
    grade: 7,
    topic: 'Força e Massa'
  },
  {
    id: '7-for-3',
    text: 'O que é a Massa de um objeto?',
    options: ['O peso dele', 'Quanto de "matéria" ele tem', 'O tamanho dele', 'A cor dele'],
    correctAnswer: 1,
    explanation: 'É a quantidade de "coisas" dentro dele! 🍎',
    grade: 7,
    topic: 'Força e Massa'
  },
  {
    id: '7-for-4',
    text: 'Que aparelho mede o peso?',
    options: ['Balança', 'Dinamómetro', 'Régua', 'Termómetro'],
    correctAnswer: 1,
    explanation: 'O dinamómetro mede a força do peso! 🏋️',
    grade: 7,
    topic: 'Força e Massa'
  },
  {
    id: '7-for-5',
    text: 'Empurrar um carrinho é aplicar uma:',
    options: ['Densidade', 'Inércia', 'Força', 'Massa'],
    correctAnswer: 2,
    explanation: 'Aplicas uma FORÇA para ele se mexer! 🛒',
    grade: 7,
    topic: 'Força e Massa'
  },
  {
    id: '7-pre-1',
    text: 'Qual a fórmula da Pressão?',
    options: ['P = Força / Área', 'P = Força * Área', 'P = Massa / Volume', 'P = Energia / Tempo'],
    correctAnswer: 0,
    explanation: 'Pressão é força dividida pela área! 👟',
    grade: 7,
    topic: 'Pressão nos Líquidos e nos Gases'
  },
  {
    id: '7-pre-2',
    text: 'Em vasos ligados, o nível da água fica:',
    options: ['Torto', 'Mais alto no centro', 'Igual em todos', 'Diferente em cada um'],
    correctAnswer: 2,
    explanation: 'Fica IGUALzinho em todos os vasos! 🏺',
    grade: 7,
    topic: 'Pressão nos Líquidos e nos Gases'
  },
  {
    id: '7-pre-3',
    text: 'Qual a unidade de Pressão?',
    options: ['Newton', 'Joule', 'Pascal', 'Watt'],
    correctAnswer: 2,
    explanation: 'A unidade é o Pascal (Pa)! 💨',
    grade: 7,
    topic: 'Pressão nos Líquidos e nos Gases'
  },
  {
    id: '7-pre-4',
    text: 'Ao subir uma montanha, a pressão do ar:',
    options: ['Diminui', 'Aumenta', 'Fica igual', 'Some'],
    correctAnswer: 0,
    explanation: 'A pressão DIMINUI quanto mais alto subimos! 🏔️',
    grade: 7,
    topic: 'Pressão nos Líquidos e nos Gases'
  },
  {
    id: '7-pre-5',
    text: 'Qual objeto mede a pressão do ar?',
    options: ['Termómetro', 'Barómetro', 'Manómetro', 'Velocímetro'],
    correctAnswer: 1,
    explanation: 'É o BARÓMETRO! 🌤️',
    grade: 7,
    topic: 'Pressão nos Líquidos e nos Gases'
  },

  // --- 8ª CLASSE ---
  {
    id: '8-tra-1',
    text: 'Qual a unidade de energia?',
    options: ['Watt', 'Newton', 'Joule', 'Pascal'],
    correctAnswer: 2,
    explanation: 'É o Joule (J)! Energia é vida. ⚡',
    grade: 8,
    topic: 'Trabalho, energia e máquinas simples'
  },
  {
    id: '8-tra-2',
    text: 'O que é uma máquina simples?',
    options: ['Computador', 'Alavanca', 'Motor', 'Telemóvel'],
    correctAnswer: 1,
    explanation: 'A alavanca ajuda-nos a levantar pesos! 🏗️',
    grade: 8,
    topic: 'Trabalho, energia e máquinas simples'
  },
  {
    id: '8-tra-3',
    text: 'Energia que vem do movimento é:',
    options: ['Química', 'Potencial', 'Cinética', 'Nuclear'],
    correctAnswer: 2,
    explanation: 'É a Energia Cinética! Tudo o que corre tem. 🏃‍♂️',
    grade: 8,
    topic: 'Trabalho, energia e máquinas simples'
  },
  {
    id: '8-tra-4',
    text: 'A roldana fixa serve para quê?',
    options: ['Lavar pratos', 'Mudar a direcção da força', 'Gerar relâmpagos', 'Fazer gelado'],
    correctAnswer: 1,
    explanation: 'Ela muda a direção da força para facilitar! 🎡',
    grade: 8,
    topic: 'Trabalho, energia e máquinas simples'
  },
  {
    id: '8-tra-5',
    text: 'O que é preciso para existir Trabalho?',
    options: ['Só força', 'Só pensar', 'Força e movimento', 'Só olhar'],
    correctAnswer: 2,
    explanation: 'Precisas de força e que o objeto se mexa! 📦💨',
    grade: 8,
    topic: 'Trabalho, energia e máquinas simples'
  },
  {
    id: '8-cal-1',
    text: 'Como o calor do Sol chega à Terra?',
    options: ['Por fios', 'Por aviões', 'Por Irradiação', 'Por canudos'],
    correctAnswer: 2,
    explanation: 'Chega por ondas invisíveis (Irradiação)! ☀️✨',
    grade: 8,
    topic: 'Energia Calorífica'
  },
  {
    id: '8-cal-2',
    text: 'O calor viaja nos metais principalmente por:',
    options: ['Condução', 'Convecção', 'Mágica', 'Gritando'],
    correctAnswer: 0,
    explanation: 'É a CONDUÇÃO! O calor passa de um em um. 🥄🔥',
    grade: 8,
    topic: 'Energia Calorífica'
  },
  {
    id: '8-cal-3',
    text: 'Como o ar quente se espalha na sala?',
    options: ['Condução', 'Convecção', 'Radiação', 'Saltando'],
    correctAnswer: 1,
    explanation: 'Por CONVECÇÃO! O ar gira em correntes. 🌀💨',
    grade: 8,
    topic: 'Energia Calorífica'
  },
  {
    id: '8-cal-4',
    text: 'Qual instrumento mede a temperatura?',
    options: ['Balança', 'Termómetro', 'Calorímetro', 'Barómetro'],
    correctAnswer: 1,
    explanation: 'O termómetro é o instrumento padrão para medir temperatura.',
    grade: 8,
    topic: 'Energia Calorífica'
  },
  {
    id: '8-cal-5',
    text: 'O que acontece a um corpo quando ele recebe calor?',
    options: ['Sua massa aumenta', 'Sua temperatura pode subir', 'Sua cor sempre muda', 'Ele perde energia'],
    correctAnswer: 1,
    explanation: 'Receber calor geralmente resulta no aumento da agitação térmica (temperatura).',
    grade: 8,
    topic: 'Energia Calorífica'
  },
  {
    id: '8-acu-1',
    text: 'Como se chama a vibração que se propaga num meio material e que o ouvido humano percebe?',
    options: ['Luz', 'Som', 'Calor', 'Electricidade'],
    correctAnswer: 1,
    explanation: 'O som é uma onda mecânica resultante de vibrações.',
    grade: 8,
    topic: 'Fenómenos Acústicos'
  },
  {
    id: '8-acu-2',
    text: 'O som propaga-se no vácuo?',
    options: ['Sim, mais rápido que no ar', 'Apenas se houver luz', 'Não, precisa de um meio material', 'Sim, devagar'],
    correctAnswer: 2,
    explanation: 'O som é uma onda mecânica e necessita de um meio material (sólido, líquido ou gás) para viajar.',
    grade: 8,
    topic: 'Fenómenos Acústicos'
  },
  {
    id: '8-acu-3',
    text: 'Qual é a principal diferença entre um som agudo e um som grave?',
    options: ['A amplitude', 'A frequência', 'A velocidade', 'O tempo'],
    correctAnswer: 1,
    explanation: 'Sons agudos têm alta frequência; sons graves têm baixa frequência.',
    grade: 8,
    topic: 'Fenómenos Acústicos'
  },
  {
    id: '8-acu-4',
    text: 'O fenómeno de reflexão do som que ouvimos após um intervalo de tempo chama-se:',
    options: ['Refracção', 'Eco', 'Difracção', 'Absorção'],
    correctAnswer: 1,
    explanation: 'O eco ocorre quando o som é reflectido por um obstáculo e volta ao emissor.',
    grade: 8,
    topic: 'Fenómenos Acústicos'
  },
  {
    id: '8-acu-5',
    text: 'Em qual meio o som viaja geralmente mais rápido?',
    options: ['Gases (Ar)', 'Líquidos (Água)', 'Sólidos (Ferro)', 'Vácuo'],
    correctAnswer: 2,
    explanation: 'O som viaja mais rápido em meios mais densos e elásticos como os sólidos.',
    grade: 8,
    topic: 'Fenómenos Acústicos'
  },
  {
    id: '8-lum-1',
    text: 'Qual é a velocidade aproximada da luz no vácuo?',
    options: ['340 m/s', '300.000 km/s', '1.000 km/h', '100 m/s'],
    correctAnswer: 1,
    explanation: 'A luz viaja a cerca de 300.000 km por segundo no vácuo.',
    grade: 8,
    topic: 'Fenómenos Luminosos'
  },
  {
    id: '8-lum-2',
    text: 'Um espelho que tem a superfície plana chama-se:',
    options: ['Espelho Côncavo', 'Espelho Convexo', 'Espelho Plano', 'Lupa'],
    correctAnswer: 2,
    explanation: 'Espelhos planos têm superfícies de reflexão perfeitamente lisas e rectas.',
    grade: 8,
    topic: 'Fenómenos Luminosos'
  },
  {
    id: '8-lum-3',
    text: 'Qual parte do olho humano é responsável por captar a luz e formar a imagem?',
    options: ['Íris', 'Pupila', 'Retina', 'Córnea'],
    correctAnswer: 2,
    explanation: 'A retina funciona como o "filme" da câmara, onde a imagem é projectada.',
    grade: 8,
    topic: 'Fenómenos Luminosos'
  },
  {
    id: '8-lum-4',
    text: 'O arco-íris é um exemplo de qual fenómeno luminoso?',
    options: ['Reflexão', 'Dispersão da luz', 'Absorção', 'Sombra'],
    correctAnswer: 1,
    explanation: 'A luz branca do sol decompõe-se nas cores do arco-íris ao passar por gotas de água.',
    grade: 8,
    topic: 'Fenómenos Luminosos'
  },
  {
    id: '8-lum-5',
    text: 'Qual tipo de lente é usada para corrigir a miopia?',
    options: ['Lente Convergente', 'Lente Divergente', 'Lente Plana', 'Vidro Comum'],
    correctAnswer: 1,
    explanation: 'Lentes divergentes são usadas para afastar o ponto de foco na miopia.',
    grade: 8,
    topic: 'Fenómenos Luminosos'
  },

  // --- 9ª CLASSE ---
  {
    id: '9-mov-1',
    text: 'Quando dizemos que um corpo está em movimento?',
    options: ['Quando ele está parado', 'Quando sua posição muda em relação a um referencial', 'Sempre que ele tem massa', 'Apenas se ele brilhar'],
    correctAnswer: 1,
    explanation: 'Movimento é a mudança de posição ao longo do tempo em relação a um ponto de referência.',
    grade: 9,
    topic: 'Movimento'
  },
  {
    id: '9-mov-2',
    text: 'No Movimento Rectilíneo Uniforme (MRU), a velocidade é:',
    options: ['Crescente', 'Decrescente', 'Constante', 'Zero'],
    correctAnswer: 2,
    explanation: 'Uniforme significa que a velocidade não muda com o tempo.',
    grade: 9,
    topic: 'Movimento'
  },
  {
    id: '9-mov-3',
    text: 'Qual é a unidade de velocidade no SI?',
    options: ['km/h', 'm/s', 'm/s²', 'N/kg'],
    correctAnswer: 1,
    explanation: 'Metros por segundo (m/s) é a unidade padrão de velocidade no SI.',
    grade: 9,
    topic: 'Movimento'
  },
  {
    id: '9-mov-4',
    text: 'O que define a aceleração?',
    options: ['Espaço / Tempo', 'Variação da Velocidade / Tempo', 'Massa * Velocidade', 'Força / Massa'],
    correctAnswer: 1,
    explanation: 'Aceleração é a rapidez com que a velocidade de um corpo muda.',
    grade: 9,
    topic: 'Movimento'
  },
  {
    id: '9-mov-5',
    text: 'Um comboio que trava está em:',
    options: ['Movimento Uniforme', 'Movimento Retardado', 'Repouso', 'Salto'],
    correctAnswer: 1,
    explanation: 'Retardado! É quando a velocidade diminui. 🛑',
    grade: 9,
    topic: 'Movimento'
  },
  {
    id: '9-est-1',
    text: 'Cargas eléctricas de sinais iguais:',
    options: ['Atraem-se', 'Repelem-se', 'Explodem', 'Fogem'],
    correctAnswer: 1,
    explanation: 'Repelem-se! Elas não querem estar juntas. ↔️',
    grade: 9,
    topic: 'Electrostática'
  },
  {
    id: '9-est-2',
    text: 'Qual partícula tem carga negativa?',
    options: ['Protão', 'Neutrão', 'Electrão', 'Núcleo'],
    correctAnswer: 2,
    explanation: 'O ELECTRÃO! Ele gira à volta do núcleo. ⚛️',
    grade: 9,
    topic: 'Electrostática'
  },
  {
    id: '9-est-3',
    text: 'Qual a unidade de carga eléctrica?',
    options: ['Ampere', 'Volt', 'Coulomb', 'Ohm'],
    correctAnswer: 2,
    explanation: 'É o COULOMB (C)! ⚡',
    grade: 9,
    topic: 'Electrostática'
  },
  {
    id: '9-est-4',
    text: 'Material que deixa a electricidade passar:',
    options: ['Isolador', 'Condutor', 'Plástico', 'Madeira'],
    correctAnswer: 1,
    explanation: 'É o CONDUTOR (como os metais)! 🔋',
    grade: 9,
    topic: 'Electrostática'
  },
  {
    id: '9-est-5',
    text: 'Dar carga a um corpo por toque chama-se:',
    options: ['Electrização', 'Fusão', 'Pintura', 'Indução'],
    correctAnswer: 0,
    explanation: 'É a ELECTRIZAÇÃO! ⚡🤲',
    grade: 9,
    topic: 'Electrostática'
  },
  {
    id: '9-ele-1',
    text: 'Qual a fórmula da Lei de Ohm?',
    options: ['V = R / I', 'V = I / R', 'V = R * I', 'R = V * I'],
    correctAnswer: 2,
    explanation: 'É V = R * I! Tensão é resistência vezes corrente. ⚡',
    grade: 9,
    topic: 'Energia eléctrica'
  },
  {
    id: '9-ele-2',
    text: 'A corrente eléctrica mede-se em:',
    options: ['Volt', 'Ohm', 'Ampere', 'Watt'],
    correctAnswer: 2,
    explanation: 'AMPERES (A)! É o fluxo da electricidade. 🌊⚡',
    grade: 9,
    topic: 'Energia eléctrica'
  },
  {
    id: '9-ele-3',
    text: 'Fios a aquecerem com electricidade é efeito:',
    options: ['Estufa', 'Joule', 'Fotoeléctrico', 'Mágico'],
    correctAnswer: 1,
    explanation: 'É o efeito JOULE! Electricidade a virar calor. 🔥',
    grade: 9,
    topic: 'Energia eléctrica'
  },
  {
    id: '9-ele-4',
    text: 'Que objeto mede a tensão (Volts)?',
    options: ['Amperímetro', 'Voltímetro', 'Ohmímetro', 'Régua'],
    correctAnswer: 1,
    explanation: 'É o VOLTÍMETRO! ⚡📟',
    grade: 9,
    topic: 'Energia eléctrica'
  },
  {
    id: '9-ele-5',
    text: 'Para que serve um interruptor?',
    options: ['Gerar luz', 'Variar calor', 'Ligar/Desligar o circuito', 'Medir força'],
    correctAnswer: 2,
    explanation: 'Serve para abrir ou fechar o caminho da luz! 💡🔘',
    grade: 9,
    topic: 'Energia eléctrica'
  },
  {
    id: '9-mag-1',
    text: 'Quais os nomes dos pólos de um íman?',
    options: ['+ e -', 'Norte e Sul', 'Cima e Baixo', 'Esquerda e Direita'],
    correctAnswer: 1,
    explanation: 'NORTE e SUL! Eles amam-se ou odeiam-se. 🧲',
    grade: 9,
    topic: 'Electricidade e magnetismo'
  },
  {
    id: '9-mag-2',
    text: 'Se cortares um íman ao meio, tens:',
    options: ['1 pólo só', 'Pólos somem', '2 ímanes novos', 'Ele morre'],
    correctAnswer: 2,
    explanation: 'Ficas com DOIS ímanes novos! 🧲🧲',
    grade: 9,
    topic: 'Electricidade e magnetismo'
  },
  {
    id: '9-mag-3',
    text: 'Como se chama o guia que aponta o Norte?',
    options: ['Bússola', 'Régua', 'Relógio', 'Lupa'],
    correctAnswer: 0,
    explanation: 'É a BÚSSOLA! Nunca te perdes. 🧭',
    grade: 9,
    topic: 'Electricidade e magnetismo'
  },
  {
    id: '9-mag-4',
    text: 'Íman feito com electricidade chama-se:',
    options: ['Pedra', 'Electroíman', 'Pilão', 'Fio'],
    correctAnswer: 1,
    explanation: 'ELECTROÍMAN! Só funciona se ligares a luz. 🧲⚡',
    grade: 9,
    topic: 'Electricidade e magnetismo'
  },
  {
    id: '9-mag-5',
    text: 'Criar electricidade com ímanes chama-se:',
    options: ['Condução', 'Pintura', 'Indução Electromagnética', 'Grito'],
    correctAnswer: 2,
    explanation: 'INDUÇÃO! É assim que as barragens fazem luz. ⚡🌊',
    grade: 9,
    topic: 'Electricidade e magnetismo'
  },
  // --- EXPANDED 7ª CLASSE ---
  {
    id: '7-uni-extra-1',
    text: 'Qual é a estrela mais próxima da Terra?',
    options: ['Sirius', 'O Sol', 'Proxima Centauri', 'Polaris'],
    correctAnswer: 1,
    explanation: 'O Sol é a estrela que está no centro do nosso sistema e é a mais próxima de nós.',
    grade: 7,
    topic: 'O Universo'
  },
  {
    id: '7-uni-extra-2',
    text: 'A Via Láctea tem que formato?',
    options: ['Elíptica', 'Irregular', 'Espiral', 'Quadrada'],
    correctAnswer: 2,
    explanation: 'É uma galáxia em ESPIRAL! Como um carrossel de estrelas. 🌀',
    grade: 7,
    topic: 'O Universo'
  },
  {
    id: '7-fis-extra-1',
    text: 'Qual a unidade de temperatura no SI?',
    options: ['Celsius', 'Fahrenheit', 'Kelvin', 'Joule'],
    correctAnswer: 2,
    explanation: 'É o KELVIN (K)! Ciência pura. 🌡️',
    grade: 7,
    topic: 'Física e as Grandezas Físicas'
  },
  {
    id: '7-est-extra-1',
    text: 'O que é a Sublimação?',
    options: ['Líquido vira Sólido', 'Sólido vira Gás', 'Gás vira Líquido', 'Líquido vira Gás'],
    correctAnswer: 1,
    explanation: 'É o sólido a saltar direto para gás! 💨',
    grade: 7,
    topic: 'Estados de agregação das substâncias'
  },
  {
    id: '7-for-extra-1',
    text: 'A força da Terra que nos puxa para baixo é:',
    options: ['Elástica', 'Atrito', 'Gravidade', 'Magnética'],
    correctAnswer: 2,
    explanation: 'É a GRAVIDADE! Por isso não voamos por aí. 🍎🌍',
    grade: 7,
    topic: 'Força e Massa'
  },
  {
    id: '7-pre-extra-1',
    text: 'Porque sentimos pressão no fundo do mar?',
    options: ['Água quente', 'Muita água em cima de nós', 'Está escuro', 'Peixes empurram'],
    correctAnswer: 1,
    explanation: 'Toda essa água em cima de ti faz peso! 🌊👟',
    grade: 7,
    topic: 'Pressão nos Líquidos e nos Gases'
  },
  // --- EXPANDED 8ª CLASSE ---
  {
    id: '8-tra-extra-1',
    text: 'Uma rampa é um exemplo de:',
    options: ['Alavanca', 'Roldana', 'Plano Inclinado', 'Parafuso'],
    correctAnswer: 2,
    explanation: 'Plano inclinado ajuda a subir pesos! 🎢',
    grade: 8,
    topic: 'Trabalho, energia e máquinas simples'
  },
  {
    id: '8-cal-extra-1',
    text: 'O que faz um isolante térmico?',
    options: ['Aquece rápido', 'Dificulta a passagem de calor', 'É de metal', 'Gela tudo'],
    correctAnswer: 1,
    explanation: 'Como um casaco grosso! Evita o frio. 🧥❄️',
    grade: 8,
    topic: 'Energia Calorífica'
  },
  {
    id: '8-acu-extra-1',
    text: 'A unidade de medida da frequência do som é o:',
    options: ['Decibel', 'Hertz', 'Metro', 'Newton'],
    correctAnswer: 1,
    explanation: 'Hertz (Hz) mede o número de vibrações por segundo.',
    grade: 8,
    topic: 'Fenómenos Acústicos'
  },
  {
    id: '8-lum-extra-1',
    text: 'A reflexão da luz numa superfície rugosa chama-se:',
    options: ['Reflexão Especular', 'Difusão', 'Refracção', 'Absorção'],
    correctAnswer: 1,
    explanation: 'A difusão ocorre quando a luz reflecte em várias direcções.',
    grade: 8,
    topic: 'Fenómenos Luminosos'
  },
  // --- EXPANDED 9ª CLASSE ---
  {
    id: '9-mov-extra-1',
    text: 'A trajectória de um projétil lançado horizontalmente é:',
    options: ['Rectilínea', 'Parabólica', 'Circular', 'Elíptica'],
    correctAnswer: 1,
    explanation: 'Sob a acção da gravidade, o lançamento oblíquo/horizontal é parabólico.',
    grade: 9,
    topic: 'Movimento'
  },
  {
    id: '9-est-extra-1',
    text: 'O dispositivo que armazena carga eléctrica é o:',
    options: ['Resistor', 'Interruptor', 'Condensador', 'Gerador'],
    correctAnswer: 2,
    explanation: 'Condensadores (ou capacitores) acumulam cargas no seu interior.',
    grade: 9,
    topic: 'Electrostática'
  },
  {
    id: '9-ele-extra-1',
    text: 'Em um circuito em série, se uma lâmpada queima, as outras:',
    options: ['Brilham mais', 'Apagam-se todas', 'Continuam acesas', 'Explodem'],
    correctAnswer: 1,
    explanation: 'Num circuito em série, há apenas um caminho; se for interrompido, nada funciona.',
    grade: 9,
    topic: 'Energia eléctrica'
  },
  {
    id: '9-mag-extra-1',
    text: 'A região do espaço onde se fazem sentir as forças magnéticas chama-se:',
    options: ['Campo Eléctrico', 'Campo Gravítico', 'Campo Magnético', 'Vácuo'],
    correctAnswer: 2,
    explanation: 'É o campo magnético que define a zona de influência de um íman.',
    grade: 9,
    topic: 'Electricidade e magnetismo'
  },
  // --- 7ª CLASSE: O UNIVERSO ---
  {
    id: '7-uni-extra-3',
    text: 'Qual é o nome da galáxia onde se encontra o Sistema Solar?',
    options: ['Andrómeda', 'Via Láctea', 'Sombrero', 'Nebulosa de Orion'],
    correctAnswer: 1,
    explanation: 'A Via Láctea é a nossa galáxia residencial.',
    grade: 7,
    topic: 'O Universo'
  },
  {
    id: '7-uni-extra-4',
    text: 'Qual é o maior planeta do Sistema Solar?',
    options: ['Saturno', 'Júpiter', 'Neptuno', 'Urano'],
    correctAnswer: 1,
    explanation: 'Júpiter é o gigante gasoso e o maior de todos os planetas.',
    grade: 7,
    topic: 'O Universo'
  },
  {
    id: '7-uni-extra-5',
    text: 'As fases da Lua ocorrem devido ao seu movimento de:',
    options: ['Rotação', 'Translação ao redor da Terra', 'Precessão', 'Evolução'],
    correctAnswer: 1,
    explanation: 'A posição relativa entre a Lua, a Terra e o Sol determina o que vemos da face iluminada.',
    grade: 7,
    topic: 'O Universo'
  },
  // --- 7ª CLASSE: FÍSICA E GRANDEZAS ---
  {
    id: '7-fis-extra-2',
    text: 'No SI, qual é a unidade de tempo?',
    options: ['Hora', 'Minuto', 'Segundo', 'Dia'],
    correctAnswer: 2,
    explanation: 'O segundo (s) é a unidade base de tempo no SI.',
    grade: 7,
    topic: 'Física e Grandezas'
  },
  {
    id: '7-fis-extra-3',
    text: 'O que é uma grandeza escalar?',
    options: ['Precisa de direcção e sentido', 'Não precisa de direcção nem sentido', 'É medida apenas com réguas', 'É sempre negativa'],
    correctAnswer: 1,
    explanation: 'Grandezas escalares ficam bem definidas apenas com o valor numérico e a unidade.',
    grade: 7,
    topic: 'Física e Grandezas'
  },
  // --- 7ª CLASSE: ESTADOS DE AGREGAÇÃO ---
  {
    id: '7-est-extra-2',
    text: 'A "Vaporização" lenta e à temperatura ambiente chama-se:',
    options: ['Ebulição', 'Evaporação', 'Calefação', 'Sublimação'],
    correctAnswer: 1,
    explanation: 'A evaporação é um processo lento que ocorre na superfície dos líquidos.',
    grade: 7,
    topic: 'Estados de Agregação'
  },
  {
    id: '7-est-extra-3',
    text: 'Qual estado da matéria tem volume definido, mas forma variável?',
    options: ['Sólido', 'Líquido', 'Gasoso', 'Plasma'],
    correctAnswer: 1,
    explanation: 'Os líquidos tomam a forma do recipiente que os contém, mas mantêm o volume.',
    grade: 7,
    topic: 'Estados de Agregação'
  },
  // --- 8ª CLASSE: TRABALHO E ENERGIA ---
  {
    id: '8-tra-extra-2',
    text: 'Uma tesoura é um exemplo de qual tipo de alavanca?',
    options: ['Inter-resistente', 'Inter-fixa', 'Inter-potente', 'Fixa'],
    correctAnswer: 1,
    explanation: 'O ponto de apoio está entre a força aplicada e a resistência.',
    grade: 8,
    topic: 'Trabalho e Energia'
  },
  {
    id: '8-tra-extra-3',
    text: 'A energia que um corpo possui devido à sua altura chama-se:',
    options: ['Energia Cinética', 'Energia Potencial Gravitacional', 'Energia Térmica', 'Energia Sonora'],
    correctAnswer: 1,
    explanation: 'A energia potencial depende da posição (altura) do corpo no campo gravítico.',
    grade: 8,
    topic: 'Trabalho e Energia'
  },
  // --- 8ª CLASSE: FENÓMENOS ACÚSTICOS ---
  {
    id: '8-acu-extra-2',
    text: 'A intensidade de um som está ligada ao que chamamos de:',
    options: ['Altura (Grave/Agudo)', 'Volume (Forte/Fraco)', 'Timbre', 'Velocidade'],
    correctAnswer: 1,
    explanation: 'A intensidade depende da amplitude da vibração da onda sonora.',
    grade: 8,
    topic: 'Fenómenos Acústicos'
  },
  {
    id: '8-acu-extra-3',
    text: 'O ouvido humano saudável capta frequências tipicamente entre:',
    options: ['0 e 100 Hz', '20 e 20.000 Hz', '10.000 e 50.000 Hz', '0 e 1.000 Hz'],
    correctAnswer: 1,
    explanation: 'Este é o espectro sonoro audível pelos humanos.',
    grade: 8,
    topic: 'Fenómenos Acústicos'
  },
  // --- 9ª CLASSE: MOVIMENTO ---
  {
    id: '9-mov-extra-2',
    text: 'Uma aceleração negativa indica que o corpo está:',
    options: ['Aumentando a velocidade', 'Diminuindo a velocidade (Travando)', 'Em repouso', 'Mudando de cor'],
    correctAnswer: 1,
    explanation: 'A aceleração negativa (em relação à velocidade) indica um movimento retardado.',
    grade: 9,
    topic: 'Movimento'
  },
  {
    id: '9-mov-extra-3',
    text: 'O que representa o declive num gráfico Espaço x Tempo?',
    options: ['Aceleração', 'Velocidade', 'Força', 'Massa'],
    correctAnswer: 1,
    explanation: 'No gráfico s(t), o declive da reta indica o valor da velocidade.',
    grade: 9,
    topic: 'Movimento'
  },
  // --- 9ª CLASSE: ENERGIA ELÉCTRICA ---
  {
    id: '9-ele-extra-2',
    text: 'A resistência eléctrica de um fio depende de:',
    options: ['Apenas da bateria', 'Comprimento, espessura e material do fio', 'Apenas da cor', 'Apenas do interruptor'],
    correctAnswer: 1,
    explanation: 'A 2ª Lei de Ohm explica que a resistência depende da geometria e resistividade do material.',
    grade: 9,
    topic: 'Energia Elétrica'
  },
  // --- 7ª CLASSE: PRESSÃO ---
  {
    id: '7-pre-extra-2',
    text: 'A unidade de pressão "Atmosfera" (atm) é aproximadamente igual a:',
    options: ['1.000 Pa', '101.325 Pa', '100 Pa', '10 Pa'],
    correctAnswer: 1,
    explanation: 'Ao nível do mar, a pressão atmosférica normal é cerca de 101.325 Pascal.',
    grade: 7,
    topic: 'Pressão'
  },
  {
    id: '7-pre-extra-3',
    text: 'Barómetros de mercúrio foram inventados por:',
    options: ['Newton', 'Galileu', 'Torricelli', 'Pascal'],
    correctAnswer: 2,
    explanation: 'Torricelli realizou a famosa experiência que mediu a pressão atmosférica.',
    grade: 7,
    topic: 'Pressão'
  },
  // --- 8ª CLASSE: ENERGIA CALORÍFICA ---
  {
    id: '8-cal-extra-2',
    text: 'O que define o "Equilíbrio Térmico"?',
    options: ['Corpos com massas iguais', 'Corpos com a mesma temperatura', 'Corpos que não se tocam', 'Corpos em movimento'],
    correctAnswer: 1,
    explanation: 'Dois corpos estão em equilíbrio térmico quando as suas temperaturas se igualam.',
    grade: 8,
    topic: 'Energia Calorífica'
  },
  // --- 8ª CLASSE: FENÓMENOS LUMINOSOS ---
  {
    id: '8-lum-extra-2',
    text: 'Um objeto que não permite a passagem de luz chama-se:',
    options: ['Transparente', 'Translúcido', 'Opaco', 'Brilhante'],
    correctAnswer: 2,
    explanation: 'Corpos opacos bloqueiam a passagem dos raios luminosos.',
    grade: 8,
    topic: 'Fenómenos Luminosos'
  },
  // --- 9ª CLASSE: ELECTROSTÁTICA ---
  {
    id: '9-est-extra-2',
    text: 'Um átomo neutro tem o mesmo número de:',
    options: ['Protões e Neutrões', 'Protões e Electrões', 'Neutrões e Electrões', 'Núcleos e Electrões'],
    correctAnswer: 1,
    explanation: 'A neutralidade eléctrica exige igualdade entre cargas positivas (protões) e negativas (electrões).',
    grade: 9,
    topic: 'Electrostática'
  },
  // --- 9ª CLASSE: ELECTRICIDADE E MAGNETISMO ---
  {
    id: '9-mag-extra-2',
    text: 'A bússola aponta para o Norte porque a Terra funciona como:',
    options: ['Um grande motor', 'Um grande íman', 'Uma grande lâmpada', 'Um vácuo'],
    correctAnswer: 1,
    explanation: 'O núcleo da Terra gera um campo magnético planetário.',
    grade: 9,
    topic: 'Electricidade e magnetismo'
  },
  // --- 7ª CLASSE: EXPANSÃO MASSIVA ---
  {
    id: '7-uni-10',
    text: 'Qual é o nome do satélite natural que orbita a Terra?',
    options: ['Titã', 'Europa', 'Lua', 'Ganimedes'],
    correctAnswer: 2,
    explanation: 'A Lua é o único satélite natural da Terra.',
    grade: 7,
    topic: 'O Universo'
  },
  {
    id: '7-uni-11',
    text: 'O que define uma estrela como o Sol?',
    options: ['Um planeta gigante', 'Um corpo celeste que emite luz própria', 'Um satélite de Júpiter', 'Uma nuvem de poeira'],
    correctAnswer: 1,
    explanation: 'Estrelas são esferas de plasma que realizam fusão nuclear, emitindo luz e calor.',
    grade: 7,
    topic: 'O Universo'
  },
  {
    id: '7-uni-12',
    text: 'Qual é a característica principal dos planetas gasosos?',
    options: ['Superfície rochosa', 'Pequeno tamanho', 'Composição maioritária de gases e sem superfície sólida definida', 'Órbita próxima do Sol'],
    correctAnswer: 2,
    explanation: 'Planetas como Júpiter e Saturno são compostos principalmente por hidrogénio e hélio.',
    grade: 7,
    topic: 'O Universo'
  },
  {
    id: '7-fis-10',
    text: 'Um litro (1L) equivale a quantos mililitros (ml)?',
    options: ['10', '100', '1000', '10000'],
    correctAnswer: 2,
    explanation: '1 litro é igual a 1000 mililitros.',
    grade: 7,
    topic: 'Física e Grandezas'
  },
  {
    id: '7-fis-11',
    text: 'A precisão de uma medida depende de quê?',
    options: ['Apenas da sorte', 'Do instrumento utilizado e do operador', 'Da cor do objeto', 'Do preço do aparelho'],
    correctAnswer: 1,
    explanation: 'A precisão e exactidão dependem da qualidade do instrumento e da técnica de quem mede.',
    grade: 7,
    topic: 'Física e Grandezas'
  },
  {
    id: '7-est-10',
    text: 'O que caracteriza o estado plasmático?',
    options: ['Baixas temperaturas', 'Gás ionizado a altas temperaturas', 'Gelo seco', 'Água líquida'],
    correctAnswer: 1,
    explanation: 'O plasma é o quarto estado da matéria, comum em estrelas e lâmpadas fluorescentes.',
    grade: 7,
    topic: 'Estados de Agregação'
  },
  {
    id: '7-for-10',
    text: 'A força de atrito atua sempre em que sentido?',
    options: ['Favorável ao movimento', 'Oposto ao movimento', 'Para cima', 'Para o centro da Terra'],
    correctAnswer: 1,
    explanation: 'O atrito opõe-se ao deslizamento ou tendência de deslizamento entre superfícies.',
    grade: 7,
    topic: 'Força e Massa'
  },
  {
    id: '7-pre-10',
    text: 'O que o Princípio de Pascal afirma sobre a pressão em fluidos?',
    options: ['A pressão diminui com a profundidade', 'A pressão aplicada num ponto de um fluido distribui-se igualmente por todo ele', 'Fluidos não exercem pressão', 'A pressão é maior em cima'],
    correctAnswer: 1,
    explanation: 'Blaise Pascal descobriu que a pressão se transmite integralmente em fluidos em equilíbrio.',
    grade: 7,
    topic: 'Pressão'
  },
  // --- 8ª CLASSE: EXPANSÃO MASSIVA ---
  {
    id: '8-tra-10',
    text: 'A potência é definida como:',
    options: ['Trabalho * Tempo', 'Trabalho / Tempo', 'Força / Deslocamento', 'Massa * Velocidade'],
    correctAnswer: 1,
    explanation: 'Potência é a rapidez com que o trabalho é realizado.',
    grade: 8,
    topic: 'Trabalho e Energia'
  },
  {
    id: '8-tra-11',
    text: 'Qual destas é uma fonte de energia renovável?',
    options: ['Carvão', 'Petróleo', 'Vento (Eólica)', 'Gás Natural'],
    correctAnswer: 2,
    explanation: 'A energia eólica provém de uma fonte inesgotável na escala humana.',
    grade: 8,
    topic: 'Trabalho e Energia'
  },
  {
    id: '8-cal-10',
    text: 'O que acontece durante a dilatacão térmica?',
    options: ['O corpo diminui de volume', 'O corpo aumenta de volume devido ao calor', 'O corpo muda de cor', 'O corpo perde massa'],
    correctAnswer: 1,
    explanation: 'O aumento da agitação molecular faz com que as substâncias ocupem mais espaço.',
    grade: 8,
    topic: 'Energia Calorífica'
  },
  {
    id: '8-acu-10',
    text: 'O que o "Timbre" permite distinguir?',
    options: ['Apenas sons fortes de fracos', 'Dois sons de mesma altura e intensidade, mas de fontes diferentes', 'A velocidade do som', 'A distância da fonte'],
    correctAnswer: 1,
    explanation: 'O timbre é a "identidade" sonora que nos permite diferenciar um piano de um violino tocando a mesma nota.',
    grade: 8,
    topic: 'Fenómenos Acústicos'
  },
  {
    id: '8-lum-10',
    text: 'A "Refracção" da luz ocorre quando:',
    options: ['A luz bate e volta', 'A luz muda de meio e altera sua velocidade', 'A luz é absorvida', 'A luz vira sombra'],
    correctAnswer: 1,
    explanation: 'A refracção é o desvio da trajetória da luz ao passar de um meio para outro (ex: ar para água).',
    grade: 8,
    topic: 'Fenómenos Luminosos'
  },
  // --- 9ª CLASSE: EXPANSÃO MASSIVA ---
  {
    id: '9-mov-10',
    text: 'A velocidade média é calculada por:',
    options: ['Distância total * Tempo total', 'Distância total / Tempo total', 'Aceleração / Tempo', 'Força / Massa'],
    correctAnswer: 1,
    explanation: 'A velocidade média é a razão entre o deslocamento e o intervalo de tempo.',
    grade: 9,
    topic: 'Movimento'
  },
  {
    id: '9-mov-11',
    text: 'Um movimento onde a velocidade aumenta uniformemente chama-se:',
    options: ['MRU', 'MRUA (Acelerado)', 'MRUR (Retardado)', 'Circular'],
    correctAnswer: 1,
    explanation: 'No Movimento Rectilíneo Uniformemente Acelerado, a aceleração é constante e positiva.',
    grade: 9,
    topic: 'Movimento'
  },
  {
    id: '9-est-10',
    text: 'A Lei de Coulomb descreve:',
    options: ['A força entre massas', 'A força eléctrica entre duas cargas puntiformes', 'A pressão atmosférica', 'A velocidade da luz'],
    correctAnswer: 1,
    explanation: 'A força eléctrica é proporcional ao produto das cargas e inversamente ao quadrado da distância.',
    grade: 9,
    topic: 'Electrostática'
  },
  {
    id: '9-ele-10',
    text: 'O que mede um Wattímetro?',
    options: ['Resistência', 'Tensão', 'Potência Eléctrica', 'Corrente'],
    correctAnswer: 2,
    explanation: 'A potência eléctrica, medida em Watts, representa o consumo ou produção de energia por tempo.',
    grade: 9,
    topic: 'Energia Eléctrica'
  },
  {
    id: '9-mag-10',
    text: 'O que o experimento de Oersted comprovou?',
    options: ['A luz viaja no vácuo', 'A corrente eléctrica gera um campo magnético', 'A Terra é plana', 'O som é uma onda'],
    correctAnswer: 1,
    explanation: 'Hans Christian Oersted descobriu a relação fundamental entre electricidade e magnetismo.',
    grade: 9,
    topic: 'Electricidade e magnetismo'
  },
  // --- 7ª CLASSE: EXPANSÃO UNVERSO (SUB-TÓPICOS ASTROS E CONSTELAÇÕES) ---
  {
    id: '7-uni-20',
    text: 'Qual é o maior planeta do Sistema Solar?',
    options: ['Saturno', 'Júpiter', 'Neptuno', 'Urano'],
    correctAnswer: 1,
    explanation: 'Júpiter é o gigante gasoso, com uma massa maior que todos os outros planetas juntos.',
    grade: 7,
    topic: 'O Universo'
  },
  {
    id: '7-uni-21',
    text: 'A que distância média a Terra está do Sol?',
    options: ['150 milhões de km', '300 mil km', '93 milhões de km', '1 bilhão de km'],
    correctAnswer: 0,
    explanation: 'Esta distância define uma Unidade Astronómica (UA).',
    grade: 7,
    topic: 'O Universo'
  },
  {
    id: '7-uni-22',
    text: 'Qual destes planetas não possui anéis visíveis?',
    options: ['Saturno', 'Urano', 'Júpiter', 'Marte'],
    correctAnswer: 3,
    explanation: 'Marte é um planeta rochoso e não possui sistemas de anéis como os gigantes gasosos.',
    grade: 7,
    topic: 'O Universo'
  },
  {
    id: '7-uni-23',
    text: 'O que define uma estrela?',
    options: ['Reflectir a luz do Sol', 'Ser feita de gelo', 'Emitir luz própria via fusão nuclear', 'Orbitar um planeta'],
    correctAnswer: 2,
    explanation: 'Estrelas são esferas de plasma que produzem energia através da fusão de hidrogénio.',
    grade: 7,
    topic: 'O Universo'
  },
  {
    id: '7-uni-24',
    text: 'Qual é o planeta conhecido como "Estrela da Manhã"?',
    options: ['Marte', 'Vénus', 'Mercúrio', 'Saturno'],
    correctAnswer: 1,
    explanation: 'Vénus é muito brilhante e pode ser visto ao amanhecer ou entardecer.',
    grade: 7,
    topic: 'O Universo'
  },
  {
    id: '7-uni-25',
    text: 'O Sol é classificado como uma:',
    options: ['Anã Branca', 'Anã Amarela', 'Gigante Vermelha', 'Supernova'],
    correctAnswer: 1,
    explanation: 'O Sol está na fase principal da sua vida, sendo uma anã amarela.',
    grade: 7,
    topic: 'O Universo'
  },
  {
    id: '7-uni-26',
    text: 'Qual é a galáxia mais próxima da Via Láctea?',
    options: ['Sombreiro', 'Andrómeda', 'Magalhães', 'Triângulo'],
    correctAnswer: 1,
    explanation: 'Andrómeda é a nossa vizinha galáctica mais próxima e visível a olho nu.',
    grade: 7,
    topic: 'O Universo'
  },
  {
    id: '7-uni-27',
    text: 'O que é um cometa?',
    options: ['Uma grande rocha fundida', 'Um "bola de neve suja" de gelo e poeira', 'Um planeta morto', 'Uma estrela cadente'],
    correctAnswer: 1,
    explanation: 'Cometas desenvolvem caudas quando se aproximam do Sol e o gelo sublima.',
    grade: 7,
    topic: 'O Universo'
  },
  {
    id: '7-uni-28',
    text: 'Quanto tempo a luz do Sol demora para chegar à Terra?',
    options: ['1 segundo', '8 minutos', '24 horas', '1 ano'],
    correctAnswer: 1,
    explanation: 'Viajando a 300.000 km/s, a luz percorre os 150M km em cerca de 8,3 minutos.',
    grade: 7,
    topic: 'O Universo'
  },
  {
    id: '7-uni-29',
    text: 'Qual é a principal força que mantém os planetas em órbita?',
    options: ['Magnetismo', 'Fricção', 'Gravidade', 'Pressão Atmosférica'],
    correctAnswer: 2,
    explanation: 'A força gravitacional do Sol mantém todo o sistema solar unido.',
    grade: 7,
    topic: 'O Universo'
  },
  // --- GRANDEZAS FÍSICAS (7ª CLASSE) ---
  {
    id: '7-gra-20',
    text: 'Qual é a unidade base de comprimento no Sistema Internacional (SI)?',
    options: ['Quilómetro', 'Centímetro', 'Metro', 'Milha'],
    correctAnswer: 2,
    explanation: 'O Metro (m) é a unidade fundamental de comprimento.',
    grade: 7,
    topic: 'Física e Grandezas'
  },
  {
    id: '7-gra-21',
    text: 'Um litro (1L) equivale a quantos centímetros cúbicos (cm³)?',
    options: ['10 cm³', '100 cm³', '1000 cm³', '10000 cm³'],
    correctAnswer: 2,
    explanation: '1 decímetro cúbico (dm³) = 1 Litro = 1000 cm³.',
    grade: 7,
    topic: 'Física e Grandezas'
  },
  {
    id: '7-gra-22',
    text: 'Qual instrumento mede a massa de um corpo?',
    options: ['Dinamómetro', 'Termómetro', 'Balança', 'Paquímetro'],
    correctAnswer: 2,
    explanation: 'A balança compara massas, enquanto o dinamómetro mede peso/força.',
    grade: 7,
    topic: 'Física e Grandezas'
  },
  {
    id: '7-gra-23',
    text: 'O que é uma grandeza escalar?',
    options: ['Possui apenas valor e unidade', 'Possui valor, unidade, direcção e sentido', 'Mede apenas temperatura', 'É usada apenas na Lua'],
    correctAnswer: 0,
    explanation: 'Exemplos de grandezas escalares: massa, tempo, temperatura.',
    grade: 7,
    topic: 'Física e Grandezas'
  },
  {
    id: '7-gra-24',
    text: 'Qual destas é uma grandeza vectorial?',
    options: ['Massa', 'Tempo', 'Força', 'Volume'],
    correctAnswer: 2,
    explanation: 'A força precisa de direcção e sentido para ser totalmente descrita.',
    grade: 7,
    topic: 'Física e Grandezas'
  },
  {
    id: '7-gra-25',
    text: 'Quantos segundos tem uma hora?',
    options: ['60s', '600s', '3600s', '36000s'],
    correctAnswer: 2,
    explanation: '60 minutos * 60 segundos = 3600 segundos.',
    grade: 7,
    topic: 'Física e Grandezas'
  },
  {
    id: '7-gra-26',
    text: 'O prefixo "Kilo" (k) representa que factor multiplicador?',
    options: ['10', '100', '1000', '0.001'],
    correctAnswer: 2,
    explanation: '1 Kg = 1000g, 1 Km = 1000m.',
    grade: 7,
    topic: 'Física e Grandezas'
  },
  {
    id: '7-gra-27',
    text: 'O que mede um Cronómetro?',
    options: ['Distância', 'Intervalo de tempo', 'Velocidade', 'Aceleração'],
    correctAnswer: 1,
    explanation: 'O cronómetro é usado para medir a duração de eventos.',
    grade: 7,
    topic: 'Física e Grandezas'
  },
  {
    id: '7-gra-28',
    text: 'Qual é a unidade de temperatura no Sistema Internacional (SI)?',
    options: ['Celsius', 'Fahrenheit', 'Kelvin', 'Caloria'],
    correctAnswer: 2,
    explanation: 'Embora o Celsius seja comum, o Kelvin (K) é a unidade oficial do SI.',
    grade: 7,
    topic: 'Física e Grandezas'
  },
  {
    id: '7-gra-29',
    text: 'O que significa medir?',
    options: ['Adivinhar um peso', 'Comparar uma grandeza com uma unidade padrão', 'Olhar fixamente para um objecto', 'Mudar a cor de algo'],
    correctAnswer: 1,
    explanation: 'Medir é o processo de comparação quantitativa.',
    grade: 7,
    topic: 'Física e Grandezas'
  },
  // --- 8ª CLASSE: TRABALHO E ENERGIA ---
  {
    id: '8-tra-20',
    text: 'A unidade de medida do Trabalho no SI é:',
    options: ['Newton', 'Watt', 'Joule', 'Pascal'],
    correctAnswer: 2,
    explanation: 'O Joule (J) é a unidade de energia e trabalho.',
    grade: 8,
    topic: 'Trabalho e energia'
  },
  {
    id: '8-tra-21',
    text: 'A energia associada ao movimento de um corpo chama-se:',
    options: ['Energia Potencial', 'Energia Cinética', 'Energia Química', 'Energia Nuclear'],
    correctAnswer: 1,
    explanation: 'A energia cinética depende da massa e da velocidade do corpo.',
    grade: 8,
    topic: 'Trabalho e energia'
  },
  {
    id: '8-tra-22',
    text: 'O que é uma Máquina Simples?',
    options: ['Um computador potente', 'Um dispositivo que facilita o trabalho mudando a força', 'Um motor a jacto', 'Uma lanterna'],
    correctAnswer: 1,
    explanation: 'Exemplos: alavancas, roldanas e planos inclinados.',
    grade: 8,
    topic: 'Trabalho e energia'
  },
  {
    id: '8-tra-23',
    text: 'Uma tesoura é um exemplo de qual tipo de alavanca?',
    options: ['Inter-resistente', 'Inter-fixa', 'Inter-potente', 'Circular'],
    correctAnswer: 1,
    explanation: 'O ponto de apoio está entre a força aplicada e a resistência.',
    grade: 8,
    topic: 'Trabalho e energia'
  },
  {
    id: '8-tra-24',
    text: 'A potência mede:',
    options: ['A força total', 'A rapidez com que o trabalho é realizado', 'A distância percorrida', 'O calor perdido'],
    correctAnswer: 1,
    explanation: 'Potência = Trabalho / Tempo. Medida em Watts (W).',
    grade: 8,
    topic: 'Trabalho e energia'
  },
  {
    id: '8-tra-25',
    text: 'A energia que um corpo possui devido à sua altura é:',
    options: ['Cinética', 'Potencial Gravítica', 'Térmica', 'Elástica'],
    correctAnswer: 1,
    explanation: 'Ep = m * g * h.',
    grade: 8,
    topic: 'Trabalho e energia'
  },
  {
    id: '8-tra-26',
    text: 'O que acontece com a energia total de um sistema isolado?',
    options: ['Desaparece', 'Aumenta sempre', 'Conserva-se (transforma-se apenas)', 'Diminui'],
    correctAnswer: 2,
    explanation: 'Princípio da Conservação da Energia.',
    grade: 8,
    topic: 'Trabalho e energia'
  },
  {
    id: '8-tra-27',
    text: 'Um exemplo de energia renovável é:',
    options: ['Petróleo', 'Carvão Mineral', 'Vento (Eólica)', 'Gás Natural'],
    correctAnswer: 2,
    explanation: 'Energia eólica utiliza o vento e não se esgota.',
    grade: 8,
    topic: 'Trabalho e energia'
  },
  {
    id: '8-tra-28',
    text: 'Qual destas máquinas facilita o levantamento de cargas?',
    options: ['Roldana Móvel', 'Pinça', 'Vela', 'Lupa'],
    correctAnswer: 0,
    explanation: 'A roldana móvel reduz a força necessária pela metade.',
    grade: 8,
    topic: 'Trabalho e energia'
  },
  {
    id: '8-tra-29',
    text: 'O que é o rendimento de uma máquina?',
    options: ['O lucro que ela dá', 'A razão entre energia útil e energia total', 'A cor da máquina', 'A velocidade máxima'],
    correctAnswer: 1,
    explanation: 'O rendimento é sempre menor que 100% devido ao atrito.',
    grade: 8,
    topic: 'Trabalho e energia'
  },
  // --- 8ª CLASSE: CALOR E TEMPERATURA ---
  {
    id: '8-cal-20',
    text: 'O que é o calor?',
    options: ['A medida da temperatura', 'Energia térmica em trânsito', 'Um fluido invisível', 'O mesmo que frio'],
    correctAnswer: 1,
    explanation: 'Calor flui de corpos quentes para corpos frios espontaneamente.',
    grade: 8,
    topic: 'Calor'
  },
  {
    id: '8-cal-21',
    text: 'Qual é o processo de propagação do calor em sólidos?',
    options: ['Convecção', 'Radiação', 'Condução', 'Fusão'],
    correctAnswer: 2,
    explanation: 'A condução ocorre através da vibração de átomos e moléculas vizinhas.',
    grade: 8,
    topic: 'Calor'
  },
  {
    id: '8-cal-22',
    text: 'Como o Sol aquece a Terra através do vácuo?',
    options: ['Condução', 'Convecção', 'Radiação (Irradiação)', 'Ebulição'],
    correctAnswer: 2,
    explanation: 'Ondas electromagnéticas (infravermelho) transportam calor no vácuo.',
    grade: 8,
    topic: 'Calor'
  },
  {
    id: '8-cal-23',
    text: 'O "Equilíbrio Térmico" acontece quando:',
    options: ['Dois corpos têm a mesma massa', 'Dois corpos atingem a mesma temperatura', 'O gelo derrete todo', 'A água ferve'],
    correctAnswer: 1,
    explanation: 'Neste estado, o fluxo líquido de calor entre os corpos é zero.',
    grade: 8,
    topic: 'Calor'
  },
  {
    id: '8-cal-24',
    text: 'Qual é a temperatura de fusão do gelo (pressão normal)?',
    options: ['0°C', '100°C', '37°C', '-10°C'],
    correctAnswer: 0,
    explanation: 'A 0°C a água pura passa do estado sólido ao líquido.',
    grade: 8,
    topic: 'Calor'
  },
  {
    id: '8-cal-25',
    text: 'Substâncias que não conduzem calor facilmente são chamadas:',
    options: ['Condutores', 'Isolantes', 'Radiadores', 'Reflectores'],
    correctAnswer: 1,
    explanation: 'Exemplos: madeira, plástico, lã, esferovite.',
    grade: 8,
    topic: 'Calor'
  },
  {
    id: '8-cal-26',
    text: 'O que é o Calor Específico?',
    options: ['O calor total de um corpo', 'A quantidade de calor para elevar 1g de substância em 1°C', 'A temperatura máxima', 'O ponto de vaporização'],
    correctAnswer: 1,
    explanation: 'Cada material tem um calor específico característico.',
    grade: 8,
    topic: 'Calor'
  },
  {
    id: '8-cal-27',
    text: 'A brisa marítima é causada por qual fenómeno?',
    options: ['Condução', 'Convecção', 'Ebulição', 'Solidificação'],
    correctAnswer: 1,
    explanation: 'A diferença de aquecimento entre terra e mar gera correntes de ar (convecção).',
    grade: 8,
    topic: 'Calor'
  },
  {
    id: '8-cal-28',
    text: 'O que acontece com a maioria dos corpos quando aquecem?',
    options: ['Diminuem de tamanho', 'Dilatam (aumentam de volume)', 'Ficam mais pesados', 'Mudam de cor para azul'],
    correctAnswer: 1,
    explanation: 'A agitação molecular aumenta a distância média entre átomos.',
    grade: 8,
    topic: 'Calor'
  },
  {
    id: '8-cal-29',
    text: 'Um calorímetro serve para:',
    options: ['Medir a pressão', 'Trocar e medir quantidades de calor', 'Ver objectos distantes', 'Medir a velocidade da luz'],
    correctAnswer: 1,
    explanation: 'É um recipiente isolado usado em experiências de física térmica.',
    grade: 8,
    topic: 'Calor'
  },
  // --- 9ª CLASSE: MOVIMENTO E CINEMÁTICA ---
  {
    id: '9-mov-20',
    text: 'Um carro percorre 100km em 2 horas. Sua velocidade média é:',
    options: ['200 km/h', '50 km/h', '25 km/h', '100 km/h'],
    correctAnswer: 1,
    explanation: 'Vm = Distância / Tempo = 100 / 2 = 50 km/h.',
    grade: 9,
    topic: 'Movimento'
  },
  {
    id: '9-mov-21',
    text: 'A aceleração mede a variação da:',
    options: ['Posição', 'Velocidade no tempo', 'Massa', 'Energia'],
    correctAnswer: 1,
    explanation: 'A aceleração ocorre quando a velocidade muda (aumenta ou diminui).',
    grade: 9,
    topic: 'Movimento'
  },
  {
    id: '9-mov-22',
    text: 'A unidade de aceleração no SI é:',
    options: ['m/s', 'm/s²', 'km/h', 'N'],
    correctAnswer: 1,
    explanation: 'Metros por segundo ao quadrado (m/s²).',
    grade: 9,
    topic: 'Movimento'
  },
  {
    id: '9-mov-23',
    text: 'No Movimento Rectilíneo Uniforme (MRU), a velocidade é:',
    options: ['Sempre zero', 'Variável', 'Constante', 'Inexistente'],
    correctAnswer: 2,
    explanation: 'No MRU não há aceleração, logo a velocidade não muda.',
    grade: 9,
    topic: 'Movimento'
  },
  {
    id: '9-mov-24',
    text: 'O que caracteriza a Queda Livre?',
    options: ['O corpo cai com velocidade constante', 'A única força actuante é a gravidade', 'O corpo flutua', 'A massa do corpo é zero'],
    correctAnswer: 1,
    explanation: 'No vácuo, todos os corpos caem com a mesma aceleração (g).',
    grade: 9,
    topic: 'Movimento'
  },
  {
    id: '9-mov-25',
    text: 'A trajectória de um projéctil lançado obliquamente é uma:',
    options: ['Reta', 'Circunferência', 'Parábola', 'Espiral'],
    correctAnswer: 2,
    explanation: 'A gravidade curva a trajectória recta original para uma forma parabólica.',
    grade: 9,
    topic: 'Movimento'
  },
  {
    id: '9-mov-26',
    text: 'O que mede o velocímetro de um carro?',
    options: ['Velocidade Média', 'Velocidade Instantânea', 'Espaço Percorrido', 'Tempo de Viagem'],
    correctAnswer: 1,
    explanation: 'Mede a velocidade naquele exato momento.',
    grade: 9,
    topic: 'Movimento'
  },
  {
    id: '9-mov-27',
    text: 'Um corpo em repouso tende a permanecer em repouso. Esta é a Lei da:',
    options: ['Gravitação', 'Inércia', 'Acção e Reacção', 'Conservação'],
    correctAnswer: 1,
    explanation: 'Primeira Lei de Newton.',
    grade: 9,
    topic: 'Movimento'
  },
  {
    id: '9-mov-28',
    text: 'A força é igual à massa vezes a aceleração (F=m.a). Esta é a:',
    options: ['1ª Lei de Newton', '2ª Lei de Newton (PFD)', '3ª Lei de Newton', 'Lei de Ohm'],
    correctAnswer: 1,
    explanation: 'Princípio Fundamental da Dinâmica.',
    grade: 9,
    topic: 'Movimento'
  },
  {
    id: '9-mov-29',
    text: 'Para toda acção existe uma reacção igual e oposta. Esta é a:',
    options: ['1ª Lei de Newton', '2ª Lei de Newton', '3ª Lei de Newton', 'Lei de Coulomb'],
    correctAnswer: 2,
    explanation: 'As forças de acção e reacção actuam em corpos diferentes.',
    grade: 9,
    topic: 'Movimento'
  },
  // --- 9ª CLASSE: ELECTROSTÁTICA ---
  {
    id: '9-est-20',
    text: 'Qual é a carga eléctrica do Electrão?',
    options: ['Positiva', 'Negativa', 'Neutra', 'Variável'],
    correctAnswer: 1,
    explanation: 'Os electrões orbitam o núcleo e têm carga negativa.',
    grade: 9,
    topic: 'Electrostática'
  },
  {
    id: '9-est-21',
    text: 'Corpos com cargas de mesmo sinal:',
    options: ['Atraem-se', 'Repelem-se', 'Anulam-se', 'Explodem'],
    correctAnswer: 1,
    explanation: 'Lei das Cargas: cargas iguais repelem-se, opostas atraem-se.',
    grade: 9,
    topic: 'Electrostática'
  },
  {
    id: '9-est-22',
    text: 'Um material que permite a passagem livre de electrões é um:',
    options: ['Isolante', 'Condutor', 'Dieléctrico', 'Semicondutor'],
    correctAnswer: 1,
    explanation: 'Metais como cobre e ouro são excelentes condutores.',
    grade: 9,
    topic: 'Electrostática'
  },
  {
    id: '9-est-23',
    text: 'A unidade de carga eléctrica no SI é o:',
    options: ['Ampere', 'Volt', 'Coulomb', 'Ohm'],
    correctAnswer: 2,
    explanation: 'Coulomb (C) homenageia Charles de Coulomb.',
    grade: 9,
    topic: 'Electrostática'
  },
  {
    id: '9-est-24',
    text: 'O que acontece quando atritamos um bastão de plástico em lã?',
    options: ['Nada', 'Electrização por atrito', 'O bastão derrete', 'Cria-se um íman'],
    correctAnswer: 1,
    explanation: 'Há transferência de electrões de um corpo para o outro.',
    grade: 9,
    topic: 'Electrostática'
  },
  {
    id: '9-est-25',
    text: 'O que o Electroscópio detecta?',
    options: ['Temperatura', 'Presença de carga eléctrica', 'Pressão', 'Luz'],
    correctAnswer: 1,
    explanation: 'Aparelho simples que indica se um corpo está electrizado.',
    grade: 9,
    topic: 'Electrostática'
  },
  {
    id: '9-est-26',
    text: 'A força eléctrica entre duas cargas depende de:',
    options: ['Apenas da massa', 'Das cargas e da distância entre elas', 'Apenas da cor dos fios', 'Do vento'],
    correctAnswer: 1,
    explanation: 'Lei de Coulomb: F = k * (q1*q2)/d².',
    grade: 9,
    topic: 'Electrostática'
  },
  {
    id: '9-est-27',
    text: 'Um corpo neutro possui:',
    options: ['Nenhum electrão', 'Igual número de protões e electrões', 'Apenas neutrões', 'Carga infinita'],
    correctAnswer: 1,
    explanation: 'As cargas positivas anulam as negativas no resultado total.',
    grade: 9,
    topic: 'Electrostática'
  },
  {
    id: '9-est-28',
    text: 'O relâmpago é um exemplo de:',
    options: ['Magnetismo intenso', 'Química atmosférica', 'Descarga eléctrica em gases', 'Fusão nuclear'],
    correctAnswer: 2,
    explanation: 'É o fluxo massivo de electrões entre nuvens ou nuvem e solo.',
    grade: 9,
    topic: 'Electrostática'
  },
  {
    id: '9-est-29',
    text: 'Para proteger edifícios de raios, usamos:',
    options: ['Guarda-chuvas', 'Para-raios', 'Espelhos', 'Antenas de plástico'],
    correctAnswer: 1,
    explanation: 'O dispositivo de Franklin oferece um caminho seguro para a terra.',
    grade: 9,
    topic: 'Electrostática'
  },
  // --- 7ª CLASSE: ESTADOS, FORÇA E PRESSÃO ---
  {
    id: '7-est-30',
    text: 'A passagem do estado sólido para o gasoso directamente chama-se:',
    options: ['Fusão', 'Sublimação', 'Condensação', 'Evaporação'],
    correctAnswer: 1,
    explanation: 'Exemplo: Naftalina ou Gelo Seco.',
    grade: 7,
    topic: 'Estados de Agregação'
  },
  {
    id: '7-est-31',
    text: 'Qual estado da matéria tem forma e volume constantes?',
    options: ['Líquido', 'Sólido', 'Gasoso', 'Plasma'],
    correctAnswer: 1,
    explanation: 'No estado sólido, as forças de coesão são muito fortes.',
    grade: 7,
    topic: 'Estados de Agregação'
  },
  {
    id: '7-for-30',
    text: 'A força que se opõe ao movimento entre duas superfícies é o:',
    options: ['Peso', 'Atrito', 'Impulso', 'Magnetismo'],
    correctAnswer: 1,
    explanation: 'O atrito depende da rugosidade das superfícies.',
    grade: 7,
    topic: 'Força e Massa'
  },
  {
    id: '7-for-31',
    text: 'O que acontece ao peso de um objecto na Lua?',
    options: ['Aumenta', 'Diminui', 'Fica igual', 'Vira zero'],
    correctAnswer: 1,
    explanation: 'A gravidade na Lua é cerca de 1/6 da Terra.',
    grade: 7,
    topic: 'Força e Massa'
  },
  {
    id: '7-pre-30',
    text: 'A pressão atmosférica é medida com um:',
    options: ['Termómetro', 'Barómetro', 'Voltímetro', 'Higrómetro'],
    correctAnswer: 1,
    explanation: 'Torricelli inventou o primeiro barómetro de mercúrio.',
    grade: 7,
    topic: 'Pressão'
  },
  {
    id: '7-pre-31',
    text: 'Quanto maior a altitude, a pressão atmosférica:',
    options: ['Aumenta', 'Diminui', 'Não muda', 'Varia com a cor'],
    correctAnswer: 1,
    explanation: 'Há menos ar acima de nós em grandes altitudes.',
    grade: 7,
    topic: 'Pressão'
  },
  // --- 8ª CLASSE: SOM E LUZ ---
  {
    id: '8-som-30',
    text: 'O som não se propaga no:',
    options: ['Ar', 'Água', 'Vácuo', 'Ferro'],
    correctAnswer: 2,
    explanation: 'O som precisa de um meio material para viajar.',
    grade: 8,
    topic: 'Som'
  },
  {
    id: '8-som-31',
    text: 'A altura do som (agudo/grave) depende da:',
    options: ['Intensidade', 'Frequência', 'Velocidade', 'Duração'],
    correctAnswer: 1,
    explanation: 'Sons de alta frequência são agudos, baixa frequência são graves.',
    grade: 8,
    topic: 'Som'
  },
  {
    id: '8-luz-30',
    text: 'A luz propaga-se em linha:',
    options: ['Curva', 'Recta', 'Ziguezague', 'Círculo'],
    correctAnswer: 1,
    explanation: 'Este é o princípio da propagação rectilínea da luz.',
    grade: 8,
    topic: 'Fenómenos Luminosos'
  },
  {
    id: '8-luz-31',
    text: 'Um espelho côncavo pode ser usado para:',
    options: ['Ampliar imagens', 'Ver atrás de esquinas', 'Esconder objectos', 'Medir o som'],
    correctAnswer: 0,
    explanation: 'Espelhos curvos para dentro focam a luz.',
    grade: 8,
    topic: 'Fenómenos Luminosos'
  },
  // --- 9ª CLASSE: ENERGIA ELÉCTRICA E MAGNETISMO ---
  {
    id: '9-ele-30',
    text: 'A Lei de Ohm estabelece a relação entre:',
    options: ['Massa e Volume', 'Tensão, Corrente e Resistência', 'Calor e Luz', 'Gravidade e Tempo'],
    correctAnswer: 1,
    explanation: 'V = R * I.',
    grade: 9,
    topic: 'Energia Eléctrica'
  },
  {
    id: '9-ele-31',
    text: 'Num circuito em série, se uma lâmpada funde:',
    options: ['As outras brilham mais', 'As outras apagam-se', 'Nada acontece', 'O fio derrete'],
    correctAnswer: 1,
    explanation: 'O caminho para a corrente é interrompido.',
    grade: 9,
    topic: 'Energia Eléctrica'
  },
  {
    id: '9-mag-30',
    text: 'Um íman tem sempre dois pólos:',
    options: ['Positivo e Negativo', 'Norte e Sul', 'Leste e Oeste', 'Quente e Frio'],
    correctAnswer: 1,
    explanation: 'Pólos geográficos e magnéticos orientam bússolas.',
    grade: 9,
    topic: 'Electricidade e magnetismo'
  },
  {
    id: '9-mag-31',
    text: 'A Terra comporta-se como um gigantesco:',
    options: ['Motor', 'Íman', 'Lâmpada', 'Pilha'],
    correctAnswer: 1,
    explanation: 'O núcleo de ferro gera o campo magnético terrestre.',
    grade: 9,
    topic: 'Electricidade e magnetismo'
  }
];
