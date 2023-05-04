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


btntranslate.addEventListener("click",textToSpeech)
pause.addEventListener("click",pauseSpeech)
resume.addEventListener("click",resumeSpeech)
cancel.addEventListener("click",cancelSpeech)