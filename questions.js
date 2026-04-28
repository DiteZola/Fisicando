// ==========================================
//  QUIZFÍSICA - BANCO DE PERGUNTAS
//  Copyright © 2026 Dite Zola NG
//  Ficheiro: questions.js
// ==========================================

const QUESTION_BANK = [

// ============================================================
//  7ª CLASSE - TEMA 1: O UNIVERSO (u7_1)
//  Lições 1-8
// ============================================================

// --- Lição 1: Introdução ao Universo ---
{id:"7_1_001",unit:"u7_1",lesson:1,type:"multiple",question:"O que é o Universo?",options:["Conjunto de tudo que existe","Apenas o Sistema Solar","Só a Via Láctea","Apenas a Terra e a Lua"],correct:0,explanation:"O Universo é o conjunto de tudo que existe: matéria, energia, espaço e tempo."},
{id:"7_1_002",unit:"u7_1",lesson:1,type:"true_false",question:"O Universo é infinito segundo os cientistas.",correct:true,explanation:"A maioria dos cientistas acredita que o Universo é infinito ou extremamente vasto."},
{id:"7_1_003",unit:"u7_1",lesson:1,type:"multiple",question:"Qual ciência estuda o Universo?",options:["Astronomia","Biologia","Química","Geografia"],correct:0,explanation:"A Astronomia é a ciência que estuda os astros e o Universo."},
{id:"7_1_004",unit:"u7_1",lesson:1,type:"multiple",question:"Qual é a nossa galáxia?",options:["Via Láctea","Andrómeda","Magalhães","Centauro"],correct:0,explanation:"A Terra está na galáxia chamada Via Láctea."},
{id:"7_1_005",unit:"u7_1",lesson:1,type:"true_false",question:"Uma galáxia é um conjunto de estrelas, planetas e outros corpos celestes.",correct:true,explanation:"As galáxias são enormes conjuntos de estrelas, planetas, gás e poeira."},
{id:"7_1_006",unit:"u7_1",lesson:1,type:"fill",question:"A ciência que estuda os astros chama-se ___.",correct:["Astronomia","astronomia"],explanation:"A Astronomia estuda todos os corpos celestes."},
{id:"7_1_007",unit:"u7_1",lesson:1,type:"multiple",question:"O que são astros?",options:["Corpos celestes no espaço","Tipos de rochas","Fenómenos climáticos","Instrumentos científicos"],correct:0,explanation:"Astros são todos os corpos que existem no espaço, como estrelas e planetas."},
{id:"7_1_008",unit:"u7_1",lesson:1,type:"multiple",question:"Os astros dividem-se em dois grupos principais:",options:["Luminosos e iluminados","Grandes e pequenos","Quentes e frios","Próximos e distantes"],correct:0,explanation:"Astros luminosos emitem luz própria (estrelas) e iluminados reflectem a luz (planetas)."},
{id:"7_1_009",unit:"u7_1",lesson:1,type:"true_false",question:"As estrelas são astros luminosos.",correct:true,explanation:"As estrelas produzem e emitem a sua própria luz."},
{id:"7_1_010",unit:"u7_1",lesson:1,type:"true_false",question:"Os planetas são astros luminosos.",correct:false,explanation:"Os planetas são astros iluminados pois reflectem a luz das estrelas."},
{id:"7_1_011",unit:"u7_1",lesson:1,type:"multiple",question:"Qual destes é um astro luminoso?",options:["Sol","Terra","Lua","Marte"],correct:0,explanation:"O Sol é uma estrela e por isso emite luz própria."},
{id:"7_1_012",unit:"u7_1",lesson:1,type:"fill",question:"Os astros que emitem luz própria chamam-se astros ___.",correct:["luminosos","Luminosos"],explanation:"Astros luminosos são as estrelas, que produzem luz."},
{id:"7_1_013",unit:"u7_1",lesson:1,type:"multiple",question:"O instrumento usado para observar astros distantes é:",options:["Telescópio","Microscópio","Termómetro","Barómetro"],correct:0,explanation:"O telescópio permite ver objectos muito distantes no espaço."},
{id:"7_1_014",unit:"u7_1",lesson:1,type:"true_false",question:"A Lua é um astro iluminado.",correct:true,explanation:"A Lua não tem luz própria, ela reflecte a luz do Sol."},
{id:"7_1_015",unit:"u7_1",lesson:1,type:"multiple",question:"Quem inventou o primeiro telescópio astronómico?",options:["Galileu Galilei","Isaac Newton","Albert Einstein","Nicolau Copérnico"],correct:0,explanation:"Galileu Galilei construiu o primeiro telescópio para observação astronómica em 1609."},

// --- Lição 2: O Sistema Solar ---
{id:"7_1_016",unit:"u7_1",lesson:2,type:"multiple",question:"Qual é a estrela central do nosso Sistema Solar?",options:["Sol","Sírio","Alpha Centauri","Polar"],correct:0,explanation:"O Sol é a estrela no centro do Sistema Solar."},
{id:"7_1_017",unit:"u7_1",lesson:2,type:"multiple",question:"Quantos planetas tem o Sistema Solar?",options:["8","9","7","10"],correct:0,explanation:"O Sistema Solar tem 8 planetas desde que Plutão foi reclassificado em 2006."},
{id:"7_1_018",unit:"u7_1",lesson:2,type:"multiple",question:"Qual é o planeta mais próximo do Sol?",options:["Mercúrio","Vénus","Terra","Marte"],correct:0,explanation:"Mercúrio é o primeiro planeta a contar do Sol."},
{id:"7_1_019",unit:"u7_1",lesson:2,type:"multiple",question:"Qual é a ordem correcta dos primeiros 4 planetas?",options:["Mercúrio, Vénus, Terra, Marte","Vénus, Mercúrio, Terra, Marte","Terra, Vénus, Marte, Mercúrio","Marte, Terra, Vénus, Mercúrio"],correct:0,explanation:"A ordem é: Mercúrio, Vénus, Terra e Marte (planetas rochosos)."},
{id:"7_1_020",unit:"u7_1",lesson:2,type:"true_false",question:"Júpiter é o maior planeta do Sistema Solar.",correct:true,explanation:"Júpiter é o maior planeta, com um diâmetro 11 vezes maior que o da Terra."},
{id:"7_1_021",unit:"u7_1",lesson:2,type:"multiple",question:"Qual planeta é conhecido como 'planeta vermelho'?",options:["Marte","Vénus","Júpiter","Saturno"],correct:0,explanation:"Marte tem cor avermelhada devido ao óxido de ferro na sua superfície."},
{id:"7_1_022",unit:"u7_1",lesson:2,type:"multiple",question:"Qual planeta tem anéis visíveis?",options:["Saturno","Marte","Vénus","Mercúrio"],correct:0,explanation:"Saturno é famoso pelos seus grandes anéis feitos de gelo e rocha."},
{id:"7_1_023",unit:"u7_1",lesson:2,type:"fill",question:"O planeta mais próximo do Sol é ___.",correct:["Mercúrio","mercúrio"],explanation:"Mercúrio orbita mais perto do Sol."},
{id:"7_1_024",unit:"u7_1",lesson:2,type:"true_false",question:"A Terra é o terceiro planeta a contar do Sol.",correct:true,explanation:"A ordem é: Mercúrio, Vénus, Terra. Logo a Terra é o terceiro."},
{id:"7_1_025",unit:"u7_1",lesson:2,type:"multiple",question:"Os planetas rochosos são chamados de:",options:["Telúricos","Gasosos","Luminosos","Artificiais"],correct:0,explanation:"Planetas telúricos são os rochosos: Mercúrio, Vénus, Terra e Marte."},
{id:"7_1_026",unit:"u7_1",lesson:2,type:"multiple",question:"Quais são os planetas gasosos?",options:["Júpiter, Saturno, Úrano, Neptuno","Mercúrio, Vénus, Terra, Marte","Marte, Júpiter, Saturno, Úrano","Terra, Marte, Júpiter, Saturno"],correct:0,explanation:"Os planetas gasosos são os mais distantes do Sol."},
{id:"7_1_027",unit:"u7_1",lesson:2,type:"true_false",question:"Plutão ainda é considerado um planeta do Sistema Solar.",correct:false,explanation:"Plutão foi reclassificado como planeta anão em 2006 pela União Astronómica Internacional."},
{id:"7_1_028",unit:"u7_1",lesson:2,type:"multiple",question:"O que mantém os planetas em órbita à volta do Sol?",options:["Força gravitacional","Força magnética","Força eléctrica","Força elástica"],correct:0,explanation:"A gravidade do Sol atrai os planetas mantendo-os em órbita."},
{id:"7_1_029",unit:"u7_1",lesson:2,type:"fill",question:"O maior planeta do Sistema Solar é ___.",correct:["Júpiter","júpiter","Jupiter","jupiter"],explanation:"Júpiter tem massa maior que todos os outros planetas juntos."},
{id:"7_1_030",unit:"u7_1",lesson:2,type:"multiple",question:"Qual é o planeta mais quente do Sistema Solar?",options:["Vénus","Mercúrio","Marte","Júpiter"],correct:0,explanation:"Vénus é o mais quente devido ao efeito de estufa intenso na sua atmosfera."},

// --- Lição 3: A Terra e a Lua ---
{id:"7_1_031",unit:"u7_1",lesson:3,type:"multiple",question:"Qual é o satélite natural da Terra?",options:["Lua","Sol","Marte","Vénus"],correct:0,explanation:"A Lua é o único satélite natural da Terra."},
{id:"7_1_032",unit:"u7_1",lesson:3,type:"true_false",question:"A Terra tem forma esférica achatada nos polos.",correct:true,explanation:"A Terra não é uma esfera perfeita, é ligeiramente achatada nos polos."},
{id:"7_1_033",unit:"u7_1",lesson:3,type:"multiple",question:"A forma real da Terra chama-se:",options:["Geoide","Esfera","Cubo","Cilindro"],correct:0,explanation:"A forma da Terra é um geoide, uma esfera ligeiramente achatada."},
{id:"7_1_034",unit:"u7_1",lesson:3,type:"multiple",question:"O que é um satélite natural?",options:["Corpo que orbita um planeta","Estrela pequena","Planeta rochoso","Cometa"],correct:0,explanation:"Satélites naturais são corpos que giram à volta de planetas, como a Lua."},
{id:"7_1_035",unit:"u7_1",lesson:3,type:"fill",question:"O satélite natural da Terra é a ___.",correct:["Lua","lua"],explanation:"A Lua orbita a Terra a cerca de 384.000 km de distância."},
{id:"7_1_036",unit:"u7_1",lesson:3,type:"true_false",question:"A Lua tem atmosfera como a Terra.",correct:false,explanation:"A Lua praticamente não tem atmosfera."},
{id:"7_1_037",unit:"u7_1",lesson:3,type:"multiple",question:"A Terra leva quanto tempo para dar uma volta ao Sol?",options:["365 dias","30 dias","24 horas","12 horas"],correct:0,explanation:"A Terra leva aproximadamente 365 dias (1 ano) para completar uma órbita ao redor do Sol."},
{id:"7_1_038",unit:"u7_1",lesson:3,type:"multiple",question:"A distância média da Terra ao Sol é cerca de:",options:["150 milhões de km","15 milhões de km","1,5 milhões de km","1500 milhões de km"],correct:0,explanation:"A Terra está a cerca de 150 milhões de quilómetros do Sol."},
{id:"7_1_039",unit:"u7_1",lesson:3,type:"true_false",question:"A Lua demora cerca de 28 dias a orbitar a Terra.",correct:true,explanation:"O período orbital da Lua é de aproximadamente 27,3 dias."},
{id:"7_1_040",unit:"u7_1",lesson:3,type:"multiple",question:"A superfície da Lua é coberta por:",options:["Crateras","Oceanos","Florestas","Nuvens"],correct:0,explanation:"A Lua tem muitas crateras formadas por impactos de meteoritos."},
{id:"7_1_041",unit:"u7_1",lesson:3,type:"multiple",question:"Quem foi o primeiro homem a pisar na Lua?",options:["Neil Armstrong","Yuri Gagarin","Buzz Aldrin","John Glenn"],correct:0,explanation:"Neil Armstrong pisou na Lua em 20 de Julho de 1969."},
{id:"7_1_042",unit:"u7_1",lesson:3,type:"true_false",question:"Na Lua não existe gravidade.",correct:false,explanation:"Existe gravidade na Lua, mas é cerca de 6 vezes menor que na Terra."},
{id:"7_1_043",unit:"u7_1",lesson:3,type:"fill",question:"A forma da Terra chama-se ___.",correct:["geoide","Geoide"],explanation:"O geoide é a forma real da Terra, ligeiramente achatada nos polos."},

// --- Lição 4: Movimentos da Terra ---
{id:"7_1_044",unit:"u7_1",lesson:4,type:"multiple",question:"Quais são os dois movimentos principais da Terra?",options:["Rotação e translação","Rotação e oscilação","Translação e vibração","Oscilação e revolução"],correct:0,explanation:"A Terra faz rotação (em torno de si) e translação (em torno do Sol)."},
{id:"7_1_045",unit:"u7_1",lesson:4,type:"multiple",question:"O movimento de rotação da Terra causa:",options:["O dia e a noite","As estações do ano","Os eclipses","As marés"],correct:0,explanation:"A rotação da Terra faz com que tenhamos alternância entre dia e noite."},
{id:"7_1_046",unit:"u7_1",lesson:4,type:"multiple",question:"O movimento de translação da Terra causa:",options:["As estações do ano","O dia e a noite","As fases da Lua","Os furacões"],correct:0,explanation:"A translação, junto com a inclinação do eixo terrestre, causa as estações."},
{id:"7_1_047",unit:"u7_1",lesson:4,type:"true_false",question:"A Terra demora 24 horas a completar uma rotação.",correct:true,explanation:"Uma rotação completa da Terra demora aproximadamente 24 horas (1 dia)."},
{id:"7_1_048",unit:"u7_1",lesson:4,type:"fill",question:"O movimento da Terra à volta do Sol chama-se ___.",correct:["translação","Translação","translacao","Translacao"],explanation:"A translação é o movimento da Terra em torno do Sol."},
{id:"7_1_049",unit:"u7_1",lesson:4,type:"multiple",question:"Quantas estações do ano existem?",options:["4","2","3","6"],correct:0,explanation:"As 4 estações são: Primavera, Verão, Outono e Inverno."},
{id:"7_1_050",unit:"u7_1",lesson:4,type:"true_false",question:"O eixo da Terra é inclinado em relação à sua órbita.",correct:true,explanation:"O eixo da Terra está inclinado cerca de 23,5°, o que causa as estações do ano."},
{id:"7_1_051",unit:"u7_1",lesson:4,type:"multiple",question:"A rotação da Terra ocorre de:",options:["Oeste para Este","Este para Oeste","Norte para Sul","Sul para Norte"],correct:0,explanation:"A Terra gira de Oeste para Este, por isso o Sol parece nascer a Este."},
{id:"7_1_052",unit:"u7_1",lesson:4,type:"fill",question:"O movimento da Terra em torno do seu próprio eixo chama-se ___.",correct:["rotação","Rotação","rotacao","Rotacao"],explanation:"A rotação é o giro da Terra sobre o seu eixo."},
{id:"7_1_053",unit:"u7_1",lesson:4,type:"multiple",question:"Em qual estação os dias são mais longos?",options:["Verão","Inverno","Outono","Primavera"],correct:0,explanation:"No Verão os dias são mais longos porque o hemisfério está mais inclinado para o Sol."},
{id:"7_1_054",unit:"u7_1",lesson:4,type:"true_false",question:"Quando é Verão no hemisfério Norte, é Inverno no hemisfério Sul.",correct:true,explanation:"As estações são opostas nos dois hemisférios."},

// --- Lição 5: Fases da Lua e Eclipses ---
{id:"7_1_055",unit:"u7_1",lesson:5,type:"multiple",question:"Quantas fases principais tem a Lua?",options:["4","2","6","8"],correct:0,explanation:"As 4 fases são: Lua Nova, Quarto Crescente, Lua Cheia e Quarto Minguante."},
{id:"7_1_056",unit:"u7_1",lesson:5,type:"multiple",question:"Na Lua Cheia, a Lua está:",options:["Totalmente iluminada","Totalmente escura","Metade iluminada","Quase invisível"],correct:0,explanation:"Na Lua Cheia, toda a face visível da Lua está iluminada pelo Sol."},
{id:"7_1_057",unit:"u7_1",lesson:5,type:"true_false",question:"Na Lua Nova, não conseguimos ver a Lua no céu.",correct:true,explanation:"Na Lua Nova, a face iluminada está virada para o Sol, não para a Terra."},
{id:"7_1_058",unit:"u7_1",lesson:5,type:"multiple",question:"O que é um eclipse solar?",options:["A Lua tapa o Sol","A Terra tapa o Sol","O Sol tapa a Lua","A Lua tapa a Terra"],correct:0,explanation:"No eclipse solar, a Lua fica entre o Sol e a Terra, tapando o Sol."},
{id:"7_1_059",unit:"u7_1",lesson:5,type:"multiple",question:"O que é um eclipse lunar?",options:["A Terra fica entre o Sol e a Lua","A Lua fica entre o Sol e a Terra","O Sol fica entre a Terra e a Lua","Marte tapa a Lua"],correct:0,explanation:"No eclipse lunar, a sombra da Terra cobre a Lua."},
{id:"7_1_060",unit:"u7_1",lesson:5,type:"true_false",question:"Os eclipses solares acontecem todos os meses.",correct:false,explanation:"Eclipses solares são raros porque a órbita da Lua é inclinada em relação à da Terra."},
{id:"7_1_061",unit:"u7_1",lesson:5,type:"fill",question:"Quando a Lua está entre o Sol e a Terra ocorre um eclipse ___.",correct:["solar","Solar"],explanation:"O eclipse solar ocorre quando a Lua bloqueia a luz do Sol."},
{id:"7_1_062",unit:"u7_1",lesson:5,type:"multiple",question:"As fases da Lua são causadas por:",options:["Mudança de posição da Lua em relação ao Sol","Nuvens que cobrem a Lua","A Lua mudar de tamanho","A Terra bloquear a luz"],correct:0,explanation:"As fases dependem da posição relativa entre Sol, Terra e Lua."},
{id:"7_1_063",unit:"u7_1",lesson:5,type:"fill",question:"As quatro fases da Lua são: Nova, Quarto Crescente, Cheia e Quarto ___.",correct:["Minguante","minguante"],explanation:"O Quarto Minguante é quando a parte iluminada diminui."},
{id:"7_1_064",unit:"u7_1",lesson:5,type:"true_false",question:"Durante um eclipse lunar, a Lua pode ficar com tom avermelhado.",correct:true,explanation:"A atmosfera da Terra filtra a luz e dá à Lua um tom avermelhado chamado 'Lua de sangue'."},

// --- Lição 6: Estrelas e Constelações ---
{id:"7_1_065",unit:"u7_1",lesson:6,type:"multiple",question:"O que é uma estrela?",options:["Um corpo celeste que emite luz própria","Um planeta brilhante","Um satélite do Sol","Um cometa luminoso"],correct:0,explanation:"Estrelas são enormes esferas de gás que produzem energia e luz."},
{id:"7_1_066",unit:"u7_1",lesson:6,type:"true_false",question:"O Sol é uma estrela.",correct:true,explanation:"O Sol é a estrela mais próxima da Terra."},
{id:"7_1_067",unit:"u7_1",lesson:6,type:"multiple",question:"O que são constelações?",options:["Grupos de estrelas que formam figuras","Grupos de planetas","Tipos de galáxias","Satélites artificiais"],correct:0,explanation:"Constelações são padrões formados por estrelas no céu vistas da Terra."},
{id:"7_1_068",unit:"u7_1",lesson:6,type:"fill",question:"O Sol é uma ___.",correct:["estrela","Estrela"],explanation:"O Sol é a estrela central do nosso Sistema Solar."},
{id:"7_1_069",unit:"u7_1",lesson:6,type:"multiple",question:"A estrela mais próxima da Terra (além do Sol) é:",options:["Proxima Centauri","Sírio","Vega","Polar"],correct:0,explanation:"Proxima Centauri está a cerca de 4,2 anos-luz da Terra."},
{id:"7_1_070",unit:"u7_1",lesson:6,type:"true_false",question:"Todas as estrelas têm o mesmo tamanho.",correct:false,explanation:"Existem estrelas de vários tamanhos, desde anãs a supergigantes."},
{id:"7_1_071",unit:"u7_1",lesson:6,type:"multiple",question:"A cor de uma estrela depende da sua:",options:["Temperatura","Distância","Idade apenas","Forma"],correct:0,explanation:"Estrelas mais quentes são azuis e as mais frias são vermelhas."},
{id:"7_1_072",unit:"u7_1",lesson:6,type:"multiple",question:"O que é um ano-luz?",options:["Distância que a luz percorre em 1 ano","Tempo de vida de uma estrela","1 ano no espaço","Velocidade da luz"],correct:0,explanation:"Um ano-luz é uma unidade de distância, cerca de 9,46 biliões de km."},

// --- Lição 7: Cometas, Asteróides e Meteoritos ---
{id:"7_1_073",unit:"u7_1",lesson:7,type:"multiple",question:"O que é um cometa?",options:["Corpo de gelo e rocha com cauda luminosa","Uma estrela cadente","Um planeta pequeno","Um satélite artificial"],correct:0,explanation:"Cometas são corpos feitos de gelo e rocha que ao se aproximarem do Sol formam uma cauda."},
{id:"7_1_074",unit:"u7_1",lesson:7,type:"true_false",question:"A cauda do cometa sempre aponta na direcção oposta ao Sol.",correct:true,explanation:"O vento solar empurra o gás e poeira do cometa para longe do Sol."},
{id:"7_1_075",unit:"u7_1",lesson:7,type:"multiple",question:"Os asteróides encontram-se principalmente entre:",options:["Marte e Júpiter","Terra e Marte","Júpiter e Saturno","Vénus e Terra"],correct:0,explanation:"O cinturão de asteróides fica entre as órbitas de Marte e Júpiter."},
{id:"7_1_076",unit:"u7_1",lesson:7,type:"fill",question:"Quando um meteoróide entra na atmosfera terrestre e queima, chamamos de ___.",correct:["meteoro","Meteoro"],explanation:"Meteoros são as 'estrelas cadentes' que vemos no céu."},
{id:"7_1_077",unit:"u7_1",lesson:7,type:"multiple",question:"O que é um meteorito?",options:["Um fragmento que chega ao solo da Terra","Uma estrela que caiu","Um cometa pequeno","Um satélite destruído"],correct:0,explanation:"Meteorito é o fragmento que sobrevive à passagem pela atmosfera e chega ao solo."},
{id:"7_1_078",unit:"u7_1",lesson:7,type:"true_false",question:"As 'estrelas cadentes' são na verdade estrelas a cair.",correct:false,explanation:"São meteoros: fragmentos de rocha que queimam ao entrar na atmosfera."},
{id:"7_1_079",unit:"u7_1",lesson:7,type:"multiple",question:"O cometa mais famoso que visita a Terra periodicamente é:",options:["Cometa Halley","Cometa Solar","Cometa Lunar","Cometa Terrestre"],correct:0,explanation:"O cometa Halley passa perto da Terra a cada 76 anos aproximadamente."},
{id:"7_1_080",unit:"u7_1",lesson:7,type:"multiple",question:"Asteróides são:",options:["Corpos rochosos que orbitam o Sol","Estrelas pequenas","Satélites de planetas","Fragmentos de cometas apenas"],correct:0,explanation:"Asteróides são corpos rochosos e metálicos que orbitam o Sol."},

// --- Lição 8: Exploração Espacial ---
{id:"7_1_081",unit:"u7_1",lesson:8,type:"multiple",question:"Qual foi o primeiro ser humano a ir ao espaço?",options:["Yuri Gagarin","Neil Armstrong","Buzz Aldrin","John Glenn"],correct:0,explanation:"Yuri Gagarin, cosmonauta soviético, foi o primeiro humano no espaço em 1961."},
{id:"7_1_082",unit:"u7_1",lesson:8,type:"true_false",question:"A Estação Espacial Internacional orbita a Terra.",correct:true,explanation:"A ISS orbita a Terra a cerca de 400 km de altitude."},
{id:"7_1_083",unit:"u7_1",lesson:8,type:"multiple",question:"Os satélites artificiais servem para:",options:["Todas as opções","Comunicações","Previsão do tempo","Navegação GPS"],correct:0,explanation:"Satélites artificiais têm muitas funções: comunicação, meteorologia, GPS, etc."},
{id:"7_1_084",unit:"u7_1",lesson:8,type:"fill",question:"O primeiro homem no espaço foi ___.",correct:["Yuri Gagarin","yuri gagarin","Gagarin","gagarin"],explanation:"Em 12 de Abril de 1961, Gagarin orbitou a Terra na nave Vostok 1."},
{id:"7_1_085",unit:"u7_1",lesson:8,type:"true_false",question:"No espaço, os astronautas flutuam por falta de gravidade total.",correct:false,explanation:"Na verdade estão em queda livre contínua, o que simula a ausência de peso."},
{id:"7_1_086",unit:"u7_1",lesson:8,type:"multiple",question:"O que é uma sonda espacial?",options:["Nave não tripulada que explora o espaço","Nave com astronautas","Telescópio terrestre","Satélite de TV"],correct:0,explanation:"Sondas espaciais são naves sem tripulação enviadas para estudar planetas e outros corpos."},
{id:"7_1_087",unit:"u7_1",lesson:8,type:"multiple",question:"Qual o nome do primeiro satélite artificial lançado ao espaço?",options:["Sputnik 1","Explorer 1","Vostok 1","Apollo 1"],correct:0,explanation:"O Sputnik 1 foi lançado pela URSS em 4 de Outubro de 1957."},
{id:"7_1_088",unit:"u7_1",lesson:8,type:"true_false",question:"Os foguetes precisam de combustível para vencer a gravidade terrestre.",correct:true,explanation:"Os foguetes queimam grandes quantidades de combustível para atingir a velocidade de escape."},


// ============================================================
//  7ª CLASSE - TEMA 2: FÍSICA E GRANDEZAS FÍSICAS (u7_2)
//  Lições 1-8
// ============================================================

// --- Lição 1: A Física como ciência ---
{id:"7_2_001",unit:"u7_2",lesson:1,type:"multiple",question:"A Física é a ciência que estuda:",options:["A Natureza e os fenómenos naturais","Apenas os números","Os seres vivos","As reacções químicas"],correct:0,explanation:"A Física estuda a Natureza, as leis que governam os fenómenos naturais."},
{id:"7_2_002",unit:"u7_2",lesson:1,type:"true_false",question:"A Física estuda os fenómenos da Natureza.",correct:true,explanation:"A Física investiga como funcionam os fenómenos naturais."},
{id:"7_2_003",unit:"u7_2",lesson:1,type:"multiple",question:"Qual destes é um fenómeno físico?",options:["Queda de um objecto","Crescimento de uma planta","Ferrugem do ferro","Digestão de alimentos"],correct:0,explanation:"A queda é um fenómeno físico pois não altera a composição da substância."},
{id:"7_2_004",unit:"u7_2",lesson:1,type:"fill",question:"A ciência que estuda as leis da Natureza chama-se ___.",correct:["Física","física","fisica","Fisica"],explanation:"A Física estuda matéria, energia, movimento e as forças da Natureza."},
{id:"7_2_005",unit:"u7_2",lesson:1,type:"multiple",question:"Qual cientista formulou as leis do movimento?",options:["Isaac Newton","Albert Einstein","Galileu Galilei","Arquimedes"],correct:0,explanation:"Newton formulou as três leis fundamentais do movimento."},
{id:"7_2_006",unit:"u7_2",lesson:1,type:"true_false",question:"A ebulição da água é um fenómeno químico.",correct:false,explanation:"A ebulição é um fenómeno físico pois a água continua a ser água (H₂O)."},
{id:"7_2_007",unit:"u7_2",lesson:1,type:"multiple",question:"Qual a diferença entre fenómeno físico e químico?",options:["No físico não muda a substância, no químico muda","São a mesma coisa","No físico só muda a cor","No químico não há mudança"],correct:0,explanation:"Fenómenos físicos não alteram a composição; químicos formam novas substâncias."},
{id:"7_2_008",unit:"u7_2",lesson:1,type:"multiple",question:"Qual destes NÃO é um fenómeno físico?",options:["Combustão da madeira","Fusão do gelo","Evaporação da água","Queda de uma pedra"],correct:0,explanation:"A combustão é um fenómeno químico porque transforma a madeira noutras substâncias."},
{id:"7_2_009",unit:"u7_2",lesson:1,type:"true_false",question:"A fusão do gelo é um fenómeno físico.",correct:true,explanation:"A fusão é mudança de estado físico, a substância continua a ser água."},
{id:"7_2_010",unit:"u7_2",lesson:1,type:"multiple",question:"Que áreas a Física estuda?",options:["Mecânica, óptica, acústica, termodinâmica","Botânica e zoologia","Geologia e mineralogia","Genética e ecologia"],correct:0,explanation:"A Física divide-se em várias áreas como mecânica, óptica, acústica, etc."},
{id:"7_2_011",unit:"u7_2",lesson:1,type:"fill",question:"Um fenómeno onde a substância não muda é chamado fenómeno ___.",correct:["físico","Físico","fisico","Fisico"],explanation:"Nos fenómenos físicos a composição da substância não se altera."},
{id:"7_2_012",unit:"u7_2",lesson:1,type:"true_false",question:"A Física usa o método científico nas suas investigações.",correct:true,explanation:"O método científico (observação, hipótese, experiência, conclusão) é fundamental na Física."},

// --- Lição 2: Protecção da Natureza ---
{id:"7_2_013",unit:"u7_2",lesson:2,type:"multiple",question:"Por que devemos proteger a Natureza?",options:["Para manter o equilíbrio do ambiente","Para ganhar dinheiro","Não é necessário proteger","Porque a lei obriga apenas"],correct:0,explanation:"A protecção da Natureza é essencial para a vida e o equilíbrio ambiental."},
{id:"7_2_014",unit:"u7_2",lesson:2,type:"true_false",question:"A poluição do ar é um problema ambiental.",correct:true,explanation:"A poluição do ar prejudica a saúde e o meio ambiente."},
{id:"7_2_015",unit:"u7_2",lesson:2,type:"multiple",question:"Qual destas actividades prejudica o meio ambiente?",options:["Queimadas descontroladas","Plantar árvores","Reciclar lixo","Usar energia solar"],correct:0,explanation:"As queimadas descontroladas destroem habitats e poluem o ar."},
{id:"7_2_016",unit:"u7_2",lesson:2,type:"multiple",question:"O que é reciclagem?",options:["Transformar resíduos em novos materiais","Queimar o lixo","Enterrar o lixo","Jogar no rio"],correct:0,explanation:"Reciclar é reaproveitar materiais para reduzir o impacto ambiental."},
{id:"7_2_017",unit:"u7_2",lesson:2,type:"fill",question:"A acção de transformar resíduos em novos materiais chama-se ___.",correct:["reciclagem","Reciclagem"],explanation:"A reciclagem reduz a quantidade de lixo e poupa recursos naturais."},
{id:"7_2_018",unit:"u7_2",lesson:2,type:"true_false",question:"As energias renováveis ajudam a proteger o meio ambiente.",correct:true,explanation:"Energias como solar e eólica não poluem o ar."},
{id:"7_2_019",unit:"u7_2",lesson:2,type:"multiple",question:"Qual é uma fonte de energia renovável?",options:["Energia solar","Petróleo","Carvão","Gás natural"],correct:0,explanation:"A energia solar é renovável pois o Sol continuará a brilhar por milhões de anos."},
{id:"7_2_020",unit:"u7_2",lesson:2,type:"true_false",question:"A desflorestação contribui para as alterações climáticas.",correct:true,explanation:"As árvores absorvem CO₂; sem elas, aumenta o efeito de estufa."},

// --- Lição 3: Grandezas Físicas ---
{id:"7_2_021",unit:"u7_2",lesson:3,type:"multiple",question:"O que é uma grandeza física?",options:["Propriedade que pode ser medida","Algo muito grande","Um fenómeno raro","Uma fórmula matemática"],correct:0,explanation:"Grandeza física é tudo o que pode ser medido e expresso com um número e unidade."},
{id:"7_2_022",unit:"u7_2",lesson:3,type:"multiple",question:"Qual destas é uma grandeza física?",options:["Comprimento","Beleza","Felicidade","Sabor"],correct:0,explanation:"O comprimento pode ser medido; beleza, felicidade e sabor são subjectivos."},
{id:"7_2_023",unit:"u7_2",lesson:3,type:"true_false",question:"A massa é uma grandeza física.",correct:true,explanation:"A massa pode ser medida, logo é uma grandeza física."},
{id:"7_2_024",unit:"u7_2",lesson:3,type:"fill",question:"Uma propriedade que pode ser medida é chamada grandeza ___.",correct:["física","Física","fisica","Fisica"],explanation:"Grandezas físicas são propriedades mensuráveis da matéria."},
{id:"7_2_025",unit:"u7_2",lesson:3,type:"multiple",question:"Exemplos de grandezas físicas são:",options:["Massa, comprimento e tempo","Cor, sabor e cheiro","Alegria, tristeza e medo","Nome, idade e profissão"],correct:0,explanation:"Massa, comprimento e tempo podem ser medidos objectivamente."},
{id:"7_2_026",unit:"u7_2",lesson:3,type:"multiple",question:"O que é uma unidade de medida?",options:["Padrão usado para expressar uma grandeza","Um tipo de régua","Uma fórmula","Um número muito grande"],correct:0,explanation:"Unidade de medida é o padrão de referência para medir grandezas."},
{id:"7_2_027",unit:"u7_2",lesson:3,type:"true_false",question:"A temperatura é uma grandeza física.",correct:true,explanation:"A temperatura pode ser medida com termómetro, logo é uma grandeza física."},
{id:"7_2_028",unit:"u7_2",lesson:3,type:"multiple",question:"As grandezas físicas fundamentais do SI são:",options:["7 grandezas","3 grandezas","5 grandezas","10 grandezas"],correct:0,explanation:"O Sistema Internacional tem 7 grandezas fundamentais."},
{id:"7_2_029",unit:"u7_2",lesson:3,type:"fill",question:"O padrão usado para medir uma grandeza chama-se ___ de medida.",correct:["unidade","Unidade"],explanation:"As unidades de medida permitem quantificar as grandezas."},
{id:"7_2_030",unit:"u7_2",lesson:3,type:"true_false",question:"O volume é uma grandeza física.",correct:true,explanation:"O volume pode ser medido e expresso em litros ou metros cúbicos."},

// --- Lição 4: Sistema Internacional de Unidades (SI) ---
{id:"7_2_031",unit:"u7_2",lesson:4,type:"multiple",question:"Qual é a unidade SI de comprimento?",options:["Metro","Centímetro","Quilómetro","Milímetro"],correct:0,explanation:"O metro (m) é a unidade fundamental de comprimento no SI."},
{id:"7_2_032",unit:"u7_2",lesson:4,type:"multiple",question:"Qual é a unidade SI de massa?",options:["Quilograma","Grama","Tonelada","Libra"],correct:0,explanation:"O quilograma (kg) é a unidade fundamental de massa no SI."},
{id:"7_2_033",unit:"u7_2",lesson:4,type:"multiple",question:"Qual é a unidade SI de tempo?",options:["Segundo","Minuto","Hora","Dia"],correct:0,explanation:"O segundo (s) é a unidade fundamental de tempo no SI."},
{id:"7_2_034",unit:"u7_2",lesson:4,type:"fill",question:"A unidade SI de comprimento é o ___.",correct:["metro","Metro"],explanation:"O metro é representado pelo símbolo 'm'."},
{id:"7_2_035",unit:"u7_2",lesson:4,type:"true_false",question:"O grama é a unidade SI de massa.",correct:false,explanation:"A unidade SI de massa é o quilograma (kg), não o grama."},
{id:"7_2_036",unit:"u7_2",lesson:4,type:"multiple",question:"O que significa SI?",options:["Sistema Internacional de Unidades","Sistema Importante","Sistema Inicial","Sistema Interno"],correct:0,explanation:"SI significa Sistema Internacional de Unidades, usado mundialmente."},
{id:"7_2_037",unit:"u7_2",lesson:4,type:"multiple",question:"Qual é a unidade SI de temperatura?",options:["Kelvin","Celsius","Fahrenheit","Grau"],correct:0,explanation:"O Kelvin (K) é a unidade SI de temperatura, embora Celsius seja mais usado no dia-a-dia."},
{id:"7_2_038",unit:"u7_2",lesson:4,type:"fill",question:"A unidade SI de massa é o ___.",correct:["quilograma","Quilograma","quilogramo","Quilogramo"],explanation:"O quilograma (kg) é a unidade fundamental de massa."},
{id:"7_2_039",unit:"u7_2",lesson:4,type:"true_false",question:"O Sistema Internacional de Unidades é usado em todo o mundo.",correct:true,explanation:"O SI é o sistema de medida adoptado internacionalmente pela ciência."},
{id:"7_2_040",unit:"u7_2",lesson:4,type:"multiple",question:"Qual é a unidade SI de intensidade de corrente eléctrica?",options:["Ampere","Volt","Watt","Ohm"],correct:0,explanation:"O ampere (A) mede a intensidade da corrente eléctrica no SI."},
{id:"7_2_041",unit:"u7_2",lesson:4,type:"fill",question:"A unidade SI de tempo é o ___.",correct:["segundo","Segundo"],explanation:"O segundo (s) é a unidade fundamental de tempo."},
{id:"7_2_042",unit:"u7_2",lesson:4,type:"multiple",question:"1 quilómetro equivale a:",options:["1000 metros","100 metros","10 metros","10000 metros"],correct:0,explanation:"O prefixo 'quilo' significa 1000, logo 1 km = 1000 m."},

// --- Lição 5: Medição de Comprimento ---
{id:"7_2_043",unit:"u7_2",lesson:5,type:"multiple",question:"Qual instrumento mede comprimento?",options:["Régua","Balança","Termómetro","Cronómetro"],correct:0,explanation:"A régua é um instrumento para medir comprimentos."},
{id:"7_2_044",unit:"u7_2",lesson:5,type:"multiple",question:"1 metro tem quantos centímetros?",options:["100","10","1000","50"],correct:0,explanation:"1 metro = 100 centímetros."},
{id:"7_2_045",unit:"u7_2",lesson:5,type:"fill",question:"1 metro equivale a ___ centímetros.",correct:["100","cem"],explanation:"O prefixo 'centi' significa centésima parte."},
{id:"7_2_046",unit:"u7_2",lesson:5,type:"true_false",question:"1 metro tem 1000 milímetros.",correct:true,explanation:"1 m = 1000 mm (mili significa milésima parte)."},
{id:"7_2_047",unit:"u7_2",lesson:5,type:"multiple",question:"Para medir a altura de uma pessoa usamos:",options:["Metro ou fita métrica","Balança","Termómetro","Proveta"],correct:0,explanation:"A fita métrica ou metro de alfaiate mede comprimentos como a altura."},
{id:"7_2_048",unit:"u7_2",lesson:5,type:"multiple",question:"Para medir distâncias muito grandes (entre cidades), usamos:",options:["Quilómetros","Milímetros","Centímetros","Decímetros"],correct:0,explanation:"Quilómetros são adequados para grandes distâncias."},
{id:"7_2_049",unit:"u7_2",lesson:5,type:"true_false",question:"1 decímetro equivale a 10 centímetros.",correct:true,explanation:"1 dm = 10 cm. 'Deci' significa décima parte."},
{id:"7_2_050",unit:"u7_2",lesson:5,type:"multiple",question:"Quantos milímetros tem 1 centímetro?",options:["10","100","1000","1"],correct:0,explanation:"1 cm = 10 mm."},
{id:"7_2_051",unit:"u7_2",lesson:5,type:"fill",question:"O instrumento para medir comprimento em laboratório é a ___.",correct:["régua","Régua","regua","Regua"],explanation:"A régua graduada é o instrumento básico para medir comprimentos."},
{id:"7_2_052",unit:"u7_2",lesson:5,type:"multiple",question:"O que é a menor divisão de uma régua?",options:["A menor distância entre duas marcas consecutivas","O tamanho total","A marca do meio","A primeira marca"],correct:0,explanation:"A menor divisão determina a precisão do instrumento."},

// --- Lição 6: Medição de Massa e Volume ---
{id:"7_2_053",unit:"u7_2",lesson:6,type:"multiple",question:"Qual instrumento mede a massa?",options:["Balança","Régua","Termómetro","Dinamómetro"],correct:0,explanation:"A balança é o instrumento para medir a massa dos corpos."},
{id:"7_2_054",unit:"u7_2",lesson:6,type:"multiple",question:"1 quilograma equivale a:",options:["1000 gramas","100 gramas","10 gramas","10000 gramas"],correct:0,explanation:"1 kg = 1000 g."},
{id:"7_2_055",unit:"u7_2",lesson:6,type:"fill",question:"O instrumento para medir massa é a ___.",correct:["balança","Balança","balanca","Balanca"],explanation:"A balança compara ou mede a massa de um corpo."},
{id:"7_2_056",unit:"u7_2",lesson:6,type:"true_false",question:"O volume de um líquido pode ser medido com uma proveta.",correct:true,explanation:"A proveta é um instrumento graduado para medir volumes de líquidos."},
{id:"7_2_057",unit:"u7_2",lesson:6,type:"multiple",question:"Qual é a unidade SI de volume?",options:["Metro cúbico","Litro","Mililitro","Centímetro cúbico"],correct:0,explanation:"O metro cúbico (m³) é a unidade SI, mas o litro é muito usado no dia-a-dia."},
{id:"7_2_058",unit:"u7_2",lesson:6,type:"multiple",question:"1 litro equivale a:",options:["1000 mililitros","100 mililitros","10 mililitros","10000 mililitros"],correct:0,explanation:"1 litro = 1000 mililitros (ml)."},
{id:"7_2_059",unit:"u7_2",lesson:6,type:"multiple",question:"Para medir o volume de um sólido irregular podemos usar:",options:["Água e uma proveta (método de imersão)","Uma régua","Uma balança","Um termómetro"],correct:0,explanation:"Mergulhando o sólido em água, o volume deslocado é igual ao volume do sólido."},
{id:"7_2_060",unit:"u7_2",lesson:6,type:"fill",question:"1 litro é igual a ___ mililitros.",correct:["1000","mil"],explanation:"O prefixo 'mili' significa milésima parte."},
{id:"7_2_061",unit:"u7_2",lesson:6,type:"true_false",question:"1 litro é igual a 1 decímetro cúbico.",correct:true,explanation:"1 L = 1 dm³ é uma equivalência importante."},
{id:"7_2_062",unit:"u7_2",lesson:6,type:"multiple",question:"A proveta serve para medir:",options:["Volume de líquidos","Massa de sólidos","Temperatura","Pressão"],correct:0,explanation:"A proveta é graduada em mililitros para medir volumes."},

// --- Lição 7: Medição de Tempo e Temperatura ---
{id:"7_2_063",unit:"u7_2",lesson:7,type:"multiple",question:"Qual instrumento mede o tempo?",options:["Relógio ou cronómetro","Balança","Régua","Proveta"],correct:0,explanation:"Relógios e cronómetros são instrumentos de medição de tempo."},
{id:"7_2_064",unit:"u7_2",lesson:7,type:"multiple",question:"Qual instrumento mede a temperatura?",options:["Termómetro","Barómetro","Dinamómetro","Cronómetro"],correct:0,explanation:"O termómetro é o instrumento para medir temperatura."},
{id:"7_2_065",unit:"u7_2",lesson:7,type:"fill",question:"O instrumento para medir temperatura é o ___.",correct:["termómetro","Termómetro","termometro","Termometro"],explanation:"Existem vários tipos de termómetros: de mercúrio, digital, etc."},
{id:"7_2_066",unit:"u7_2",lesson:7,type:"true_false",question:"1 hora tem 3600 segundos.",correct:true,explanation:"1 hora = 60 minutos × 60 segundos = 3600 segundos."},
{id:"7_2_067",unit:"u7_2",lesson:7,type:"multiple",question:"A escala de temperatura mais usada no dia-a-dia é:",options:["Celsius","Kelvin","Fahrenheit","Rankine"],correct:0,explanation:"A escala Celsius (°C) é a mais usada no quotidiano."},
{id:"7_2_068",unit:"u7_2",lesson:7,type:"multiple",question:"A água ferve a que temperatura (ao nível do mar)?",options:["100 °C","90 °C","120 °C","80 °C"],correct:0,explanation:"A água pura ferve a 100 °C ao nível do mar."},
{id:"7_2_069",unit:"u7_2",lesson:7,type:"fill",question:"A água congela a ___ °C.",correct:["0","zero"],explanation:"A água pura solidifica a 0 °C ao nível do mar."},
{id:"7_2_070",unit:"u7_2",lesson:7,type:"true_false",question:"1 minuto tem 60 segundos.",correct:true,explanation:"1 min = 60 s é a conversão básica de tempo."},
{id:"7_2_071",unit:"u7_2",lesson:7,type:"multiple",question:"Quantos minutos tem 1 hora?",options:["60","100","30","45"],correct:0,explanation:"1 hora = 60 minutos."},

// --- Lição 8: Erros de Medição e Algarismos Significativos ---
{id:"7_2_072",unit:"u7_2",lesson:8,type:"multiple",question:"Por que as medições nunca são exactas?",options:["Todos os instrumentos têm limitações","Os cientistas erram sempre","Não se pode medir nada","A Natureza não permite"],correct:0,explanation:"Todos os instrumentos têm uma precisão limitada, gerando incerteza."},
{id:"7_2_073",unit:"u7_2",lesson:8,type:"true_false",question:"O erro de medição é a diferença entre o valor medido e o valor real.",correct:true,explanation:"O erro quantifica o desvio da medição em relação ao valor verdadeiro."},
{id:"7_2_074",unit:"u7_2",lesson:8,type:"multiple",question:"Como reduzir os erros de medição?",options:["Repetir a medição várias vezes","Medir apenas uma vez","Usar qualquer instrumento","Estimar o valor"],correct:0,explanation:"Fazer várias medições e calcular a média reduz os erros."},
{id:"7_2_075",unit:"u7_2",lesson:8,type:"multiple",question:"A precisão de um instrumento depende da sua:",options:["Menor divisão","Cor","Tamanho","Marca"],correct:0,explanation:"Quanto menor a divisão do instrumento, mais preciso ele é."},
{id:"7_2_076",unit:"u7_2",lesson:8,type:"fill",question:"A diferença entre o valor medido e o valor real chama-se ___ de medição.",correct:["erro","Erro"],explanation:"O erro de medição é inevitável em qualquer medição."},
{id:"7_2_077",unit:"u7_2",lesson:8,type:"true_false",question:"Uma régua com divisões em milímetros é mais precisa que uma com divisões em centímetros.",correct:true,explanation:"Divisões menores permitem leituras mais precisas."},
{id:"7_2_078",unit:"u7_2",lesson:8,type:"multiple",question:"O que é a incerteza da medição?",options:["A margem de erro da leitura","O valor exacto","A unidade de medida","A marca do instrumento"],correct:0,explanation:"A incerteza indica o intervalo onde o valor verdadeiro provavelmente está."},
{id:"7_2_079",unit:"u7_2",lesson:8,type:"true_false",question:"Para uma boa medição, os olhos devem estar ao nível da escala do instrumento.",correct:true,explanation:"Isso evita o erro de paralaxe na leitura."},
{id:"7_2_080",unit:"u7_2",lesson:8,type:"multiple",question:"O erro causado pela posição incorrecta dos olhos ao ler uma escala chama-se:",options:["Erro de paralaxe","Erro sistemático","Erro de cálculo","Erro de fábrica"],correct:0,explanation:"O erro de paralaxe ocorre quando não se olha perpendicularmente à escala."},


// ============================================================
//  7ª CLASSE - TEMA 3: ESTADOS DE AGREGAÇÃO (u7_3)
//  Lições 1-6
// ============================================================

// --- Lição 1: Matéria e Estados Físicos ---
{id:"7_3_001",unit:"u7_3",lesson:1,type:"multiple",question:"O que é matéria?",options:["Tudo que tem massa e ocupa espaço","Apenas coisas visíveis","Só os líquidos","Apenas os sólidos"],correct:0,explanation:"Matéria é tudo que possui massa e ocupa lugar no espaço."},
{id:"7_3_002",unit:"u7_3",lesson:1,type:"multiple",question:"Quantos estados físicos principais da matéria existem?",options:["3","2","4","5"],correct:0,explanation:"Os três estados principais são: sólido, líquido e gasoso."},
{id:"7_3_003",unit:"u7_3",lesson:1,type:"true_false",question:"A matéria pode apresentar-se nos estados sólido, líquido e gasoso.",correct:true,explanation:"São os três estados de agregação mais comuns."},
{id:"7_3_004",unit:"u7_3",lesson:1,type:"fill",question:"Os três estados da matéria são: sólido, líquido e ___.",correct:["gasoso","Gasoso"],explanation:"O estado gasoso é o terceiro estado de agregação."},
{id:"7_3_005",unit:"u7_3",lesson:1,type:"multiple",question:"A água no estado sólido é:",options:["Gelo","Vapor","Neblina","Chuva"],correct:0,explanation:"O gelo é a água no estado sólido."},
{id:"7_3_006",unit:"u7_3",lesson:1,type:"multiple",question:"A água no estado gasoso é:",options:["Vapor de água","Gelo","Água líquida","Neve"],correct:0,explanation:"O vapor de água é a forma gasosa da água."},
{id:"7_3_007",unit:"u7_3",lesson:1,type:"true_false",question:"O ar que respiramos está no estado gasoso.",correct:true,explanation:"O ar é uma mistura de gases (nitrogénio, oxigénio, etc.)."},
{id:"7_3_008",unit:"u7_3",lesson:1,type:"multiple",question:"Qual substância pode ser encontrada naturalmente nos 3 estados?",options:["Água","Ferro","Oxigénio","Ouro"],correct:0,explanation:"A água existe como gelo (sólido), água (líquido) e vapor (gasoso) na Natureza."},
{id:"7_3_009",unit:"u7_3",lesson:1,type:"fill",question:"Tudo que tem massa e ocupa espaço é chamado de ___.",correct:["matéria","Matéria","materia","Materia"],explanation:"A matéria é o material de que todas as coisas são feitas."},
{id:"7_3_010",unit:"u7_3",lesson:1,type:"true_false",question:"O ferro à temperatura ambiente está no estado sólido.",correct:true,explanation:"O ferro é sólido em condições normais de temperatura."},

// --- Lição 2: Propriedades dos Sólidos ---
{id:"7_3_011",unit:"u7_3",lesson:2,type:"multiple",question:"Qual é a principal propriedade dos sólidos?",options:["Forma e volume próprios","Não têm forma","Ocupam todo o recipiente","Não têm volume"],correct:0,explanation:"Os sólidos mantêm a sua forma e o seu volume constantes."},
{id:"7_3_012",unit:"u7_3",lesson:2,type:"true_false",question:"Os sólidos têm forma definida.",correct:true,explanation:"Diferente dos líquidos e gases, os sólidos mantêm a sua forma."},
{id:"7_3_013",unit:"u7_3",lesson:2,type:"multiple",question:"No estado sólido, as partículas estão:",options:["Muito próximas e organizadas","Muito afastadas","Em movimento livre","Sem nenhuma ordem"],correct:0,explanation:"As partículas dos sólidos vibram mas mantêm posições fixas."},
{id:"7_3_014",unit:"u7_3",lesson:2,type:"fill",question:"Os sólidos têm forma e volume ___.",correct:["próprios","definidos","constantes","fixos"],explanation:"Forma e volume definidos são características dos sólidos."},
{id:"7_3_015",unit:"u7_3",lesson:2,type:"multiple",question:"Qual destes é um exemplo de sólido?",options:["Pedra","Água","Oxigénio","Álcool"],correct:0,explanation:"A pedra é um material no estado sólido."},
{id:"7_3_016",unit:"u7_3",lesson:2,type:"true_false",question:"As partículas de um sólido não se movem de todo.",correct:false,explanation:"As partículas vibram em torno de posições fixas, mas não ficam completamente imóveis."},
{id:"7_3_017",unit:"u7_3",lesson:2,type:"multiple",question:"Os sólidos são difíceis de comprimir porque:",options:["As partículas estão muito juntas","São muito leves","Não têm partículas","São transparentes"],correct:0,explanation:"A proximidade entre as partículas torna os sólidos quase incompressíveis."},

// --- Lição 3: Propriedades dos Líquidos ---
{id:"7_3_018",unit:"u7_3",lesson:3,type:"multiple",question:"Qual é a principal propriedade dos líquidos?",options:["Volume definido mas forma variável","Forma e volume definidos","Nem forma nem volume definidos","Não ocupam espaço"],correct:0,explanation:"Os líquidos têm volume próprio mas tomam a forma do recipiente."},
{id:"7_3_019",unit:"u7_3",lesson:3,type:"true_false",question:"Os líquidos tomam a forma do recipiente.",correct:true,explanation:"Os líquidos adaptam-se à forma do recipiente que os contém."},
{id:"7_3_020",unit:"u7_3",lesson:3,type:"fill",question:"Os líquidos têm volume próprio mas a forma é ___.",correct:["variável","variavel","do recipiente"],explanation:"Os líquidos adaptam a forma ao recipiente."},
{id:"7_3_021",unit:"u7_3",lesson:3,type:"multiple",question:"No estado líquido, as partículas estão:",options:["Próximas mas com liberdade de movimento","Fixas e organizadas","Muito afastadas","Completamente paradas"],correct:0,explanation:"As partículas dos líquidos deslizam umas sobre as outras."},
{id:"7_3_022",unit:"u7_3",lesson:3,type:"multiple",question:"Qual destes é um líquido à temperatura ambiente?",options:["Água","Gelo","Vapor","Ferro"],correct:0,explanation:"A água é líquida à temperatura ambiente (cerca de 25 °C)."},
{id:"7_3_023",unit:"u7_3",lesson:3,type:"true_false",question:"Os líquidos podem ser facilmente comprimidos.",correct:false,explanation:"Os líquidos são praticamente incompressíveis."},
{id:"7_3_024",unit:"u7_3",lesson:3,type:"multiple",question:"O que é a viscosidade?",options:["Resistência do líquido ao escoamento","Cor do líquido","Temperatura do líquido","Volume do líquido"],correct:0,explanation:"Líquidos viscosos (como o mel) fluem mais lentamente."},

// --- Lição 4: Propriedades dos Gases ---
{id:"7_3_025",unit:"u7_3",lesson:4,type:"multiple",question:"Qual é a principal propriedade dos gases?",options:["Não têm forma nem volume definidos","Têm forma definida","Têm volume definido","São incompressíveis"],correct:0,explanation:"Os gases expandem-se para ocupar todo o espaço disponível."},
{id:"7_3_026",unit:"u7_3",lesson:4,type:"true_false",question:"Os gases ocupam todo o espaço disponível.",correct:true,explanation:"Os gases expandem-se até preencher completamente o recipiente."},
{id:"7_3_027",unit:"u7_3",lesson:4,type:"fill",question:"Os gases não têm forma nem volume ___.",correct:["definidos","próprios","definido","próprio"],explanation:"Os gases adaptam-se ao recipiente em forma e volume."},
{id:"7_3_028",unit:"u7_3",lesson:4,type:"multiple",question:"No estado gasoso, as partículas estão:",options:["Muito afastadas e em movimento rápido","Muito juntas","Paradas","Organizadas"],correct:0,explanation:"As partículas dos gases movem-se rapidamente e estão muito afastadas."},
{id:"7_3_029",unit:"u7_3",lesson:4,type:"true_false",question:"Os gases podem ser facilmente comprimidos.",correct:true,explanation:"O grande espaço entre as partículas permite comprimir os gases."},
{id:"7_3_030",unit:"u7_3",lesson:4,type:"multiple",question:"Qual destes é um gás à temperatura ambiente?",options:["Oxigénio","Água","Gelo","Ferro"],correct:0,explanation:"O oxigénio é um gás em condições normais."},
{id:"7_3_031",unit:"u7_3",lesson:4,type:"multiple",question:"Por que sentimos o cheiro de perfume à distância?",options:["Porque as partículas do gás espalham-se pelo ar","O perfume é mágico","A luz transporta o cheiro","O som carrega o perfume"],correct:0,explanation:"As moléculas do perfume difundem-se no ar até chegarem ao nosso nariz."},

// --- Lição 5: Mudanças de Estado Físico ---
{id:"7_3_032",unit:"u7_3",lesson:5,type:"multiple",question:"A passagem do sólido ao líquido chama-se:",options:["Fusão","Solidificação","Evaporação","Condensação"],correct:0,explanation:"A fusão é a mudança do estado sólido para o líquido."},
{id:"7_3_033",unit:"u7_3",lesson:5,type:"multiple",question:"A passagem do líquido ao sólido chama-se:",options:["Solidificação","Fusão","Evaporação","Sublimação"],correct:0,explanation:"A solidificação é o processo inverso da fusão."},
{id:"7_3_034",unit:"u7_3",lesson:5,type:"multiple",question:"A passagem do líquido ao gasoso chama-se:",options:["Vaporização","Solidificação","Fusão","Condensação"],correct:0,explanation:"A vaporização inclui a evaporação e a ebulição."},
{id:"7_3_035",unit:"u7_3",lesson:5,type:"multiple",question:"A passagem do gasoso ao líquido chama-se:",options:["Condensação","Vaporização","Fusão","Sublimação"],correct:0,explanation:"A condensação é quando um gás se transforma em líquido."},
{id:"7_3_036",unit:"u7_3",lesson:5,type:"fill",question:"A passagem do estado sólido ao líquido é a ___.",correct:["fusão","Fusão","fusao","Fusao"],explanation:"Exemplo: o gelo a derreter é uma fusão."},
{id:"7_3_037",unit:"u7_3",lesson:5,type:"true_false",question:"A sublimação é a passagem directa do sólido ao gasoso.",correct:true,explanation:"Na sublimação, o sólido transforma-se em gás sem passar pelo estado líquido."},
{id:"7_3_038",unit:"u7_3",lesson:5,type:"multiple",question:"A passagem directa do sólido ao gás chama-se:",options:["Sublimação","Fusão","Condensação","Solidificação"],correct:0,explanation:"Exemplo: a naftalina sublima, passando directamente a gás."},
{id:"7_3_039",unit:"u7_3",lesson:5,type:"multiple",question:"Para mudar de estado, a matéria precisa de:",options:["Ganhar ou perder energia (calor)","Mudar de cor","Ser agitada","Mudar de nome"],correct:0,explanation:"As mudanças de estado ocorrem quando a matéria ganha ou perde calor."},
{id:"7_3_040",unit:"u7_3",lesson:5,type:"fill",question:"A passagem do gás ao líquido é a ___.",correct:["condensação","Condensação","condensacao","Condensacao"],explanation:"Exemplo: o vapor de água que se condensa numa janela fria."},
{id:"7_3_041",unit:"u7_3",lesson:5,type:"true_false",question:"Durante a fusão, a temperatura permanece constante.",correct:true,explanation:"No ponto de fusão, a temperatura não muda enquanto toda a substância não muda de estado."},
{id:"7_3_042",unit:"u7_3",lesson:5,type:"multiple",question:"Qual é o ponto de fusão da água?",options:["0 °C","100 °C","50 °C","-10 °C"],correct:0,explanation:"A água pura funde (derrete) a 0 °C ao nível do mar."},

// --- Lição 6: Diagramas de Mudança de Estado ---
{id:"7_3_043",unit:"u7_3",lesson:6,type:"multiple",question:"No gráfico de aquecimento, o patamar representa:",options:["Mudança de estado (temperatura constante)","Aumento de temperatura","Diminuição de temperatura","Ausência de calor"],correct:0,explanation:"Durante a mudança de estado, a temperatura mantém-se constante."},
{id:"7_3_044",unit:"u7_3",lesson:6,type:"true_false",question:"A evaporação ocorre apenas à superfície do líquido.",correct:true,explanation:"A evaporação é um processo lento que acontece na superfície."},
{id:"7_3_045",unit:"u7_3",lesson:6,type:"multiple",question:"Qual a diferença entre evaporação e ebulição?",options:["Evaporação é lenta e à superfície; ebulição é rápida em todo o líquido","São a mesma coisa","Evaporação é mais rápida","Ebulição é mais lenta"],correct:0,explanation:"A ebulição ocorre em todo o líquido a temperatura fixa; a evaporação é lenta."},
{id:"7_3_046",unit:"u7_3",lesson:6,type:"fill",question:"O ponto de ebulição da água é ___ °C.",correct:["100","cem"],explanation:"A água ferve a 100 °C ao nível do mar."},
{id:"7_3_047",unit:"u7_3",lesson:6,type:"true_false",question:"A temperatura de ebulição depende da pressão atmosférica.",correct:true,explanation:"Em altitudes maiores (menor pressão), a água ferve abaixo de 100 °C."},
{id:"7_3_048",unit:"u7_3",lesson:6,type:"multiple",question:"O orvalho nas folhas de manhã é exemplo de:",options:["Condensação","Evaporação","Fusão","Sublimação"],correct:0,explanation:"O vapor de água do ar condensa-se nas superfícies frias durante a noite."},
{id:"7_3_049",unit:"u7_3",lesson:6,type:"multiple",question:"A neve transformar-se em água é exemplo de:",options:["Fusão","Sublimação","Condensação","Solidificação"],correct:0,explanation:"A neve (sólido) transforma-se em água (líquido) por fusão."},
{id:"7_3_050",unit:"u7_3",lesson:6,type:"true_false",question:"A naftalina é um exemplo de substância que sublima.",correct:true,explanation:"A naftalina passa directamente do estado sólido ao gasoso."},


// ============================================================
//  7ª CLASSE - TEMA 4: FORÇA E MASSA (u7_4)
//  Lições 1-8
// ============================================================

// --- Lição 1: Conceito de Massa ---
{id:"7_4_001",unit:"u7_4",lesson:1,type:"multiple",question:"O que é massa?",options:["Quantidade de matéria num corpo","O peso do corpo","O volume do corpo","A altura do corpo"],correct:0,explanation:"A massa mede a quantidade de matéria existente num corpo."},
{id:"7_4_002",unit:"u7_4",lesson:1,type:"true_false",question:"A massa de um corpo é a mesma em qualquer lugar do Universo.",correct:true,explanation:"A massa é uma propriedade intrínseca do corpo, não depende do lugar."},
{id:"7_4_003",unit:"u7_4",lesson:1,type:"fill",question:"A unidade SI de massa é o ___.",correct:["quilograma","Quilograma","quilogramo","Quilogramo"],explanation:"O quilograma (kg) é a unidade fundamental de massa."},
{id:"7_4_004",unit:"u7_4",lesson:1,type:"multiple",question:"Com que instrumento se mede a massa?",options:["Balança","Dinamómetro","Termómetro","Manómetro"],correct:0,explanation:"A balança é o instrumento adequado para medir massa."},
{id:"7_4_005",unit:"u7_4",lesson:1,type:"true_false",question:"Massa e peso são a mesma coisa.",correct:false,explanation:"Massa é quantidade de matéria; peso é a força gravitacional sobre o corpo."},
{id:"7_4_006",unit:"u7_4",lesson:1,type:"multiple",question:"Qual a diferença entre massa e peso?",options:["Massa é quantidade de matéria; peso é força da gravidade","São sinónimos","Massa mede-se em Newton","Peso mede-se em quilogramas"],correct:0,explanation:"A massa mede-se em kg e o peso em Newton (N)."},
{id:"7_4_007",unit:"u7_4",lesson:1,type:"fill",question:"A massa mede-se em ___ e o peso em Newton.",correct:["quilogramas","quilograma","kg"],explanation:"kg para massa e N para peso (força)."},
{id:"7_4_008",unit:"u7_4",lesson:1,type:"multiple",question:"Se levarmos um corpo para a Lua, a sua massa:",options:["Permanece igual","Diminui","Aumenta","Desaparece"],correct:0,explanation:"A massa não muda com a localização; apenas o peso muda."},
{id:"7_4_009",unit:"u7_4",lesson:1,type:"true_false",question:"Um corpo com mais massa é mais difícil de mover.",correct:true,explanation:"A massa está relacionada com a inércia: quanto mais massa, mais difícil mudar o movimento."},
{id:"7_4_010",unit:"u7_4",lesson:1,type:"multiple",question:"A propriedade de um corpo resistir a mudanças no seu movimento chama-se:",options:["Inércia","Velocidade","Aceleração","Impulso"],correct:0,explanation:"A inércia é proporcional à massa do corpo."},

// --- Lição 2: Peso e Força Gravitacional ---
{id:"7_4_011",unit:"u7_4",lesson:2,type:"multiple",question:"O que é o peso de um corpo?",options:["A força com que a Terra atrai o corpo","A massa do corpo","O volume do corpo","A altura do corpo"],correct:0,explanation:"O peso é a força gravitacional exercida sobre o corpo."},
{id:"7_4_012",unit:"u7_4",lesson:2,type:"multiple",question:"A unidade de peso é:",options:["Newton (N)","Quilograma (kg)","Metro (m)","Litro (L)"],correct:0,explanation:"O peso é uma força e mede-se em Newton."},
{id:"7_4_013",unit:"u7_4",lesson:2,type:"fill",question:"O peso mede-se em ___.",correct:["Newton","newton","N"],explanation:"A unidade de força (e peso) no SI é o Newton (N)."},
{id:"7_4_014",unit:"u7_4",lesson:2,type:"true_false",question:"O peso de um corpo muda se o levarmos para a Lua.",correct:true,explanation:"Na Lua a gravidade é menor, logo o peso diminui."},
{id:"7_4_015",unit:"u7_4",lesson:2,type:"multiple",question:"Qual instrumento mede o peso?",options:["Dinamómetro","Balança de pratos","Régua","Proveta"],correct:0,explanation:"O dinamómetro mede forças, incluindo o peso."},
{id:"7_4_016",unit:"u7_4",lesson:2,type:"multiple",question:"A relação entre peso e massa é: P = m × g. O que é 'g'?",options:["Aceleração da gravidade","Massa","Volume","Temperatura"],correct:0,explanation:"g é a aceleração da gravidade (≈ 10 m/s² na Terra)."},
{id:"7_4_017",unit:"u7_4",lesson:2,type:"fill",question:"A aceleração da gravidade na superfície da Terra é aproximadamente ___ m/s².",correct:["10","9,8","9.8"],explanation:"g ≈ 9,8 m/s², arredondado para 10 m/s² em cálculos simples."},
{id:"7_4_018",unit:"u7_4",lesson:2,type:"multiple",question:"Um corpo de massa 5 kg tem um peso de aproximadamente:",options:["50 N","5 N","500 N","0,5 N"],correct:0,explanation:"P = m × g = 5 × 10 = 50 N."},
{id:"7_4_019",unit:"u7_4",lesson:2,type:"true_false",question:"Na Lua, o peso de um corpo é cerca de 6 vezes menor que na Terra.",correct:true,explanation:"A gravidade lunar é cerca de 1/6 da terrestre."},
{id:"7_4_020",unit:"u7_4",lesson:2,type:"multiple",question:"Um corpo de 10 kg pesa na Terra aproximadamente:",options:["100 N","10 N","1000 N","1 N"],correct:0,explanation:"P = 10 × 10 = 100 N."},

// --- Lição 3: Conceito de Força ---
{id:"7_4_021",unit:"u7_4",lesson:3,type:"multiple",question:"O que é uma força?",options:["Uma interacção entre corpos","Uma propriedade da matéria","Um tipo de energia","Uma grandeza de tempo"],correct:0,explanation:"Forças resultam da interacção entre dois ou mais corpos."},
{id:"7_4_022",unit:"u7_4",lesson:3,type:"true_false",question:"Uma força pode alterar o estado de movimento de um corpo.",correct:true,explanation:"Forças podem pôr corpos em movimento, pará-los ou mudar a sua direcção."},
{id:"7_4_023",unit:"u7_4",lesson:3,type:"multiple",question:"Que efeitos pode uma força causar?",options:["Todas as opções","Mudar a velocidade","Mudar a direcção","Deformar um corpo"],correct:0,explanation:"Forças podem alterar velocidade, direcção e forma dos corpos."},
{id:"7_4_024",unit:"u7_4",lesson:3,type:"fill",question:"A unidade de força no SI é o ___.",correct:["Newton","newton","N"],explanation:"O Newton (N) é a unidade de força, em homenagem a Isaac Newton."},
{id:"7_4_025",unit:"u7_4",lesson:3,type:"multiple",question:"Uma força é representada por:",options:["Um vector (seta)","Um ponto","Uma linha","Um círculo"],correct:0,explanation:"As forças são representadas por vectores com ponto de aplicação, direcção, sentido e intensidade."},
{id:"7_4_026",unit:"u7_4",lesson:3,type:"true_false",question:"Uma força pode deformar um corpo.",correct:true,explanation:"Se apertarmos uma esponja, a força que aplicamos deforma-a."},
{id:"7_4_027",unit:"u7_4",lesson:3,type:"multiple",question:"Os elementos de uma força são:",options:["Ponto de aplicação, direcção, sentido e intensidade","Apenas intensidade","Cor e forma","Massa e volume"],correct:0,explanation:"Uma força é completamente caracterizada por estes quatro elementos."},
{id:"7_4_028",unit:"u7_4",lesson:3,type:"multiple",question:"Quando dois corpos exercem forças um sobre o outro, dizemos que há:",options:["Interacção","Repouso","Equilíbrio térmico","Vácuo"],correct:0,explanation:"Força é resultado de interacção entre corpos."},
{id:"7_4_029",unit:"u7_4",lesson:3,type:"fill",question:"Uma força é representada graficamente por uma seta chamada ___.",correct:["vector","Vector","vetor","Vetor"],explanation:"O vector mostra a direcção, sentido e intensidade da força."},
{id:"7_4_030",unit:"u7_4",lesson:3,type:"true_false",question:"Para haver força é necessário pelo menos dois corpos.",correct:true,explanation:"As forças são interacções, logo precisam de pelo menos dois corpos."},

// --- Lição 4: Tipos de Forças ---
{id:"7_4_031",unit:"u7_4",lesson:4,type:"multiple",question:"A força que nos mantém no chão é:",options:["Força gravitacional","Força magnética","Força eléctrica","Força elástica"],correct:0,explanation:"A força gravitacional (peso) atrai-nos para o centro da Terra."},
{id:"7_4_032",unit:"u7_4",lesson:4,type:"multiple",question:"A força que actua entre um íman e o ferro é:",options:["Força magnética","Força gravitacional","Força de atrito","Força elástica"],correct:0,explanation:"Os ímanes exercem forças magnéticas sobre materiais ferrosos."},
{id:"7_4_033",unit:"u7_4",lesson:4,type:"true_false",question:"A força de atrito opõe-se ao movimento.",correct:true,explanation:"O atrito age na direcção contrária ao movimento ou à tendência de movimento."},
{id:"7_4_034",unit:"u7_4",lesson:4,type:"fill",question:"A força que se opõe ao movimento entre superfícies em contacto é a força de ___.",correct:["atrito","Atrito"],explanation:"O atrito surge entre superfícies em contacto."},
{id:"7_4_035",unit:"u7_4",lesson:4,type:"multiple",question:"Qual tipo de força actua à distância?",options:["Gravitacional e magnética","Apenas o atrito","Apenas a força muscular","Nenhuma força actua à distância"],correct:0,explanation:"Forças gravitacionais e magnéticas actuam sem contacto directo."},
{id:"7_4_036",unit:"u7_4",lesson:4,type:"multiple",question:"A força que uma mola esticada exerce para voltar ao normal é:",options:["Força elástica","Força gravitacional","Força magnética","Força nuclear"],correct:0,explanation:"A força elástica tende a restaurar a forma original do corpo."},
{id:"7_4_037",unit:"u7_4",lesson:4,type:"true_false",question:"A força de atrito é sempre prejudicial.",correct:false,explanation:"O atrito pode ser útil: sem ele, não conseguiríamos andar ou travar um carro."},
{id:"7_4_038",unit:"u7_4",lesson:4,type:"multiple",question:"A força muscular é um exemplo de força de:",options:["Contacto","Distância","Campo","Gravitação"],correct:0,explanation:"A força muscular requer contacto directo com o corpo."},
{id:"7_4_039",unit:"u7_4",lesson:4,type:"multiple",question:"Sem atrito, o que aconteceria ao andar?",options:["Escorregaríamos e não conseguiríamos andar","Andaríamos mais rápido","Nada mudaria","Saltaríamos mais alto"],correct:0,explanation:"Precisamos de atrito entre os pés e o chão para empurrar o corpo para a frente."},
{id:"7_4_040",unit:"u7_4",lesson:4,type:"fill",question:"A força que atrai os corpos para o centro da Terra é a força ___.",correct:["gravitacional","Gravitacional","da gravidade","gravítica"],explanation:"A gravidade atrai todos os corpos com massa."},

// --- Lição 5: Densidade ---
{id:"7_4_041",unit:"u7_4",lesson:5,type:"multiple",question:"O que é a densidade?",options:["Massa por unidade de volume","Volume por unidade de massa","Peso dividido pela altura","Força por unidade de área"],correct:0,explanation:"A densidade é a relação entre a massa e o volume: ρ = m/V."},
{id:"7_4_042",unit:"u7_4",lesson:5,type:"fill",question:"A fórmula da densidade é ρ = m / ___.",correct:["V","v","volume","Volume"],explanation:"Densidade = massa / volume."},
{id:"7_4_043",unit:"u7_4",lesson:5,type:"multiple",question:"A unidade SI de densidade é:",options:["kg/m³","kg","m³","N"],correct:0,explanation:"Quilograma por metro cúbico (kg/m³) é a unidade SI de densidade."},
{id:"7_4_044",unit:"u7_4",lesson:5,type:"true_false",question:"A densidade da água é de aproximadamente 1000 kg/m³.",correct:true,explanation:"1000 kg/m³ ou 1 g/cm³ é a densidade da água pura."},
{id:"7_4_045",unit:"u7_4",lesson:5,type:"multiple",question:"Um objecto flutua na água quando a sua densidade é:",options:["Menor que a da água","Maior que a da água","Igual à da água","A densidade não importa"],correct:0,explanation:"Objectos menos densos que a água flutuam."},
{id:"7_4_046",unit:"u7_4",lesson:5,type:"true_false",question:"O ferro afunda na água porque é mais denso.",correct:true,explanation:"A densidade do ferro (≈7800 kg/m³) é maior que a da água."},
{id:"7_4_047",unit:"u7_4",lesson:5,type:"multiple",question:"Se um corpo tem massa 200 g e volume 100 cm³, a sua densidade é:",options:["2 g/cm³","200 g/cm³","0,5 g/cm³","100 g/cm³"],correct:0,explanation:"ρ = m/V = 200/100 = 2 g/cm³."},
{id:"7_4_048",unit:"u7_4",lesson:5,type:"fill",question:"Objectos com densidade menor que a da água ___ na água.",correct:["flutuam","Flutuam"],explanation:"Corpos menos densos que o líquido flutuam na superfície."},
{id:"7_4_049",unit:"u7_4",lesson:5,type:"multiple",question:"Porque é que o óleo flutua na água?",options:["O óleo é menos denso que a água","O óleo é mais pesado","A água é mais leve","O óleo tem mais volume"],correct:0,explanation:"O óleo tem menor densidade que a água."},
{id:"7_4_050",unit:"u7_4",lesson:5,type:"true_false",question:"A densidade depende da substância, não da quantidade.",correct:true,explanation:"A densidade é uma propriedade da substância, independe da quantidade."},
{id:"7_4_051",unit:"u7_4",lesson:5,type:"multiple",question:"Qual destes materiais tem maior densidade?",options:["Chumbo","Madeira","Cortiça","Plástico"],correct:0,explanation:"O chumbo é um dos metais mais densos."},

// --- Lição 6: Resultante de Forças ---
{id:"7_4_052",unit:"u7_4",lesson:6,type:"multiple",question:"A resultante de duas forças no mesmo sentido é:",options:["A soma das duas forças","A diferença das duas forças","Zero","A maior das duas"],correct:0,explanation:"Forças no mesmo sentido somam-se."},
{id:"7_4_053",unit:"u7_4",lesson:6,type:"multiple",question:"A resultante de duas forças em sentidos opostos é:",options:["A diferença das forças","A soma das forças","Zero sempre","A menor das forças"],correct:0,explanation:"Forças opostas subtraem-se; a resultante tem o sentido da maior."},
{id:"7_4_054",unit:"u7_4",lesson:6,type:"true_false",question:"Se duas forças iguais actuam em sentidos opostos, a resultante é zero.",correct:true,explanation:"Forças iguais e opostas anulam-se, e o corpo fica em equilíbrio."},
{id:"7_4_055",unit:"u7_4",lesson:6,type:"fill",question:"Se F₁ = 10 N e F₂ = 6 N no mesmo sentido, a resultante é ___ N.",correct:["16"],explanation:"R = F₁ + F₂ = 10 + 6 = 16 N."},
{id:"7_4_056",unit:"u7_4",lesson:6,type:"multiple",question:"Se F₁ = 10 N e F₂ = 4 N em sentidos opostos, a resultante é:",options:["6 N","14 N","10 N","4 N"],correct:0,explanation:"R = 10 - 4 = 6 N, no sentido da força maior."},
{id:"7_4_057",unit:"u7_4",lesson:6,type:"true_false",question:"Um corpo em equilíbrio tem resultante de forças igual a zero.",correct:true,explanation:"Equilíbrio significa que todas as forças se compensam."},
{id:"7_4_058",unit:"u7_4",lesson:6,type:"multiple",question:"Quando a resultante das forças sobre um corpo é zero, o corpo:",options:["Permanece em repouso ou em movimento uniforme","Acelera","Para imediatamente","Muda de direcção"],correct:0,explanation:"Resultante zero significa equilíbrio: repouso ou movimento rectilíneo uniforme."},
{id:"7_4_059",unit:"u7_4",lesson:6,type:"fill",question:"Se F₁ = 8 N e F₂ = 8 N em sentidos opostos, a resultante é ___ N.",correct:["0","zero"],explanation:"Forças iguais e opostas resultam em zero."},

// --- Lição 7: Lei da Acção e Reacção ---
{id:"7_4_060",unit:"u7_4",lesson:7,type:"multiple",question:"A 3ª lei de Newton diz que:",options:["Toda acção tem uma reacção igual e oposta","Os corpos caem à mesma velocidade","A massa é constante","A velocidade é proporcional à força"],correct:0,explanation:"A lei da acção-reacção: para cada força existe uma força igual e oposta."},
{id:"7_4_061",unit:"u7_4",lesson:7,type:"true_false",question:"Quando empurras uma parede, a parede empurra-te de volta.",correct:true,explanation:"Pela lei da acção-reacção, a parede exerce uma força igual e oposta sobre ti."},
{id:"7_4_062",unit:"u7_4",lesson:7,type:"multiple",question:"As forças de acção e reacção actuam:",options:["Em corpos diferentes","No mesmo corpo","Apenas em sólidos","Apenas em líquidos"],correct:0,explanation:"A acção actua num corpo e a reacção no outro corpo."},
{id:"7_4_063",unit:"u7_4",lesson:7,type:"fill",question:"A 3ª lei de Newton é chamada lei da acção e ___.",correct:["reacção","Reacção","reação","Reação"],explanation:"Toda acção tem uma reacção igual e oposta."},
{id:"7_4_064",unit:"u7_4",lesson:7,type:"true_false",question:"As forças de acção e reacção anulam-se.",correct:false,explanation:"Não se anulam porque actuam em corpos diferentes."},
{id:"7_4_065",unit:"u7_4",lesson:7,type:"multiple",question:"Quando andas, empurras o chão para trás. O chão:",options:["Empurra-te para a frente","Não faz nada","Puxa-te para baixo","Empurra-te para trás"],correct:0,explanation:"A reacção do chão empurra-te para a frente, permitindo o andar."},

// --- Lição 8: Aplicações das Forças ---
{id:"7_4_066",unit:"u7_4",lesson:8,type:"multiple",question:"Por que os pneus dos carros têm ranhuras?",options:["Para aumentar o atrito com a estrada","Para serem bonitos","Para pesar menos","Para ir mais rápido"],correct:0,explanation:"As ranhuras aumentam a aderência (atrito) à estrada, especialmente em chuva."},
{id:"7_4_067",unit:"u7_4",lesson:8,type:"true_false",question:"Os lubrificantes reduzem a força de atrito entre superfícies.",correct:true,explanation:"Lubrificantes (óleo, graxa) diminuem o atrito entre peças mecânicas."},
{id:"7_4_068",unit:"u7_4",lesson:8,type:"multiple",question:"Um pára-quedas funciona porque:",options:["A resistência do ar abranda a queda","Elimina a gravidade","Aumenta o peso","Reduz a massa"],correct:0,explanation:"O grande pára-quedas cria muita resistência do ar, reduzindo a velocidade de queda."},
{id:"7_4_069",unit:"u7_4",lesson:8,type:"fill",question:"Os lubrificantes servem para reduzir o ___.",correct:["atrito","Atrito"],explanation:"Menos atrito significa menos desgaste e calor entre superfícies."},
{id:"7_4_070",unit:"u7_4",lesson:8,type:"multiple",question:"Os astronautas flutuam na estação espacial porque:",options:["Estão em queda livre (microgravidade)","Não há gravidade","A nave cancela a gravidade","Usam botas especiais"],correct:0,explanation:"A estação espacial está em queda livre contínua ao redor da Terra."},
{id:"7_4_071",unit:"u7_4",lesson:8,type:"true_false",question:"A força de atrito pode gerar calor.",correct:true,explanation:"Esfregar as mãos aquece-as por causa do atrito."},
{id:"7_4_072",unit:"u7_4",lesson:8,type:"multiple",question:"Por que é mais fácil empurrar um objecto em superfície lisa?",options:["Porque há menos atrito","Porque há mais gravidade","Porque o objecto perde massa","Porque ganha velocidade sozinho"],correct:0,explanation:"Superfícies lisas têm menor força de atrito."},


// ============================================================
//  7ª CLASSE - TEMA 5: PRESSÃO NOS LÍQUIDOS E GASES (u7_5)
//  Lições 1-7
// ============================================================

// --- Lição 1: Conceito de Pressão ---
{id:"7_5_001",unit:"u7_5",lesson:1,type:"multiple",question:"O que é pressão?",options:["Força aplicada por unidade de área","Força total sobre o corpo","Massa do corpo","Volume do líquido"],correct:0,explanation:"Pressão = Força / Área. Quanto menor a área, maior a pressão."},
{id:"7_5_002",unit:"u7_5",lesson:1,type:"fill",question:"A fórmula da pressão é p = F / ___.",correct:["A","a","área","Área","area","Area"],explanation:"Pressão = Força dividida pela Área de contacto."},
{id:"7_5_003",unit:"u7_5",lesson:1,type:"multiple",question:"A unidade SI de pressão é:",options:["Pascal (Pa)","Newton (N)","Joule (J)","Watt (W)"],correct:0,explanation:"O Pascal (Pa) é a unidade SI de pressão: 1 Pa = 1 N/m²."},
{id:"7_5_004",unit:"u7_5",lesson:1,type:"true_false",question:"Quanto menor a área de contacto, maior a pressão para a mesma força.",correct:true,explanation:"Por isso as facas cortam: a lâmina fina concentra a força numa área pequena."},
{id:"7_5_005",unit:"u7_5",lesson:1,type:"multiple",question:"Por que as facas cortam bem?",options:["A lâmina fina concentra a força numa área pequena","São feitas de metal","São pesadas","Têm cabo"],correct:0,explanation:"Área pequena = pressão grande, facilitando o corte."},
{id:"7_5_006",unit:"u7_5",lesson:1,type:"fill",question:"A unidade SI de pressão é o ___.",correct:["Pascal","pascal","Pa"],explanation:"Pascal, em homenagem a Blaise Pascal."},
{id:"7_5_007",unit:"u7_5",lesson:1,type:"multiple",question:"Se aplicamos uma força de 100 N numa área de 2 m², a pressão é:",options:["50 Pa","200 Pa","100 Pa","2 Pa"],correct:0,explanation:"p = F/A = 100/2 = 50 Pa."},
{id:"7_5_008",unit:"u7_5",lesson:1,type:"true_false",question:"Um elefante pode exercer menos pressão no solo que uma mulher de salto alto.",correct:true,explanation:"A mulher de salto alto tem área de contacto muito menor, gerando pressão maior."},
{id:"7_5_009",unit:"u7_5",lesson:1,type:"multiple",question:"Para reduzir a pressão sobre o solo, devemos:",options:["Aumentar a área de contacto","Diminuir a área","Aumentar a força","Saltar"],correct:0,explanation:"Mais área = menos pressão. Por isso os esquis são largos."},
{id:"7_5_010",unit:"u7_5",lesson:1,type:"multiple",question:"Por que os tractores têm pneus largos?",options:["Para distribuir o peso e não afundar no solo","Para ir mais rápido","Para serem bonitos","Para gastar menos combustível"],correct:0,explanation:"Pneus largos aumentam a área, reduzindo a pressão no solo."},

// --- Lição 2: Pressão Atmosférica ---
{id:"7_5_011",unit:"u7_5",lesson:2,type:"multiple",question:"O que é a pressão atmosférica?",options:["A pressão exercida pelo ar da atmosfera","A pressão da água","A pressão do sangue","A pressão do gás num recipiente"],correct:0,explanation:"O ar tem peso e exerce pressão sobre tudo na superfície terrestre."},
{id:"7_5_012",unit:"u7_5",lesson:2,type:"true_false",question:"A pressão atmosférica diminui com a altitude.",correct:true,explanation:"Quanto mais alto, menos ar há por cima, logo menos pressão."},
{id:"7_5_013",unit:"u7_5",lesson:2,type:"multiple",question:"Quem demonstrou pela primeira vez a existência da pressão atmosférica?",options:["Torricelli","Newton","Einstein","Galileu"],correct:0,explanation:"Evangelista Torricelli fez a experiência com mercúrio em 1643."},
{id:"7_5_014",unit:"u7_5",lesson:2,type:"fill",question:"O instrumento que mede a pressão atmosférica é o ___.",correct:["barómetro","Barómetro","barometro","Barometro"],explanation:"O barómetro foi inventado por Torricelli."},
{id:"7_5_015",unit:"u7_5",lesson:2,type:"multiple",question:"A pressão atmosférica normal ao nível do mar vale aproximadamente:",options:["101 325 Pa","10 000 Pa","1 000 Pa","1 000 000 Pa"],correct:0,explanation:"1 atm = 101 325 Pa ≈ 101,3 kPa."},
{id:"7_5_016",unit:"u7_5",lesson:2,type:"true_false",question:"No topo de uma montanha, a pressão atmosférica é maior que ao nível do mar.",correct:false,explanation:"Quanto maior a altitude, menor a pressão atmosférica."},
{id:"7_5_017",unit:"u7_5",lesson:2,type:"multiple",question:"Por que um copo com água tapado com cartão não derrama ao inverter?",options:["A pressão atmosférica empurra o cartão para cima","O cartão é colado","A água é magnética","Não há gravidade"],correct:0,explanation:"A pressão do ar de baixo é maior que o peso da água, segurando o cartão."},
{id:"7_5_018",unit:"u7_5",lesson:2,type:"fill",question:"A pressão atmosférica é exercida pelo peso do ___.",correct:["ar","Ar","atmosfera"],explanation:"O ar tem massa e peso, que exercem pressão sobre a superfície."},

// --- Lição 3: Pressão nos Líquidos ---
{id:"7_5_019",unit:"u7_5",lesson:3,type:"multiple",question:"A pressão num líquido em repouso depende de:",options:["Profundidade e densidade do líquido","Cor do líquido","Forma do recipiente","Temperatura apenas"],correct:0,explanation:"Pressão hidrostática: p = ρ × g × h (depende da densidade e profundidade)."},
{id:"7_5_020",unit:"u7_5",lesson:3,type:"true_false",question:"A pressão num líquido aumenta com a profundidade.",correct:true,explanation:"Quanto mais fundo, mais líquido há por cima, logo mais pressão."},
{id:"7_5_021",unit:"u7_5",lesson:3,type:"fill",question:"A pressão num líquido aumenta com a ___.",correct:["profundidade","Profundidade"],explanation:"Mais fundo = mais peso de líquido acima = mais pressão."},
{id:"7_5_022",unit:"u7_5",lesson:3,type:"multiple",question:"A fórmula da pressão hidrostática é:",options:["p = ρ × g × h","p = m × v","p = F × d","p = m × g"],correct:0,explanation:"ρ é a densidade, g a gravidade e h a profundidade."},
{id:"7_5_023",unit:"u7_5",lesson:3,type:"multiple",question:"Num mesmo líquido, a pressão ao mesmo nível é:",options:["Igual em todos os pontos","Diferente em cada ponto","Zero","Negativa"],correct:0,explanation:"Este é o princípio fundamental da hidrostática."},
{id:"7_5_024",unit:"u7_5",lesson:3,type:"true_false",question:"A pressão num ponto do líquido actua em todas as direcções.",correct:true,explanation:"A pressão no interior de um líquido é exercida igualmente em todas as direcções."},
{id:"7_5_025",unit:"u7_5",lesson:3,type:"multiple",question:"Os mergulhadores sentem dor nos ouvidos em profundidade porque:",options:["A pressão da água aumenta","A água está fria","Há pouca luz","Os peixes fazem barulho"],correct:0,explanation:"A pressão elevada em profundidade comprime os tímpanos."},
{id:"7_5_026",unit:"u7_5",lesson:3,type:"fill",question:"A pressão no líquido actua em ___ as direcções.",correct:["todas","Todas"],explanation:"A pressão num fluido em repouso é igual em todas as direcções."},

// --- Lição 4: Princípio de Pascal ---
{id:"7_5_027",unit:"u7_5",lesson:4,type:"multiple",question:"O princípio de Pascal afirma que:",options:["A pressão aplicada a um líquido transmite-se igualmente em todas as direcções","Os líquidos não transmitem pressão","A pressão diminui com a profundidade","Os gases são incompressíveis"],correct:0,explanation:"Pascal descobriu que os líquidos transmitem pressão uniformemente."},
{id:"7_5_028",unit:"u7_5",lesson:4,type:"true_false",question:"A prensa hidráulica baseia-se no princípio de Pascal.",correct:true,explanation:"A prensa hidráulica usa a transmissão de pressão para multiplicar forças."},
{id:"7_5_029",unit:"u7_5",lesson:4,type:"multiple",question:"Qual aparelho usa o princípio de Pascal?",options:["Prensa hidráulica","Termómetro","Balança","Relógio"],correct:0,explanation:"A prensa hidráulica transmite pressão através de um líquido."},
{id:"7_5_030",unit:"u7_5",lesson:4,type:"fill",question:"O princípio de ___ diz que a pressão se transmite igualmente num líquido.",correct:["Pascal","pascal"],explanation:"Blaise Pascal formulou este princípio fundamental."},
{id:"7_5_031",unit:"u7_5",lesson:4,type:"multiple",question:"Nos travões hidráulicos de um carro, o líquido transmite a pressão do pedal às:",options:["Pastilhas dos travões","Rodas","Portas","Janelas"],correct:0,explanation:"O sistema hidráulico transmite a pressão do pedal para parar as rodas."},
{id:"7_5_032",unit:"u7_5",lesson:4,type:"true_false",question:"O princípio de Pascal aplica-se a líquidos e gases.",correct:true,explanation:"Tanto líquidos como gases transmitem pressão em todas as direcções."},
{id:"7_5_033",unit:"u7_5",lesson:4,type:"multiple",question:"Numa prensa hidráulica, se o êmbolo pequeno tem área 2 cm² e o grande 20 cm², a força é multiplicada por:",options:["10","2","20","5"],correct:0,explanation:"A força multiplica-se pela razão das áreas: 20/2 = 10 vezes."},

// --- Lição 5: Vasos Comunicantes ---
{id:"7_5_034",unit:"u7_5",lesson:5,type:"multiple",question:"O que são vasos comunicantes?",options:["Recipientes ligados entre si pela base","Vasos de flores","Tubos fechados","Recipientes separados"],correct:0,explanation:"Vasos comunicantes são recipientes interligados por baixo."},
{id:"7_5_035",unit:"u7_5",lesson:5,type:"true_false",question:"Num sistema de vasos comunicantes com o mesmo líquido, o nível é igual em todos.",correct:true,explanation:"O líquido atinge o mesmo nível em todos os vasos, independente da forma."},
{id:"7_5_036",unit:"u7_5",lesson:5,type:"fill",question:"Em vasos comunicantes com o mesmo líquido, o nível é ___ em todos.",correct:["igual","Igual","o mesmo"],explanation:"Este é o princípio dos vasos comunicantes."},
{id:"7_5_037",unit:"u7_5",lesson:5,type:"multiple",question:"O princípio dos vasos comunicantes é usado em:",options:["Abastecimento de água e caixas de água","Produção de electricidade","Aquecimento solar","Telecomunicações"],correct:0,explanation:"Torres e caixas de água usam o princípio dos vasos comunicantes."},
{id:"7_5_038",unit:"u7_5",lesson:5,type:"multiple",question:"Se colocarmos líquidos de densidades diferentes em vasos comunicantes:",options:["O líquido mais denso fica mais baixo","Ficam ao mesmo nível","O mais denso fica mais alto","Não se misturam nunca"],correct:0,explanation:"O líquido mais denso estabiliza num nível mais baixo."},
{id:"7_5_039",unit:"u7_5",lesson:5,type:"true_false",question:"A forma dos vasos não afecta o nível do líquido em vasos comunicantes.",correct:true,explanation:"O nível depende apenas da pressão, não da forma dos recipientes."},
{id:"7_5_040",unit:"u7_5",lesson:5,type:"multiple",question:"Um nível de bolha (usado por pedreiros) funciona pelo princípio de:",options:["Vasos comunicantes","Acção e reacção","Arquimedes","Newton"],correct:0,explanation:"O nível de bolha usa líquido em tubo curvado (vasos comunicantes)."},
{id:"7_5_041",unit:"u7_5",lesson:5,type:"multiple",question:"As chafarizes funcionam graças ao princípio de:",options:["Vasos comunicantes","Magnetismo","Electricidade","Atrito"],correct:0,explanation:"A água sobe no chafariz pelo mesmo princípio dos vasos comunicantes."},

// --- Lição 6: Princípio de Arquimedes ---
{id:"7_5_042",unit:"u7_5",lesson:6,type:"multiple",question:"O princípio de Arquimedes diz que um corpo mergulhado num líquido recebe:",options:["Uma impulsão igual ao peso do líquido deslocado","Uma força para baixo","Uma força lateral","Nenhuma força"],correct:0,explanation:"A impulsão (empuxo) é igual ao peso do volume de líquido deslocado."},
{id:"7_5_043",unit:"u7_5",lesson:6,type:"true_false",question:"A impulsão é uma força dirigida de baixo para cima.",correct:true,explanation:"A impulsão actua verticalmente para cima sobre o corpo imerso."},
{id:"7_5_044",unit:"u7_5",lesson:6,type:"fill",question:"A força que o líquido exerce para cima sobre um corpo imerso chama-se ___.",correct:["impulsão","Impulsão","empuxo","Empuxo"],explanation:"Impulsão ou empuxo é a força ascendente sobre corpos em líquidos."},
{id:"7_5_045",unit:"u7_5",lesson:6,type:"multiple",question:"Um corpo flutua quando:",options:["A impulsão é igual ou maior que o peso","O peso é maior que a impulsão","Não há impulsão","A densidade é maior que a do líquido"],correct:0,explanation:"Se a impulsão supera ou iguala o peso, o corpo flutua."},
{id:"7_5_046",unit:"u7_5",lesson:6,type:"true_false",question:"Um barco de aço flutua porque desloca um grande volume de água.",correct:true,explanation:"O casco oco desloca muita água, criando impulsão suficiente para suportar o peso."},
{id:"7_5_047",unit:"u7_5",lesson:6,type:"multiple",question:"Porque nos sentimos mais leves dentro de uma piscina?",options:["A impulsão da água suporta parte do nosso peso","Perdemos massa na água","A gravidade diminui","A água remove o peso"],correct:0,explanation:"A impulsão da água actua para cima, reduzindo a sensação de peso."},
{id:"7_5_048",unit:"u7_5",lesson:6,type:"multiple",question:"Quem descobriu o princípio da impulsão?",options:["Arquimedes","Pascal","Newton","Torricelli"],correct:0,explanation:"Arquimedes descobriu o princípio enquanto tomava banho, segundo a lenda."},

// --- Lição 7: Pressão nos Gases ---
{id:"7_5_049",unit:"u7_5",lesson:7,type:"multiple",question:"Os gases exercem pressão porque:",options:["As suas partículas colidem com as paredes do recipiente","São pesados","São coloridos","Estão em repouso"],correct:0,explanation:"As colisões das moléculas do gás com as paredes criam pressão."},
{id:"7_5_050",unit:"u7_5",lesson:7,type:"true_false",question:"Ao aquecer um gás num recipiente fechado, a pressão aumenta.",correct:true,explanation:"O calor aumenta a velocidade das partículas, aumentando a pressão."},
{id:"7_5_051",unit:"u7_5",lesson:7,type:"multiple",question:"O que acontece se comprimirmos um gás?",options:["O volume diminui e a pressão aumenta","O volume aumenta","A massa diminui","Nada muda"],correct:0,explanation:"Ao reduzir o volume, as partículas ficam mais juntas e colidem mais."},
{id:"7_5_052",unit:"u7_5",lesson:7,type:"fill",question:"O instrumento que mede a pressão dos gases é o ___.",correct:["manómetro","Manómetro","manometro","Manometro"],explanation:"Manómetros medem a pressão de gases em recipientes fechados."},
{id:"7_5_053",unit:"u7_5",lesson:7,type:"multiple",question:"Qual o instrumento que mede a pressão dos gases?",options:["Manómetro","Barómetro","Termómetro","Balança"],correct:0,explanation:"O manómetro mede a pressão em recipientes; o barómetro mede a pressão atmosférica."},
{id:"7_5_054",unit:"u7_5",lesson:7,type:"true_false",question:"Os pneus dos carros contêm ar comprimido.",correct:true,explanation:"O ar dentro dos pneus está a uma pressão superior à atmosférica."},
{id:"7_5_055",unit:"u7_5",lesson:7,type:"multiple",question:"O que acontece se furarmos um balão cheio de ar?",options:["O ar sai rapidamente porque está sob pressão","Nada acontece","O balão fica maior","O ar entra no balão"],correct:0,explanation:"A pressão interna é maior que a externa, forçando o ar a sair."},
{id:"7_5_056",unit:"u7_5",lesson:7,type:"multiple",question:"Uma bomba de ar funciona porque:",options:["Comprime o ar, aumentando a sua pressão","Cria ar novo","Aquece o ar","Congela o ar"],correct:0,explanation:"A bomba reduz o volume do ar, aumentando a sua pressão."},
{id:"7_5_057",unit:"u7_5",lesson:7,type:"fill",question:"Os gases podem ser ___ porque as partículas estão muito afastadas.",correct:["comprimidos","Comprimidos","compressíveis"],explanation:"O grande espaço entre partículas permite a compressão dos gases."},
{id:"7_5_058",unit:"u7_5",lesson:7,type:"true_false",question:"A pressão atmosférica é um exemplo de pressão exercida por um gás.",correct:true,explanation:"O ar da atmosfera é um gás que exerce pressão sobre tudo na superfície."},
{id:"7_5_059",unit:"u7_5",lesson:7,type:"multiple",question:"Por que os aviões são pressurizados?",options:["Porque a pressão atmosférica diminui em altitude","Para ir mais rápido","Para poupar combustível","Para serem mais leves"],correct:0,explanation:"Em altitude elevada, a pressão é muito baixa para respirar confortavelmente."},
{id:"7_5_060",unit:"u7_5",lesson:7,type:"multiple",question:"A lei de Boyle-Mariotte relaciona:",options:["Pressão e volume de um gás a temperatura constante","Massa e volume","Temperatura e massa","Força e área"],correct:0,explanation:"Se a temperatura é constante, quando o volume diminui, a pressão aumenta (e vice-versa)."},


// ============================================================
//  FIM DAS PERGUNTAS DA 7ª CLASSE
//  As perguntas da 8ª e 9ª classe continuam abaixo...
//  (Serão adicionadas na próxima parte)
// ============================================================


// ============================================================
//  8ª CLASSE - TEMA 1: TRABALHO, ENERGIA E MÁQUINAS SIMPLES (u8_1)
//  Lições 1-8
// ============================================================

// --- Lição 1: Conceito de Trabalho ---
{id:"8_1_001",unit:"u8_1",lesson:1,type:"multiple",question:"Em Física, quando é que uma força realiza trabalho?",options:["Quando desloca um corpo na sua direcção","Quando está aplicada sem movimento","Quando o corpo está parado","Quando a força é perpendicular ao movimento"],correct:0,explanation:"O trabalho só existe quando há deslocamento na direcção da força."},
{id:"8_1_002",unit:"u8_1",lesson:1,type:"multiple",question:"A fórmula do trabalho é:",options:["W = F × d","W = m × g","W = P × t","W = F / A"],correct:0,explanation:"Trabalho = Força × deslocamento na direcção da força."},
{id:"8_1_003",unit:"u8_1",lesson:1,type:"fill",question:"A unidade SI de trabalho é o ___.",correct:["Joule","joule","J"],explanation:"O Joule (J) é a unidade de trabalho e energia no SI."},
{id:"8_1_004",unit:"u8_1",lesson:1,type:"true_false",question:"Segurar um saco pesado sem se mover é realizar trabalho em Física.",correct:false,explanation:"Sem deslocamento não há trabalho, mesmo que haja esforço muscular."},
{id:"8_1_005",unit:"u8_1",lesson:1,type:"multiple",question:"Se aplicamos uma força de 20 N e deslocamos o corpo 5 m, o trabalho é:",options:["100 J","25 J","4 J","15 J"],correct:0,explanation:"W = F × d = 20 × 5 = 100 J."},
{id:"8_1_006",unit:"u8_1",lesson:1,type:"true_false",question:"O trabalho pode ser positivo ou negativo.",correct:true,explanation:"É positivo se a força tem o sentido do movimento, negativo se é contrário."},
{id:"8_1_007",unit:"u8_1",lesson:1,type:"multiple",question:"O trabalho da força de atrito é geralmente:",options:["Negativo (resistente)","Positivo","Zero","Infinito"],correct:0,explanation:"O atrito opõe-se ao movimento, logo o seu trabalho é negativo."},
{id:"8_1_008",unit:"u8_1",lesson:1,type:"fill",question:"Trabalho = Força × ___.",correct:["deslocamento","Deslocamento","distância","distancia","d"],explanation:"O deslocamento deve ser na direcção da força aplicada."},
{id:"8_1_009",unit:"u8_1",lesson:1,type:"multiple",question:"Um rapaz empurra uma caixa com 50 N por 3 m. O trabalho realizado é:",options:["150 J","53 J","17 J","500 J"],correct:0,explanation:"W = 50 × 3 = 150 J."},
{id:"8_1_010",unit:"u8_1",lesson:1,type:"true_false",question:"Se a força é perpendicular ao deslocamento, o trabalho é zero.",correct:true,explanation:"Só a componente da força na direcção do deslocamento realiza trabalho."},
{id:"8_1_011",unit:"u8_1",lesson:1,type:"multiple",question:"A unidade Joule equivale a:",options:["N·m (Newton vezes metro)","kg·m","N/m","m/s"],correct:0,explanation:"1 J = 1 N × 1 m = 1 N·m."},
{id:"8_1_012",unit:"u8_1",lesson:1,type:"multiple",question:"Quando um porteiro carrega uma mala na cabeça em movimento horizontal, o trabalho da força peso é:",options:["Zero","Positivo","Negativo","Máximo"],correct:0,explanation:"A força peso é vertical e o deslocamento horizontal, logo são perpendiculares."},

// --- Lição 2: Conceito de Energia ---
{id:"8_1_013",unit:"u8_1",lesson:2,type:"multiple",question:"O que é energia em Física?",options:["Capacidade de realizar trabalho","Um tipo de força","Uma substância","Uma unidade de medida"],correct:0,explanation:"Energia é a capacidade que um corpo ou sistema tem de realizar trabalho."},
{id:"8_1_014",unit:"u8_1",lesson:2,type:"true_false",question:"A energia mede-se em Joule.",correct:true,explanation:"A unidade SI de energia é o Joule (J), tal como o trabalho."},
{id:"8_1_015",unit:"u8_1",lesson:2,type:"multiple",question:"Qual das seguintes é uma forma de energia?",options:["Todas as opções","Energia cinética","Energia potencial","Energia térmica"],correct:0,explanation:"Existem muitas formas de energia: cinética, potencial, térmica, eléctrica, etc."},
{id:"8_1_016",unit:"u8_1",lesson:2,type:"fill",question:"A capacidade de realizar trabalho chama-se ___.",correct:["energia","Energia"],explanation:"Energia e trabalho estão intimamente ligados."},
{id:"8_1_017",unit:"u8_1",lesson:2,type:"multiple",question:"A energia pode ser:",options:["Transformada de uma forma para outra","Criada do nada","Destruída completamente","Parada para sempre"],correct:0,explanation:"A lei da conservação da energia diz que ela se transforma, não se cria nem se destrói."},
{id:"8_1_018",unit:"u8_1",lesson:2,type:"true_false",question:"A energia pode ser criada e destruída.",correct:false,explanation:"A energia conserva-se: transforma-se de uma forma para outra."},
{id:"8_1_019",unit:"u8_1",lesson:2,type:"multiple",question:"A lei da conservação da energia afirma que:",options:["A energia não se cria nem se destrói, apenas se transforma","A energia desaparece com o tempo","Só existe energia cinética","A energia aumenta sozinha"],correct:0,explanation:"Esta é uma das leis fundamentais da Física."},
{id:"8_1_020",unit:"u8_1",lesson:2,type:"fill",question:"A energia não se cria nem se destrói, apenas se ___.",correct:["transforma","Transforma"],explanation:"Lei da conservação da energia."},

// --- Lição 3: Energia Cinética ---
{id:"8_1_021",unit:"u8_1",lesson:3,type:"multiple",question:"O que é energia cinética?",options:["Energia associada ao movimento","Energia armazenada pela posição","Energia do calor","Energia da luz"],correct:0,explanation:"Todo corpo em movimento possui energia cinética."},
{id:"8_1_022",unit:"u8_1",lesson:3,type:"multiple",question:"A fórmula da energia cinética é:",options:["Ec = ½mv²","Ec = mgh","Ec = Fd","Ec = Pt"],correct:0,explanation:"Ec = metade da massa vezes a velocidade ao quadrado."},
{id:"8_1_023",unit:"u8_1",lesson:3,type:"true_false",question:"Quanto maior a velocidade, maior a energia cinética.",correct:true,explanation:"A energia cinética depende do quadrado da velocidade."},
{id:"8_1_024",unit:"u8_1",lesson:3,type:"fill",question:"A energia do movimento chama-se energia ___.",correct:["cinética","Cinética","cinetica","Cinetica"],explanation:"Cinética vem do grego 'kinetikos' que significa movimento."},
{id:"8_1_025",unit:"u8_1",lesson:3,type:"multiple",question:"Um corpo de 2 kg move-se a 3 m/s. A sua Ec é:",options:["9 J","6 J","18 J","3 J"],correct:0,explanation:"Ec = ½ × 2 × 3² = ½ × 2 × 9 = 9 J."},
{id:"8_1_026",unit:"u8_1",lesson:3,type:"true_false",question:"Um corpo em repouso tem energia cinética zero.",correct:true,explanation:"Se v = 0, então Ec = ½m(0)² = 0."},
{id:"8_1_027",unit:"u8_1",lesson:3,type:"multiple",question:"Se a velocidade de um carro duplicar, a energia cinética:",options:["Quadruplica","Duplica","Triplica","Mantém-se igual"],correct:0,explanation:"Ec ∝ v². Se v dobra, Ec = ½m(2v)² = 4 × ½mv²."},
{id:"8_1_028",unit:"u8_1",lesson:3,type:"multiple",question:"Qual destes tem mais energia cinética?",options:["Camião a 60 km/h","Bicicleta a 60 km/h","Bola a 60 km/h","Folha a 60 km/h"],correct:0,explanation:"Na mesma velocidade, mais massa = mais energia cinética."},
{id:"8_1_029",unit:"u8_1",lesson:3,type:"fill",question:"A fórmula da energia cinética é Ec = ½m___².",correct:["v","V"],explanation:"v é a velocidade do corpo."},
{id:"8_1_030",unit:"u8_1",lesson:3,type:"true_false",question:"A energia cinética depende da massa e da velocidade.",correct:true,explanation:"Ec = ½mv² depende directamente de ambas."},

// --- Lição 4: Energia Potencial ---
{id:"8_1_031",unit:"u8_1",lesson:4,type:"multiple",question:"O que é energia potencial gravitacional?",options:["Energia armazenada pela posição (altura)","Energia do movimento","Energia do som","Energia do calor"],correct:0,explanation:"Um corpo a uma certa altura possui energia potencial gravitacional."},
{id:"8_1_032",unit:"u8_1",lesson:4,type:"multiple",question:"A fórmula da energia potencial gravitacional é:",options:["Ep = mgh","Ep = ½mv²","Ep = Fd","Ep = Pt"],correct:0,explanation:"Ep = massa × gravidade × altura."},
{id:"8_1_033",unit:"u8_1",lesson:4,type:"fill",question:"A energia armazenada pela posição de um corpo chama-se energia ___.",correct:["potencial","Potencial"],explanation:"Potencial porque tem o potencial de se converter em movimento."},
{id:"8_1_034",unit:"u8_1",lesson:4,type:"true_false",question:"Quanto mais alto está um corpo, maior a sua energia potencial.",correct:true,explanation:"Ep = mgh: maior h significa maior energia potencial."},
{id:"8_1_035",unit:"u8_1",lesson:4,type:"multiple",question:"Um livro de 0,5 kg está a 2 m de altura. A sua Ep é (g=10 m/s²):",options:["10 J","1 J","5 J","20 J"],correct:0,explanation:"Ep = 0,5 × 10 × 2 = 10 J."},
{id:"8_1_036",unit:"u8_1",lesson:4,type:"multiple",question:"A energia potencial elástica está associada a:",options:["Molas e objectos deformados","Altura","Velocidade","Temperatura"],correct:0,explanation:"Molas comprimidas ou esticadas armazenam energia potencial elástica."},
{id:"8_1_037",unit:"u8_1",lesson:4,type:"true_false",question:"Uma mola comprimida possui energia potencial elástica.",correct:true,explanation:"A deformação da mola armazena energia que pode ser libertada."},
{id:"8_1_038",unit:"u8_1",lesson:4,type:"multiple",question:"Quando um corpo cai, a sua energia potencial transforma-se em:",options:["Energia cinética","Mais energia potencial","Energia nuclear","Energia magnética"],correct:0,explanation:"À medida que cai, perde altura (Ep diminui) e ganha velocidade (Ec aumenta)."},
{id:"8_1_039",unit:"u8_1",lesson:4,type:"fill",question:"Ep = m × g × ___.",correct:["h","H","altura"],explanation:"h é a altura do corpo em relação ao solo ou nível de referência."},
{id:"8_1_040",unit:"u8_1",lesson:4,type:"true_false",question:"A soma da energia cinética e potencial chama-se energia mecânica.",correct:true,explanation:"Em = Ec + Ep é a energia mecânica total."},

// --- Lição 5: Conservação e Transformação de Energia ---
{id:"8_1_041",unit:"u8_1",lesson:5,type:"multiple",question:"Num pêndulo, quando a bola está no ponto mais alto, tem:",options:["Máxima Ep e mínima Ec","Máxima Ec e mínima Ep","Ep e Ec iguais","Nem Ep nem Ec"],correct:0,explanation:"No ponto mais alto, a velocidade é zero (Ec=0) e a altura é máxima (Ep máxima)."},
{id:"8_1_042",unit:"u8_1",lesson:5,type:"true_false",question:"No ponto mais baixo do pêndulo, a energia cinética é máxima.",correct:true,explanation:"No ponto mais baixo, toda a Ep converteu-se em Ec."},
{id:"8_1_043",unit:"u8_1",lesson:5,type:"multiple",question:"Uma bola é lançada para cima. No ponto mais alto:",options:["A Ec é zero e a Ep é máxima","A Ec é máxima","Não tem energia","A Ep é zero"],correct:0,explanation:"No topo, a bola pára momentaneamente (v=0) e está na altura máxima."},
{id:"8_1_044",unit:"u8_1",lesson:5,type:"fill",question:"A energia mecânica é a soma da energia ___ e potencial.",correct:["cinética","Cinética","cinetica","Cinetica"],explanation:"Em = Ec + Ep."},
{id:"8_1_045",unit:"u8_1",lesson:5,type:"multiple",question:"Numa montanha-russa, a energia transforma-se continuamente entre:",options:["Energia potencial e cinética","Energia nuclear e térmica","Energia eléctrica e magnética","Energia luminosa e sonora"],correct:0,explanation:"Subidas convertem Ec em Ep; descidas convertem Ep em Ec."},
{id:"8_1_046",unit:"u8_1",lesson:5,type:"true_false",question:"Num sistema sem atrito, a energia mecânica total mantém-se constante.",correct:true,explanation:"Sem forças dissipativas, a energia mecânica conserva-se."},
{id:"8_1_047",unit:"u8_1",lesson:5,type:"multiple",question:"Quando uma bola cai e bate no chão, parte da energia transforma-se em:",options:["Calor e som","Mais energia potencial","Energia nuclear","Luz visível apenas"],correct:0,explanation:"O impacto converte energia em calor (deformação) e ondas sonoras."},
{id:"8_1_048",unit:"u8_1",lesson:5,type:"multiple",question:"Uma lâmpada converte energia eléctrica em:",options:["Luz e calor","Energia potencial","Energia cinética","Energia nuclear"],correct:0,explanation:"A lâmpada transforma electricidade em luz visível e calor."},

// --- Lição 6: Potência ---
{id:"8_1_049",unit:"u8_1",lesson:6,type:"multiple",question:"O que é potência?",options:["Trabalho realizado por unidade de tempo","Força por unidade de área","Massa por unidade de volume","Energia por unidade de massa"],correct:0,explanation:"Potência mede a rapidez com que o trabalho é feito."},
{id:"8_1_050",unit:"u8_1",lesson:6,type:"fill",question:"A fórmula da potência é P = W / ___.",correct:["t","T","tempo","Tempo"],explanation:"Potência = Trabalho / Tempo."},
{id:"8_1_051",unit:"u8_1",lesson:6,type:"multiple",question:"A unidade SI de potência é:",options:["Watt (W)","Joule (J)","Newton (N)","Pascal (Pa)"],correct:0,explanation:"O Watt (W) é a unidade de potência: 1 W = 1 J/s."},
{id:"8_1_052",unit:"u8_1",lesson:6,type:"true_false",question:"1 Watt equivale a 1 Joule por segundo.",correct:true,explanation:"W = J/s é a definição do Watt."},
{id:"8_1_053",unit:"u8_1",lesson:6,type:"multiple",question:"Se um motor realiza 500 J em 10 s, a sua potência é:",options:["50 W","5000 W","510 J","490 J"],correct:0,explanation:"P = W/t = 500/10 = 50 W."},
{id:"8_1_054",unit:"u8_1",lesson:6,type:"fill",question:"A unidade SI de potência é o ___.",correct:["Watt","watt","W"],explanation:"Em homenagem a James Watt, inventor da máquina a vapor melhorada."},
{id:"8_1_055",unit:"u8_1",lesson:6,type:"multiple",question:"Dois trabalhadores fazem o mesmo trabalho, mas A demora 5 min e B 10 min. Quem tem mais potência?",options:["O trabalhador A","O trabalhador B","Ambos iguais","Nenhum"],correct:0,explanation:"A faz o trabalho em menos tempo, logo tem mais potência."},
{id:"8_1_056",unit:"u8_1",lesson:6,type:"true_false",question:"O cavalo-vapor é uma unidade de potência.",correct:true,explanation:"1 cv ≈ 736 W. É muito usado para motores de carros."},
{id:"8_1_057",unit:"u8_1",lesson:6,type:"multiple",question:"1 quilowatt (kW) equivale a:",options:["1000 W","100 W","10 W","10000 W"],correct:0,explanation:"O prefixo 'quilo' significa 1000."},

// --- Lição 7: Máquinas Simples (Alavancas) ---
{id:"8_1_058",unit:"u8_1",lesson:7,type:"multiple",question:"O que é uma máquina simples?",options:["Dispositivo que facilita a realização de trabalho","Um computador","Um robô","Um motor eléctrico"],correct:0,explanation:"Máquinas simples multiplicam a força ou mudam a direcção da força aplicada."},
{id:"8_1_059",unit:"u8_1",lesson:7,type:"multiple",question:"Qual destas é uma máquina simples?",options:["Todas as opções","Alavanca","Roldana","Plano inclinado"],correct:0,explanation:"Alavancas, roldanas e planos inclinados são máquinas simples."},
{id:"8_1_060",unit:"u8_1",lesson:7,type:"fill",question:"Uma barra rígida que gira em torno de um ponto fixo é uma ___.",correct:["alavanca","Alavanca"],explanation:"A alavanca é uma das máquinas simples mais antigas."},
{id:"8_1_061",unit:"u8_1",lesson:7,type:"true_false",question:"A alavanca tem três elementos: ponto de apoio, força potente e força resistente.",correct:true,explanation:"O ponto de apoio (fulcro) é onde a alavanca gira."},
{id:"8_1_062",unit:"u8_1",lesson:7,type:"multiple",question:"Existem quantos tipos (géneros) de alavancas?",options:["3","2","1","4"],correct:0,explanation:"Alavancas de 1º, 2º e 3º género diferem na posição do ponto de apoio."},
{id:"8_1_063",unit:"u8_1",lesson:7,type:"multiple",question:"Na alavanca de 1º género, o ponto de apoio está:",options:["Entre a força potente e a resistente","Numa extremidade","No meio da barra","Fora da barra"],correct:0,explanation:"Ex: balança de pratos, tesoura, alicate."},
{id:"8_1_064",unit:"u8_1",lesson:7,type:"multiple",question:"Um exemplo de alavanca de 2º género é:",options:["Carrinho de mão","Tesoura","Pinça","Vara de pescar"],correct:0,explanation:"No carrinho de mão, a carga está entre o apoio (roda) e a força (mãos)."},
{id:"8_1_065",unit:"u8_1",lesson:7,type:"true_false",question:"A tesoura é um exemplo de alavanca de 1º género.",correct:true,explanation:"O ponto de apoio (parafuso) está entre as lâminas (resistência) e os dedos (potência)."},
{id:"8_1_066",unit:"u8_1",lesson:7,type:"multiple",question:"Uma pinça é um exemplo de alavanca de:",options:["3º género","1º género","2º género","Nenhum"],correct:0,explanation:"Na pinça, a força está entre o apoio e a resistência."},
{id:"8_1_067",unit:"u8_1",lesson:7,type:"fill",question:"O ponto fixo em torno do qual a alavanca gira chama-se ponto de ___ ou fulcro.",correct:["apoio","Apoio"],explanation:"O fulcro é o ponto de rotação da alavanca."},

// --- Lição 8: Roldanas e Plano Inclinado ---
{id:"8_1_068",unit:"u8_1",lesson:8,type:"multiple",question:"O que é uma roldana?",options:["Uma roda com um sulco por onde passa uma corda","Uma barra rígida","Um tipo de parafuso","Uma rampa"],correct:0,explanation:"A roldana facilita levantar cargas usando cordas."},
{id:"8_1_069",unit:"u8_1",lesson:8,type:"multiple",question:"Uma roldana fixa serve para:",options:["Mudar a direcção da força","Multiplicar a força","Aumentar a velocidade","Diminuir o peso"],correct:0,explanation:"A roldana fixa apenas muda a direcção da força, não a multiplica."},
{id:"8_1_070",unit:"u8_1",lesson:8,type:"true_false",question:"Uma roldana móvel permite reduzir a força necessária para levantar uma carga.",correct:true,explanation:"A roldana móvel divide a força por dois, mas exige o dobro do deslocamento."},
{id:"8_1_071",unit:"u8_1",lesson:8,type:"fill",question:"Uma roldana que está presa e não se move é chamada roldana ___.",correct:["fixa","Fixa"],explanation:"A roldana fixa apenas muda a direcção da força."},
{id:"8_1_072",unit:"u8_1",lesson:8,type:"multiple",question:"O plano inclinado permite:",options:["Usar menos força para elevar cargas","Aumentar o peso da carga","Diminuir a distância","Eliminar o atrito"],correct:0,explanation:"A rampa permite usar menos força, mas ao longo de uma distância maior."},
{id:"8_1_073",unit:"u8_1",lesson:8,type:"true_false",question:"Uma rampa é um exemplo de plano inclinado.",correct:true,explanation:"Rampas de acesso são planos inclinados usados diariamente."},
{id:"8_1_074",unit:"u8_1",lesson:8,type:"multiple",question:"Se o plano inclinado for mais comprido (menos inclinação), a força necessária é:",options:["Menor","Maior","Igual","Nula"],correct:0,explanation:"Menos inclinação = menos força necessária, mas maior distância a percorrer."},
{id:"8_1_075",unit:"u8_1",lesson:8,type:"multiple",question:"Um parafuso funciona como:",options:["Um plano inclinado enrolado","Uma alavanca","Uma roldana","Um pêndulo"],correct:0,explanation:"A rosca do parafuso é geometricamente um plano inclinado enrolado."},
{id:"8_1_076",unit:"u8_1",lesson:8,type:"fill",question:"Uma roldana que se move junto com a carga é chamada roldana ___.",correct:["móvel","Móvel","movel","Movel"],explanation:"A roldana móvel divide a força necessária pela metade."},
{id:"8_1_077",unit:"u8_1",lesson:8,type:"true_false",question:"As máquinas simples criam energia extra.",correct:false,explanation:"Nenhuma máquina cria energia. Apenas facilitam o trabalho, modificando força ou direcção."},
{id:"8_1_078",unit:"u8_1",lesson:8,type:"multiple",question:"O rendimento de uma máquina simples é sempre:",options:["Menor que 100%","Exactamente 100%","Maior que 100%","Zero"],correct:0,explanation:"Devido ao atrito, sempre se perde alguma energia, logo rendimento < 100%."},


// ============================================================
//  8ª CLASSE - TEMA 2: ENERGIA CALORÍFICA (u8_2)
//  Lições 1-8
// ============================================================

// --- Lição 1: Temperatura e Movimento Térmico ---
{id:"8_2_001",unit:"u8_2",lesson:1,type:"multiple",question:"O que é temperatura?",options:["Medida da agitação das partículas de um corpo","Quantidade de calor","Tipo de energia","Uma força"],correct:0,explanation:"A temperatura está relacionada com a energia cinética média das partículas."},
{id:"8_2_002",unit:"u8_2",lesson:1,type:"true_false",question:"Quanto maior a temperatura, maior a agitação das partículas.",correct:true,explanation:"Temperatura elevada significa partículas com mais energia cinética."},
{id:"8_2_003",unit:"u8_2",lesson:1,type:"fill",question:"O instrumento que mede a temperatura é o ___.",correct:["termómetro","Termómetro","termometro","Termometro"],explanation:"Existem vários tipos: de mercúrio, digital, infravermelho, etc."},
{id:"8_2_004",unit:"u8_2",lesson:1,type:"multiple",question:"O que é o movimento térmico?",options:["Movimento desordenado das partículas de um corpo","Movimento de um corpo quente","Movimento do ar quente","Deslocamento de calor"],correct:0,explanation:"As partículas de toda a matéria estão em constante movimento desordenado."},
{id:"8_2_005",unit:"u8_2",lesson:1,type:"multiple",question:"A que temperatura as partículas teriam agitação mínima?",options:["-273 °C (zero absoluto)","0 °C","100 °C","-100 °C"],correct:0,explanation:"O zero absoluto (0 K = -273,15 °C) é a temperatura mínima teórica."},
{id:"8_2_006",unit:"u8_2",lesson:1,type:"true_false",question:"No zero absoluto, as partículas param completamente.",correct:true,explanation:"A -273,15 °C (0 K), teoricamente, toda a agitação cessa."},
{id:"8_2_007",unit:"u8_2",lesson:1,type:"fill",question:"O zero absoluto corresponde a ___ °C.",correct:["-273","-273,15"],explanation:"0 K = -273,15 °C é a temperatura mais baixa possível."},
{id:"8_2_008",unit:"u8_2",lesson:1,type:"multiple",question:"A relação entre Celsius e Kelvin é:",options:["T(K) = T(°C) + 273","T(K) = T(°C) - 273","T(K) = T(°C) × 273","T(K) = T(°C) / 273"],correct:0,explanation:"Basta somar 273 à temperatura em Celsius para obter Kelvin."},
{id:"8_2_009",unit:"u8_2",lesson:1,type:"multiple",question:"25 °C em Kelvin é:",options:["298 K","25 K","248 K","325 K"],correct:0,explanation:"T(K) = 25 + 273 = 298 K."},
{id:"8_2_010",unit:"u8_2",lesson:1,type:"true_false",question:"A escala Kelvin não tem valores negativos.",correct:true,explanation:"O zero Kelvin é a temperatura mínima possível."},

// --- Lição 2: Calor e Equilíbrio Térmico ---
{id:"8_2_011",unit:"u8_2",lesson:2,type:"multiple",question:"O que é calor?",options:["Energia transferida entre corpos a temperaturas diferentes","O mesmo que temperatura","Uma substância quente","Uma força"],correct:0,explanation:"Calor é energia em trânsito, transferida devido à diferença de temperatura."},
{id:"8_2_012",unit:"u8_2",lesson:2,type:"true_false",question:"O calor transfere-se do corpo mais quente para o mais frio.",correct:true,explanation:"A energia térmica flui espontaneamente do quente para o frio."},
{id:"8_2_013",unit:"u8_2",lesson:2,type:"fill",question:"A energia transferida entre corpos a temperaturas diferentes chama-se ___.",correct:["calor","Calor"],explanation:"Calor não é algo que um corpo tem, é energia em transferência."},
{id:"8_2_014",unit:"u8_2",lesson:2,type:"multiple",question:"Quando dois corpos atingem a mesma temperatura, dizemos que estão em:",options:["Equilíbrio térmico","Equilíbrio mecânico","Movimento térmico","Fusão"],correct:0,explanation:"No equilíbrio térmico, cessa a transferência de calor."},
{id:"8_2_015",unit:"u8_2",lesson:2,type:"true_false",question:"Calor e temperatura são a mesma coisa.",correct:false,explanation:"Calor é energia transferida; temperatura é a medida da agitação das partículas."},
{id:"8_2_016",unit:"u8_2",lesson:2,type:"multiple",question:"A unidade SI de calor (energia térmica) é:",options:["Joule (J)","Celsius (°C)","Kelvin (K)","Watt (W)"],correct:0,explanation:"Calor é energia, portanto mede-se em Joule."},
{id:"8_2_017",unit:"u8_2",lesson:2,type:"multiple",question:"A caloria é:",options:["Uma unidade de energia muito usada no dia-a-dia","Uma unidade de temperatura","Uma unidade de massa","Uma unidade de volume"],correct:0,explanation:"1 caloria ≈ 4,18 Joules. Muito usada em nutrição."},
{id:"8_2_018",unit:"u8_2",lesson:2,type:"fill",question:"Quando dois corpos em contacto atingem a mesma temperatura, há ___ térmico.",correct:["equilíbrio","Equilíbrio","equilibrio","Equilibrio"],explanation:"O equilíbrio térmico é quando as temperaturas se igualam."},
{id:"8_2_019",unit:"u8_2",lesson:2,type:"true_false",question:"1 caloria equivale a aproximadamente 4,18 Joules.",correct:true,explanation:"Esta é a equivalência entre caloria e Joule."},
{id:"8_2_020",unit:"u8_2",lesson:2,type:"multiple",question:"Quando colocas gelo num copo de água, o gelo:",options:["Recebe calor da água","Dá calor à água","Não troca energia","Aumenta de temperatura sozinho"],correct:0,explanation:"A água (mais quente) transfere calor para o gelo (mais frio)."},

// --- Lição 3: Capacidade Calorífica e Calor Específico ---
{id:"8_2_021",unit:"u8_2",lesson:3,type:"multiple",question:"O que é calor específico?",options:["Quantidade de calor para elevar 1°C de 1 kg de substância","O calor total de um corpo","A temperatura máxima","A capacidade de derreter"],correct:0,explanation:"Cada substância tem um calor específico diferente."},
{id:"8_2_022",unit:"u8_2",lesson:3,type:"true_false",question:"A água tem um calor específico muito elevado comparado a outros materiais.",correct:true,explanation:"A água (c = 4180 J/kg·°C) demora mais a aquecer e a arrefecer."},
{id:"8_2_023",unit:"u8_2",lesson:3,type:"multiple",question:"A fórmula para calcular a quantidade de calor é:",options:["Q = mcΔT","Q = mv²","Q = Fd","Q = Pt"],correct:0,explanation:"Q = massa × calor específico × variação de temperatura."},
{id:"8_2_024",unit:"u8_2",lesson:3,type:"fill",question:"Q = m × c × ΔT. A letra 'c' representa o calor ___.",correct:["específico","Específico","especifico","Especifico"],explanation:"O calor específico é uma propriedade de cada material."},
{id:"8_2_025",unit:"u8_2",lesson:3,type:"multiple",question:"Porque é que a areia aquece mais rápido que a água na praia?",options:["A areia tem menor calor específico","A areia é mais pesada","A água é transparente","A areia é mais escura"],correct:0,explanation:"Menor calor específico significa que aquece mais rápido com a mesma energia."},
{id:"8_2_026",unit:"u8_2",lesson:3,type:"true_false",question:"Substâncias com maior calor específico aquecem mais lentamente.",correct:true,explanation:"Mais energia é necessária para aumentar a temperatura."},
{id:"8_2_027",unit:"u8_2",lesson:3,type:"multiple",question:"Qual destes tem maior calor específico?",options:["Água","Ferro","Alumínio","Cobre"],correct:0,explanation:"A água tem o calor específico mais alto entre as substâncias comuns."},
{id:"8_2_028",unit:"u8_2",lesson:3,type:"multiple",question:"Se aquecermos 2 kg de água de 20°C a 70°C (c=4200 J/kg·°C), o calor é:",options:["420 000 J","84 000 J","8 400 J","42 J"],correct:0,explanation:"Q = 2 × 4200 × (70-20) = 2 × 4200 × 50 = 420 000 J."},

// --- Lição 4: Dilatação Térmica ---
{id:"8_2_029",unit:"u8_2",lesson:4,type:"multiple",question:"O que é dilatação térmica?",options:["Aumento das dimensões de um corpo quando aquecido","Diminuição da massa","Aumento da cor","Mudança de estado"],correct:0,explanation:"A maioria dos materiais expande-se quando aquecidos."},
{id:"8_2_030",unit:"u8_2",lesson:4,type:"true_false",question:"Os metais dilatam quando são aquecidos.",correct:true,explanation:"O aumento de temperatura faz as partículas vibrarem mais e afastarem-se."},
{id:"8_2_031",unit:"u8_2",lesson:4,type:"fill",question:"O aumento de dimensões de um corpo com o aquecimento chama-se ___ térmica.",correct:["dilatação","Dilatação","dilatacao","Dilatacao"],explanation:"A dilatação pode ser linear, superficial ou volumétrica."},
{id:"8_2_032",unit:"u8_2",lesson:4,type:"multiple",question:"Porque existem juntas de dilatação nas pontes?",options:["Para permitir a dilatação sem danos","Para decoração","Para reduzir o peso","Para drenar água"],correct:0,explanation:"Sem juntas, a ponte racharia ao dilatar com o calor."},
{id:"8_2_033",unit:"u8_2",lesson:4,type:"multiple",question:"Os trilhos de comboio têm espaços entre eles para:",options:["Permitir a dilatação térmica","Facilitar a montagem","Reduzir o ruído","Poupar material"],correct:0,explanation:"No calor, os trilhos dilatam e precisam de espaço para expandir."},
{id:"8_2_034",unit:"u8_2",lesson:4,type:"true_false",question:"A água comporta-se de forma diferente: expande ao congelar.",correct:true,explanation:"A água é uma excepção: expande ao solidificar, por isso o gelo flutua."},
{id:"8_2_035",unit:"u8_2",lesson:4,type:"multiple",question:"Um termómetro de mercúrio funciona porque:",options:["O mercúrio dilata ao ser aquecido","O mercúrio muda de cor","O vidro encolhe","O mercúrio evapora"],correct:0,explanation:"A dilatação do mercúrio faz a coluna subir no tubo capilar."},
{id:"8_2_036",unit:"u8_2",lesson:4,type:"multiple",question:"A dilatação linear ocorre principalmente em:",options:["Barras e fios metálicos","Líquidos","Gases","Plasma"],correct:0,explanation:"Em sólidos longos, o aumento do comprimento é a dilatação linear."},

// --- Lição 5: Condução de Calor ---
{id:"8_2_037",unit:"u8_2",lesson:5,type:"multiple",question:"A condução de calor é:",options:["Transferência de calor através de um material sem movimento do material","Calor pelo movimento de fluidos","Calor por ondas electromagnéticas","Calor por contacto com o ar"],correct:0,explanation:"Na condução, a energia passa de partícula a partícula sem deslocamento de matéria."},
{id:"8_2_038",unit:"u8_2",lesson:5,type:"true_false",question:"Os metais são bons condutores de calor.",correct:true,explanation:"Metais como cobre e alumínio conduzem calor muito bem."},
{id:"8_2_039",unit:"u8_2",lesson:5,type:"fill",question:"Materiais que conduzem bem o calor são chamados bons ___.",correct:["condutores","Condutores"],explanation:"Metais são bons condutores térmicos."},
{id:"8_2_040",unit:"u8_2",lesson:5,type:"multiple",question:"Qual destes é o melhor condutor de calor?",options:["Cobre","Madeira","Plástico","Borracha"],correct:0,explanation:"O cobre é um dos melhores condutores térmicos."},
{id:"8_2_041",unit:"u8_2",lesson:5,type:"multiple",question:"Os isolantes térmicos são materiais que:",options:["Conduzem mal o calor","Conduzem bem o calor","Não existem na natureza","São sempre metálicos"],correct:0,explanation:"Isolantes como madeira, plástico e ar dificultam a passagem de calor."},
{id:"8_2_042",unit:"u8_2",lesson:5,type:"true_false",question:"A madeira é um bom isolante térmico.",correct:true,explanation:"A madeira conduz mal o calor, por isso é usada em cabos de panelas."},
{id:"8_2_043",unit:"u8_2",lesson:5,type:"multiple",question:"Porque os cabos das panelas são de plástico ou madeira?",options:["São isolantes térmicos e não aquecem tanto","São mais bonitos","São mais leves","São mais baratos"],correct:0,explanation:"Isolantes protegem as mãos do calor da panela."},
{id:"8_2_044",unit:"u8_2",lesson:5,type:"fill",question:"Materiais que conduzem mal o calor são chamados ___ térmicos.",correct:["isolantes","Isolantes","isoladores","Isoladores"],explanation:"Isolantes dificultam a transferência de calor."},
{id:"8_2_045",unit:"u8_2",lesson:5,type:"multiple",question:"Porque sentimos o piso de azulejo mais frio que o de madeira?",options:["O azulejo conduz calor mais rapidamente que a madeira","O azulejo está mais frio","A madeira produz calor","O azulejo tem menor temperatura"],correct:0,explanation:"O azulejo retira calor dos pés mais rapidamente por ser melhor condutor."},

// --- Lição 6: Convecção ---
{id:"8_2_046",unit:"u8_2",lesson:6,type:"multiple",question:"O que é convecção?",options:["Transferência de calor pelo movimento de fluidos","Calor através de sólidos","Calor por ondas electromagnéticas","Calor no vácuo"],correct:0,explanation:"Na convecção, o fluido quente sobe e o frio desce, criando correntes."},
{id:"8_2_047",unit:"u8_2",lesson:6,type:"true_false",question:"A convecção ocorre em líquidos e gases.",correct:true,explanation:"Fluidos (líquidos e gases) permitem correntes de convecção."},
{id:"8_2_048",unit:"u8_2",lesson:6,type:"fill",question:"A transferência de calor pelo movimento de fluidos chama-se ___.",correct:["convecção","Convecção","conveccao","Conveccao"],explanation:"Correntes de convecção movimentam o fluido quente e frio."},
{id:"8_2_049",unit:"u8_2",lesson:6,type:"multiple",question:"Na convecção, o fluido quente:",options:["Sobe porque se torna menos denso","Desce","Fica parado","Move-se para os lados"],correct:0,explanation:"Ao aquecer, o fluido dilata, fica menos denso e sobe."},
{id:"8_2_050",unit:"u8_2",lesson:6,type:"multiple",question:"A brisa marítima durante o dia é causada por:",options:["Convecção do ar","Condução pela areia","Radiação do Sol apenas","Magnetismo"],correct:0,explanation:"O ar quente sobe sobre a terra e o ar fresco do mar move-se para a costa."},
{id:"8_2_051",unit:"u8_2",lesson:6,type:"true_false",question:"A convecção ocorre em sólidos.",correct:false,explanation:"A convecção requer movimento do material, impossível em sólidos."},
{id:"8_2_052",unit:"u8_2",lesson:6,type:"multiple",question:"O aquecedor de ambiente aquece uma sala por:",options:["Convecção do ar","Condução pelo chão","Radiação apenas","Sublimação"],correct:0,explanation:"O ar quente sobe e o frio desce, circulando por convecção."},
{id:"8_2_053",unit:"u8_2",lesson:6,type:"multiple",question:"Os geladeiras têm o congelador em cima porque:",options:["O ar frio desce naturalmente por convecção","É mais fácil de construir","O motor fica em baixo","Não há razão científica"],correct:0,explanation:"O ar frio desce e arrefece os alimentos em baixo por convecção natural."},

// --- Lição 7: Radiação ---
{id:"8_2_054",unit:"u8_2",lesson:7,type:"multiple",question:"O que é radiação térmica?",options:["Transferência de calor por ondas electromagnéticas","Calor por contacto","Calor pelo movimento de fluidos","Calor por condução"],correct:0,explanation:"A radiação não precisa de meio material, funciona até no vácuo."},
{id:"8_2_055",unit:"u8_2",lesson:7,type:"true_false",question:"O calor do Sol chega à Terra por radiação.",correct:true,explanation:"No espaço há vácuo, logo só a radiação pode transmitir o calor solar."},
{id:"8_2_056",unit:"u8_2",lesson:7,type:"fill",question:"A forma de propagação de calor que funciona no vácuo é a ___.",correct:["radiação","Radiação","radiacao","Radiacao"],explanation:"Radiação são ondas electromagnéticas que se propagam sem meio material."},
{id:"8_2_057",unit:"u8_2",lesson:7,type:"multiple",question:"Qual cor absorve mais radiação térmica?",options:["Preto","Branco","Amarelo","Azul"],correct:0,explanation:"Superfícies escuras absorvem mais radiação; claras reflectem mais."},
{id:"8_2_058",unit:"u8_2",lesson:7,type:"true_false",question:"Roupas brancas no verão são mais frescas porque reflectem a radiação.",correct:true,explanation:"O branco reflecte a maioria da radiação solar, mantendo o corpo mais fresco."},
{id:"8_2_059",unit:"u8_2",lesson:7,type:"multiple",question:"Uma garrafa térmica funciona reduzindo as três formas de propagação que são:",options:["Condução, convecção e radiação","Fusão, ebulição e sublimação","Reflexão, refracção e difracção","Evaporação, condensação e solidificação"],correct:0,explanation:"O vácuo evita condução e convecção; as paredes espelhadas reduzem a radiação."},
{id:"8_2_060",unit:"u8_2",lesson:7,type:"multiple",question:"Os painéis solares funcionam captando energia por:",options:["Radiação","Condução","Convecção","Magnetismo"],correct:0,explanation:"Os painéis absorvem radiação solar e convertem em calor ou electricidade."},
{id:"8_2_061",unit:"u8_2",lesson:7,type:"fill",question:"Superfícies ___ absorvem mais calor por radiação.",correct:["escuras","Escuras","pretas","Pretas","negras","Negras"],explanation:"Cores escuras são melhores absorvedoras de radiação."},

// --- Lição 8: Efeito de Estufa e Aplicações ---
{id:"8_2_062",unit:"u8_2",lesson:8,type:"multiple",question:"O efeito de estufa é:",options:["O aprisionamento de calor pela atmosfera da Terra","Um tipo de máquina","Uma forma de energia","Um instrumento de medição"],correct:0,explanation:"Gases como CO₂ retêm calor na atmosfera, aquecendo o planeta."},
{id:"8_2_063",unit:"u8_2",lesson:8,type:"true_false",question:"O efeito de estufa natural é essencial para a vida na Terra.",correct:true,explanation:"Sem ele, a Terra seria demasiado fria para a vida como a conhecemos."},
{id:"8_2_064",unit:"u8_2",lesson:8,type:"multiple",question:"O principal gás responsável pelo efeito de estufa é:",options:["Dióxido de carbono (CO₂)","Oxigénio (O₂)","Nitrogénio (N₂)","Hélio (He)"],correct:0,explanation:"O CO₂ é o principal gás de efeito de estufa de origem humana."},
{id:"8_2_065",unit:"u8_2",lesson:8,type:"fill",question:"O aquecimento global é causado pelo aumento do efeito de ___.",correct:["estufa","Estufa"],explanation:"Mais gases de estufa = mais calor retido = aquecimento global."},
{id:"8_2_066",unit:"u8_2",lesson:8,type:"multiple",question:"Qual actividade humana aumenta mais o efeito de estufa?",options:["Queima de combustíveis fósseis","Andar a pé","Plantar árvores","Usar energia solar"],correct:0,explanation:"Queimar petróleo, carvão e gás liberta grandes quantidades de CO₂."},
{id:"8_2_067",unit:"u8_2",lesson:8,type:"true_false",question:"Plantar árvores ajuda a reduzir o efeito de estufa.",correct:true,explanation:"As árvores absorvem CO₂ da atmosfera durante a fotossíntese."},
{id:"8_2_068",unit:"u8_2",lesson:8,type:"multiple",question:"A garrafa térmica mantém bebidas quentes ou frias porque:",options:["Reduz as três formas de propagação de calor","É feita de metal especial","Tem motor interno","Produz frio"],correct:0,explanation:"Vácuo + paredes espelhadas minimizam condução, convecção e radiação."},


// ============================================================
//  8ª CLASSE - TEMA 3: FENÓMENOS ACÚSTICOS (u8_3)
//  Lições 1-7
// ============================================================

// --- Lição 1: O que é o Som ---
{id:"8_3_001",unit:"u8_3",lesson:1,type:"multiple",question:"O som é produzido por:",options:["Vibrações de um corpo","Luz reflectida","Temperatura do ar","Pressão atmosférica"],correct:0,explanation:"Todo som resulta da vibração de um corpo ou material."},
{id:"8_3_002",unit:"u8_3",lesson:1,type:"true_false",question:"O som precisa de um meio material para se propagar.",correct:true,explanation:"O som não se propaga no vácuo, precisa de ar, água ou sólido."},
{id:"8_3_003",unit:"u8_3",lesson:1,type:"fill",question:"O som é produzido pela ___ de um corpo.",correct:["vibração","Vibração","vibracao","Vibracao"],explanation:"Quando um corpo vibra, faz as partículas do meio vibrarem também."},
{id:"8_3_004",unit:"u8_3",lesson:1,type:"multiple",question:"O som pode propagar-se em:",options:["Sólidos, líquidos e gases","Apenas no ar","Apenas em sólidos","Apenas no vácuo"],correct:0,explanation:"O som propaga-se em qualquer meio material."},
{id:"8_3_005",unit:"u8_3",lesson:1,type:"true_false",question:"No espaço (vácuo), não se ouve som.",correct:true,explanation:"No vácuo não há partículas para transmitir as vibrações."},
{id:"8_3_006",unit:"u8_3",lesson:1,type:"multiple",question:"A fonte sonora é:",options:["O corpo que vibra e produz o som","O ouvido","O ar","O chão"],correct:0,explanation:"A fonte sonora é qualquer objecto que vibra e emite som."},
{id:"8_3_007",unit:"u8_3",lesson:1,type:"fill",question:"O som não se propaga no ___.",correct:["vácuo","Vácuo","vacuo","Vacuo"],explanation:"Sem partículas, não há transmissão de ondas sonoras."},
{id:"8_3_008",unit:"u8_3",lesson:1,type:"multiple",question:"Um exemplo de fonte sonora é:",options:["Todas as opções","Corda de guitarra a vibrar","Diapasão","Coluna de um rádio"],correct:0,explanation:"Qualquer corpo que vibra pode ser uma fonte sonora."},

// --- Lição 2: Propagação do Som ---
{id:"8_3_009",unit:"u8_3",lesson:2,type:"multiple",question:"O som propaga-se mais rápido em:",options:["Sólidos","Líquidos","Gases","Vácuo"],correct:0,explanation:"Nos sólidos as partículas estão mais próximas, transmitindo o som mais rápido."},
{id:"8_3_010",unit:"u8_3",lesson:2,type:"true_false",question:"A velocidade do som no ar é de aproximadamente 340 m/s.",correct:true,explanation:"No ar a 20°C, o som viaja a cerca de 340 m/s (ou 1224 km/h)."},
{id:"8_3_011",unit:"u8_3",lesson:2,type:"fill",question:"A velocidade do som no ar é aproximadamente ___ m/s.",correct:["340","trezentos e quarenta"],explanation:"340 m/s a 20°C ao nível do mar."},
{id:"8_3_012",unit:"u8_3",lesson:2,type:"multiple",question:"A velocidade do som na água é cerca de:",options:["1500 m/s","340 m/s","100 m/s","5000 m/s"],correct:0,explanation:"O som propaga-se mais rápido na água que no ar."},
{id:"8_3_013",unit:"u8_3",lesson:2,type:"multiple",question:"Porque vemos o relâmpago antes de ouvir o trovão?",options:["A luz é muito mais rápida que o som","O som aparece depois","O relâmpago é mais forte","O trovão é mais fraco"],correct:0,explanation:"A luz viaja a 300 000 km/s e o som a apenas 340 m/s."},
{id:"8_3_014",unit:"u8_3",lesson:2,type:"true_false",question:"A velocidade do som depende da temperatura do meio.",correct:true,explanation:"No ar mais quente, o som propaga-se mais rápido."},
{id:"8_3_015",unit:"u8_3",lesson:2,type:"multiple",question:"O som é uma onda:",options:["Longitudinal","Transversal","Electromagnética","Estacionária"],correct:0,explanation:"As ondas sonoras são longitudinais: as partículas vibram na direcção de propagação."},
{id:"8_3_016",unit:"u8_3",lesson:2,type:"fill",question:"O som propaga-se mais rápido em ___ do que em líquidos.",correct:["sólidos","Sólidos"],explanation:"Sólidos > líquidos > gases em velocidade do som."},

// --- Lição 3: Características do Som ---
{id:"8_3_017",unit:"u8_3",lesson:3,type:"multiple",question:"As três características do som são:",options:["Altura, intensidade e timbre","Cor, brilho e forma","Peso, massa e volume","Força, energia e potência"],correct:0,explanation:"Altura (grave/agudo), intensidade (forte/fraco) e timbre (qualidade)."},
{id:"8_3_018",unit:"u8_3",lesson:3,type:"multiple",question:"A altura do som está relacionada com:",options:["A frequência da vibração","A amplitude","O timbre","A velocidade"],correct:0,explanation:"Sons agudos têm alta frequência; sons graves têm baixa frequência."},
{id:"8_3_019",unit:"u8_3",lesson:3,type:"fill",question:"A unidade de frequência é o ___.",correct:["Hertz","hertz","Hz"],explanation:"1 Hz = 1 vibração por segundo."},
{id:"8_3_020",unit:"u8_3",lesson:3,type:"true_false",question:"Sons agudos têm frequência alta.",correct:true,explanation:"Quanto maior a frequência, mais agudo é o som."},
{id:"8_3_021",unit:"u8_3",lesson:3,type:"multiple",question:"A intensidade do som está relacionada com:",options:["A amplitude da vibração","A frequência","O timbre","A cor"],correct:0,explanation:"Maior amplitude = som mais forte (intenso)."},
{id:"8_3_022",unit:"u8_3",lesson:3,type:"multiple",question:"O timbre permite distinguir:",options:["Sons de diferentes instrumentos com a mesma nota","Sons graves de agudos","Sons fortes de fracos","Sons rápidos de lentos"],correct:0,explanation:"O timbre é a 'impressão digital' do som de cada instrumento ou voz."},
{id:"8_3_023",unit:"u8_3",lesson:3,type:"fill",question:"Um som com frequência elevada é um som ___.",correct:["agudo","Agudo"],explanation:"Frequência alta → som agudo. Frequência baixa → som grave."},
{id:"8_3_024",unit:"u8_3",lesson:3,type:"true_false",question:"O timbre permite distinguir a voz de diferentes pessoas.",correct:true,explanation:"Cada voz tem um timbre único, mesmo cantando a mesma nota."},
{id:"8_3_025",unit:"u8_3",lesson:3,type:"multiple",question:"A unidade de intensidade sonora é:",options:["Decibel (dB)","Hertz (Hz)","Watt (W)","Newton (N)"],correct:0,explanation:"O decibel mede a intensidade (volume) do som."},
{id:"8_3_026",unit:"u8_3",lesson:3,type:"multiple",question:"A frequência audível pelo ser humano vai de:",options:["20 Hz a 20 000 Hz","1 Hz a 100 Hz","100 Hz a 1000 Hz","0 Hz a 1 Hz"],correct:0,explanation:"O ouvido humano capta sons entre 20 Hz e 20 000 Hz (20 kHz)."},

// --- Lição 4: Reflexão do Som - Eco ---
{id:"8_3_027",unit:"u8_3",lesson:4,type:"multiple",question:"O que é o eco?",options:["Repetição do som após reflexão num obstáculo distante","Som que desaparece","Som que fica mais alto","Vibração do solo"],correct:0,explanation:"O eco ocorre quando o som reflectido chega ao ouvido com atraso suficiente."},
{id:"8_3_028",unit:"u8_3",lesson:4,type:"true_false",question:"Para ouvir eco, o obstáculo deve estar a pelo menos 17 metros.",correct:true,explanation:"O som precisa de 0,1 s para ser percebido como eco. A 340 m/s, d = 340×0,1/2 ≈ 17 m."},
{id:"8_3_029",unit:"u8_3",lesson:4,type:"fill",question:"A reflexão do som que permite ouvir o som repetido chama-se ___.",correct:["eco","Eco"],explanation:"O eco é a reflexão sonora audível separadamente."},
{id:"8_3_030",unit:"u8_3",lesson:4,type:"multiple",question:"A reverberação é:",options:["O prolongamento do som por múltiplas reflexões","O eco muito forte","O som que desaparece","Um tipo de música"],correct:0,explanation:"Na reverberação, o som reflectido mistura-se com o original."},
{id:"8_3_031",unit:"u8_3",lesson:4,type:"multiple",question:"O sonar funciona usando:",options:["Reflexão do som na água","Reflexão da luz","Ondas de rádio","Raios X"],correct:0,explanation:"O sonar emite sons que reflectem em objectos submersos."},
{id:"8_3_032",unit:"u8_3",lesson:4,type:"true_false",question:"Os morcegos usam o eco para se orientarem.",correct:true,explanation:"Os morcegos emitem ultra-sons e usam o eco para detectar obstáculos e presas."},
{id:"8_3_033",unit:"u8_3",lesson:4,type:"multiple",question:"A ecolocalização é usada por:",options:["Morcegos e golfinhos","Gatos e cães","Peixes e aves","Insectos e répteis"],correct:0,explanation:"Morcegos e golfinhos emitem sons e analisam os ecos para navegar."},
{id:"8_3_034",unit:"u8_3",lesson:4,type:"fill",question:"Os morcegos orientam-se pelo eco, num processo chamado ___.",correct:["ecolocalização","Ecolocalização","ecolocalizacao","Ecolocalizacao"],explanation:"A ecolocalização é um sistema biológico de sonar."},

// --- Lição 5: Ultrassons e Infrassons ---
{id:"8_3_035",unit:"u8_3",lesson:5,type:"multiple",question:"Sons com frequência acima de 20 000 Hz chamam-se:",options:["Ultrassons","Infrassons","Sons normais","Mega-sons"],correct:0,explanation:"Ultra-sons estão acima do limite audível humano."},
{id:"8_3_036",unit:"u8_3",lesson:5,type:"multiple",question:"Sons com frequência abaixo de 20 Hz chamam-se:",options:["Infrassons","Ultrassons","Sons agudos","Ruídos"],correct:0,explanation:"Infra-sons estão abaixo do limite audível humano."},
{id:"8_3_037",unit:"u8_3",lesson:5,type:"true_false",question:"Os cães conseguem ouvir ultra-sons.",correct:true,explanation:"Os cães ouvem frequências até cerca de 45 000 Hz."},
{id:"8_3_038",unit:"u8_3",lesson:5,type:"fill",question:"Sons com frequência superior a 20 000 Hz são ___.",correct:["ultrassons","Ultrassons","ultra-sons","Ultra-sons"],explanation:"Ultra = acima do limite da audição humana."},
{id:"8_3_039",unit:"u8_3",lesson:5,type:"multiple",question:"As ecografias médicas usam:",options:["Ultrassons","Infrassons","Sons normais","Luz infravermelha"],correct:0,explanation:"A ecografia usa ultra-sons para criar imagens do interior do corpo."},
{id:"8_3_040",unit:"u8_3",lesson:5,type:"true_false",question:"Os elefantes comunicam usando infrassons.",correct:true,explanation:"Os elefantes produzem sons muito graves (infrassons) que viajam longas distâncias."},
{id:"8_3_041",unit:"u8_3",lesson:5,type:"multiple",question:"A ecografia é usada para:",options:["Ver o bebé no útero da mãe","Ouvir música","Medir a temperatura","Pesar o paciente"],correct:0,explanation:"Os ultra-sons reflectem nos tecidos e criam uma imagem."},

// --- Lição 6: Poluição Sonora ---
{id:"8_3_042",unit:"u8_3",lesson:6,type:"multiple",question:"O que é poluição sonora?",options:["Excesso de ruído prejudicial à saúde","Som agradável","Música alta","Eco nas montanhas"],correct:0,explanation:"Poluição sonora é ruído excessivo que prejudica a saúde e bem-estar."},
{id:"8_3_043",unit:"u8_3",lesson:6,type:"true_false",question:"Sons acima de 85 dB podem causar danos à audição.",correct:true,explanation:"Exposição prolongada a sons acima de 85 dB pode causar perda auditiva."},
{id:"8_3_044",unit:"u8_3",lesson:6,type:"multiple",question:"A intensidade sonora de uma conversa normal é cerca de:",options:["60 dB","10 dB","120 dB","0 dB"],correct:0,explanation:"Uma conversa normal tem cerca de 60 decibéis."},
{id:"8_3_045",unit:"u8_3",lesson:6,type:"fill",question:"O excesso de ruído que prejudica a saúde chama-se poluição ___.",correct:["sonora","Sonora"],explanation:"A poluição sonora causa stress, insónia e problemas auditivos."},
{id:"8_3_046",unit:"u8_3",lesson:6,type:"multiple",question:"O limiar da dor para o ouvido humano é cerca de:",options:["120-130 dB","50 dB","80 dB","10 dB"],correct:0,explanation:"Sons acima de 120 dB causam dor e podem danificar permanentemente a audição."},
{id:"8_3_047",unit:"u8_3",lesson:6,type:"true_false",question:"Usar auscultadores com volume muito alto pode causar surdez.",correct:true,explanation:"Volumes elevados prolongados danificam as células do ouvido interno."},
{id:"8_3_048",unit:"u8_3",lesson:6,type:"multiple",question:"Como podemos proteger-nos da poluição sonora?",options:["Todas as opções","Usar protectores auriculares","Reduzir o volume dos aparelhos","Afastar-se de fontes de ruído"],correct:0,explanation:"Protecção auditiva é essencial em ambientes ruidosos."},

// --- Lição 7: Instrumentos Musicais ---
{id:"8_3_049",unit:"u8_3",lesson:7,type:"multiple",question:"Os instrumentos musicais classificam-se em:",options:["Cordas, sopro e percussão","Grandes e pequenos","Altos e baixos","Rápidos e lentos"],correct:0,explanation:"As três famílias principais são cordas, sopro e percussão."},
{id:"8_3_050",unit:"u8_3",lesson:7,type:"multiple",question:"A guitarra é um instrumento de:",options:["Cordas","Sopro","Percussão","Electrónico"],correct:0,explanation:"O som da guitarra é produzido pela vibração das cordas."},
{id:"8_3_051",unit:"u8_3",lesson:7,type:"fill",question:"A flauta é um instrumento de ___.",correct:["sopro","Sopro"],explanation:"Na flauta, o som é produzido pela vibração do ar soprado."},
{id:"8_3_052",unit:"u8_3",lesson:7,type:"true_false",question:"O tambor é um instrumento de percussão.",correct:true,explanation:"Na percussão, o som é produzido batendo ou percutindo o instrumento."},
{id:"8_3_053",unit:"u8_3",lesson:7,type:"multiple",question:"Numa corda de guitarra, a nota fica mais aguda quando:",options:["A corda é mais curta ou mais esticada","A corda é mais longa","A corda é mais grossa","A corda é mais solta"],correct:0,explanation:"Cordas mais curtas ou mais tensas vibram com maior frequência."},
{id:"8_3_054",unit:"u8_3",lesson:7,type:"multiple",question:"A caixa de ressonância de um instrumento serve para:",options:["Amplificar o som","Mudar a nota","Silenciar o som","Proteger o instrumento"],correct:0,explanation:"A caixa de ressonância faz vibrar mais ar, amplificando o som."},
{id:"8_3_055",unit:"u8_3",lesson:7,type:"true_false",question:"Uma corda mais grossa produz um som mais grave.",correct:true,explanation:"Cordas mais grossas vibram com menor frequência, produzindo sons graves."},


// ============================================================
//  8ª CLASSE - TEMA 4: FENÓMENOS LUMINOSOS (u8_4)
//  Lições 1-8
// ============================================================

// --- Lição 1: Luz e Fontes de Luz ---
{id:"8_4_001",unit:"u8_4",lesson:1,type:"multiple",question:"A luz é:",options:["Uma forma de energia que se propaga em linha recta","Um tipo de som","Uma substância","Uma força"],correct:0,explanation:"A luz é uma radiação electromagnética visível."},
{id:"8_4_002",unit:"u8_4",lesson:1,type:"true_false",question:"A luz propaga-se em linha recta num meio homogéneo.",correct:true,explanation:"Este é o princípio da propagação rectilínea da luz."},
{id:"8_4_003",unit:"u8_4",lesson:1,type:"multiple",question:"As fontes de luz dividem-se em:",options:["Naturais e artificiais","Grandes e pequenas","Quentes e frias","Rápidas e lentas"],correct:0,explanation:"O Sol é natural; lâmpadas são artificiais."},
{id:"8_4_004",unit:"u8_4",lesson:1,type:"fill",question:"A velocidade da luz é aproximadamente ___ km/s.",correct:["300000","300 000","trezentos mil"],explanation:"A luz viaja a cerca de 300 000 km/s no vácuo."},
{id:"8_4_005",unit:"u8_4",lesson:1,type:"multiple",question:"A velocidade da luz no vácuo é aproximadamente:",options:["300 000 km/s","340 m/s","1500 m/s","30 km/s"],correct:0,explanation:"c ≈ 3 × 10⁸ m/s ou 300 000 km/s."},
{id:"8_4_006",unit:"u8_4",lesson:1,type:"true_false",question:"A Lua é uma fonte de luz natural primária.",correct:false,explanation:"A Lua é uma fonte secundária: reflecte a luz do Sol."},
{id:"8_4_007",unit:"u8_4",lesson:1,type:"multiple",question:"Qual destes é uma fonte de luz natural?",options:["Sol","Lâmpada","Vela","Lanterna"],correct:0,explanation:"O Sol é a principal fonte natural de luz para a Terra."},
{id:"8_4_008",unit:"u8_4",lesson:1,type:"fill",question:"A luz propaga-se em linha ___.",correct:["recta","Recta","reta","Reta"],explanation:"Num meio uniforme, a luz segue trajectória rectilínea."},
{id:"8_4_009",unit:"u8_4",lesson:1,type:"multiple",question:"Corpos que se deixam atravessar totalmente pela luz são:",options:["Transparentes","Opacos","Translúcidos","Escuros"],correct:0,explanation:"Ex: vidro limpo, ar puro."},
{id:"8_4_010",unit:"u8_4",lesson:1,type:"multiple",question:"Corpos que não deixam a luz passar são:",options:["Opacos","Transparentes","Translúcidos","Luminosos"],correct:0,explanation:"Corpos opacos bloqueiam completamente a luz."},

// --- Lição 2: Sombra e Penumbra ---
{id:"8_4_011",unit:"u8_4",lesson:2,type:"multiple",question:"A sombra forma-se porque:",options:["A luz propaga-se em linha recta e é bloqueada por objectos opacos","O ar é escuro","Os objectos absorvem sombra","A luz curva à volta dos objectos"],correct:0,explanation:"Os objectos opacos impedem a passagem da luz, criando sombra atrás deles."},
{id:"8_4_012",unit:"u8_4",lesson:2,type:"true_false",question:"A penumbra é uma zona parcialmente iluminada.",correct:true,explanation:"Na penumbra, parte da luz é bloqueada e parte passa."},
{id:"8_4_013",unit:"u8_4",lesson:2,type:"fill",question:"A zona completamente escura atrás de um objecto opaco chama-se ___.",correct:["sombra","Sombra"],explanation:"Na sombra, nenhuma luz da fonte chega."},
{id:"8_4_014",unit:"u8_4",lesson:2,type:"multiple",question:"Um eclipse solar é causado pela ___ da Lua na Terra.",options:["Sombra","Luz","Rotação","Temperatura"],correct:0,explanation:"A Lua bloqueia a luz do Sol, projectando sombra na Terra."},
{id:"8_4_015",unit:"u8_4",lesson:2,type:"multiple",question:"Objectos translúcidos:",options:["Deixam passar a luz parcialmente, sem nitidez","Bloqueiam toda a luz","São totalmente transparentes","Produzem luz"],correct:0,explanation:"Ex: vidro fosco, papel vegetal. Vê-se luz mas não se vê nitidamente."},
{id:"8_4_016",unit:"u8_4",lesson:2,type:"true_false",question:"A sombra de um objecto é maior quando a fonte de luz está mais próxima.",correct:true,explanation:"Quanto mais perto a fonte, maiores os ângulos e maior a sombra projectada."},

// --- Lição 3: Reflexão da Luz ---
{id:"8_4_017",unit:"u8_4",lesson:3,type:"multiple",question:"A reflexão da luz ocorre quando a luz:",options:["Bate numa superfície e volta","Atravessa um material","Desaparece","Muda de cor"],correct:0,explanation:"A reflexão é o retorno da luz ao meio de onde veio."},
{id:"8_4_018",unit:"u8_4",lesson:3,type:"multiple",question:"Na reflexão, o ângulo de incidência é:",options:["Igual ao ângulo de reflexão","Maior que o de reflexão","Menor que o de reflexão","Sempre 90°"],correct:0,explanation:"Lei da reflexão: ângulo de incidência = ângulo de reflexão."},
{id:"8_4_019",unit:"u8_4",lesson:3,type:"fill",question:"Na reflexão, o ângulo de incidência é ___ ao ângulo de reflexão.",correct:["igual","Igual"],explanation:"Esta é a primeira lei da reflexão."},
{id:"8_4_020",unit:"u8_4",lesson:3,type:"true_false",question:"Conseguimos ver-nos num espelho por causa da reflexão da luz.",correct:true,explanation:"O espelho reflecte a luz de forma regular, formando a nossa imagem."},
{id:"8_4_021",unit:"u8_4",lesson:3,type:"multiple",question:"A reflexão regular ocorre em superfícies:",options:["Lisas e polidas","Rugosas","Ásperas","Irregulares"],correct:0,explanation:"Superfícies lisas reflectem a luz de forma organizada (espelhos)."},
{id:"8_4_022",unit:"u8_4",lesson:3,type:"multiple",question:"A reflexão difusa ocorre em superfícies:",options:["Rugosas e irregulares","Lisas e polidas","Espelhadas","Transparentes"],correct:0,explanation:"Superfícies rugosas espalham a luz em várias direcções."},
{id:"8_4_023",unit:"u8_4",lesson:3,type:"true_false",question:"Vemos os objectos porque eles reflectem a luz para os nossos olhos.",correct:true,explanation:"Excepto as fontes luminosas, vemos os objectos pela luz que reflectem."},
{id:"8_4_024",unit:"u8_4",lesson:3,type:"fill",question:"A lei da reflexão diz: ângulo de ___ = ângulo de reflexão.",correct:["incidência","Incidência","incidencia","Incidencia"],explanation:"Os dois ângulos são medidos em relação à normal da superfície."},

// --- Lição 4: Espelhos Planos ---
{id:"8_4_025",unit:"u8_4",lesson:4,type:"multiple",question:"A imagem num espelho plano é:",options:["Virtual, direita e do mesmo tamanho","Real e invertida","Maior que o objecto","Menor que o objecto"],correct:0,explanation:"O espelho plano forma uma imagem virtual, simétrica e do mesmo tamanho."},
{id:"8_4_026",unit:"u8_4",lesson:4,type:"true_false",question:"A imagem num espelho plano está à mesma distância do espelho que o objecto.",correct:true,explanation:"A distância da imagem ao espelho é igual à distância do objecto ao espelho."},
{id:"8_4_027",unit:"u8_4",lesson:4,type:"fill",question:"A imagem formada por um espelho plano é ___ (real ou virtual).",correct:["virtual","Virtual"],explanation:"Não se pode projectar num ecrã; parece estar atrás do espelho."},
{id:"8_4_028",unit:"u8_4",lesson:4,type:"multiple",question:"No espelho plano, o lado esquerdo do objecto aparece como:",options:["O lado direito da imagem","O mesmo lado","Em cima","Em baixo"],correct:0,explanation:"O espelho plano inverte lateralmente a imagem."},
{id:"8_4_029",unit:"u8_4",lesson:4,type:"true_false",question:"Ambulâncias têm o nome escrito ao contrário para ser lido correctamente nos espelhos retrovisores.",correct:true,explanation:"O espelho inverte a escrita, então escrevem ao contrário para compensar."},
{id:"8_4_030",unit:"u8_4",lesson:4,type:"multiple",question:"Dois espelhos planos em ângulo de 90° formam:",options:["3 imagens","1 imagem","2 imagens","Nenhuma imagem"],correct:0,explanation:"Nº de imagens = (360°/ângulo) - 1 = (360/90) - 1 = 3."},

// --- Lição 5: Espelhos Curvos ---
{id:"8_4_031",unit:"u8_4",lesson:5,type:"multiple",question:"Os espelhos curvos podem ser:",options:["Côncavos e convexos","Apenas côncavos","Apenas convexos","Planos e curvos"],correct:0,explanation:"Côncavos (superfície reflectora interna) e convexos (superfície externa)."},
{id:"8_4_032",unit:"u8_4",lesson:5,type:"true_false",question:"Os espelhos côncavos podem formar imagens reais.",correct:true,explanation:"Espelhos côncavos convergem a luz e podem formar imagens reais."},
{id:"8_4_033",unit:"u8_4",lesson:5,type:"multiple",question:"Os espelhos convexos formam imagens:",options:["Virtuais, direitas e menores","Reais e maiores","Reais e invertidas","Do mesmo tamanho"],correct:0,explanation:"Espelhos convexos divergem a luz e sempre formam imagens virtuais, menores."},
{id:"8_4_034",unit:"u8_4",lesson:5,type:"fill",question:"Os espelhos retrovisores dos carros são geralmente ___.",correct:["convexos","Convexos"],explanation:"Espelhos convexos dão um campo de visão mais amplo."},
{id:"8_4_035",unit:"u8_4",lesson:5,type:"multiple",question:"Um espelho côncavo é usado em:",options:["Faróis de carros e telescópios","Retrovisores","Janelas","Óculos de sol"],correct:0,explanation:"Espelhos côncavos concentram a luz, útil em faróis e antenas."},
{id:"8_4_036",unit:"u8_4",lesson:5,type:"true_false",question:"Um espelho convexo dá um campo de visão mais amplo.",correct:true,explanation:"Por isso são usados como retrovisores e em esquinas de trânsito."},
{id:"8_4_037",unit:"u8_4",lesson:5,type:"multiple",question:"O ponto focal de um espelho côncavo é onde:",options:["Os raios paralelos convergem após reflexão","A imagem desaparece","O espelho se parte","A luz é absorvida"],correct:0,explanation:"Raios paralelos ao eixo convergem no foco do espelho côncavo."},

// --- Lição 6: Refracção da Luz ---
{id:"8_4_038",unit:"u8_4",lesson:6,type:"multiple",question:"A refracção da luz é:",options:["A mudança de direcção da luz ao passar de um meio para outro","A reflexão da luz","A absorção da luz","A criação de sombra"],correct:0,explanation:"A refracção ocorre quando a luz muda de velocidade ao mudar de meio."},
{id:"8_4_039",unit:"u8_4",lesson:6,type:"true_false",question:"Uma colher parece 'partida' dentro de um copo de água por causa da refracção.",correct:true,explanation:"A luz muda de direcção ao passar da água para o ar."},
{id:"8_4_040",unit:"u8_4",lesson:6,type:"fill",question:"A mudança de direcção da luz ao mudar de meio chama-se ___.",correct:["refracção","Refracção","refracao","Refracao","refração","Refração"],explanation:"A refracção ocorre na fronteira entre dois meios diferentes."},
{id:"8_4_041",unit:"u8_4",lesson:6,type:"multiple",question:"A luz refracta-se porque:",options:["Muda de velocidade ao mudar de meio","Muda de cor","Perde energia","O meio é opaco"],correct:0,explanation:"A velocidade da luz é diferente em meios diferentes."},
{id:"8_4_042",unit:"u8_4",lesson:6,type:"multiple",question:"Quando a luz passa do ar para a água, ela:",options:["Diminui a velocidade e aproxima-se da normal","Aumenta a velocidade","Não muda","Desaparece"],correct:0,explanation:"A água é mais densa que o ar, a luz desacelera e refracta."},
{id:"8_4_043",unit:"u8_4",lesson:6,type:"true_false",question:"O arco-íris é formado pela refracção e reflexão da luz na chuva.",correct:true,explanation:"As gotas de água decompõem a luz branca nas cores do espectro."},
{id:"8_4_044",unit:"u8_4",lesson:6,type:"multiple",question:"A decomposição da luz branca nas cores do arco-íris chama-se:",options:["Dispersão","Difusão","Difracção","Absorção"],correct:0,explanation:"A dispersão separa a luz branca nas suas componentes coloridas."},

// --- Lição 7: Lentes ---
{id:"8_4_045",unit:"u8_4",lesson:7,type:"multiple",question:"As lentes convergentes são:",options:["Mais grossas no centro","Mais finas no centro","De espessura uniforme","Planas"],correct:0,explanation:"Lentes convergentes (convexas) são mais espessas no meio."},
{id:"8_4_046",unit:"u8_4",lesson:7,type:"multiple",question:"As lentes divergentes são:",options:["Mais finas no centro","Mais grossas no centro","De espessura uniforme","Côncavas e convexas"],correct:0,explanation:"Lentes divergentes (côncavas) são mais finas no centro."},
{id:"8_4_047",unit:"u8_4",lesson:7,type:"true_false",question:"Uma lupa é uma lente convergente.",correct:true,explanation:"A lupa concentra a luz e amplia os objectos."},
{id:"8_4_048",unit:"u8_4",lesson:7,type:"fill",question:"As lentes que convergem os raios de luz chamam-se lentes ___.",correct:["convergentes","Convergentes"],explanation:"Concentram os raios de luz num ponto focal."},
{id:"8_4_049",unit:"u8_4",lesson:7,type:"multiple",question:"Os óculos para miopia usam lentes:",options:["Divergentes","Convergentes","Planas","Espelhadas"],correct:0,explanation:"Na miopia, a imagem forma-se antes da retina; lentes divergentes corrigem isso."},
{id:"8_4_050",unit:"u8_4",lesson:7,type:"multiple",question:"Os óculos para hipermetropia usam lentes:",options:["Convergentes","Divergentes","Planas","Côncavas"],correct:0,explanation:"Na hipermetropia, a imagem forma-se depois da retina; lentes convergentes corrigem."},
{id:"8_4_051",unit:"u8_4",lesson:7,type:"true_false",question:"O microscópio usa lentes para ampliar objectos muito pequenos.",correct:true,explanation:"O microscópio usa um sistema de lentes convergentes para ampliar."},
{id:"8_4_052",unit:"u8_4",lesson:7,type:"fill",question:"Óculos para miopia usam lentes ___.",correct:["divergentes","Divergentes"],explanation:"As lentes divergentes afastam o ponto focal, corrigindo a miopia."},

// --- Lição 8: O Olho Humano e Aparelhos Ópticos ---
{id:"8_4_053",unit:"u8_4",lesson:8,type:"multiple",question:"O olho humano funciona como:",options:["Uma câmara fotográfica","Um espelho","Uma lupa","Um prisma"],correct:0,explanation:"O olho tem uma lente (cristalino) que foca a imagem na retina."},
{id:"8_4_054",unit:"u8_4",lesson:8,type:"multiple",question:"A parte do olho que funciona como uma lente é:",options:["Cristalino","Retina","Íris","Córnea"],correct:0,explanation:"O cristalino foca a luz na retina ajustando a sua curvatura."},
{id:"8_4_055",unit:"u8_4",lesson:8,type:"fill",question:"A imagem no olho forma-se na ___.",correct:["retina","Retina"],explanation:"A retina contém células sensíveis à luz que enviam sinais ao cérebro."},
{id:"8_4_056",unit:"u8_4",lesson:8,type:"true_false",question:"A íris controla a quantidade de luz que entra no olho.",correct:true,explanation:"A íris ajusta o tamanho da pupila: dilata no escuro, contrai na luz."},
{id:"8_4_057",unit:"u8_4",lesson:8,type:"multiple",question:"A miopia é um defeito visual em que a pessoa:",options:["Vê mal ao longe","Vê mal ao perto","Não distingue cores","Vê tudo duplicado"],correct:0,explanation:"Na miopia, a imagem forma-se antes da retina para objectos distantes."},
{id:"8_4_058",unit:"u8_4",lesson:8,type:"multiple",question:"A hipermetropia é um defeito em que a pessoa:",options:["Vê mal ao perto","Vê mal ao longe","É daltónica","Tem visão dupla"],correct:0,explanation:"Na hipermetropia, a imagem forma-se depois da retina para objectos próximos."},
{id:"8_4_059",unit:"u8_4",lesson:8,type:"fill",question:"O defeito visual em que se vê mal ao longe chama-se ___.",correct:["miopia","Miopia"],explanation:"Corrige-se com lentes divergentes."},
{id:"8_4_060",unit:"u8_4",lesson:8,type:"multiple",question:"Qual aparelho óptico permite ver objectos muito distantes?",options:["Telescópio","Microscópio","Lupa","Periscópio"],correct:0,explanation:"O telescópio usa lentes ou espelhos para ampliar objectos celestes."},
{id:"8_4_061",unit:"u8_4",lesson:8,type:"true_false",question:"A câmara fotográfica funciona de forma semelhante ao olho humano.",correct:true,explanation:"Ambos têm uma lente que foca a imagem numa superfície sensível."},
{id:"8_4_062",unit:"u8_4",lesson:8,type:"multiple",question:"O periscópio usa:",options:["Espelhos para ver por cima de obstáculos","Lentes divergentes","Pilhas","Ímanes"],correct:0,explanation:"Dois espelhos a 45° permitem ver acima do nível dos olhos."},
{id:"8_4_063",unit:"u8_4",lesson:8,type:"multiple",question:"As cores primárias da luz são:",options:["Vermelho, verde e azul","Vermelho, amarelo e azul","Amarelo, ciano e magenta","Preto, branco e cinza"],correct:0,explanation:"RGB (red, green, blue) são as cores primárias da luz."},
{id:"8_4_064",unit:"u8_4",lesson:8,type:"true_false",question:"A luz branca é a mistura de todas as cores do espectro visível.",correct:true,explanation:"Newton demonstrou isto com um prisma que decompõe a luz branca."},
{id:"8_4_065",unit:"u8_4",lesson:8,type:"fill",question:"Um objecto vermelho ___ a luz vermelha e absorve as outras cores.",correct:["reflecte","Reflecte","reflete","Reflete"],explanation:"Vemos a cor que o objecto reflecte; as outras são absorvidas."},
{id:"8_4_066",unit:"u8_4",lesson:8,type:"multiple",question:"Um objecto preto:",options:["Absorve todas as cores da luz","Reflecte todas as cores","Emite luz própria","É transparente"],correct:0,explanation:"O preto absorve toda a luz visível, por isso parece escuro."},
{id:"8_4_067",unit:"u8_4",lesson:8,type:"multiple",question:"Um objecto branco:",options:["Reflecte todas as cores da luz","Absorve todas as cores","É transparente","Emite luz"],correct:0,explanation:"O branco reflecte toda a luz, por isso parece claro."},
{id:"8_4_068",unit:"u8_4",lesson:8,type:"multiple",question:"A fibra óptica transmite informação usando:",options:["Luz","Som","Electricidade","Calor"],correct:0,explanation:"As fibras ópticas usam reflexão interna total para transmitir luz com dados."},

// ============================================================
//  FIM DAS PERGUNTAS DA 8ª CLASSE
// ============================================================

// ============================================================
//  9ª CLASSE - TEMA 1: MOVIMENTO (u9_1)
//  Lições 1-8
// ============================================================

// --- Lição 1: Repouso e Movimento ---
{id:"9_1_001",unit:"u9_1",lesson:1,type:"multiple",question:"Quando dizemos que um corpo está em repouso?",options:["Quando a sua posição não muda em relação a um referencial","Quando está parado em relação ao universo","Quando não tem energia","Quando não tem massa"],correct:0,explanation:"Repouso e movimento dependem sempre de um referencial escolhido."},
{id:"9_1_002",unit:"u9_1",lesson:1,type:"true_false",question:"Um passageiro sentado num autocarro em movimento está em repouso em relação ao autocarro.",correct:true,explanation:"Em relação ao autocarro, a posição do passageiro não muda."},
{id:"9_1_003",unit:"u9_1",lesson:1,type:"fill",question:"O corpo ou ponto usado para analisar o movimento chama-se ___.",correct:["referencial","Referencial"],explanation:"O referencial é o ponto de referência para determinar se há movimento."},
{id:"9_1_004",unit:"u9_1",lesson:1,type:"multiple",question:"O que é referencial?",options:["Corpo em relação ao qual se estuda o movimento","A velocidade do corpo","A força aplicada","O peso do corpo"],correct:0,explanation:"Precisamos de um referencial para dizer se algo se move ou não."},
{id:"9_1_005",unit:"u9_1",lesson:1,type:"true_false",question:"O movimento é relativo.",correct:true,explanation:"Um corpo pode estar em movimento para um observador e em repouso para outro."},
{id:"9_1_006",unit:"u9_1",lesson:1,type:"multiple",question:"Uma pessoa dentro de um comboio em movimento está:",options:["Em repouso em relação ao comboio e em movimento em relação ao solo","Em movimento em relação ao comboio","Em repouso em relação ao solo","Sem referencial possível"],correct:0,explanation:"O estado de movimento depende do referencial escolhido."},
{id:"9_1_007",unit:"u9_1",lesson:1,type:"fill",question:"Um corpo está em ___ quando a sua posição muda em relação a um referencial.",correct:["movimento","Movimento"],explanation:"Movimento implica mudança de posição ao longo do tempo."},
{id:"9_1_008",unit:"u9_1",lesson:1,type:"multiple",question:"O conceito de repouso e movimento é:",options:["Relativo ao referencial","Absoluto e universal","Igual para todos","Independente do observador"],correct:0,explanation:"Não existe repouso ou movimento absoluto na Física."},
{id:"9_1_009",unit:"u9_1",lesson:1,type:"true_false",question:"A Terra está em repouso absoluto no espaço.",correct:false,explanation:"A Terra move-se em torno do Sol, que se move na galáxia, etc."},
{id:"9_1_010",unit:"u9_1",lesson:1,type:"multiple",question:"O que é trajectória?",options:["O caminho descrito por um corpo em movimento","A velocidade do corpo","A força aplicada","A massa do corpo"],correct:0,explanation:"A trajectória pode ser rectilínea, curvilínea, circular, etc."},
{id:"9_1_011",unit:"u9_1",lesson:1,type:"fill",question:"O caminho percorrido por um corpo em movimento chama-se ___.",correct:["trajectória","Trajectória","trajetória","Trajetória","trajectoria","Trajectoria"],explanation:"A trajectória pode ter diferentes formas geométricas."},
{id:"9_1_012",unit:"u9_1",lesson:1,type:"multiple",question:"Uma trajectória em linha recta chama-se:",options:["Rectilínea","Curvilínea","Circular","Elíptica"],correct:0,explanation:"Trajectória rectilínea é quando o corpo se move em linha recta."},

// --- Lição 2: Distância, Deslocamento e Velocidade ---
{id:"9_1_013",unit:"u9_1",lesson:2,type:"multiple",question:"Qual a diferença entre distância e deslocamento?",options:["Distância é o total percorrido; deslocamento é a distância em linha recta entre início e fim","São a mesma coisa","Distância é menor que deslocamento","Deslocamento é o total percorrido"],correct:0,explanation:"O deslocamento tem direcção e sentido (é um vector)."},
{id:"9_1_014",unit:"u9_1",lesson:2,type:"fill",question:"A rapidez com que um corpo se desloca chama-se ___.",correct:["velocidade","Velocidade"],explanation:"Velocidade mede a variação da posição por unidade de tempo."},
{id:"9_1_015",unit:"u9_1",lesson:2,type:"multiple",question:"A unidade SI de velocidade é:",options:["m/s","km/h","cm/s","m/min"],correct:0,explanation:"Metro por segundo (m/s) é a unidade SI de velocidade."},
{id:"9_1_016",unit:"u9_1",lesson:2,type:"multiple",question:"A fórmula da velocidade média é:",options:["v = d / t","v = m × a","v = F / m","v = d × t"],correct:0,explanation:"Velocidade média = distância percorrida / tempo gasto."},
{id:"9_1_017",unit:"u9_1",lesson:2,type:"true_false",question:"36 km/h equivale a 10 m/s.",correct:true,explanation:"Para converter km/h em m/s, divide-se por 3,6: 36/3,6 = 10 m/s."},
{id:"9_1_018",unit:"u9_1",lesson:2,type:"fill",question:"Para converter km/h em m/s, dividimos por ___.",correct:["3,6","3.6"],explanation:"1 km/h = 1000 m / 3600 s = 1/3,6 m/s."},
{id:"9_1_019",unit:"u9_1",lesson:2,type:"multiple",question:"Um carro percorre 200 km em 4 horas. A velocidade média é:",options:["50 km/h","800 km/h","204 km/h","196 km/h"],correct:0,explanation:"v = d/t = 200/4 = 50 km/h."},
{id:"9_1_020",unit:"u9_1",lesson:2,type:"multiple",question:"72 km/h equivale a quantos m/s?",options:["20 m/s","72 m/s","7,2 m/s","720 m/s"],correct:0,explanation:"72 / 3,6 = 20 m/s."},
{id:"9_1_021",unit:"u9_1",lesson:2,type:"true_false",question:"A velocidade média pode ser diferente da velocidade instantânea.",correct:true,explanation:"A velocidade instantânea é a velocidade num dado momento; a média considera todo o percurso."},
{id:"9_1_022",unit:"u9_1",lesson:2,type:"fill",question:"v = d / t. Se d = 100 m e t = 20 s, então v = ___ m/s.",correct:["5"],explanation:"v = 100/20 = 5 m/s."},
{id:"9_1_023",unit:"u9_1",lesson:2,type:"multiple",question:"Um atleta corre 100 m em 10 s. A sua velocidade média é:",options:["10 m/s","100 m/s","1 m/s","1000 m/s"],correct:0,explanation:"v = 100/10 = 10 m/s."},
{id:"9_1_024",unit:"u9_1",lesson:2,type:"multiple",question:"O velocímetro de um carro mostra a velocidade:",options:["Instantânea","Média","Máxima","Mínima"],correct:0,explanation:"O velocímetro indica a velocidade no instante exacto."},

// --- Lição 3: Movimento Rectilíneo Uniforme (MRU) ---
{id:"9_1_025",unit:"u9_1",lesson:3,type:"multiple",question:"O que é o Movimento Rectilíneo Uniforme (MRU)?",options:["Movimento em linha recta com velocidade constante","Movimento com aceleração","Movimento circular","Movimento com velocidade variável"],correct:0,explanation:"No MRU, a velocidade não muda: o corpo percorre distâncias iguais em tempos iguais."},
{id:"9_1_026",unit:"u9_1",lesson:3,type:"true_false",question:"No MRU, a velocidade é constante.",correct:true,explanation:"Uniforme significa velocidade constante ao longo do tempo."},
{id:"9_1_027",unit:"u9_1",lesson:3,type:"fill",question:"No MRU, a aceleração é igual a ___.",correct:["zero","0"],explanation:"Se a velocidade é constante, não há variação de velocidade, logo a = 0."},
{id:"9_1_028",unit:"u9_1",lesson:3,type:"multiple",question:"A equação da posição no MRU é:",options:["x = x₀ + v·t","x = v·t²","x = ½·a·t²","x = m·g·h"],correct:0,explanation:"Posição = posição inicial + velocidade × tempo."},
{id:"9_1_029",unit:"u9_1",lesson:3,type:"multiple",question:"No gráfico posição × tempo do MRU, a curva é:",options:["Uma linha recta inclinada","Uma parábola","Uma hipérbole","Uma linha horizontal"],correct:0,explanation:"A inclinação da recta representa a velocidade constante."},
{id:"9_1_030",unit:"u9_1",lesson:3,type:"true_false",question:"No gráfico velocidade × tempo do MRU, a linha é horizontal.",correct:true,explanation:"Velocidade constante = linha horizontal no gráfico v(t)."},
{id:"9_1_031",unit:"u9_1",lesson:3,type:"multiple",question:"Um corpo em MRU percorre 5 m a cada segundo. Em 10 s percorre:",options:["50 m","15 m","5 m","100 m"],correct:0,explanation:"d = v × t = 5 × 10 = 50 m."},
{id:"9_1_032",unit:"u9_1",lesson:3,type:"fill",question:"No gráfico v(t) do MRU, a área sob a recta representa a ___ percorrida.",correct:["distância","Distância","distancia","Distancia"],explanation:"A área sob o gráfico v×t dá o deslocamento."},
{id:"9_1_033",unit:"u9_1",lesson:3,type:"multiple",question:"Qual é um exemplo aproximado de MRU?",options:["Carro numa autoestrada a velocidade constante","Bola em queda livre","Carro a travar","Foguete a descolar"],correct:0,explanation:"Na estrada reta e plana, com acelerador fixo, aproxima-se do MRU."},
{id:"9_1_034",unit:"u9_1",lesson:3,type:"true_false",question:"No MRU, a resultante das forças sobre o corpo é zero.",correct:true,explanation:"Pela 1ª Lei de Newton, velocidade constante implica força resultante nula."},

// --- Lição 4: Aceleração ---
{id:"9_1_035",unit:"u9_1",lesson:4,type:"multiple",question:"O que é aceleração?",options:["Variação da velocidade por unidade de tempo","A velocidade máxima","A distância percorrida","A massa do corpo"],correct:0,explanation:"A aceleração mede como a velocidade muda ao longo do tempo."},
{id:"9_1_036",unit:"u9_1",lesson:4,type:"fill",question:"A fórmula da aceleração é a = Δv / ___.",correct:["Δt","t","tempo","Tempo"],explanation:"Aceleração = variação de velocidade / intervalo de tempo."},
{id:"9_1_037",unit:"u9_1",lesson:4,type:"multiple",question:"A unidade SI de aceleração é:",options:["m/s²","m/s","km/h","N"],correct:0,explanation:"Metro por segundo ao quadrado (m/s²)."},
{id:"9_1_038",unit:"u9_1",lesson:4,type:"true_false",question:"Quando um carro trava, a aceleração é negativa.",correct:true,explanation:"Aceleração negativa (desaceleração) significa que a velocidade diminui."},
{id:"9_1_039",unit:"u9_1",lesson:4,type:"multiple",question:"Um carro acelera de 0 a 20 m/s em 5 s. A aceleração é:",options:["4 m/s²","20 m/s²","100 m/s²","25 m/s²"],correct:0,explanation:"a = Δv/Δt = (20-0)/5 = 4 m/s²."},
{id:"9_1_040",unit:"u9_1",lesson:4,type:"fill",question:"A unidade SI de aceleração é ___.",correct:["m/s²","m/s2"],explanation:"Metro por segundo ao quadrado."},
{id:"9_1_041",unit:"u9_1",lesson:4,type:"multiple",question:"Se a velocidade de um corpo não muda, a aceleração é:",options:["Zero","Positiva","Negativa","Infinita"],correct:0,explanation:"Sem variação de velocidade, Δv = 0, logo a = 0."},
{id:"9_1_042",unit:"u9_1",lesson:4,type:"true_false",question:"A aceleração pode ter sentido contrário ao do movimento.",correct:true,explanation:"Quando o corpo desacelera, a aceleração opõe-se ao sentido do movimento."},
{id:"9_1_043",unit:"u9_1",lesson:4,type:"multiple",question:"A aceleração da gravidade na Terra vale aproximadamente:",options:["10 m/s²","100 m/s²","1 m/s²","340 m/s²"],correct:0,explanation:"g ≈ 9,8 m/s² ≈ 10 m/s²."},
{id:"9_1_044",unit:"u9_1",lesson:4,type:"multiple",question:"Um corpo acelera de 10 m/s a 30 m/s em 4 s. A aceleração é:",options:["5 m/s²","40 m/s²","20 m/s²","7,5 m/s²"],correct:0,explanation:"a = (30-10)/4 = 20/4 = 5 m/s²."},

// --- Lição 5: Movimento Rectilíneo Uniformemente Variado (MRUV) ---
{id:"9_1_045",unit:"u9_1",lesson:5,type:"multiple",question:"No MRUV, a aceleração é:",options:["Constante e diferente de zero","Zero","Variável","Infinita"],correct:0,explanation:"No MRUV, a velocidade varia de forma uniforme (aceleração constante)."},
{id:"9_1_046",unit:"u9_1",lesson:5,type:"true_false",question:"No MRUV, a velocidade muda ao longo do tempo.",correct:true,explanation:"A velocidade aumenta ou diminui uniformemente."},
{id:"9_1_047",unit:"u9_1",lesson:5,type:"fill",question:"No MRUV, a ___ é constante.",correct:["aceleração","Aceleração","aceleracao","Aceleracao"],explanation:"Aceleração constante é a marca do MRUV."},
{id:"9_1_048",unit:"u9_1",lesson:5,type:"multiple",question:"A equação da velocidade no MRUV é:",options:["v = v₀ + a·t","v = v₀ × t","v = d/t","v = a/t"],correct:0,explanation:"Velocidade final = velocidade inicial + aceleração × tempo."},
{id:"9_1_049",unit:"u9_1",lesson:5,type:"multiple",question:"A equação da posição no MRUV é:",options:["x = x₀ + v₀t + ½at²","x = v₀ + at","x = ½mv²","x = mgh"],correct:0,explanation:"Esta equação inclui o efeito da aceleração constante."},
{id:"9_1_050",unit:"u9_1",lesson:5,type:"true_false",question:"No gráfico v(t) do MRUV, a linha é uma recta inclinada.",correct:true,explanation:"A inclinação da recta v(t) representa a aceleração constante."},
{id:"9_1_051",unit:"u9_1",lesson:5,type:"multiple",question:"No gráfico posição × tempo do MRUV, a curva é:",options:["Uma parábola","Uma linha recta","Uma hipérbole","Um círculo"],correct:0,explanation:"A posição varia com t², resultando numa parábola."},
{id:"9_1_052",unit:"u9_1",lesson:5,type:"multiple",question:"Um corpo parte do repouso com a = 2 m/s². Após 5 s, a velocidade é:",options:["10 m/s","7 m/s","2,5 m/s","25 m/s"],correct:0,explanation:"v = v₀ + at = 0 + 2×5 = 10 m/s."},
{id:"9_1_053",unit:"u9_1",lesson:5,type:"fill",question:"v = v₀ + a·t. Se v₀ = 0, a = 3 m/s² e t = 4 s, então v = ___ m/s.",correct:["12"],explanation:"v = 0 + 3×4 = 12 m/s."},
{id:"9_1_054",unit:"u9_1",lesson:5,type:"true_false",question:"A queda livre é um exemplo de MRUV.",correct:true,explanation:"Na queda livre, a aceleração é constante (g ≈ 10 m/s²)."},

// --- Lição 6: Queda Livre ---
{id:"9_1_055",unit:"u9_1",lesson:6,type:"multiple",question:"O que é queda livre?",options:["Movimento de um corpo sob acção exclusiva da gravidade","Queda com pára-quedas","Queda dentro de água","Queda com resistência do ar"],correct:0,explanation:"Na queda livre ideal, a única força é a gravidade."},
{id:"9_1_056",unit:"u9_1",lesson:6,type:"true_false",question:"Na queda livre, todos os corpos caem com a mesma aceleração independente da massa.",correct:true,explanation:"Galileu provou que a aceleração da gravidade é igual para todos os corpos (sem resistência do ar)."},
{id:"9_1_057",unit:"u9_1",lesson:6,type:"fill",question:"Na queda livre, a aceleração é igual a ___ (símbolo).",correct:["g","G"],explanation:"g é a aceleração da gravidade, cerca de 9,8 m/s²."},
{id:"9_1_058",unit:"u9_1",lesson:6,type:"multiple",question:"Um objecto em queda livre parte do repouso. Após 3 s, a sua velocidade é (g=10 m/s²):",options:["30 m/s","3 m/s","10 m/s","90 m/s"],correct:0,explanation:"v = g × t = 10 × 3 = 30 m/s."},
{id:"9_1_059",unit:"u9_1",lesson:6,type:"multiple",question:"A distância percorrida em queda livre em 2 s (g=10 m/s²) é:",options:["20 m","40 m","10 m","4 m"],correct:0,explanation:"d = ½gt² = ½ × 10 × 4 = 20 m."},
{id:"9_1_060",unit:"u9_1",lesson:6,type:"true_false",question:"Uma pena e uma bola de ferro caem ao mesmo tempo no vácuo.",correct:true,explanation:"Sem resistência do ar, ambos caem com a mesma aceleração g."},
{id:"9_1_061",unit:"u9_1",lesson:6,type:"fill",question:"Na queda livre, d = ½g___².",correct:["t","T"],explanation:"A distância depende do quadrado do tempo."},
{id:"9_1_062",unit:"u9_1",lesson:6,type:"multiple",question:"Quem demonstrou que corpos de massas diferentes caem ao mesmo tempo?",options:["Galileu Galilei","Isaac Newton","Albert Einstein","Arquimedes"],correct:0,explanation:"Galileu fez experiências na Torre de Pisa (segundo a tradição)."},
{id:"9_1_063",unit:"u9_1",lesson:6,type:"multiple",question:"Na queda livre, ao fim de 1 s a velocidade é (g=10 m/s²):",options:["10 m/s","1 m/s","5 m/s","100 m/s"],correct:0,explanation:"v = g × t = 10 × 1 = 10 m/s."},
{id:"9_1_064",unit:"u9_1",lesson:6,type:"true_false",question:"Na atmosfera, a resistência do ar afecta a queda dos corpos.",correct:true,explanation:"No mundo real, a resistência do ar faz objectos leves caírem mais devagar."},

// --- Lição 7: Leis de Newton ---
{id:"9_1_065",unit:"u9_1",lesson:7,type:"multiple",question:"A 1ª Lei de Newton (Lei da Inércia) diz que:",options:["Um corpo mantém o seu estado de repouso ou movimento uniforme se nenhuma força actuar","Um corpo sempre pára","Toda a força tem uma reacção","F = ma"],correct:0,explanation:"Sem forças externas, o corpo não muda o seu estado de movimento."},
{id:"9_1_066",unit:"u9_1",lesson:7,type:"fill",question:"A propriedade de um corpo manter o seu estado de movimento chama-se ___.",correct:["inércia","Inércia","inercia","Inercia"],explanation:"A inércia é proporcional à massa do corpo."},
{id:"9_1_067",unit:"u9_1",lesson:7,type:"true_false",question:"Quando um autocarro trava bruscamente, os passageiros inclinam-se para a frente por causa da inércia.",correct:true,explanation:"Os corpos dos passageiros tendem a continuar em movimento."},
{id:"9_1_068",unit:"u9_1",lesson:7,type:"multiple",question:"A 2ª Lei de Newton diz que:",options:["F = m × a","F = m × v","F = m × g","F = m / a"],correct:0,explanation:"A força resultante é igual à massa vezes a aceleração."},
{id:"9_1_069",unit:"u9_1",lesson:7,type:"multiple",question:"Qual a aceleração de um corpo de 5 kg sujeito a uma força resultante de 20 N?",options:["4 m/s²","100 m/s²","25 m/s²","15 m/s²"],correct:0,explanation:"a = F/m = 20/5 = 4 m/s²."},
{id:"9_1_070",unit:"u9_1",lesson:7,type:"fill",question:"Pela 2ª Lei de Newton, F = m × ___.",correct:["a","A","aceleração","aceleracao"],explanation:"Força = massa × aceleração."},
{id:"9_1_071",unit:"u9_1",lesson:7,type:"true_false",question:"Para a mesma força, um corpo de maior massa tem menor aceleração.",correct:true,explanation:"a = F/m: mais massa significa menos aceleração para a mesma força."},
{id:"9_1_072",unit:"u9_1",lesson:7,type:"multiple",question:"A 3ª Lei de Newton diz que:",options:["Para toda acção existe uma reacção igual e oposta","Os corpos mais pesados caem mais rápido","F = ma","A velocidade é constante"],correct:0,explanation:"Forças existem sempre aos pares: acção e reacção."},
{id:"9_1_073",unit:"u9_1",lesson:7,type:"multiple",question:"Qual a força necessária para dar aceleração de 3 m/s² a um corpo de 10 kg?",options:["30 N","3,3 N","13 N","7 N"],correct:0,explanation:"F = m × a = 10 × 3 = 30 N."},
{id:"9_1_074",unit:"u9_1",lesson:7,type:"fill",question:"A 1ª Lei de Newton também é chamada Lei da ___.",correct:["Inércia","inércia","inercia","Inercia"],explanation:"Inércia é a tendência de manter o estado de movimento."},
{id:"9_1_075",unit:"u9_1",lesson:7,type:"true_false",question:"Usar cinto de segurança protege contra os efeitos da inércia.",correct:true,explanation:"Numa travagem, o cinto impede o corpo de continuar em movimento para a frente."},

// --- Lição 8: Aplicações e Exercícios de Movimento ---
{id:"9_1_076",unit:"u9_1",lesson:8,type:"multiple",question:"Um carro viaja a 90 km/h. Em m/s, a velocidade é:",options:["25 m/s","90 m/s","9 m/s","250 m/s"],correct:0,explanation:"90 / 3,6 = 25 m/s."},
{id:"9_1_077",unit:"u9_1",lesson:8,type:"multiple",question:"Um corpo com v₀ = 5 m/s e a = 2 m/s². Após 3 s, v é:",options:["11 m/s","6 m/s","10 m/s","15 m/s"],correct:0,explanation:"v = v₀ + at = 5 + 2×3 = 11 m/s."},
{id:"9_1_078",unit:"u9_1",lesson:8,type:"fill",question:"108 km/h equivale a ___ m/s.",correct:["30"],explanation:"108 / 3,6 = 30 m/s."},
{id:"9_1_079",unit:"u9_1",lesson:8,type:"multiple",question:"Uma bola é lançada verticalmente para cima com v₀ = 20 m/s. Tempo para parar (g=10 m/s²):",options:["2 s","20 s","10 s","1 s"],correct:0,explanation:"v = v₀ - gt → 0 = 20 - 10t → t = 2 s."},
{id:"9_1_080",unit:"u9_1",lesson:8,type:"true_false",question:"A distância de travagem de um carro aumenta com a velocidade.",correct:true,explanation:"A distância depende do quadrado da velocidade: d = v²/(2a)."},
{id:"9_1_081",unit:"u9_1",lesson:8,type:"multiple",question:"Um corpo de 2 kg cai em queda livre. A força que actua nele é (g=10 m/s²):",options:["20 N","2 N","10 N","200 N"],correct:0,explanation:"F = mg = 2 × 10 = 20 N (o peso do corpo)."},
{id:"9_1_082",unit:"u9_1",lesson:8,type:"multiple",question:"Se duplicamos a massa e mantemos a força, a aceleração:",options:["Fica metade","Duplica","Fica igual","Triplica"],correct:0,explanation:"a = F/m. Se m duplica, a = F/(2m) = metade."},
{id:"9_1_083",unit:"u9_1",lesson:8,type:"fill",question:"Um corpo percorre 80 m em 4 s com MRU. A velocidade é ___ m/s.",correct:["20"],explanation:"v = d/t = 80/4 = 20 m/s."},
{id:"9_1_084",unit:"u9_1",lesson:8,type:"multiple",question:"No MRUV, se v₀ = 0 e a = 5 m/s², a distância em 4 s é:",options:["40 m","20 m","80 m","10 m"],correct:0,explanation:"d = ½at² = ½ × 5 × 16 = 40 m."},
{id:"9_1_085",unit:"u9_1",lesson:8,type:"true_false",question:"A 2ª Lei de Newton pode ser escrita como a = F/m.",correct:true,explanation:"F = ma pode ser rearranjada para a = F/m."},
{id:"9_1_086",unit:"u9_1",lesson:8,type:"multiple",question:"Um ciclista parte do repouso e atinge 15 m/s em 5 s. A aceleração é:",options:["3 m/s²","75 m/s²","10 m/s²","20 m/s²"],correct:0,explanation:"a = Δv/Δt = 15/5 = 3 m/s²."},


// ============================================================
//  9ª CLASSE - TEMA 2: ELECTROSTÁTICA (u9_2)
//  Lições 1-7
// ============================================================

// --- Lição 1: Carga Eléctrica ---
{id:"9_2_001",unit:"u9_2",lesson:1,type:"multiple",question:"Existem quantos tipos de carga eléctrica?",options:["2: positiva e negativa","1: positiva","3: positiva, negativa e neutra","4 tipos diferentes"],correct:0,explanation:"As cargas eléctricas são de dois tipos: positiva (+) e negativa (-)."},
{id:"9_2_002",unit:"u9_2",lesson:1,type:"true_false",question:"Cargas de sinais iguais repelem-se.",correct:true,explanation:"Cargas iguais (++ ou --) repelem-se; cargas diferentes (+-) atraem-se."},
{id:"9_2_003",unit:"u9_2",lesson:1,type:"fill",question:"Cargas de sinais ___ atraem-se.",correct:["contrários","Contrários","opostos","Opostos","diferentes","Diferentes"],explanation:"A atracção ocorre entre cargas positiva e negativa."},
{id:"9_2_004",unit:"u9_2",lesson:1,type:"multiple",question:"A unidade de carga eléctrica é:",options:["Coulomb (C)","Ampere (A)","Volt (V)","Ohm (Ω)"],correct:0,explanation:"O Coulomb (C) é a unidade SI de carga eléctrica."},
{id:"9_2_005",unit:"u9_2",lesson:1,type:"multiple",question:"O protão tem carga:",options:["Positiva","Negativa","Neutra","Variável"],correct:0,explanation:"O protão tem carga positiva; o electrão tem carga negativa."},
{id:"9_2_006",unit:"u9_2",lesson:1,type:"true_false",question:"O electrão tem carga negativa.",correct:true,explanation:"Os electrões são as partículas com carga negativa no átomo."},
{id:"9_2_007",unit:"u9_2",lesson:1,type:"fill",question:"A partícula subatómica com carga negativa é o ___.",correct:["electrão","Electrão","eletrão","Eletrão","electron","eletron"],explanation:"Os electrões orbitam o núcleo do átomo."},
{id:"9_2_008",unit:"u9_2",lesson:1,type:"multiple",question:"Um corpo está electricamente neutro quando:",options:["Tem igual número de protões e electrões","Não tem cargas","Só tem protões","Só tem electrões"],correct:0,explanation:"Neutro significa que as cargas positivas e negativas se equilibram."},
{id:"9_2_009",unit:"u9_2",lesson:1,type:"true_false",question:"O neutrão tem carga eléctrica neutra (zero).",correct:true,explanation:"O neutrão não tem carga eléctrica."},
{id:"9_2_010",unit:"u9_2",lesson:1,type:"multiple",question:"A carga do electrão vale:",options:["1,6 × 10⁻¹⁹ C","1 C","1,6 C","9,8 C"],correct:0,explanation:"A carga elementar é e = 1,6 × 10⁻¹⁹ Coulomb."},

// --- Lição 2: Electrização ---
{id:"9_2_011",unit:"u9_2",lesson:2,type:"multiple",question:"Quais são os processos de electrização?",options:["Atrito, contacto e indução","Apenas atrito","Apenas contacto","Apenas indução"],correct:0,explanation:"Existem três formas principais de electrizar um corpo."},
{id:"9_2_012",unit:"u9_2",lesson:2,type:"fill",question:"Quando esfregamos um pente no cabelo e ele atrai papéis, houve electrização por ___.",correct:["atrito","Atrito"],explanation:"O atrito transfere electrões de um corpo para outro."},
{id:"9_2_013",unit:"u9_2",lesson:2,type:"true_false",question:"Na electrização por atrito, os dois corpos ficam com cargas de sinais opostos.",correct:true,explanation:"Um perde electrões (fica +) e o outro ganha (fica -)."},
{id:"9_2_014",unit:"u9_2",lesson:2,type:"multiple",question:"Na electrização por contacto:",options:["Os corpos ficam com cargas de mesmo sinal","Os corpos ficam com cargas opostas","Não há transferência de cargas","Apenas protões se movem"],correct:0,explanation:"No contacto, cargas passam de um corpo para outro até equilibrar."},
{id:"9_2_015",unit:"u9_2",lesson:2,type:"multiple",question:"Na electrização por indução:",options:["Não há contacto directo entre os corpos","É necessário esfregar os corpos","Não há redistribuição de cargas","Apenas funciona com metais"],correct:0,explanation:"Um corpo carregado aproxima-se e reorganiza as cargas do outro à distância."},
{id:"9_2_016",unit:"u9_2",lesson:2,type:"true_false",question:"Na electrização, são os electrões que se transferem, não os protões.",correct:true,explanation:"Os protões estão presos no núcleo; os electrões movem-se facilmente."},
{id:"9_2_017",unit:"u9_2",lesson:2,type:"fill",question:"Quando aproximamos um corpo carregado de outro sem tocar, ocorre electrização por ___.",correct:["indução","Indução","inducao","Inducao"],explanation:"A indução redistribui as cargas no corpo neutro."},
{id:"9_2_018",unit:"u9_2",lesson:2,type:"multiple",question:"Se um corpo perde electrões, ele fica com carga:",options:["Positiva","Negativa","Neutra","Dupla"],correct:0,explanation:"Menos electrões (-) do que protões (+) resulta em carga total positiva."},

// --- Lição 3: Condutores e Isolantes ---
{id:"9_2_019",unit:"u9_2",lesson:3,type:"multiple",question:"Materiais condutores são aqueles que:",options:["Permitem a passagem fácil de cargas eléctricas","Bloqueiam completamente as cargas","Não existem na natureza","Só conduzem calor"],correct:0,explanation:"Condutores têm electrões livres que se movem facilmente."},
{id:"9_2_020",unit:"u9_2",lesson:3,type:"fill",question:"Materiais que não conduzem electricidade facilmente são chamados ___.",correct:["isolantes","Isolantes","isoladores","Isoladores"],explanation:"Isolantes não permitem o fluxo livre de electrões."},
{id:"9_2_021",unit:"u9_2",lesson:3,type:"multiple",question:"Qual destes é um bom condutor eléctrico?",options:["Cobre","Borracha","Vidro","Plástico"],correct:0,explanation:"O cobre é um dos melhores condutores eléctricos."},
{id:"9_2_022",unit:"u9_2",lesson:3,type:"true_false",question:"Os metais são geralmente bons condutores eléctricos.",correct:true,explanation:"Os metais têm muitos electrões livres."},
{id:"9_2_023",unit:"u9_2",lesson:3,type:"multiple",question:"Qual destes é um isolante eléctrico?",options:["Borracha","Alumínio","Ferro","Cobre"],correct:0,explanation:"A borracha não permite a passagem fácil de corrente eléctrica."},
{id:"9_2_024",unit:"u9_2",lesson:3,type:"fill",question:"Os fios eléctricos são revestidos com ___ para protecção.",correct:["isolante","Isolante","plástico","Plástico","borracha","Borracha"],explanation:"O revestimento isolante evita choques eléctricos."},
{id:"9_2_025",unit:"u9_2",lesson:3,type:"true_false",question:"A água pura é um bom condutor eléctrico.",correct:false,explanation:"A água pura é um mau condutor; a água com sais dissolvidos conduz bem."},
{id:"9_2_026",unit:"u9_2",lesson:3,type:"multiple",question:"Os semicondutores são materiais que:",options:["Conduzem electricidade em certas condições","Nunca conduzem","Sempre conduzem perfeitamente","São iguais aos isolantes"],correct:0,explanation:"Silício e germânio são semicondutores usados em electrónica."},

// --- Lição 4: Lei de Coulomb ---
{id:"9_2_027",unit:"u9_2",lesson:4,type:"multiple",question:"A Lei de Coulomb descreve a força entre:",options:["Duas cargas eléctricas","Dois ímanes","Dois corpos em movimento","Dois planetas"],correct:0,explanation:"Coulomb quantificou a força entre cargas eléctricas pontuais."},
{id:"9_2_028",unit:"u9_2",lesson:4,type:"fill",question:"A força eléctrica entre duas cargas é directamente proporcional ao produto das cargas e ___ proporcional ao quadrado da distância.",correct:["inversamente","Inversamente"],explanation:"F = k × q₁ × q₂ / d². Mais distância, menos força."},
{id:"9_2_029",unit:"u9_2",lesson:4,type:"true_false",question:"A força eléctrica diminui quando aumenta a distância entre as cargas.",correct:true,explanation:"A força varia com o inverso do quadrado da distância."},
{id:"9_2_030",unit:"u9_2",lesson:4,type:"multiple",question:"Se a distância entre duas cargas duplicar, a força eléctrica:",options:["Fica 4 vezes menor","Fica 2 vezes menor","Duplica","Fica 4 vezes maior"],correct:0,explanation:"F ∝ 1/d². Se d duplica, F = F₀/4."},
{id:"9_2_031",unit:"u9_2",lesson:4,type:"multiple",question:"A constante de Coulomb (k) no vácuo vale aproximadamente:",options:["9 × 10⁹ N·m²/C²","6,67 × 10⁻¹¹","3 × 10⁸","1,6 × 10⁻¹⁹"],correct:0,explanation:"k = 9 × 10⁹ N·m²/C² é a constante electrostática."},
{id:"9_2_032",unit:"u9_2",lesson:4,type:"true_false",question:"A Lei de Coulomb é semelhante à Lei da Gravitação Universal.",correct:true,explanation:"Ambas dependem do produto de duas grandezas e do inverso do quadrado da distância."},
{id:"9_2_033",unit:"u9_2",lesson:4,type:"fill",question:"A fórmula da Lei de Coulomb é F = k × q₁ × q₂ / ___².",correct:["d","r","D","R"],explanation:"d é a distância entre as duas cargas."},

// --- Lição 5: Campo Eléctrico ---
{id:"9_2_034",unit:"u9_2",lesson:5,type:"multiple",question:"O que é o campo eléctrico?",options:["Região do espaço onde uma carga sofre força eléctrica","Um tipo de pilha","Uma corrente eléctrica","Um fio condutor"],correct:0,explanation:"Toda carga eléctrica cria um campo eléctrico ao seu redor."},
{id:"9_2_035",unit:"u9_2",lesson:5,type:"fill",question:"O campo eléctrico é representado por linhas de ___.",correct:["força","Força"],explanation:"As linhas de campo indicam a direcção e sentido da força eléctrica."},
{id:"9_2_036",unit:"u9_2",lesson:5,type:"true_false",question:"As linhas de campo eléctrico saem da carga positiva e entram na carga negativa.",correct:true,explanation:"Por convenção, o sentido das linhas é do + para o -."},
{id:"9_2_037",unit:"u9_2",lesson:5,type:"multiple",question:"A unidade de campo eléctrico é:",options:["N/C ou V/m","C/m","A/m","W/m"],correct:0,explanation:"Newton por Coulomb (N/C) ou Volt por metro (V/m)."},
{id:"9_2_038",unit:"u9_2",lesson:5,type:"multiple",question:"O campo eléctrico é mais intenso onde as linhas de campo estão:",options:["Mais juntas","Mais afastadas","Curvas","Horizontais"],correct:0,explanation:"Maior densidade de linhas = campo mais forte."},
{id:"9_2_039",unit:"u9_2",lesson:5,type:"true_false",question:"As linhas de campo eléctrico nunca se cruzam.",correct:true,explanation:"Se se cruzassem, haveria duas direcções para a força num mesmo ponto."},
{id:"9_2_040",unit:"u9_2",lesson:5,type:"fill",question:"A fórmula do campo eléctrico é E = F / ___.",correct:["q","Q","carga"],explanation:"Campo eléctrico = Força / carga de prova."},

// --- Lição 6: Potencial Eléctrico ---
{id:"9_2_041",unit:"u9_2",lesson:6,type:"multiple",question:"O que é o potencial eléctrico?",options:["Energia potencial por unidade de carga","Corrente por unidade de tempo","Força por unidade de massa","Carga por unidade de volume"],correct:0,explanation:"O potencial mede a energia eléctrica associada a uma unidade de carga."},
{id:"9_2_042",unit:"u9_2",lesson:6,type:"fill",question:"A unidade de potencial eléctrico é o ___.",correct:["Volt","volt","V"],explanation:"O Volt (V) mede a diferença de potencial eléctrico."},
{id:"9_2_043",unit:"u9_2",lesson:6,type:"true_false",question:"A diferença de potencial (ddp) é necessária para que haja corrente eléctrica.",correct:true,explanation:"Sem ddp, não há fluxo de cargas."},
{id:"9_2_044",unit:"u9_2",lesson:6,type:"multiple",question:"Uma pilha de 1,5 V fornece uma diferença de potencial de:",options:["1,5 V","1,5 A","1,5 Ω","1,5 W"],correct:0,explanation:"A pilha fornece 1,5 Volt de diferença de potencial."},
{id:"9_2_045",unit:"u9_2",lesson:6,type:"multiple",question:"O instrumento que mede a diferença de potencial é:",options:["Voltímetro","Amperímetro","Ohmímetro","Wattímetro"],correct:0,explanation:"O voltímetro mede a tensão (ddp) entre dois pontos."},
{id:"9_2_046",unit:"u9_2",lesson:6,type:"fill",question:"O instrumento para medir a diferença de potencial é o ___.",correct:["voltímetro","Voltímetro","voltimetro","Voltimetro"],explanation:"Liga-se em paralelo no circuito."},
{id:"9_2_047",unit:"u9_2",lesson:6,type:"true_false",question:"O voltímetro liga-se em paralelo no circuito.",correct:true,explanation:"Diferente do amperímetro que se liga em série."},

// --- Lição 7: Descargas Eléctricas e Pára-raios ---
{id:"9_2_048",unit:"u9_2",lesson:7,type:"multiple",question:"O relâmpago é um exemplo de:",options:["Descarga eléctrica na atmosfera","Corrente contínua","Magnetismo","Força gravitacional"],correct:0,explanation:"O relâmpago é uma descarga eléctrica gigantesca entre nuvens ou entre nuvem e solo."},
{id:"9_2_049",unit:"u9_2",lesson:7,type:"true_false",question:"O pára-raios protege edifícios conduzindo a descarga eléctrica para o solo.",correct:true,explanation:"O pára-raios oferece um caminho seguro para a corrente eléctrica chegar ao solo."},
{id:"9_2_050",unit:"u9_2",lesson:7,type:"fill",question:"O dispositivo que protege edifícios dos raios chama-se ___.",correct:["pára-raios","Pára-raios","para-raios","Para-raios","pararaios"],explanation:"Benjamin Franklin inventou o pára-raios."},
{id:"9_2_051",unit:"u9_2",lesson:7,type:"multiple",question:"Quem inventou o pára-raios?",options:["Benjamin Franklin","Thomas Edison","Nikola Tesla","Michael Faraday"],correct:0,explanation:"Franklin demonstrou a natureza eléctrica dos relâmpagos em 1752."},
{id:"9_2_052",unit:"u9_2",lesson:7,type:"multiple",question:"As nuvens ficam carregadas electricamente por:",options:["Atrito entre partículas de gelo e gotas de água","Acção do Sol","Magnetismo da Terra","Radiação cósmica"],correct:0,explanation:"O atrito dentro das nuvens de tempestade separa as cargas."},
{id:"9_2_053",unit:"u9_2",lesson:7,type:"true_false",question:"Devemos evitar ficar debaixo de árvores durante tempestades.",correct:true,explanation:"Árvores altas atraem raios, colocando quem está perto em perigo."},
{id:"9_2_054",unit:"u9_2",lesson:7,type:"multiple",question:"A carga de um raio pode atingir:",options:["Milhões de volts","Poucos volts","Apenas 100 V","Menos de 1 V"],correct:0,explanation:"Um raio pode ter diferenças de potencial de centenas de milhões de volts."},
{id:"9_2_055",unit:"u9_2",lesson:7,type:"fill",question:"O relâmpago é uma descarga ___ natural.",correct:["eléctrica","Eléctrica","elétrica","Elétrica","eletrica","Eletrica"],explanation:"É a maior descarga eléctrica natural que conhecemos."},


// ============================================================
//  9ª CLASSE - TEMA 3: ENERGIA ELÉCTRICA (u9_3)
//  Lições 1-8
// ============================================================

// --- Lição 1: Corrente Eléctrica ---
{id:"9_3_001",unit:"u9_3",lesson:1,type:"multiple",question:"O que é corrente eléctrica?",options:["Movimento ordenado de cargas eléctricas","Acumulação de cargas","Cargas paradas","Força magnética"],correct:0,explanation:"A corrente eléctrica é o fluxo de electrões num condutor."},
{id:"9_3_002",unit:"u9_3",lesson:1,type:"fill",question:"A unidade SI de corrente eléctrica é o ___.",correct:["Ampere","ampere","A"],explanation:"O Ampere (A) mede a intensidade da corrente eléctrica."},
{id:"9_3_003",unit:"u9_3",lesson:1,type:"multiple",question:"O instrumento que mede a corrente eléctrica é:",options:["Amperímetro","Voltímetro","Ohmímetro","Termómetro"],correct:0,explanation:"O amperímetro mede a intensidade da corrente eléctrica."},
{id:"9_3_004",unit:"u9_3",lesson:1,type:"true_false",question:"O amperímetro liga-se em série no circuito.",correct:true,explanation:"Para medir a corrente, o amperímetro deve ser atravessado por toda a corrente."},
{id:"9_3_005",unit:"u9_3",lesson:1,type:"multiple",question:"O sentido convencional da corrente é:",options:["Do polo positivo ao negativo (fora do gerador)","Do polo negativo ao positivo","Aleatório","Não tem sentido definido"],correct:0,explanation:"Por convenção, a corrente vai do + ao -, embora os electrões façam o contrário."},
{id:"9_3_006",unit:"u9_3",lesson:1,type:"fill",question:"O instrumento para medir a intensidade da corrente é o ___.",correct:["amperímetro","Amperímetro","amperimetro","Amperimetro"],explanation:"Liga-se em série com o componente a medir."},
{id:"9_3_007",unit:"u9_3",lesson:1,type:"true_false",question:"O sentido real da corrente é o sentido de movimento dos electrões.",correct:true,explanation:"Os electrões movem-se do - para o +, contrário ao sentido convencional."},
{id:"9_3_008",unit:"u9_3",lesson:1,type:"multiple",question:"A corrente contínua (CC) é aquela em que:",options:["Os electrões fluem sempre no mesmo sentido","Os electrões mudam de direcção constantemente","Não há fluxo de electrões","A corrente é muito fraca"],correct:0,explanation:"Pilhas e baterias fornecem corrente contínua."},
{id:"9_3_009",unit:"u9_3",lesson:1,type:"multiple",question:"A corrente alternada (CA) é fornecida por:",options:["Tomadas de parede (rede eléctrica)","Pilhas","Baterias de carro","Células solares"],correct:0,explanation:"A rede eléctrica doméstica fornece corrente alternada."},
{id:"9_3_010",unit:"u9_3",lesson:1,type:"fill",question:"Pilhas fornecem corrente ___ (CC).",correct:["contínua","Contínua","continua","Continua"],explanation:"Na CC, a corrente flui sempre num sentido."},

// --- Lição 2: Circuitos Eléctricos ---
{id:"9_3_011",unit:"u9_3",lesson:2,type:"multiple",question:"Os componentes básicos de um circuito eléctrico são:",options:["Gerador, condutor, receptor e interruptor","Apenas fios","Apenas lâmpadas","Apenas pilhas"],correct:0,explanation:"Um circuito básico precisa de fonte de energia, condutor, consumidor e interruptor."},
{id:"9_3_012",unit:"u9_3",lesson:2,type:"true_false",question:"Um circuito precisa estar fechado para a corrente circular.",correct:true,explanation:"A corrente só flui num circuito completo (fechado)."},
{id:"9_3_013",unit:"u9_3",lesson:2,type:"fill",question:"Para a corrente circular, o circuito deve estar ___.",correct:["fechado","Fechado"],explanation:"Circuito aberto = sem corrente. Circuito fechado = corrente flui."},
{id:"9_3_014",unit:"u9_3",lesson:2,type:"multiple",question:"Num circuito em série, a corrente:",options:["É a mesma em todos os componentes","É diferente em cada componente","Não existe","Só passa pelo primeiro componente"],correct:0,explanation:"Em série, toda a corrente passa por todos os componentes."},
{id:"9_3_015",unit:"u9_3",lesson:2,type:"multiple",question:"Num circuito em paralelo, a tensão:",options:["É a mesma em todos os ramos","É diferente em cada ramo","Não existe","Só está no primeiro ramo"],correct:0,explanation:"Em paralelo, todos os ramos têm a mesma diferença de potencial."},
{id:"9_3_016",unit:"u9_3",lesson:2,type:"true_false",question:"Se uma lâmpada se fundir num circuito em série, todas as outras apagam.",correct:true,explanation:"Em série, se um componente falha, o circuito abre e a corrente para."},
{id:"9_3_017",unit:"u9_3",lesson:2,type:"fill",question:"Num circuito em ___, se uma lâmpada fundir, as outras continuam acesas.",correct:["paralelo","Paralelo"],explanation:"Em paralelo, cada ramo é independente."},
{id:"9_3_018",unit:"u9_3",lesson:2,type:"multiple",question:"O interruptor serve para:",options:["Abrir e fechar o circuito","Aumentar a corrente","Diminuir a tensão","Medir a resistência"],correct:0,explanation:"O interruptor controla o fluxo de corrente ligando ou desligando o circuito."},
{id:"9_3_019",unit:"u9_3",lesson:2,type:"multiple",question:"As lâmpadas de Natal em série têm que desvantagem?",options:["Se uma fundir, todas apagam","Gastam mais energia","São mais caras","Duram menos"],correct:0,explanation:"Em série, uma lâmpada fundida interrompe todo o circuito."},
{id:"9_3_020",unit:"u9_3",lesson:2,type:"true_false",question:"As tomadas de casa estão ligadas em paralelo.",correct:true,explanation:"Assim, cada aparelho recebe a mesma tensão e funciona independentemente."},

// --- Lição 3: Resistência Eléctrica ---
{id:"9_3_021",unit:"u9_3",lesson:3,type:"multiple",question:"O que é resistência eléctrica?",options:["Oposição à passagem da corrente eléctrica","Ajuda à corrente","Um tipo de fio","Uma pilha especial"],correct:0,explanation:"A resistência dificulta a passagem da corrente no material."},
{id:"9_3_022",unit:"u9_3",lesson:3,type:"fill",question:"A unidade SI de resistência eléctrica é o ___.",correct:["Ohm","ohm","Ω"],explanation:"O Ohm (Ω) é a unidade de resistência, em homenagem a Georg Ohm."},
{id:"9_3_023",unit:"u9_3",lesson:3,type:"multiple",question:"A resistência de um condutor depende de:",options:["Material, comprimento, secção e temperatura","Apenas da cor","Apenas do peso","Apenas da marca"],correct:0,explanation:"R = ρ × L / A (resistividade × comprimento / área da secção)."},
{id:"9_3_024",unit:"u9_3",lesson:3,type:"true_false",question:"Quanto maior o comprimento de um fio, maior a sua resistência.",correct:true,explanation:"Fios mais longos oferecem mais resistência à corrente."},
{id:"9_3_025",unit:"u9_3",lesson:3,type:"true_false",question:"Quanto maior a secção (espessura) do fio, menor a resistência.",correct:true,explanation:"Fios mais grossos permitem passar mais corrente com menos resistência."},
{id:"9_3_026",unit:"u9_3",lesson:3,type:"fill",question:"Quanto maior o comprimento do fio, ___ é a sua resistência.",correct:["maior","Maior"],explanation:"R é directamente proporcional ao comprimento L."},
{id:"9_3_027",unit:"u9_3",lesson:3,type:"multiple",question:"O componente usado para limitar a corrente num circuito chama-se:",options:["Resistor (resistência)","Interruptor","Pilha","Fusível"],correct:0,explanation:"Resistores têm valores fixos de resistência para controlar a corrente."},
{id:"9_3_028",unit:"u9_3",lesson:3,type:"multiple",question:"Resistência em série: a resistência total é:",options:["A soma das resistências individuais","A soma inversa","O produto","A menor delas"],correct:0,explanation:"Rt = R₁ + R₂ + R₃ + ... em série."},
{id:"9_3_029",unit:"u9_3",lesson:3,type:"fill",question:"Duas resistências de 10 Ω em série dão uma resistência total de ___ Ω.",correct:["20"],explanation:"Rt = R₁ + R₂ = 10 + 10 = 20 Ω."},
{id:"9_3_030",unit:"u9_3",lesson:3,type:"true_false",question:"Duas resistências iguais em paralelo resultam numa resistência total igual à metade.",correct:true,explanation:"1/Rt = 1/R + 1/R = 2/R → Rt = R/2."},

// --- Lição 4: Lei de Ohm ---
{id:"9_3_031",unit:"u9_3",lesson:4,type:"multiple",question:"A Lei de Ohm diz que:",options:["U = R × I","U = R / I","R = U × I","I = U × R"],correct:0,explanation:"Tensão = Resistência × Corrente."},
{id:"9_3_032",unit:"u9_3",lesson:4,type:"fill",question:"A Lei de Ohm é expressa pela fórmula U = R × ___.",correct:["I","i"],explanation:"I é a intensidade da corrente eléctrica."},
{id:"9_3_033",unit:"u9_3",lesson:4,type:"multiple",question:"Se U = 12 V e R = 4 Ω, a corrente I é:",options:["3 A","48 A","16 A","8 A"],correct:0,explanation:"I = U/R = 12/4 = 3 A."},
{id:"9_3_034",unit:"u9_3",lesson:4,type:"true_false",question:"Segundo a Lei de Ohm, se a tensão aumenta e a resistência é constante, a corrente aumenta.",correct:true,explanation:"I = U/R: mais tensão com mesma resistência dá mais corrente."},
{id:"9_3_035",unit:"u9_3",lesson:4,type:"multiple",question:"Se I = 2 A e R = 6 Ω, a tensão U é:",options:["12 V","3 V","8 V","4 V"],correct:0,explanation:"U = R × I = 6 × 2 = 12 V."},
{id:"9_3_036",unit:"u9_3",lesson:4,type:"fill",question:"Se U = 20 V e I = 5 A, então R = ___ Ω.",correct:["4"],explanation:"R = U/I = 20/5 = 4 Ω."},
{id:"9_3_037",unit:"u9_3",lesson:4,type:"multiple",question:"Um condutor que obedece à Lei de Ohm é chamado:",options:["Condutor óhmico","Condutor perfeito","Semicondutor","Superconductor"],correct:0,explanation:"Condutores óhmicos mantêm R constante para diferentes valores de U e I."},
{id:"9_3_038",unit:"u9_3",lesson:4,type:"true_false",question:"Uma lâmpada incandescente é um exemplo de condutor não-óhmico.",correct:true,explanation:"A resistência da lâmpada muda com a temperatura do filamento."},
{id:"9_3_039",unit:"u9_3",lesson:4,type:"multiple",question:"No gráfico U × I de um condutor óhmico, a curva é:",options:["Uma recta que passa pela origem","Uma parábola","Um círculo","Uma hipérbole"],correct:0,explanation:"U = RI é uma relação linear que resulta numa recta."},
{id:"9_3_040",unit:"u9_3",lesson:4,type:"fill",question:"Se R = 10 Ω e I = 0,5 A, a tensão é ___ V.",correct:["5"],explanation:"U = RI = 10 × 0,5 = 5 V."},

// --- Lição 5: Potência Eléctrica ---
{id:"9_3_041",unit:"u9_3",lesson:5,type:"multiple",question:"A fórmula da potência eléctrica é:",options:["P = U × I","P = U / I","P = I / U","P = R × I"],correct:0,explanation:"Potência = Tensão × Corrente."},
{id:"9_3_042",unit:"u9_3",lesson:5,type:"fill",question:"A unidade SI de potência eléctrica é o ___.",correct:["Watt","watt","W"],explanation:"1 Watt = 1 Volt × 1 Ampere."},
{id:"9_3_043",unit:"u9_3",lesson:5,type:"multiple",question:"Se U = 220 V e I = 2 A, a potência é:",options:["440 W","110 W","222 W","218 W"],correct:0,explanation:"P = U × I = 220 × 2 = 440 W."},
{id:"9_3_044",unit:"u9_3",lesson:5,type:"true_false",question:"Uma lâmpada de 100 W consome mais energia que uma de 60 W.",correct:true,explanation:"Mais watts = mais potência = mais consumo de energia."},
{id:"9_3_045",unit:"u9_3",lesson:5,type:"multiple",question:"A potência pode também ser calculada por:",options:["Todas as fórmulas são válidas","P = R × I²","P = U²/R","P = U × I"],correct:0,explanation:"P = UI = RI² = U²/R são formas equivalentes."},
{id:"9_3_046",unit:"u9_3",lesson:5,type:"fill",question:"P = U × I. Se P = 100 W e U = 220 V, então I ≈ ___ A.",correct:["0,45","0.45","0,5"],explanation:"I = P/U = 100/220 ≈ 0,45 A."},
{id:"9_3_047",unit:"u9_3",lesson:5,type:"multiple",question:"O quilowatt-hora (kWh) é uma unidade de:",options:["Energia","Potência","Corrente","Tensão"],correct:0,explanation:"kWh = potência × tempo. É energia consumida, usada nas contas de luz."},
{id:"9_3_048",unit:"u9_3",lesson:5,type:"true_false",question:"A conta de electricidade é cobrada em kWh.",correct:true,explanation:"O contador de energia mede em quilowatt-hora (kWh)."},
{id:"9_3_049",unit:"u9_3",lesson:5,type:"fill",question:"Uma lâmpada de 100 W ligada 10 horas consome ___ Wh de energia.",correct:["1000","1 kWh"],explanation:"E = P × t = 100 × 10 = 1000 Wh = 1 kWh."},
{id:"9_3_050",unit:"u9_3",lesson:5,type:"multiple",question:"1 kWh equivale a:",options:["3 600 000 J","1000 J","3600 J","100 J"],correct:0,explanation:"1 kWh = 1000 W × 3600 s = 3 600 000 J = 3,6 MJ."},

// --- Lição 6: Efeito Térmico da Corrente (Efeito Joule) ---
{id:"9_3_051",unit:"u9_3",lesson:6,type:"multiple",question:"O efeito Joule é:",options:["A produção de calor pela passagem de corrente eléctrica","A produção de luz","A produção de som","A produção de magnetismo"],correct:0,explanation:"Quando a corrente atravessa um resistor, parte da energia converte-se em calor."},
{id:"9_3_052",unit:"u9_3",lesson:6,type:"true_false",question:"Um aquecedor eléctrico funciona pelo efeito Joule.",correct:true,explanation:"A corrente aquece a resistência do aquecedor, que liberta calor."},
{id:"9_3_053",unit:"u9_3",lesson:6,type:"fill",question:"A produção de calor pela passagem de corrente chama-se efeito ___.",correct:["Joule","joule"],explanation:"James Joule estudou a relação entre calor e electricidade."},
{id:"9_3_054",unit:"u9_3",lesson:6,type:"multiple",question:"A fórmula da energia dissipada por efeito Joule é:",options:["Q = R × I² × t","Q = U / I","Q = m × c × ΔT","Q = F × d"],correct:0,explanation:"Q = RI²t dá a energia convertida em calor."},
{id:"9_3_055",unit:"u9_3",lesson:6,type:"multiple",question:"Qual destes aparelhos NÃO usa o efeito Joule como função principal?",options:["Rádio","Ferro de engomar","Aquecedor","Torradeira"],correct:0,explanation:"O rádio converte energia eléctrica em som, não em calor."},
{id:"9_3_056",unit:"u9_3",lesson:6,type:"true_false",question:"O ferro de engomar, a torradeira e o secador usam o efeito Joule.",correct:true,explanation:"Todos eles convertem energia eléctrica em calor para funcionar."},
{id:"9_3_057",unit:"u9_3",lesson:6,type:"fill",question:"A lâmpada incandescente produz luz pelo aquecimento do ___ (efeito Joule).",correct:["filamento","Filamento"],explanation:"O filamento de tungsténio aquece até ficar incandescente."},
{id:"9_3_058",unit:"u9_3",lesson:6,type:"multiple",question:"Porque é que os fios eléctricos aquecem quando há sobrecarga?",options:["O excesso de corrente aumenta o efeito Joule","Os fios são velhos","Falta ventilação","Os fios encolhem"],correct:0,explanation:"Q = RI²t: corrente elevada gera muito calor, podendo causar incêndio."},

// --- Lição 7: Segurança Eléctrica ---
{id:"9_3_059",unit:"u9_3",lesson:7,type:"multiple",question:"O fusível protege o circuito contra:",options:["Sobrecarga e curto-circuito","Falta de energia","Pouca corrente","Variação de temperatura"],correct:0,explanation:"O fusível funde-se quando a corrente excede o limite, abrindo o circuito."},
{id:"9_3_060",unit:"u9_3",lesson:7,type:"true_false",question:"O curto-circuito acontece quando a corrente flui por um caminho de resistência muito baixa.",correct:true,explanation:"No curto-circuito, a corrente aumenta perigosamente."},
{id:"9_3_061",unit:"u9_3",lesson:7,type:"fill",question:"O dispositivo que interrompe o circuito em caso de sobrecarga é o ___.",correct:["fusível","Fusível","fusivel","Fusivel","disjuntor","Disjuntor"],explanation:"Fusíveis e disjuntores protegem contra sobrecargas."},
{id:"9_3_062",unit:"u9_3",lesson:7,type:"multiple",question:"A ligação à terra serve para:",options:["Proteger pessoas de choques eléctricos","Aumentar a corrente","Diminuir a tensão","Poupar energia"],correct:0,explanation:"A terra fornece um caminho seguro para correntes de fuga."},
{id:"9_3_063",unit:"u9_3",lesson:7,type:"multiple",question:"Por que não devemos usar aparelhos eléctricos com as mãos molhadas?",options:["A água conduz electricidade e pode causar choque","Os aparelhos estragam-se","A água é isolante","Não há perigo"],correct:0,explanation:"A água (com sais) conduz electricidade, facilitando o choque."},
{id:"9_3_064",unit:"u9_3",lesson:7,type:"true_false",question:"Os disjuntores podem ser religados após dispararem, ao contrário dos fusíveis.",correct:true,explanation:"Os fusíveis fundem e precisam ser substituídos; disjuntores são resetados."},
{id:"9_3_065",unit:"u9_3",lesson:7,type:"fill",question:"A ligação à ___ protege contra choques eléctricos.",correct:["terra","Terra"],explanation:"O fio terra conduz correntes de fuga para o solo em segurança."},
{id:"9_3_066",unit:"u9_3",lesson:7,type:"multiple",question:"Qual a cor convencional do fio terra?",options:["Verde e amarelo","Azul","Castanho","Vermelho"],correct:0,explanation:"O fio terra é verde-amarelo; fase é castanho/preto; neutro é azul."},

// --- Lição 8: Energia Eléctrica e Sustentabilidade ---
{id:"9_3_067",unit:"u9_3",lesson:8,type:"multiple",question:"A maior parte da electricidade em Angola é produzida por:",options:["Centrais hidroeléctricas","Centrais nucleares","Centrais eólicas","Centrais geotérmicas"],correct:0,explanation:"Angola tem grande potencial hídrico e várias barragens."},
{id:"9_3_068",unit:"u9_3",lesson:8,type:"true_false",question:"A energia hidroeléctrica é renovável.",correct:true,explanation:"A água é renovada pelo ciclo hidrológico natural."},
{id:"9_3_069",unit:"u9_3",lesson:8,type:"fill",question:"A energia produzida a partir da água dos rios chama-se energia ___.",correct:["hidroeléctrica","Hidroeléctrica","hidroeletrica","Hidroeletrica","hídrica"],explanation:"Barragens convertem energia da água em electricidade."},
{id:"9_3_070",unit:"u9_3",lesson:8,type:"multiple",question:"Para poupar energia eléctrica devemos:",options:["Todas as opções","Desligar aparelhos quando não usamos","Usar lâmpadas LED","Evitar desperdício"],correct:0,explanation:"Pequenas acções diárias reduzem o consumo de energia."},
{id:"9_3_071",unit:"u9_3",lesson:8,type:"multiple",question:"As lâmpadas LED são melhores porque:",options:["Gastam muito menos energia e duram mais","São mais bonitas","São mais pesadas","São mais quentes"],correct:0,explanation:"LEDs são muito mais eficientes que lâmpadas incandescentes."},
{id:"9_3_072",unit:"u9_3",lesson:8,type:"true_false",question:"A energia solar pode ser convertida em electricidade por painéis fotovoltaicos.",correct:true,explanation:"Células fotovoltaicas convertem luz solar directamente em electricidade."},
{id:"9_3_073",unit:"u9_3",lesson:8,type:"fill",question:"As lâmpadas ___ são mais eficientes e poupam energia.",correct:["LED","led","Led"],explanation:"LED = Light Emitting Diode (diodo emissor de luz)."},
{id:"9_3_074",unit:"u9_3",lesson:8,type:"multiple",question:"A energia eólica vem:",options:["Do vento","Da água","Do Sol directamente","Do carvão"],correct:0,explanation:"Turbinas eólicas convertem a energia do vento em electricidade."},


// ============================================================
//  9ª CLASSE - TEMA 4: ELECTRICIDADE E MAGNETISMO (u9_4)
//  Lições 1-7
// ============================================================

// --- Lição 1: Ímanes e Propriedades ---
{id:"9_4_001",unit:"u9_4",lesson:1,type:"multiple",question:"Quantos polos tem um íman?",options:["2: Norte e Sul","1: Norte","3: Norte, Sul e Centro","4 polos"],correct:0,explanation:"Todo íman tem polo Norte (N) e polo Sul (S)."},
{id:"9_4_002",unit:"u9_4",lesson:1,type:"true_false",question:"Polos magnéticos iguais repelem-se.",correct:true,explanation:"Norte-Norte e Sul-Sul repelem-se; Norte-Sul atraem-se."},
{id:"9_4_003",unit:"u9_4",lesson:1,type:"fill",question:"Os polos de um íman são o polo ___ e o polo Sul.",correct:["Norte","norte"],explanation:"N e S são os dois polos magnéticos de qualquer íman."},
{id:"9_4_004",unit:"u9_4",lesson:1,type:"multiple",question:"Se partirmos um íman ao meio, obtemos:",options:["Dois ímanes completos, cada um com N e S","Um polo Norte e um polo Sul separados","Dois pedaços sem magnetismo","Um pólo apenas"],correct:0,explanation:"Não é possível isolar um polo magnético; cada pedaço terá N e S."},
{id:"9_4_005",unit:"u9_4",lesson:1,type:"true_false",question:"Os ímanes atraem todos os metais.",correct:false,explanation:"Os ímanes atraem materiais ferromagnéticos como ferro, cobalto e níquel."},
{id:"9_4_006",unit:"u9_4",lesson:1,type:"fill",question:"Materiais atraídos por ímanes são chamados materiais ___.",correct:["ferromagnéticos","Ferromagnéticos","ferromagneticos","Ferromagneticos","magnéticos"],explanation:"Ferro, cobalto, níquel e algumas ligas são ferromagnéticos."},
{id:"9_4_007",unit:"u9_4",lesson:1,type:"multiple",question:"Qual destes materiais é ferromagnético?",options:["Ferro","Alumínio","Cobre","Ouro"],correct:0,explanation:"O ferro é o material ferromagnético mais comum."},
{id:"9_4_008",unit:"u9_4",lesson:1,type:"multiple",question:"Os ímanes podem ser:",options:["Naturais e artificiais","Apenas naturais","Apenas artificiais","Nem naturais nem artificiais"],correct:0,explanation:"Magnetita é natural; ímanes de ferrite são artificiais."},
{id:"9_4_009",unit:"u9_4",lesson:1,type:"true_false",question:"A magnetita é um íman natural.",correct:true,explanation:"A magnetita (Fe₃O₄) é um mineral com propriedades magnéticas naturais."},
{id:"9_4_010",unit:"u9_4",lesson:1,type:"multiple",question:"A região ao redor de um íman onde se sentem forças magnéticas chama-se:",options:["Campo magnético","Campo eléctrico","Campo gravitacional","Atmosfera magnética"],correct:0,explanation:"O campo magnético é a região de influência do íman."},

// --- Lição 2: Campo Magnético ---
{id:"9_4_011",unit:"u9_4",lesson:2,type:"multiple",question:"As linhas de campo magnético saem do polo:",options:["Norte e entram no Sul","Sul e entram no Norte","Norte e ficam no Norte","Saem dos dois lados"],correct:0,explanation:"Por convenção, as linhas saem do N e entram no S (fora do íman)."},
{id:"9_4_012",unit:"u9_4",lesson:2,type:"true_false",question:"As linhas de campo magnético são fechadas.",correct:true,explanation:"As linhas formam curvas fechadas que saem do N, vão ao S e continuam por dentro do íman."},
{id:"9_4_013",unit:"u9_4",lesson:2,type:"fill",question:"As linhas de campo magnético saem do polo ___ do íman.",correct:["Norte","norte","N"],explanation:"Saem de N e entram em S por fora do íman."},
{id:"9_4_014",unit:"u9_4",lesson:2,type:"multiple",question:"Para visualizar as linhas de campo magnético podemos usar:",options:["Limalha de ferro","Água","Areia","Sal"],correct:0,explanation:"A limalha de ferro alinha-se com as linhas do campo magnético."},
{id:"9_4_015",unit:"u9_4",lesson:2,type:"multiple",question:"O campo magnético é mais intenso:",options:["Perto dos polos do íman","No centro do íman","Longe do íman","Em nenhum ponto específico"],correct:0,explanation:"As linhas de campo são mais densas junto aos polos."},
{id:"9_4_016",unit:"u9_4",lesson:2,type:"true_false",question:"A Terra comporta-se como um grande íman.",correct:true,explanation:"A Terra tem um campo magnético com polo magnético Norte e Sul."},
{id:"9_4_017",unit:"u9_4",lesson:2,type:"fill",question:"O instrumento que usa o campo magnético da Terra para orientação é a ___.",correct:["bússola","Bússola","bussola","Bussola"],explanation:"A agulha da bússola alinha-se com o campo magnético terrestre."},
{id:"9_4_018",unit:"u9_4",lesson:2,type:"multiple",question:"A bússola funciona porque:",options:["A sua agulha magnética alinha-se com o campo da Terra","Tem pilha interna","Usa satélites","Funciona com luz solar"],correct:0,explanation:"A agulha magnetizada aponta para o polo magnético Norte."},

// --- Lição 3: Electromagnetismo ---
{id:"9_4_019",unit:"u9_4",lesson:3,type:"multiple",question:"Quem descobriu que corrente eléctrica cria campo magnético?",options:["Hans Oersted","Michael Faraday","James Maxwell","André Ampère"],correct:0,explanation:"Oersted descobriu em 1820 que uma corrente desvia uma agulha magnética."},
{id:"9_4_020",unit:"u9_4",lesson:3,type:"true_false",question:"Um fio com corrente eléctrica cria um campo magnético ao seu redor.",correct:true,explanation:"A experiência de Oersted demonstrou a ligação entre electricidade e magnetismo."},
{id:"9_4_021",unit:"u9_4",lesson:3,type:"fill",question:"A relação entre electricidade e magnetismo chama-se ___.",correct:["electromagnetismo","Electromagnetismo","eletromagnetismo","Eletromagnetismo"],explanation:"O electromagnetismo unifica os fenómenos eléctricos e magnéticos."},
{id:"9_4_022",unit:"u9_4",lesson:3,type:"multiple",question:"Para aumentar o campo magnético de uma bobina com corrente, podemos:",options:["Todas as opções","Aumentar a corrente","Aumentar o número de espiras","Colocar um núcleo de ferro"],correct:0,explanation:"Todas essas acções intensificam o campo magnético."},
{id:"9_4_023",unit:"u9_4",lesson:3,type:"multiple",question:"O que é um electroíman?",options:["Íman criado pela passagem de corrente numa bobina","Íman natural","Íman permanente","Pilha magnética"],correct:0,explanation:"O electroíman só funciona quando há corrente eléctrica."},
{id:"9_4_024",unit:"u9_4",lesson:3,type:"true_false",question:"Um electroíman pode ser ligado e desligado.",correct:true,explanation:"Basta ligar ou desligar a corrente para activar ou desactivar o magnetismo."},
{id:"9_4_025",unit:"u9_4",lesson:3,type:"fill",question:"Um íman que funciona com corrente eléctrica é um ___.",correct:["electroíman","Electroíman","eletroíman","Eletroíman","eletroiman","Eletroiman","electroiman"],explanation:"O electroíman tem magnetismo controlável."},
{id:"9_4_026",unit:"u9_4",lesson:3,type:"multiple",question:"Os electroímanes são usados em:",options:["Todas as opções","Gruas de sucata","Campainhas eléctricas","Motores eléctricos"],correct:0,explanation:"Os electroímanes têm inúmeras aplicações práticas."},

// --- Lição 4: Motor Eléctrico ---
{id:"9_4_027",unit:"u9_4",lesson:4,type:"multiple",question:"O motor eléctrico converte:",options:["Energia eléctrica em energia mecânica (movimento)","Energia mecânica em eléctrica","Energia térmica em eléctrica","Energia luminosa em eléctrica"],correct:0,explanation:"O motor transforma corrente eléctrica em movimento rotativo."},
{id:"9_4_028",unit:"u9_4",lesson:4,type:"true_false",question:"O motor eléctrico funciona pela interacção entre corrente e campo magnético.",correct:true,explanation:"Uma corrente num campo magnético sofre uma força (Força de Lorentz)."},
{id:"9_4_029",unit:"u9_4",lesson:4,type:"fill",question:"O motor eléctrico converte energia ___ em energia mecânica.",correct:["eléctrica","Eléctrica","elétrica","Elétrica","eletrica","Eletrica"],explanation:"O motor usa electricidade para produzir movimento."},
{id:"9_4_030",unit:"u9_4",lesson:4,type:"multiple",question:"Qual aparelho doméstico tem motor eléctrico?",options:["Todas as opções","Ventilador","Máquina de lavar","Liquidificador"],correct:0,explanation:"Muitos aparelhos usam motores eléctricos para funcionar."},
{id:"9_4_031",unit:"u9_4",lesson:4,type:"multiple",question:"O princípio de funcionamento do motor eléctrico baseia-se na força que actua sobre:",options:["Um condutor com corrente num campo magnético","Um íman no vácuo","Duas cargas iguais","Dois corpos em repouso"],correct:0,explanation:"A força magnética sobre a corrente faz o rotor girar."},
{id:"9_4_032",unit:"u9_4",lesson:4,type:"true_false",question:"Os carros eléctricos usam motores eléctricos em vez de motores a combustão.",correct:true,explanation:"Motores eléctricos são mais eficientes e não poluem directamente."},

// --- Lição 5: Indução Electromagnética ---
{id:"9_4_033",unit:"u9_4",lesson:5,type:"multiple",question:"A indução electromagnética foi descoberta por:",options:["Michael Faraday","Isaac Newton","Albert Einstein","Nikola Tesla"],correct:0,explanation:"Faraday descobriu em 1831 que um campo magnético variável produz corrente."},
{id:"9_4_034",unit:"u9_4",lesson:5,type:"true_false",question:"Um íman em movimento perto de uma bobina gera corrente eléctrica.",correct:true,explanation:"A variação do campo magnético induz uma corrente na bobina."},
{id:"9_4_035",unit:"u9_4",lesson:5,type:"fill",question:"A produção de corrente por variação do campo magnético chama-se indução ___.",correct:["electromagnética","Electromagnética","eletromagnética","Eletromagnética","electromagnetica","Electromagnetica"],explanation:"Faraday demonstrou que magnetismo pode gerar electricidade."},
{id:"9_4_036",unit:"u9_4",lesson:5,type:"multiple",question:"O gerador eléctrico converte:",options:["Energia mecânica em energia eléctrica","Energia eléctrica em mecânica","Energia térmica em mecânica","Energia luminosa em térmica"],correct:0,explanation:"O gerador é o oposto do motor: movimento gera electricidade."},
{id:"9_4_037",unit:"u9_4",lesson:5,type:"multiple",question:"Para induzir corrente numa bobina é necessário:",options:["Variar o campo magnético que a atravessa","Manter o campo constante","Aquecer a bobina","Iluminar a bobina"],correct:0,explanation:"É a variação (movimento do íman ou da bobina) que gera corrente."},
{id:"9_4_038",unit:"u9_4",lesson:5,type:"true_false",question:"As centrais eléctricas usam o princípio da indução electromagnética.",correct:true,explanation:"Turbinas giram geradores que produzem electricidade por indução."},
{id:"9_4_039",unit:"u9_4",lesson:5,type:"fill",question:"O aparelho que converte energia mecânica em eléctrica é o ___.",correct:["gerador","Gerador"],explanation:"Geradores funcionam pelo princípio de Faraday."},
{id:"9_4_040",unit:"u9_4",lesson:5,type:"multiple",question:"O dínamo de uma bicicleta é um exemplo de:",options:["Gerador eléctrico","Motor eléctrico","Electroíman","Transformador"],correct:0,explanation:"O dínamo converte o movimento da roda em electricidade para a luz."},

// --- Lição 6: Transformadores ---
{id:"9_4_041",unit:"u9_4",lesson:6,type:"multiple",question:"O transformador serve para:",options:["Aumentar ou diminuir a tensão eléctrica","Armazenar energia","Produzir energia","Medir corrente"],correct:0,explanation:"Transformadores alteram o valor da tensão alternada."},
{id:"9_4_042",unit:"u9_4",lesson:6,type:"true_false",question:"Os transformadores só funcionam com corrente alternada.",correct:true,explanation:"A indução requer campo magnético variável, que a CA fornece."},
{id:"9_4_043",unit:"u9_4",lesson:6,type:"fill",question:"Um transformador que aumenta a tensão é chamado ___.",correct:["elevador","Elevador"],explanation:"Transformador elevador: mais espiras no secundário que no primário."},
{id:"9_4_044",unit:"u9_4",lesson:6,type:"multiple",question:"Um transformador elevador tem:",options:["Mais espiras no enrolamento secundário","Mais espiras no enrolamento primário","Espiras iguais","Sem espiras"],correct:0,explanation:"Mais espiras no secundário = tensão mais alta na saída."},
{id:"9_4_045",unit:"u9_4",lesson:6,type:"multiple",question:"O carregador do telemóvel contém um transformador que:",options:["Reduz a tensão de 220 V para poucos volts","Aumenta a tensão","Mantém a tensão igual","Não altera a tensão"],correct:0,explanation:"O carregador baixa a tensão da rede para o nível seguro para o aparelho."},
{id:"9_4_046",unit:"u9_4",lesson:6,type:"fill",question:"Um transformador que diminui a tensão é chamado ___.",correct:["redutor","Redutor","abaixador","Abaixador"],explanation:"Transformador redutor: menos espiras no secundário."},
{id:"9_4_047",unit:"u9_4",lesson:6,type:"true_false",question:"A transmissão de electricidade a longa distância usa alta tensão para reduzir perdas.",correct:true,explanation:"Alta tensão = menos corrente = menos perdas por efeito Joule nos cabos."},

// --- Lição 7: Aplicações do Electromagnetismo ---
{id:"9_4_048",unit:"u9_4",lesson:7,type:"multiple",question:"A campainha eléctrica funciona usando:",options:["Electroíman","Pilha solar","Motor a combustão","Turbina"],correct:0,explanation:"Ao ligar a corrente, o electroíman atrai o martelo que bate no sino."},
{id:"9_4_049",unit:"u9_4",lesson:7,type:"true_false",question:"Os comboios maglev usam electromagnetismo para levitar.",correct:true,explanation:"Os comboios magnéticos flutuam usando forças magnéticas de repulsão."},
{id:"9_4_050",unit:"u9_4",lesson:7,type:"fill",question:"As ondas de rádio, TV e telemóvel são ondas ___.",correct:["electromagnéticas","Electromagnéticas","eletromagnéticas","Eletromagnéticas"],explanation:"São ondas que combinam campos eléctricos e magnéticos oscilantes."},
{id:"9_4_051",unit:"u9_4",lesson:7,type:"multiple",question:"O altifalante (coluna de som) converte:",options:["Sinais eléctricos em som","Som em electricidade","Luz em som","Calor em som"],correct:0,explanation:"A corrente variável no electroíman faz vibrar uma membrana, produzindo som."},
{id:"9_4_052",unit:"u9_4",lesson:7,type:"multiple",question:"O microfone converte:",options:["Som em sinais eléctricos","Electricidade em som","Luz em electricidade","Calor em som"],correct:0,explanation:"O microfone é o inverso do altifalante."},
{id:"9_4_053",unit:"u9_4",lesson:7,type:"true_false",question:"A ressonância magnética (RM) usada em hospitais baseia-se no electromagnetismo.",correct:true,explanation:"A RM usa campos magnéticos intensos para criar imagens do corpo."},
{id:"9_4_054",unit:"u9_4",lesson:7,type:"multiple",question:"Os cartões de crédito armazenam dados na faixa magnética usando:",options:["Propriedades magnéticas de materiais","Tinta especial","Chips de luz","Ondas de som"],correct:0,explanation:"A faixa magnética contém partículas magnetizadas com informação codificada."},
{id:"9_4_055",unit:"u9_4",lesson:7,type:"fill",question:"O ___ converte sinais eléctricos em ondas sonoras.",correct:["altifalante","Altifalante","alto-falante","Alto-falante"],explanation:"Colunas de som usam electroímanes e membranas vibratórias."},
{id:"9_4_056",unit:"u9_4",lesson:7,type:"multiple",question:"As ondas electromagnéticas propagam-se a uma velocidade de:",options:["300 000 km/s (velocidade da luz)","340 m/s","1500 m/s","100 km/h"],correct:0,explanation:"Todas as ondas electromagnéticas viajam à velocidade da luz no vácuo."},
{id:"9_4_057",unit:"u9_4",lesson:7,type:"true_false",question:"O WiFi e o Bluetooth usam ondas electromagnéticas.",correct:true,explanation:"São tecnologias de comunicação sem fios baseadas em ondas de rádio."},
{id:"9_4_058",unit:"u9_4",lesson:7,type:"multiple",question:"A energia electromagnética inclui:",options:["Todas as opções","Raios X","Luz visível","Ondas de rádio"],correct:0,explanation:"O espectro electromagnético vai das ondas de rádio aos raios gama."},
{id:"9_4_059",unit:"u9_4",lesson:7,type:"fill",question:"James Clerk ___ unificou a electricidade e o magnetismo numa teoria.",correct:["Maxwell","maxwell"],explanation:"Maxwell formulou as equações que descrevem todos os fenómenos electromagnéticos."},
{id:"9_4_060",unit:"u9_4",lesson:7,type:"true_false",question:"Sem electromagnetismo não teríamos rádio, TV, telemóveis nem internet.",correct:true,explanation:"Toda a comunicação moderna depende de ondas electromagnéticas."},

// ============================================================
//  FIM DAS PERGUNTAS DA 9ª CLASSE
//  FIM DO BANCO DE PERGUNTAS COMPLETO
// ============================================================
];
// ==========================================
//  EXPORT / VERIFICATION - TODAS AS CLASSES
//  Copyright © 2026 Dite Zola NG
// ==========================================

