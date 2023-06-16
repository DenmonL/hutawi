const audio = new Audio();

let tao = document.querySelector("#button");
let hutao = document.querySelector("#hutao");
let canvas = document.querySelector("#canvas");

tao.addEventListener("mousedown", function () {
    let num = randomNumber(2, 1);

    hutao.style.display = "none";
    let elem = document.createElement("img");
    elem.src = `src/hutao${num}.png`;
    elem.classList.add("img-fluid");
    elem.classList.add("hutao1");

    canvas.appendChild(elem);

    playHutao(num);
});
tao.addEventListener("touchstart", function () {
    let num = randomNumber(2, 1);

    hutao.style.display = "none";
    let elem = document.createElement("img");
    elem.src = `src/hutao${num}.png`;
    elem.classList.add("img-fluid");
    elem.classList.add("hutao1");

    canvas.appendChild(elem);

    playHutao(num);
});

document.addEventListener("mouseup", function () {
    hutao.style.display = "block";
    let hutao1 = document.querySelector(".hutao1");
    if(hutao1){
    hutao1.remove();
}
    // showHutao();
});
document.addEventListener("touchend", function () {
    hutao.style.display = "block";
    let hutao1 = document.querySelector(".hutao1");
    if(hutao1){
    hutao1.remove();
}
    // showHutao();
});

function playHutao(num) {
    let sound = document.createElement("audio");
    sound.src = `src/hutao${num}.mp3`;
    sound.type = "audio/mpeg";
    audio.appendChild(sound);

    sound.play();
}

function showHutao(){
    let elem = document.createElement("img");
    elem.src = "src/hutao0.png";
    elem.classList.add("img-fluid");
    canvas.appendChild(elem);
}

function randomNumber(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}