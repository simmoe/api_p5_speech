
let words = [];
let sentence = "";
let resultP;
let leftDiv;
let counter;
let cnv, myRec, btn, txt, img;

function setup() {
    let SpeechRecognition = window.webkitSpeechRecognition ||
        window.mozSpeechRecognition ||
        window.msSpeechRecognition ||
        window.oSpeechRecognition ||
        window.SpeechRecognition;


    cnv = createCanvas(400, 600);
    background('red');
    txt = createElement("h5", "Say something..")
        .position(40, 200)
        .style("color:white;")
        .hide();

    resultP = createP("")
        .position(40, 220)
        .parent(txt);
    //Check browser comp
    if (SpeechRecognition !== undefined) {
        btn = createButton("Klik for at aktivere mikrofon")
            .position(40, 200)
            .style("font-size:1em;background-color:#33C3F0;border-color:#33C3F0;border-radius:8px;color:white;cursor:pointer;")
            .mousePressed(function () {
                btn.hide();
                txt.show();
                myRec = new p5.SpeechRec();
                myRec.continuous = true;
                myRec.interimResults = true;
                myRec.onResult = showResult;
                myRec.start();
            });
    }
}

function draw() {}

function showResult() {
    if (myRec.resultValue == true) {
        sentence = myRec.resultString.split(' ').pop();
        resultP.html(sentence);
        if(sentence.includes("orange")){
            switchImage('assets/orange.png');
        }
        if(sentence.includes("lemon")){
            switchImage('assets/lemon.png');
        }    
    }
}

function switchImage(url){
    if(img == undefined){
        img = createImg(url)
        .position(width/2, height/2)
        .style("width:50px;height:50px");
    }else{
        img.attribute('src', url)
    }
}