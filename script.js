var timer= 60;
var score =0;
var hit;

function scoreCount(){
    score+= 10;
    document.querySelector("#scoreVal").textContent= score;
}

function newHit(){
    hit= Math.floor(Math.random()*10);
    document.querySelector("#hitVal").textContent=hit;
}

function makeBubble(){
    var clutter=" ";

for(var i=1; i<=136; i++){
    var num= Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${num}</div>`;
}
document.querySelector("#pannel_bottom").innerHTML= clutter;
}

function runTimer(){
    var timerint = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timerValue").textContent=timer;
        }
        else{
            clearInterval(timerint);
            document.querySelector("#pannel_bottom").innerHTML=`<h1>  GAME OVER </h1>`;
        }
    },1000);
}

document.querySelector("#pannel_bottom").addEventListener("click", function(details){
    var clickedNum=(Number(details.target.textContent));
    if(clickedNum===hit){ 
       scoreCount();
       makeBubble();
       newHit(); 
    }
})

newHit();
makeBubble();
runTimer();

