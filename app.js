'use strict';
// const urlAPI = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById('result');
const audio = document.querySelector('audio');
const srchBtn = document.getElementById('search-btn');
const spkBtn = document.querySelector('.speak');
let urlAPI = `https://api.dictionaryapi.dev/api/v2/entries/en/`;
let inputWord = document.getElementById("word-input");
// event when user clicks button it shows result
// btn.addEventListener("click", () => {
//     let inputWord = document.getElementById("word-input");
//     let urlAPI = `https://api.dictionaryapi.dev/api/v2/entries/en/${inputWord.value}`;
    
//     // const urlAPI = `https://api.dictionaryapi.dev/api/v2/entries/en/${inputword} `;
//     fetch(urlAPI)
//         .then((Response) => Response.json())
//         .then((data) => {
//             console.log(data);
//             audio.setAttribute('src',`${data[0].phonetics[0].audio}`);
//             return result.innerHTML = `
//             <div class="word">
//             <h3>${data[0].word}</h3>
//             <audio>
//             </audio>
//             <button class="speak"><i class="fa-solid fa-volume-high"></i></button>
//         </div>
//         <div class="details">
//         <p>${data[0].phonetic}</p>
//     </div>
//     <p class="word-meaning">${data[0].meanings[0].definitions[0].definition}</p>
//    <p class="word-example">${data[0].meanings[0].definitions[0].example}</p>
//             `
// });
// })

async function getData(word) {
    const req = await fetch(urlAPI + word);
    const res = await req.json();
    console.log(res);

    document.querySelector('.word').textContent = res[0].word;
    
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