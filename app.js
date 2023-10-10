'use strict';
// const urlAPI = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById('result');
const audio = document.querySelector('audio');
const srchBtn = document.getElementById('search-btn');
const spkBtn = document.querySelector('.speak');
let urlAPI = `https://api.dictionaryapi.dev/api/v2/entries/en/`;
let inputWord = document.getElementById("word-input");
// event when user clicks button it shows result

async function getData(word) {
    const req = await fetch(urlAPI + word);
    const res = await req.json();
    console.log(res);

    document.querySelector('h3').textContent = res[0].word;
    
    // spkBtn.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
    // console.log(spkBtn)
    document.querySelector('.pron').textContent = res[0].phonetic;
    document.querySelector('.word-meaning').textContent = res[0].meanings[0].definitions[0].definition;
    document.querySelector('.word-example').textContent = res[0].meanings[0].definitions[0].example;
    audio.setAttribute("src", `${res[0].phonetics[0].audio}`);
    console.log(audio)
}
srchBtn.addEventListener('click', () => {
    getData(inputWord.value);
})

spkBtn.addEventListener('click', () => {
    audio.play();
})
