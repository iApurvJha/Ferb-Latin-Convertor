var textarea = document.querySelector("#textarea")
var btntranslate = document.querySelector("#btn-translate")
var output = document.querySelector("#output")
var pause = document.querySelector("#pause")
var resume = document.querySelector("#resume")
var cancel = document.querySelector("#cancel")

var speech = new SpeechSynthesisUtterance();

speech.lang="en"

function textToSpeech(){
    speech.text=textarea.value
    window.speechSynthesis.speak(speech)
    console.log("click")

}
function pauseSpeech(){
    window.speechSynthesis.pause()
}
function resumeSpeech(){
    window.speechSynthesis.resume()
}
function cancelSpeech(){
    window.speechSynthesis.cancel()
}

function urlGen(){
    return "https://api.funtranslations.com/translate/ferb-latin.json"+"?"+"text="+textarea.value
}
function errorHandler(error){
    console.log("error",error)
    alert("some error occured try again after some time")
}

function FerbLatin(){
    var url = urlGen()
    console.log(url)
    fetch(url)
    .then(response => response.json())
    .then(json => {
        var translatedText=json.contents.translated
        output.innerText=translatedText
    })
    .catch(errorHandler)
}

btntranslate.addEventListener("click",FerbLatin)
pause.addEventListener("click",pauseSpeech)
resume.addEventListener("click",resumeSpeech)
cancel.addEventListener("click",cancelSpeech)