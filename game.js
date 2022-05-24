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
  startTimer()
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
      resetTimer()
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
        resetTimer()
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
      const last = document.getElementById('last');
      const best = document.getElementById('best');
      [lmsec, lsec] = stopTimer()
      bestTime = [bmsec, bsec][0] + [bmsec, bsec][1] * 1000
      lastTime = ([lmsec, lsec][0] + [lmsec, lsec][1] * 1000)
      if (((lastTime < bestTime) || ([bmsec, bsec][0]) == 0 && [bmsec, bsec][1] == 0)) {
        [bmsec, bsec] = stopTimer()
        best.innerHTML = ` ${lsec} : ${lmsec}`;
      }
      last.innerHTML = ` ${lsec} : ${lmsec}`;
      resetTimer()
      document.getElementById("status").innerHTML = "YOU WIN!";
      alert("CONGRATULATIONS! YOU WIN!");
    }
  })
}

window.onload = function () {
  document.getElementById("status").innerHTML = "<br>"
  start.addEventListener("click", function (e) {
    gameStarted = true
    gameStart()
    console.log("game started")

    boundaries.forEach(element => {
      element.classList.remove("youlose");
    });
    document.getElementById("status").innerHTML = "Move your mouse over the S to begin";
  })

}

const timer = document.getElementById('live');
var [milliseconds, seconds] = [0, 0];
var int = null;
var [bmsec, bsec] = [0, 0];
var [lmsec, lsec] = [0, 0];


function displayTimer() {
  milliseconds += 10;

  if (milliseconds == 1000) {
    milliseconds = 0;
    seconds++;
  }
  if (seconds < 10) {
    "0" + seconds
  }
  else (seconds)
  var ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;
  timer.innerHTML = ` ${seconds} : ${milliseconds}`;
}

function startTimer() {
  if (int !== null) {
    clearInterval(int);
  }
  int = setInterval(displayTimer, 10);
}

function stopTimer() {
  [mil, sec] = [milliseconds, seconds]
  clearInterval(int);
  timer.innerHTML = ` ${sec} : ${mil}`;
  return [mil, sec]
}

function resetTimer() {
  clearInterval(int);
  [milliseconds, seconds] = [0, 0];
  timer.innerHTML = '00 : 000 ';
}