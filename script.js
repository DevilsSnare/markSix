let translate=document.querySelector('.translate');
let input=document.querySelector('.input');
translate.addEventListener("click",function(){
    let inputTranslation = input.value;
    let url = "https://api.funtranslations.com/translate/minion.json?text=" + encodeURI(inputTranslation);
    console.log(url);
    fetch(url)
        .then(response => response.json())
        .then(json=> {
            console.log(json.contents.translated);
            document.querySelector('.output').innerText=json.contents.translated;
        })
        .catch((error)=> {
            console.log(error);
        })
});
