var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
const recognition = new SpeechRecognition();

const output = document.querySelector('output');
const listen = document.querySelector('.listenBtn');

recognition.continuous = false;
recognition.interimResults = false;
recognition.maxAlternatives = 1;

listen.addEventListener('click', () => {
  recognition.start();
  console.log('Listening...')
});

recognition.addEventListener('result', (e) => {
  console.log(e.results[0][0].transcript);
  let color = e.results[0][0].transcript;
  document.body.style.background = color;
})