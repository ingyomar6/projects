
var x;
var y;
var p1score=0;
var p2score=0;


document.querySelector("button").addEventListener("click",roll);
document.querySelectorAll("button")[1].addEventListener("click",restart);

function roll(){
    x= Math.floor(Math.random()*6)+1;
    y= Math.floor(Math.random()*6)+1;
    document.querySelector("h1").textContent="?Who will win?";
    document.querySelector("img").setAttribute("src","./dice faces/dice-game.gif");
    document.querySelectorAll("img")[1].setAttribute("src","./dice faces/dice-game.gif");
    setTimeout(logic,2000);

    
    
}

function logic(){

    winner(x,y);
    face(x,0);
    face(y,1);

}

function restart(){
    x=0;
    y=0;
    p1score=0;
    p2score=0;
    document.querySelector("img").setAttribute("src","./dice faces/1.png");
    document.querySelectorAll("img")[1].setAttribute("src","./dice faces/2.png");
    document.querySelector("h1").textContent="DICE GAME, TEST YOUR LUCK!";
    document.querySelectorAll("h2")[0].textContent="Player 1 score: " + p1score;
    document.querySelectorAll("h2")[1].textContent="Player 2 score: " + p2score;

}



function face(n,p){
    if (n===6){
        document.querySelectorAll("img")[p].setAttribute("src","./dice faces/6.png");
    }
    else if (n===5){
        document.querySelectorAll("img")[p].setAttribute("src","./dice faces/5.png");

    }
    else if (n===4){
        document.querySelectorAll("img")[p].setAttribute("src","./dice faces/4.png");

    }
    else if (n===3){
        document.querySelectorAll("img")[p].setAttribute("src","./dice faces/3.png");

    }
    else if (n===2){
        document.querySelectorAll("img")[p].setAttribute("src","./dice faces/2.png");

    }
    else{
        document.querySelectorAll("img")[p].setAttribute("src","./dice faces/1.png");

    }

}

function winner(n,p){
    if (n>p){
        p1score++;
        document.querySelector("h1").textContent="!Player 1 Won this round";
        document.querySelectorAll("h2")[0].textContent="Player 1 score: " + p1score;

    }
    else if (n<p){
        p2score++;
        document.querySelector("h1").textContent="Player 2 Won this round!";
        document.querySelectorAll("h2")[1].textContent="Player 2 score: " + p2score;
    }
    else{
        document.querySelector("h1").textContent="!It's a draw!";
    }

}













