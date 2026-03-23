let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#new-btn");
let msg = document.querySelector("#msg");

let turnO = true; // O starts

const winPatterns = [
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
  [2,5,8],
  [2,4,6],
  [3,4,5],
  [6,7,8],
];

msg.style.display = "none";

boxes.forEach((box) => {
  box.addEventListener("click", () => {

    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }

    box.disabled = true;

    checkWinner();
  });
});

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showWinner(pos1Val);
        return;
      }
    }
  }
};

const showWinner = (winner) => {
  msg.innerText = `🎉 Congratulations Player ${winner}`;
  msg.style.display = "block";

  boxes.forEach((box) => {
    box.disabled = true;
  });
};

const resetGame = () => {
  turnO = true;

  boxes.forEach((box) => {
    box.innerText = "";
    box.disabled = false;
  });

  msg.style.display = "none";
};

resetBtn.addEventListener("click", resetGame);
newBtn.addEventListener("click", resetGame);