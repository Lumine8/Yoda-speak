var btntranslate = document.querySelector("#translatebtn")
var txtinput = document.querySelector("#txtinput")
var txtoutput = document.querySelector("#txtoutput")

var serverurl = "https://api.funtranslations.com/translate/yoda.json"

btntranslate.addEventListener("click", clickEventListener)
function clickEventListener(){
    var inputtxt = txtinput.value

    fetch(getTextTranslation(inputtxt))
    .then(response => response.json())
    .then(json => {
                    var translatedtxt = json.contents.translated
                        txtoutput.innerText = translatedtxt})
    .catch(errorhandler)
}

function getTextTranslation(text){
    return serverurl + "?" + "text="+text
}

function errorhandler(error){
    alert("Something went wrong!!, Please try after some time.")
}