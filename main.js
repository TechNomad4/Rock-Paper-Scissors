const btns = document.querySelectorAll(".btn");
const info = document.querySelector(".info");
const score = document.querySelector("#score");
const switchDiv = document.querySelector(".switch");
const game = document.querySelector(".game");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const sciss = document.querySelector("#sciss");
const lizard = document.querySelector("#lizard");
const spock = document.querySelector("#spock");
const rules = document.querySelector(".rules");
const rulesBtn = document.querySelector("#rulesBtn");
const exitRules = document.querySelector("#exitRules");
const result = document.querySelector(".result");
const playerStatus = document.querySelector("#status");
const reset = document.querySelector("#reset");
const userPicked = document.querySelector("#userPicked");
const userImg = document.querySelector("#userPicked img");
const houseImg = document.querySelector("#housePicked img");
const housePicked = document.querySelector("#housePicked");
const toggleDiv = document.querySelector(".switch");
const toggle = document.querySelector("#input");
const logo = document.querySelector("#logo");
const rulesImg = document.querySelector("#rulesImg");
const hard = document.querySelector(".hard");

let scoreNum = 0;

rulesBtn.addEventListener("click", () => {
  rules.style.display = "block";
  rulesBtn.style.display = "none";
  info.style.display = "none";
  switchDiv.style.display = "none";
  game.style.display = "none";
  hard.style.display = "none";
});

exitRules.addEventListener("click", () => {
  rules.style.display = "none";
  info.style.display = "flex";
  switchDiv.style.display = "flex";
  rulesBtn.style.display = "block";
  if (toggleDiv.classList.contains("open")) {
    hard.style.display = "block";
  } else {
    game.style.display = "block";
  }
});

const symbol = [rock, paper, sciss];
const symbolHard = [rock, paper, sciss, lizard, spock];

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let computer;
    const random = Math.floor(Math.random() * 3);
    const randomHard = Math.floor(Math.random() * 5);
    if (!toggleDiv.classList.contains("open")) {
      computer = symbol[random];
    } else {
      computer = symbolHard[randomHard];
    }
    const user = e.target;
    if (
      (computer.id === "rock" && user.id === "rock") ||
      (computer.id === "paper" && user.id === "paper") ||
      (computer.id === "sciss" && user.id === "sciss") ||
      (computer.id === "lizard" && user.id === "lizard") ||
      (computer.id === "spock" && user.id === "spock")
    ) {
      playerStatus.innerHTML = "Draw!";
      reset.style.color = "black";
      userPicked.classList.remove("winner");
      housePicked.classList.remove("winner");
    } else if (
      (computer.id === "rock" && user.id === "sciss") ||
      (computer.id === "rock" && user.id === "lizard") ||
      (computer.id === "paper" && user.id === "rock") ||
      (computer.id === "paper" && user.id === "spock") ||
      (computer.id === "sciss" && user.id === "paper") ||
      (computer.id === "sciss" && user.id === "lizard") ||
      (computer.id === "lizard" && user.id === "spock") ||
      (computer.id === "lizard" && user.id === "paper") ||
      (computer.id === "spock" && user.id === "rock") ||
      (computer.id === "spock" && user.id === "sciss")
    ) {
      score.innerHTML = scoreNum--;
      playerStatus.innerHTML = "You Lost!";
      reset.style.color = "red";
      housePicked.classList.add("winner");
      userPicked.classList.remove("winner");
    } else if (
      (computer.id === "rock" && user.id === "paper") ||
      (computer.id === "rock" && user.id === "spock") ||
      (computer.id === "paper" && user.id === "sciss") ||
      (computer.id === "paper" && user.id === "lizard") ||
      (computer.id === "sciss" && user.id === "rock") ||
      (computer.id === "sciss" && user.id === "spock") ||
      (computer.id === "lizard" && user.id === "rock") ||
      (computer.id === "lizard" && user.id === "sciss") ||
      (computer.id === "spock" && user.id === "lizard") ||
      (computer.id === "spock" && user.id === "paper")
    ) {
      score.innerHTML = scoreNum++;
      playerStatus.innerHTML = "You Won!";
      reset.style.color = "green";
      userPicked.classList.add("winner");
      housePicked.classList.remove("winner");
    }
    result.style.display = "flex";
    rulesBtn.style.display = "none";
    switchDiv.style.display = "none";
    game.style.display = "none";
    hard.style.display = "none";
    score.innerHTML = scoreNum;
    if (user.id === "rock") {
      userImg.src = "./images/icon-rock.svg";
      userPicked.id = "rockRes";
    } else if (user.id === "paper") {
      userImg.src = "./images/icon-paper.svg";
      userPicked.id = "paperRes";
    } else if (user.id === "sciss") {
      userImg.src = "./images/icon-scissors.svg";
      userPicked.id = "scissRes";
    } else if (user.id === "lizard") {
      userImg.src = "./images/icon-lizard.svg";
      userPicked.id = "lizardRes";
    } else if (user.id === "spock") {
      userImg.src = "./images/icon-spock.svg";
      userPicked.id = "spockRes";
    }

    if (computer.id === "rock") {
      houseImg.src = "./images/icon-rock.svg";
      housePicked.id = "rockRes";
    } else if (computer.id === "paper") {
      houseImg.src = "./images/icon-paper.svg";
      housePicked.id = "paperRes";
    } else if (computer.id === "sciss") {
      houseImg.src = "./images/icon-scissors.svg";
      housePicked.id = "scissRes";
    } else if (computer.id === "lizard") {
      houseImg.src = "./images/icon-lizard.svg";
      housePicked.id = "lizardRes";
    } else if (computer.id === "spock") {
      houseImg.src = "./images/icon-spock.svg";
      housePicked.id = "spockRes";
    }
  });
});

reset.addEventListener("click", () => {
  result.style.display = "none";
  rulesBtn.style.display = "block";
  switchDiv.style.display = "flex";
  if (toggleDiv.classList.contains("open")) {
    hard.style.display = "block";
  } else {
    game.style.display = "block";
  }
});

toggle.addEventListener("click", () => {
  toggleDiv.classList.toggle("open");
  scoreNum = 0;
  score.innerHTML = scoreNum;
  if (toggleDiv.classList.contains("open")) {
    game.style.display = "none";
    hard.style.display = "block";
    logo.src = "./images/logo-bonus.svg";
    rulesImg.src = "./images/image-rules-bonus.svg";
  } else {
    game.style.display = "block";
    hard.style.display = "none";
    logo.src = "./images/logo.svg";
    rulesImg.src = "./images/image-rules.svg";
  }
});
