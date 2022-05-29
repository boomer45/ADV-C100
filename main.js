var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event) {

    console.log(event);

    var Content = event.results[0][0].transcript;
    console.log(Content);

    document.getElementById("textbox").innerHTML = Content;
    if(Content =="take my selfie"){
        console.log("taking selfie --- ");
        speak();
    }
    
}

function speak(){
    var synth = window.speechSynthesis;
    Webcam.attach(camera);
    speak_data = "Taking your selfie in 5 seconds";

    setTimeout(function(){
        img_id = "selfie1";
        take_snapshot();
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
        save();
    }, 5000);

    setTimeout(function(){
        img_id = "selfie2";
        take_snapshot();
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
        save();
    }, 5000);
    setTimeout(function(){
        img_id = "selfie3";
        take_snapshot();
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
        save();
    }, 5000);
}


Webcam.set({
    width:360,
    height:250,
    image_format : 'png',
    png_quality:90
});
camera = document.getElementById("camera");

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        if(img_id=="selfie1"){
            document.getElementById("result1").innerHTML = '<img id="selfie1" src="'+data_uri+'">';
        }
        if(img_id=="selfie2"){
            document.getElementById("result2").innerHTML = '<img id="selfie2" src="'+data_uri+'">';
        }
        if(img_id=="selfie3"){
            document.getElementById("result3").innerHTML = '<img id="selfie3" src="'+data_uri+'">';
        }
    }); 
}

function save()
{
    link = document.getElementById("link");
    image = document.getElementById("selfie1").src ;
    image = document.getElementById("selfie2").src ;
    image = document.getElementById("selfie3").src ;
    link.href = image;
    link.click();
}