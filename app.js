// 4:12   5:42


// variables
let currentTime = new Date();
let objectTime = currentTime.getTime();
let idx = 1;
let data = [];
let objectChangeTime = 3;
let interval = null;

// DOM Elements
let object = document.getElementById("object")
let tableBody = document.getElementById("table_body")
let startButton = document.getElementById("start");
let pauseButton = document.getElementById("pause");
let resetButton = document.getElementById("reset");
let userInput = document.getElementById("input");
let mainC = document.getElementById("main-container");
console.log(userInput);


// Functions

function moveObject(){
    let randomNum = Math.floor(Math.random()*100);
    object.style.left = `${randomNum}px` ;
    object.style.top = `${randomNum}px` ;

    let timeNow = new Date();
    // changing current time
    // objectTime = timeNow.getTime();

}

function appendData () {
        // current time
    let timeNow = new Date();
    console.log(objectTime);

    let pushTime = timeNow.getTime() - objectTime;
    pushTime = pushTime/1000;
    pushTime = pushTime.toFixed(2);

    let tr = document.createElement('tr');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    td1.textContent = idx;
    td2.textContent = (`${pushTime} s`);
    
    tr.append(td1 , td2);
    tableBody.append(tr);
    idx++;
    objectTime = timeNow.getTime();
}

function startGame(){
    // mainC.style.display = 'block'
    object.style.display = 'block'

    let currentTime = new Date();
    objectTime = currentTime.getTime();

    if(interval != null ){
        clearInterval(interval );
    }

    let userTime = parseInt(userInput.value);
    console.log(userTime);
    interval = setInterval( ()=> {
        moveObject();
    } , userTime * 1000 );
}

function pauseGame(){
    object.style.display = 'none';
    
    if(interval != null ){
        clearInterval(interval );
    }
}

function restartGame(){
    location.reload();
}

// Event Listeners
object.addEventListener("click" , ()=>{  appendData() ; moveObject() ;} )
startButton.addEventListener("click" , startGame );
pauseButton.addEventListener("click" , pauseGame );
resetButton.addEventListener("click" , restartGame );

// madhumita@ascendeum.com

// madhumita@ascendeum.com