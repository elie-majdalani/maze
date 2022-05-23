let boundaries = document.querySelectorAll(".boundary");
let start = document.querySelector("#start");
let end = document.querySelector("#end");
let status = document.querySelector("#status");
let win = false;
let gameStarted = true;
let game = document.querySelector("#game");
let score = 0;

function winAndGameStated() {
  debugger
  return win == true && gameStarted == true
}

// function resetGame(){
//   gameStarted= false
//   win = false
// }
function resetGame() {
  let win = false;
  let gameStarted = true;
}
function reset() {
  score = 0
  getScore(score)
}
function getScore(scores) {
  console.log(scores)
  gameStarted = false;
  // document.getElementsByTagName("p")[1].innerHTML ="Your Score is: "+ scores +"&nbsp&nbsp&nbsp<button id='Reset'onClick='reset()'>Reset</button>"
  document.getElementsByTagName("p")[1].innerHTML = `Your score is ${scores} <button id="reset" onClick="reset()">Reset</button>`
}
function gameStart() {
  console.log(win)
  console.log(gameStarted)
  game.addEventListener("mouseleave", function () {
    win = false;
    if (gameStarted) {
      for (const element of boundaries) {
        element.classList.add("youlose")
      }
      // boundaries.forEach(element => {
      //   element.classList.add("youlose");
      // });
      score -= 10
      getScore(score)
      document.getElementById("status").innerHTML = "YOU LOSE!"
      // resetGame()
      alert("YOU LOSE! START OVER!");
    }

  })
  boundaries.forEach(element => {
    element.addEventListener("mouseover", function () {
      if (gameStarted) {
        win = false;
        for (const element of boundaries) {
          element.classList.add("youlose")
        }
        score -= 10
        getScore(score)
        // resetGame()
        document.getElementById("status").innerHTML = "YOU LOSE!"
        alert("YOU LOSE! START OVER!");
      }

    }
    )
  });
  end.addEventListener("mouseover", function () {
    console.log(win)
    if (gameStarted) {
      // resetGame()
      score += 5
      getScore(score)
      document.getElementById("status").innerHTML = "YOU WIN!";
      alert("CONGRATULATIONS! YOU WIN!");
    }
  })
}

window.onload = function () {
  document.getElementById("status").innerHTML = "<br>"
  start.addEventListener("click", function (e) {
    gameStarted=true
    gameStart()
    console.log("game started")

    boundaries.forEach(element => {
      element.classList.remove("youlose");
    });
    document.getElementById("status").innerHTML = "Move your mouse over the S to begin";
  })

}