if (typeof QUESTION_BANK !== 'undefined') {
    
    // === CONTAGEM TOTAL ===
    console.log(`\n🎓 ═══════════════════════════════════════════`);
    console.log(`   QUIZFÍSICA - BANCO DE PERGUNTAS CARREGADO`);
    console.log(`═══════════════════════════════════════════════`);
    console.log(`✅ Total de perguntas: ${QUESTION_BANK.length}`);
    
    // === CONTAGEM POR UNIDADE ===
    const units = {};
    QUESTION_BANK.forEach(q => {
        units[q.unit] = (units[q.unit] || 0) + 1;
    });
    
    // === CONTAGEM POR CLASSE ===
    const classes = { '7ª Classe': 0, '8ª Classe': 0, '9ª Classe': 0 };
    const classUnits = {
        '7ª Classe': ['u7_1', 'u7_2', 'u7_3', 'u7_4', 'u7_5'],
        '8ª Classe': ['u8_1', 'u8_2', 'u8_3', 'u8_4'],
        '9ª Classe': ['u9_1', 'u9_2', 'u9_3', 'u9_4']
    };
    
    Object.keys(classUnits).forEach(className => {
        classUnits[className].forEach(unitId => {
            classes[className] += (units[unitId] || 0);
        });
    });
    
    // === CONTAGEM POR TIPO DE PERGUNTA ===
    const types = {};
    QUESTION_BANK.forEach(q => {
        const label = {
            'multiple': '📝 Escolha Múltipla',
            'true_false': '✅ Verdadeiro/Falso',
            'fill': '✏️ Completar'
        }[q.type] || q.type;
        types[label] = (types[label] || 0) + 1;
    });
    
    // === CONTAGEM POR LIÇÃO ===
    const lessons = {};
    QUESTION_BANK.forEach(q => {
        const key = `${q.unit}_L${q.lesson}`;
        lessons[key] = (lessons[key] || 0) + 1;
    });
    
    // === NOMES DAS UNIDADES ===
    const unitNames = {
        'u7_1': '🌌 O Universo',
        'u7_2': '📏 Física e Grandezas Físicas',
        'u7_3': '🧊 Estados de Agregação',
        'u7_4': '⚖️ Força e Massa',
        'u7_5': '💧 Pressão nos Líquidos e Gases',
        'u8_1': '⚙️ Trabalho, Energia e Máquinas',
        'u8_2': '🌡️ Energia Calorífica',
        'u8_3': '🔊 Fenómenos Acústicos',
        'u8_4': '💡 Fenómenos Luminosos',
        'u9_1': '🏃 Movimento',
        'u9_2': '⚡ Electrostática',
        'u9_3': '🔌 Energia Eléctrica',
        'u9_4': '🧲 Electricidade e Magnetismo'
    };
    
    // === EXIBIR RESULTADOS ===
    
    // --- Por Classe ---
    console.log(`\n📚 PERGUNTAS POR CLASSE:`);
    console.log(`─────────────────────────────────`);
    Object.keys(classes).forEach(c => {
        const bar = '█'.repeat(Math.round(classes[c] / 10));
        console.log(`  ${c}: ${classes[c]} perguntas ${bar}`);
    });
    
    // --- Por Unidade ---
    console.log(`\n📖 PERGUNTAS POR UNIDADE:`);
    console.log(`─────────────────────────────────`);
    
    // 7ª Classe
    console.log(`\n  📘 7ª CLASSE`);
    classUnits['7ª Classe'].forEach(u => {
        const count = units[u] || 0;
        const bar = '█'.repeat(Math.round(count / 5));
        console.log(`    ${unitNames[u]}: ${count} ${bar}`);
    });
    
    // 8ª Classe
    console.log(`\n  📗 8ª CLASSE`);
    classUnits['8ª Classe'].forEach(u => {
        const count = units[u] || 0;
        const bar = '█'.repeat(Math.round(count / 5));
        console.log(`    ${unitNames[u]}: ${count} ${bar}`);
    });
    
    // 9ª Classe
    console.log(`\n  📕 9ª CLASSE`);
    classUnits['9ª Classe'].forEach(u => {
        const count = units[u] || 0;
        const bar = '█'.repeat(Math.round(count / 5));
        console.log(`    ${unitNames[u]}: ${count} ${bar}`);
    });
    
    // --- Por Tipo ---
    console.log(`\n🎯 PERGUNTAS POR TIPO:`);
    console.log(`─────────────────────────────────`);
    Object.keys(types).forEach(t => {
        const percent = ((types[t] / QUESTION_BANK.length) * 100).toFixed(1);
        console.log(`  ${t}: ${types[t]} (${percent}%)`);
    });
    
    // --- Tabela detalhada ---
    console.log(`\n📊 TABELA DETALHADA POR UNIDADE:`);
    const tableData = Object.keys(unitNames).map(u => ({
        'Unidade': unitNames[u],
        'ID': u,
        'Perguntas': units[u] || 0,
        'Lições': new Set(QUESTION_BANK.filter(q => q.unit === u).map(q => q.lesson)).size
    }));
    console.table(tableData);
    
    // === VERIFICAÇÃO DE QUALIDADE ===
    console.log(`\n🔍 VERIFICAÇÃO DE QUALIDADE:`);
    console.log(`─────────────────────────────────`);
    
    // Verificar IDs duplicados
    const ids = QUESTION_BANK.map(q => q.id);
    const duplicateIds = ids.filter((id, i) => ids.indexOf(id) !== i);
    if (duplicateIds.length > 0) {
        console.warn(`  ⚠️ IDs duplicados encontrados: ${duplicateIds.length}`);
        console.warn(`     IDs: ${[...new Set(duplicateIds)].join(', ')}`);
    } else {
        console.log(`  ✅ Nenhum ID duplicado`);
    }
    
    // Verificar perguntas sem unidade
    const noUnit = QUESTION_BANK.filter(q => !q.unit);
    if (noUnit.length > 0) {
        console.warn(`  ⚠️ Perguntas sem unidade: ${noUnit.length}`);
    } else {
        console.log(`  ✅ Todas as perguntas têm unidade atribuída`);
    }
    
    // Verificar perguntas sem lição
    const noLesson = QUESTION_BANK.filter(q => !q.lesson);
    if (noLesson.length > 0) {
        console.warn(`  ⚠️ Perguntas sem lição: ${noLesson.length}`);
    } else {
        console.log(`  ✅ Todas as perguntas têm lição atribuída`);
    }
    
    // Verificar perguntas sem explicação
    const noExplanation = QUESTION_BANK.filter(q => !q.explanation);
    if (noExplanation.length > 0) {
        console.warn(`  ⚠️ Perguntas sem explicação: ${noExplanation.length}`);
    } else {
        console.log(`  ✅ Todas as perguntas têm explicação`);
    }
    
    // Verificar múltipla escolha com resposta válida
    const badMultiple = QUESTION_BANK.filter(q => {
        if (q.type === 'multiple') {
            return q.correct === undefined || q.correct < 0 || q.correct >= (q.options?.length || 0);
        }
        return false;
    });
    if (badMultiple.length > 0) {
        console.warn(`  ⚠️ Múltipla escolha com resposta inválida: ${badMultiple.length}`);
        badMultiple.forEach(q => console.warn(`     → ${q.id}: correct=${q.correct}, options=${q.options?.length}`));
    } else {
        console.log(`  ✅ Todas as respostas de múltipla escolha são válidas`);
    }
    
    // Verificar perguntas fill com resposta
    const badFill = QUESTION_BANK.filter(q => {
        if (q.type === 'fill') {
            return !q.correct || (Array.isArray(q.correct) && q.correct.length === 0);
        }
        return false;
    });
    if (badFill.length > 0) {
        console.warn(`  ⚠️ Perguntas de completar sem resposta: ${badFill.length}`);
    } else {
        console.log(`  ✅ Todas as perguntas de completar têm resposta`);
    }
    
    // Verificar true_false com resposta booleana
    const badTF = QUESTION_BANK.filter(q => {
        if (q.type === 'true_false') {
            return typeof q.correct !== 'boolean';
        }
        return false;
    });
    if (badTF.length > 0) {
        console.warn(`  ⚠️ Verdadeiro/Falso sem resposta booleana: ${badTF.length}`);
    } else {
        console.log(`  ✅ Todas as perguntas V/F têm resposta booleana`);
    }
    
    // === COBERTURA DE LIÇÕES ===
    console.log(`\n📋 COBERTURA DE LIÇÕES POR UNIDADE:`);
    console.log(`─────────────────────────────────`);
    
    const expectedLessons = {
        'u7_1': 8, 'u7_2': 8, 'u7_3': 6, 'u7_4': 8, 'u7_5': 7,
        'u8_1': 8, 'u8_2': 8, 'u8_3': 7, 'u8_4': 8,
        'u9_1': 8, 'u9_2': 7, 'u9_3': 8, 'u9_4': 7
    };
    
    Object.keys(expectedLessons).forEach(u => {
        const expected = expectedLessons[u];
        const actualLessons = new Set(QUESTION_BANK.filter(q => q.unit === u).map(q => q.lesson));
        const actual = actualLessons.size;
        const status = actual >= expected ? '✅' : '⚠️';
        const lessonDetails = [...actualLessons].sort((a,b) => a-b).map(l => {
            const count = QUESTION_BANK.filter(q => q.unit === u && q.lesson === l).length;
            return `L${l}(${count})`;
        }).join(' ');
        console.log(`  ${status} ${unitNames[u]}: ${actual}/${expected} lições → ${lessonDetails}`);
    });
    
    // === ESTATÍSTICAS FINAIS ===
    const avgPerUnit = (QUESTION_BANK.length / Object.keys(unitNames).length).toFixed(1);
    const avgPerLesson = (QUESTION_BANK.length / Object.values(expectedLessons).reduce((a,b) => a+b, 0)).toFixed(1);
    
    console.log(`\n📈 ESTATÍSTICAS FINAIS:`);
    console.log(`─────────────────────────────────`);
    console.log(`  📊 Total de perguntas: ${QUESTION_BANK.length}`);
    console.log(`  📚 Total de classes: 3`);
    console.log(`  📖 Total de unidades: ${Object.keys(unitNames).length}`);
    console.log(`  📝 Total de lições: ${Object.values(expectedLessons).reduce((a,b) => a+b, 0)}`);
    console.log(`  📐 Média por unidade: ${avgPerUnit}`);
    console.log(`  📏 Média por lição: ${avgPerLesson}`);
    console.log(`  🎯 Tipos: ${Object.keys(types).length} diferentes`);
    
    console.log(`\n═══════════════════════════════════════════════`);
    console.log(`  ✅ BANCO DE PERGUNTAS VERIFICADO COM SUCESSO`);
    console.log(`  © 2026 Dite Zola NG - QuizFísica`);
    console.log(`═══════════════════════════════════════════════\n`);
}