// Init SpeechSynth API
const synth = window.speechSynthesis;

const textInput = "Hi ! I am Vivek, a Software Developer. done various projects to enhance my skills and Knowledge. Belive in continuous Learning. Being a Software developer I had learned many technical lannguages, libraries and frameworks which aided me into my work and made everything easy going. The marvelous work by renowned engineers to make their framework easy for other developers and meets the challanges of development. Hats off to them for their greate work.";

// Speak
const speak = () => {
  // Check if speaking
  if (synth.speaking) {
    synth.cancel();
  }
  if (textInput !== '') {

    // Get speak text
    const speakText = new SpeechSynthesisUtterance(textInput);

    speakText.onend = () =>{
      $('.speakBtn').removeClass('fa-volume-up');
      $('.speakBtn').addClass('fa-volume-down');
    }

    // Set pitch and rate
    speakText.rate = 0.7;
    speakText.pitch = 0.5;

    // Speak
    synth.speak(speakText);

    
  }
};

window.addEventListener("beforeunload", function (e) {
  // Check if speaking
  if (synth.speaking) {
    synth.cancel();
  }                          
});

const introduce = () =>{
  // Check if speaking
  if (synth.speaking) {
    synth.cancel();
    $('.speakBtn').removeClass('fa-volume-up');
    $('.speakBtn').addClass('fa-volume-down');
  }else{
    speak();
    $('.speakBtn').removeClass('fa-volume-down');
    $('.speakBtn').addClass('fa-volume-up');
  }
}