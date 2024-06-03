let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector(".reset");
let winner=document.querySelector("h1");


winPattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];


let turn0=true;





boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(box.disabled){
            return;
    }
 
    if(turn0){
        turn0=false;
        box.innerHTML="o";
        box.style.backgroundColor="#381e22";
        box.style.color="#ae4442";
        box.style.border=" 2px solid #ae4442";
      


    }
    else{
        turn0=true;
        box.innerHTML="x";
        box.style.backgroundColor="#112439";
        box.style.color="#2168af";
        box.style.border=" 2px solid #2168af";
}
box.disabled=true;
checkWinner();
});
});

const checkWinner = () => {
    for (let pattern of winPattern) {
        let firstBoxContent = boxes[pattern[0]].innerHTML;
        if (
            firstBoxContent && firstBoxContent === boxes[pattern[1]].innerHTML &&  firstBoxContent === boxes[pattern[2]].innerHTML
        ) {
            winner.innerHTML = "Winner is " + firstBoxContent;
            winner.style.color = window.getComputedStyle(boxes[pattern[0]]).color;
            resetBtn.disabled = false;
            disabledBtn();
            return;
        }
    }
};



// disabling buttons
const disabledBtn=()=>{
    boxes.forEach((box)=>{
        box.disabled=true;
    });

}



// reseting game
const resetGame = () => {
    turn0 = true;

    const enableBoxes = () => {
        boxes.forEach((box) => {
            box.disabled = false;
            box.innerHTML = "";
            box.style.backgroundColor = "";
            box.style.color = "";
            box.style.border = "";
        });
    };

    enableBoxes();
    winner.innerHTML = "TIK TOK TOE"; // Clear winner text
    resetBtn.disabled = true; // Disable reset button again
};

resetBtn.addEventListener("click", resetGame);
