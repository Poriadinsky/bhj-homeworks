const chatOpen = document.querySelector('.chat-widget');
const messages = document.querySelector('.chat-widget__messages');
const input = document.getElementById('chat-widget__input');
const messagesBot = [
  'Вы не купили ни одного товара с нашего сайта, чтобы так с нами разговаривать!',
  'Мы не будем вам ничего продавать!',
  'Добрый день! До свидания!',
  'К сожалению, все операторы сейчас заняты. Не пишите нам больше!',
  'Где ваша совесть?',
  'Кто тут?'
];

let realDate;

chatOpen.addEventListener('click', function () {
  chatOpen.classList.add('chat-widget_active');
  realDate = new Date();
});

function randomMessage(min = 0, max = messagesBot.length - 1) {
  let random = min - 0.5 + Math.random() * (max - min + 1);
  random = Math.round(random);
  return random;
}

function sendMessageBot() {
  realDate = new Date();
  messages.innerHTML += `
    <div class="message">
      <div class="message__time">${realDate.getHours()}:${('0' + realDate.getMinutes()).slice(-2)}</div>
      <div class="message__text">${messagesBot[randomMessage()]}</div>
    </div>
  `;
}

let sendMessageClient = (e) => {
  if (e.key === 'Enter') {
    const message = input.value.trim();
    if (message.length > 0 && !/^\s*$/.test(message)) { 
      let realDate = new Date();
      messages.innerHTML += `
        <div class="message message_client">
          <div class="message__time">${realDate.getHours()}:${('0' + realDate.getMinutes()).slice(-2)}</div>
          <div class="message__text">
            ${message}
          </div>
        </div>
      `;
      input.value = '';
      sendMessageBot(false);
      chat.parentElement.scrollTop = chat.parentElement.scrollHeight;
      clearTimeout(timerId);
      timerId = setTimeout(setTimer, 30000);
    }
  }
};



input.addEventListener('keydown', sendMessageClient);

