let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-cont");
let msg = document.querySelector("#msg");

let turnO = true; //playero player x
const showWinner = (winner) =>{
    msg.innerText =`Congratulation, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
}
const disableboxes = () =>{
    for (let box of boxes){
        box.disabled =true;
    }
}
const resetGame = () =>{
    turnO =true;
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
        count = 0;
    }
    // console.log(count);
    msgContainer.classList.add("hide");
}
const tie = ()=>{
    msg.innerText= "No one Won! it's Tie.";
    msgContainer.classList.remove("hide");
}

let winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const checkwinner= ()=>{
    for(let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        // console.log(pos1Val);
        // console.log(pos2Val);
        // console.log(pos3Val);
        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                // console.log("Winner", pos1Val);
                showWinner(pos1Val);
                disableboxes();
                return true;
            }
        }
    }
    return false;
}
let count = 1;
boxes.forEach((box) => {
    box.addEventListener("click", ()=>{
        if (turnO){
            box.innerText = "O";
            box.style.color ="blue";
            turnO =false;
        }else{
            box.innerText="X";
            box.style.color ="red";
            turnO=true;
        }
        box.disabled  = true;
        checkwinner();
        count++;
        if(!checkwinner() && count === 9){
            tie();
        }
    });
});

resetBtn.addEventListener("click",resetGame);
newGameBtn.addEventListener("click",resetGame);
