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

function isColor(strColor){
  const s = new Option().style;
  s.color = strColor;
  return s.color == strColor;
}

recognition.addEventListener('result', (e) => {
  let color = e.results[0][0].transcript;
  document.body.style.background = color;
  if (isColor(color)) {
    output.innerHTML = color;
  } else {
    output.innerHTML = `Sorry, I didn't understand that color.`
  }
  
});

recognition.addEventListener('nomatch', () => output.innerHTML = `Sorry, I didn't understand that color.`);
recognition.addEventListener('speechend', () => recognition.stop());
recognition.addEventListener('error', (e) => { output.innerHTML = `Speech recognition error detected: ${e.error}`});