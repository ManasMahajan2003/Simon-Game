let gameSeq=[];
let userSeq=[];

let btns=["yellow","red","purple","green" ];
let started=false;
let level=0;

let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game started");
        started=true;
    }
    levelUp();
});

function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}
function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`level ${level}`;
    //random btn choose
    let randIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx];    
    let randBtn=document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);

    btnflash(randBtn);
}

function highScore(){
    let h3=document.querySelector(".highScore");
    let currentHighScore=parseInt(h3.innerText);
    console.log(currentHighScore);
    if(currentHighScore<level){
        h3.innerText=`${level}`;
    }
}
function checkAns(idx){
    
    if(userSeq[idx]==gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
            
        }
    }else{
        h2.innerHTML=`Game Over! Your score was <b>${level} </b> <br> Press any key to restart. `;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
        
    }
}

function btnPress(){
    let btn=this;
    btnflash(btn);
    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    highScore();
    level=0;
    
}