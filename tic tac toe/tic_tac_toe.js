console.log("welcome to myt Tic Tac Toe");
var music=new Audio("happy.mp3.wav");
var audioTurn= new Audio("select.mp3.wav");
var gameOver=new Audio("correct.mp3.wav");
var turn="X";
var isgameover=false;
//function to change the turn
var changeTurn=()=>{
   return turn==="X"?"0":"X"
}
//function to check for a win
var checkWin=()=>{
    var boxText=document.getElementsByClassName("boxtext");
    var wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    wins.forEach(e=>{
        if((boxText[e[0]].innerText===boxText[e[1]].innerText)&&(boxText[e[2]].innerText===boxText[e[1]].innerText)&&(boxText[e[0]].innerText!==""))
       { document.querySelector(".info").innerText=boxText[e[0]].innerText+" Won"
        isgameover=true;
        document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width="200px";
    music.play()
document.querySelector(".line").style.transform="translate(23vw,39vw) rotate(90deg)";}
    })

}
//Game logic
music.play
var boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    var boxText=element.querySelector(".boxtext");
    element.addEventListener("click",(e)=>{
        if(boxText.innerText===""){
            boxText.innerText=turn;
            
            turn=changeTurn();
            audioTurn.play();
            checkWin();
            if(!isgameover){
                document.getElementsByClassName("info")[0].innerText="turn for"+turn;
            }
           
        }
    })
})
//Add on click listener
reset.addEventListener("click",()=>{
    var boxTexts=document.querySelectorAll(".boxtext");
    Array.from(boxTexts).forEach(element=>{
        element.innerText="";
    })
    turn="X";
    isgameover=false;
        document.getElementsByClassName("info")[0].innerText="turn for"+turn;
        document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width="0px";
   
})