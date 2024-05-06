let boxes = document.querySelectorAll(".box");
let resetBtbn = document.querySelector("#reset-btw");
let newgameBtn = document.querySelector("#new-btw");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


let turnO = true;//playerX , playerY
const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 7],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
const resetGame = () => {
    turnO = true;
    enableboxes();
    msgContainer.classList.add("hide");

};
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box is clicked");
        if (turnO) {
            box.innerText = "o";
            turnO = false;
        }
        else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();

    });
});



const disableboxes = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
};
const enableboxes = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};
const showWinner = (Winner) => {
    msg.innerText = `Congratulation, Winner is ${Winner}`;
    msgContainer.classList.remove("hide");
    disableboxes();
};
const checkWinner = () => {
    for (let pattern of winPattern) {
        
          let pos1Val =  boxes[pattern[0]].innerText;
          let pos2Val = boxes[pattern[1]].innerText;
          let pos3Val =  boxes[pattern[2]].innerText
        if(pos1Val !== " " && pos2Val !== "" && pos3Val !== ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("winner",pos1Val);
                
                showWinner(pos1Val);
                return;
            }
        }
    }

};
newgameBtn.addEventListener ("click", resetGame);
resetBtn.addEventListener("click", newGame);