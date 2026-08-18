/* =========================================================
   CONFIG.JS — LP Studio
   ÚNICO arquivo que deve ser editado ao trocar de cliente.
   Nenhum texto de conteúdo deve ficar direto no HTML.
   ========================================================= */

const CONFIG = {

  empresa: {
    nome: "CEVO",
    slogan: "Odontologia séria, sorriso leve — para toda a família",
    logoTexto: "CEVO",
  },

  contato: {
    telefone: "(11) 98888-8888",
    whatsapp: "5511988888888",
    whatsappMensagemPadrao: "Olá! Quero agendar uma consulta na CEVO.",
    email: "contato@cevoodonto.com.br",
    endereco: "Vila Luzita, Santo André — SP",
    googleMapsLink: "https://maps.google.com/?q=Vila+Luzita+Santo+Andr%C3%A9",
  },

  redes: {
    instagram: "https://instagram.com/cevo.odonto",
    facebook: "https://facebook.com/cevoodonto",
  },

  boksy: {
    // Link de agendamento online. Trocar aqui quando a clínica tiver o sistema definitivo.
    url: "https://boksy.com/cevo",
    label: "Agendar consulta",
  },

  horarios: [
    { dia: "Segunda a Sexta", horario: "8h às 19h" },
    { dia: "Sábado",          horario: "8h às 13h" },
    { dia: "Domingo",         horario: "Fechado" },
  ],

  hero: {
    eyebrow: "Clínica Odontológica · Vila Luzita, Santo André",
    tituloPrefixo: "Cuidado sério com",
    tituloDestaque: "sorriso de criança",
    subtitulo: "Atendimento odontológico completo para toda a família, num espaço pensado pra deixar os pequenos tranquilos e os pais tranquilos também.",
    stats: [
      { numero: "15+", label: "anos cuidando de sorrisos" },
      { numero: "0", label: "medo depois da 1ª visita" },
      { numero: "4.9", label: "avaliação média" },
    ],
  },

  sobre: {
    eyebrow: "Sobre a CEVO",
    titulo: "Uma clínica que fala a língua dos pais e a língua das crianças",
    texto: "Na CEVO, cada consulta é conduzida com técnica e cuidado — e também com paciência. Explicamos cada passo pros pais e transformamos a consulta em algo tranquilo (às vezes até divertido) pras crianças, sem perder o padrão clínico que qualquer tratamento odontológico exige.",
  },

  servicos: [
    {
      icone: "🦷",
      nome: "Odontopediatria",
      descricao: "Consultas pensadas pro universo infantil, do primeiro dentinho à adolescência.",
      preco: "consulte valores",
    },
    {
      icone: "😁",
      nome: "Ortodontia",
      descricao: "Aparelhos fixos, móveis e alinhadores para todas as idades.",
      preco: "a partir de R$ 150/mês",
    },
    {
      icone: "✨",
      nome: "Clareamento",
      descricao: "Clareamento a laser ou caseiro supervisionado, com acompanhamento clínico.",
      preco: "a partir de R$ 350",
    },
    {
      icone: "🩺",
      nome: "Limpeza & Prevenção",
      descricao: "Profilaxia, aplicação de flúor e check-up completo.",
      preco: "a partir de R$ 120",
    },
    {
      icone: "🚨",
      nome: "Urgência Odontológica",
      descricao: "Atendimento prioritário pra dor aguda, trauma ou fratura dentária.",
      preco: "consulte valores",
    },
    {
      icone: "🦷",
      nome: "Implantes & Reabilitação",
      descricao: "Do planejamento à reabilitação completa, com acompanhamento total.",
      preco: "consulte valores",
    },
  ],

  diferenciais: [
    { titulo: "Consultório kids", texto: "Sala de espera e atendimento pensados pra deixar as crianças curiosas, não assustadas." },
    { titulo: "Sem letras miúdas", texto: "Orçamento e plano de tratamento explicados de forma clara, antes de qualquer procedimento." },
    { titulo: "Agenda que respeita seu tempo", texto: "Horário marcado é horário cumprido — pra você não perder a tarde toda na sala de espera." },
    { titulo: "Equipe multidisciplinar", texto: "Da odontopediatria à ortodontia, sua família não precisa trocar de clínica conforme cresce." },
  ],

  odontopediatria: {
    eyebrow: "Especial Kids",
    titulo: "Aqui, ir ao dentista pode ser a parte boa do dia",
    texto: "Criamos uma experiência pensada pra reduzir o medo desde a primeira visita: linguagem simples, tempo de adaptação e uma sala de espera que as crianças gostam de estar.",
    badges: ["Selinho de coragem 🏅", "Escovação com brinde 🪥", "Sala kids colorida 🎨"],
  },

  galeria: [
    { legenda: "Consultório principal", tall: true },
    { legenda: "Sala kids" },
    { legenda: "Recepção" },
    { legenda: "Equipamentos" },
    { legenda: "Atendimento infantil" },
    { legenda: "Sala de espera", tall: true },
    { legenda: "Consultório ortodontia" },
    { legenda: "Equipe CEVO" },
  ],

  avaliacoes: [
    { estrelas: 5, texto: "Meu filho tinha pavor de dentista. Na CEVO ele saiu pedindo pra voltar. Isso não tem preço.", autora: "Paciente CEVO" },
    { estrelas: 5, texto: "Explicaram todo o orçamento antes de começar, sem surpresa na hora de pagar.", autora: "Paciente CEVO" },
    { estrelas: 5, texto: "Atendimento pontual e equipe super atenciosa com toda a família.", autora: "Paciente CEVO" },
  ],

  cta: {
    titulo: "Vamos cuidar do sorriso da sua família?",
    texto: "Marque uma avaliação e conheça a clínica antes mesmo da primeira consulta.",
  },

  seo: {
    titulo: "CEVO — Clínica Odontológica em Santo André",
    descricao: "Odontologia geral, ortodontia e odontopediatria em Santo André. Atendimento para toda a família.",
  },
};
