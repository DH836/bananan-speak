var btnTranslate=document.querySelector("#btn-translate");
var txtInput=document.querySelector("#txt-input"); 
var outputDiv=document.querySelector("#output");

var serverURL= "https://api.funtranslation.com/translate/minion.json"
function getTranslationURL(text){
    return serverURL + "?" +"text" + text 
}
function errorHandler(error){
    console.log("erroe occured", error);
    alert("something wrong with server! try again after some time")
}

function clickHandler(){
var inputText=txtInput.Value;

fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json =>{
        var translatedText=json.contents.translated;
        outputDiv.innerText=translatedText;
    })
    .catch(errorHaandler)
};

btnTranslate.addEventListener("click",clickHandler)