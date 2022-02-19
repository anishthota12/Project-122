x = 0;
y = 0;

drawApple = "";
screenWidth = 0;
screenHeight = 0;
apple = "";
speakData = "";
toNumber = "";

var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start() {
    document.getElementById("status").innerHTML = "System is listening. Please Speak";
    recognition.start();
}

recognition.onresult = function (event) {
    console.log(event);
    content = event.results[0][0].transcript;
    document.getElementById("status").innerHTML = "Recognized: " + content;
    toNumber = Number(content);

    if (Number.isInteger(toNumber)) {
        drawApple = "set";
        document.getElementById("status").innerHTML = "Recognized: Apple"
    } else {
        document.getElementById("Recognized: Nothing")
    }

}

function setup() {
    apple = loadImage("apple.png");
    screenWidth = window.innerWidth;
    screenHeight = window.innerHeight;
    canvas = createCanvas(screenWidth, screenHeight - 150);
    canvas.position(0, 150);
}

function draw() {
    if (drawApple == "set") {
        for (i = 1; i <= toNumber; i++) {
            document.getElementById("status").innerHTML = toNumber + " Apples Drawn";
            drawApple = "";
            x = Math.floor(Math.random() * (screenWidth - 50));
            y = Math.floor(Math.random() * (screenHeight - 200));
            image(apple, x, y, 50, 50);
        }
        speakData = toNumber + " Apples Drawn";
        speak();
    }
}

function speak() {
    var synth = window.speechSynthesis;
    var utterThis = new SpeechSynthesisUtterance(speakData);
    console.log(utterThis);
    synth.speak(utterThis);
    speakData = "";
}