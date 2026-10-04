const quizData = [
  {
    question: 'Uma garrafa PET vazia deve ser classificada, em geral, como:',
    options: ['Reciclável', 'Orgânico', 'Rejeito'],
    answer: 0,
    feedback: 'Garrafas PET são materiais plásticos com potencial de reciclagem.'
  },
  {
    question: 'Uma casca de banana deve ser classificada, em geral, como:',
    options: ['Reciclável', 'Orgânico', 'Rejeito'],
    answer: 1,
    feedback: 'Cascas de frutas são resíduos orgânicos biodegradáveis.'
  },
  {
    question: 'Um guardanapo muito sujo de alimento ou gordura deve ser classificado, em geral, como:',
    options: ['Reciclável', 'Orgânico', 'Rejeito'],
    answer: 2,
    feedback: 'Papéis muito sujos ou engordurados normalmente não seguem para reciclagem.'
  },
  {
    question: 'Uma lata de alumínio vazia deve ser classificada, em geral, como:',
    options: ['Reciclável', 'Orgânico', 'Rejeito'],
    answer: 0,
    feedback: 'Latas de alumínio são materiais metálicos recicláveis.'
  },
  {
    question: 'Se o local possui sinalização própria nos coletores, qual atitude é a mais adequada?',
    options: ['Ignorar a sinalização', 'Seguir a identificação e as orientações do local', 'Escolher qualquer coletor'],
    answer: 1,
    feedback: 'A sinalização local deve orientar o descarte, pois as regras de coleta podem variar.'
  }
];

const questionEl = document.getElementById('quiz-question');
const optionsEl = document.getElementById('quiz-options');
const feedbackEl = document.getElementById('quiz-feedback');
const nextButton = document.getElementById('quiz-next');
const counterEl = document.getElementById('quiz-counter');
const progressBar = document.getElementById('progress-bar');
const scoreEl = document.getElementById('score');
const totalEl = document.getElementById('total');

let current = 0;
let score = 0;
let answered = false;
let completed = false;

totalEl.textContent = quizData.length;

function renderQuestion() {
  answered = false;
  completed = false;
  const item = quizData[current];
  counterEl.textContent = `Pergunta ${current + 1} de ${quizData.length}`;
  questionEl.textContent = item.question;
  feedbackEl.textContent = '';
  nextButton.hidden = true;
  progressBar.style.width = `${(current / quizData.length) * 100}%`;
  optionsEl.innerHTML = '';

  item.options.forEach((option, index) => {
    const button = document.createElement('button');
    button.className = 'quiz-option';
    button.type = 'button';
    button.textContent = option;
    button.addEventListener('click', () => selectOption(index, button));
    optionsEl.appendChild(button);
  });
}

function selectOption(index, selectedButton) {
  if (answered) return;
  answered = true;

  const item = quizData[current];
  const buttons = [...optionsEl.querySelectorAll('.quiz-option')];
  buttons.forEach((button) => { button.disabled = true; });

  if (index === item.answer) {
    score += 1;
    scoreEl.textContent = score;
    selectedButton.classList.add('correct');
    feedbackEl.innerHTML = `<strong>Acertou!</strong> ${item.feedback}`;
  } else {
    selectedButton.classList.add('wrong');
    buttons[item.answer].classList.add('correct');
    feedbackEl.innerHTML = `<strong>Quase!</strong> ${item.feedback}`;
  }

  nextButton.hidden = false;
  nextButton.textContent = current === quizData.length - 1 ? 'Ver resultado' : 'Próxima pergunta';
  progressBar.style.width = `${((current + 1) / quizData.length) * 100}%`;
}

function showResult() {
  completed = true;
  questionEl.textContent = `Você acertou ${score} de ${quizData.length}.`;
  optionsEl.innerHTML = '';
  counterEl.textContent = 'Quiz concluído';
  progressBar.style.width = '100%';

  if (score === quizData.length) {
    feedbackEl.textContent = 'Excelente! Você demonstrou um ótimo entendimento sobre separação de resíduos.';
  } else if (score >= 3) {
    feedbackEl.textContent = 'Muito bem! Continue observando as orientações dos coletores para aperfeiçoar seus hábitos.';
  } else {
    feedbackEl.textContent = 'Vale revisar o guia acima. Pequenas escolhas no descarte já fazem diferença.';
  }

  nextButton.textContent = 'Refazer quiz';
  nextButton.hidden = false;
}

function resetQuiz() {
  current = 0;
  score = 0;
  answered = false;
  completed = false;
  scoreEl.textContent = '0';
  renderQuestion();
}

nextButton.addEventListener('click', () => {
  if (completed) {
    resetQuiz();
    return;
  }

  if (current < quizData.length - 1) {
    current += 1;
    renderQuestion();
    return;
  }

  showResult();
});

renderQuestion();
