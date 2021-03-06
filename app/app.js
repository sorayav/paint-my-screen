var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
const recognition = new SpeechRecognition();

const output = document.querySelector('output');
const listen = document.querySelector('.listenBtn');
const body = document.body.style;

recognition.lang = 'en-US';
recognition.continuous = false;
recognition.interimResults = false;
recognition.maxAlternatives = 1;

listen.addEventListener('click', () => {
  recognition.start();
  output.innerHTML = 'Listening...';
});

function isColor(strColor){
  const s = new Option().style;
  s.color = strColor;
  return s.color == strColor;
}

recognition.addEventListener('result', (e) => {
  let color = e.results[0][0].transcript.toLocaleLowerCase();
  body.background = color;
  output.innerHTML = `I heard: ${color}`;
  if (isColor(color)) {
    output.innerHTML = `I heard: ${color}`;
  } else {
    output.innerHTML = `Sorry, I didn't understand that color.`
  }
  color == "black" ? body.color = 'white' : body.color = 'black';
});

recognition.addEventListener('nomatch', () => output.innerHTML = `Sorry, I didn't understand that color.`);
recognition.addEventListener('speechend', () => {
  output.innerHTML = '';
  recognition.stop()
});
recognition.addEventListener('error', (e) => { output.innerHTML = `Speech recognition error detected: ${e.error}`});

//

const greetingTxt = document.querySelector('.greeting');
let i = 0;
const text = `Hello there. Click the button, say a color in English and I'll paint the screen.`;

function typeGreeting() {
   if (i < text.length) {
    greetingTxt.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeGreeting, 60);
  }

  if (i === text.length) {
    setTimeout(() => {
      listen.classList.remove('hide');
    }, 500);
  }
}

window.addEventListener('load', typeGreeting);