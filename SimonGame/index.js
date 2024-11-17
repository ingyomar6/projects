
var startGame=false;
var startSound= new Audio('sounds/game-start.mp3');  
var gameOverSound = new Audio('sounds/game-over.mp3');
var bgm= new Audio('sounds/background-music.mp3') ;
var pinksound = new Audio('sounds/red.mp3');
var bluesound = new Audio('sounds/blue.mp3');
var greensound = new Audio('sounds/green.mp3');
var yellowsound = new Audio('sounds/yellow.mp3');
var answer = [];
var player1 = [];
var level = 1;

function newGame(){
    player1=[];
    answer=[];

    gameLogic();

        $("button.pink").click(function(){
            playbacklogic('p');
            player1.push("p");
            compare();
        
        })
        
        $("button.blue").click(function(){
            playbacklogic('b');
            player1.push("b");
            compare();
           
        })
        
        $("button.green").click(function(){
            playbacklogic('g');
            player1.push("g");
            compare();
            
        })
        
        $("button.yellow").click(function(){
            playbacklogic('y');
            player1.push("y");
            compare();
      
        })


}

function gameLogic(){
    var r = Math.floor(Math.random()*4)+1;

    switch(r){

        case 1: 
            answer.push("p");
            pinksound.play();
            animation("button.pink");
         
        break;

        case 2:
            answer.push("y");
            yellowsound.play();
            animation("button.yellow");

        break;

        case 3:
            answer.push("b");
            bluesound.play();
            animation("button.blue");

        break;

        case 4:
            answer.push("g");
            greensound.play();
            animation("button.green");
          
        break;

        default: alert("Something is wrong with game logic");


    }

}

$("img").click(function(){
        startGame=true;
        startSound.play();
        animation("img");
        $('h1').text('Level '+ level);
        setTimeout(newGame,1000);
        bgm.pause();

        
    });


function animation(x){
    $(x).addClass("pressed");
    setTimeout(function(){
        $(x).removeClass("pressed");
    },100)
}

function gameOver(){
    $("body").addClass("game-over");
            setTimeout(function(){
                $("body").removeClass("game-over");
            },1000);
    $(".btn").off("click");
    $("h1").text('Game Over');
    setTimeout(function(){
        $('h1').text('Press to Start');
    },1500);
    pinksound.pause();
    greensound.pause();
    bluesound.pause();
    yellowsound.pause();
    gameOverSound.play();
   
    
}

function playbacklogic(x){

    switch(x){

    case 'p':
            pinksound.play();
            animation("button.pink");

    break;

    case 'b':
            bluesound.play();
            animation("button.blue");

    break;

    case 'g':
            greensound.play();
            animation("button.green");

    break;

    case 'y':
            yellowsound.play();
            animation("button.yellow");

    break;

    }

}

function compare(){

    for(let i=0;i<player1.length;i++){

        if(answer[i]===player1[i]){

            if(answer.toString()===player1.toString()){

                level++;
                $('h1').text('Level '+ level);
                player1 = [];
                setTimeout(gameLogic,1000);
            }

            else{
            }

        }

        else if(answer[i]!==player1[i]){
            startGame=false;
            answer = [];
            player1 = [];
            level =1;
            gameOver();
            return;

        }

    }
}

