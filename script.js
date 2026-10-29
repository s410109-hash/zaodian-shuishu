const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');

navToggle?.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.main-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    navToggle?.setAttribute('aria-expanded', 'false');
  });
});

document.querySelectorAll('.card-toggle').forEach((button) => {
  button.addEventListener('click', () => {
    const more = button.nextElementSibling;
    const isOpen = more.classList.toggle('show');
    button.setAttribute('aria-expanded', String(isOpen));
    button.querySelector('span').textContent = isOpen ? '−' : '+';
  });
});

const snackMessages = {
  heavy: {
    title: '小惡魔出沒，胃腸加班中！',
    text: '偶爾吃沒關係，今晚記得留一點時間讓身體慢下來。',
    emoji: '😈',
    state: 'heavy',
  },
  drink: {
    title: '甜甜的，晚點再睡薯？',
    text: '想喝就好好享受，再搭配一點輕盈的食物，讓夜晚舒服一點。',
    emoji: '🫧',
    state: 'drink',
  },
  'sweet-potato': {
    title: '高纖無負擔，安心入睡',
    text: '今晚就讓胃腸準時下班，留一點時間給舒服的夢。',
    emoji: '🌙',
    state: 'good',
  },
};

const result = document.querySelector('#snack-result');
document.querySelectorAll('.snack-option').forEach((option) => {
  option.addEventListener('click', () => {
    document.querySelectorAll('.snack-option').forEach((item) => item.classList.remove('active'));
    option.classList.add('active');
    const message = snackMessages[option.dataset.snack];
    result.dataset.state = message.state;
    result.querySelector('.result-emoji').textContent = message.emoji;
    result.querySelector('h3').textContent = message.title;
    result.querySelector('p').textContent = message.text;
  });
});
