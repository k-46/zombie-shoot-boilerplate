const gameBody = document.getElementById("game-body");


// Iteration 1: Declare variables required for this game

// Iteration 1.2: Add shotgun sound

let shotGunSound = new Audio("./assets/shotgun.wav");
gameBody.onclick = () =>{
    // shotGunSound.pause();
    shotGunSound.currentTime=0;
    shotGunSound.play();
}

// Iteration 1.3: Add background sound

let backGroundMusic = new Audio("./assets/bgm.mp3");
backGroundMusic.play()
backGroundMusic.loop=true

// Iteration 1.4: Add lives

let lives = 4;


// Iteration 2: Write a function to make a zombie
let zombieID =0;
let zombie;
function generateZombies(){
    let num = generateUniqueNums(1,7);
    gameBody.innerHTML+=`<img src=./assets/zombie-${num}.png id=zombie${zombieID} class=zombie-image>`;

    zombie = document.getElementById(`zombie${zombieID}`);
    let second= generateUniqueNums(2,6);
    let viewWidth = generateUniqueNums(20,80);
    zombie.style.animationDuration = `${second}s`;
    zombie.style.transform = `translateX(${viewWidth}vw)`;
    
    zombie.onclick=()=>{
            destroyZombie(zombie);
    }
}

generateZombies();

function generateUniqueNums(min,max){
    return Math.floor(Math.random()*(max-min))+min
}


function destroyZombie(ghost){
    ghost.style.display = "none";
    zombieID++;
    generateZombies();
}

function zombieEscape(anything){
    if(anything.getBoundingClientRect().top<=0){
        lives--;
        
        if(lives<=0){
            location.href = "./game-over.html"
        }
        else{
        destroyZombie(anything);    
    }
}
}


zombieEscape(zombie)

let time =60;
setInterval(timer,1000)

function timer(){
    document.getElementById("timer").innerText=time;
    if(time<=0){
        location.href = "./win.html";
    }else{
        time--
        zombieEscape(zombie);
    }
}


// Iteration 3: Write a function to check if the player missed a zombie

// Iteration 4: Write a function to destroy a zombie when it is shot or missed


// Iteration 6: Write a code to start the game by calling the first zombie

// Iteration 7: Write the helper function to get random integer
