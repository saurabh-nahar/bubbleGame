let timer = 60;
let rn = 0;
let score = 0;


let btn = document.querySelector('button');

let pbtm = document.querySelector(".pbottom");

btn.addEventListener("click", startGame);

function startGame(){
    btn.disabled = true;
    setTimeout(() => {
    makeBubble();
    runTimer();
    randomHit();
    clickFunction();}, 250)
    
}


function makeBubble() {
    let clutter = ""

for (let i = 0; i <135; i++){
    let rnbubble = Math.floor(Math.random() * 10);
    clutter += `<div class = "bubble">${rnbubble}</div>`;
}

document.querySelector(".pbottom").innerHTML = clutter;
}

function runTimer (){
    let interval = setInterval(() => {
        if (timer > 0){
            timer--;
            document.querySelector("#time").textContent = timer;
        }else{
            clearInterval(interval);
            document.querySelector(".pbottom").innerHTML = `<h1>Game Over<br> Your Score: ${score}</h1>`;
            document.querySelector("#hit").innerText = "";
            document.querySelector("#score").innerText = "";
        }
    }, 1000);
}

function randomHit(){
    rn = Math.floor(Math.random() * 10);
    document.querySelector("#hit").innerText = rn;
}

function scoreUpdater(){
    score += 10;
    document.querySelector("#score").innerText = score;
}

function clickFunction(){
    document.querySelector(".pbottom").addEventListener("click",(x) => {
        if(Number(x.target.textContent) === rn){
            scoreUpdater();
            makeBubble();
            randomHit();
        }else{
            document.querySelector('.main').classList.add('blink-red');
            setTimeout(()=> {
                document.querySelector('.main').classList.remove('blink-red');
            },100)
        }
    } )
}





