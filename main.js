var stroke = ['x', 'o'];
var player = 0;
var mas = [null, null, null, null, null, null, null, null, null];
var winnerMas = ['012', '345', '678', '036', '147', '258', '048', '246'];
var isFinished = false;
var count = 0;
var countX = 0,
  countY = 0;
var log = [];

window.onload = function() {
  $(".field").children("div").click(
    function(event) {
      writeState(event)
    });
  $("#newGame").click(function() {
    restartfull();
  });
  $("#return").click(function() {
    restart();
  });
  log = ["Игра началась\n"];
  $("#myTextArea").val(log);
}

function restartfull() {
  $(".field").children("div").html("");
  $("#result").text(" ");
  $("#myTextArea").val('');
  $("#player-one-score").text("0");
  $("#player-two-score").text("0");
  mas = [null, null, null, null, null, null, null, null, null];
  isFinished = false;
  count = 0;
  log = ["Игра началась\n"];
  $("#myTextArea").val(log);
}

function restart() {
  $(".field").children("div").html("");
  $("#result").text(" ");
  $("#myTextArea").val('');
  mas = [null, null, null, null, null, null, null, null, null];
  isFinished = false;
  count = 0;
  log = ["Игра началась\n"];
  $("#myTextArea").val(log);
}

function isWinner() {
  winnerMas.forEach(function(item, i, arr) {
    var elementMas = item.split("");
    if (mas[elementMas[0]] == mas[elementMas[1]]) {
      if (mas[elementMas[1]] == mas[elementMas[2]]) {
        if (mas[elementMas[0]] != null) {
          $("#result").text("WINS " + stroke[player]);
          counterWin();
          isFinished = true;
          count = 0;
          return true;
        }
      }
    }
  });
  if (count == 9) {
    $("#result").text("DRAW");
    isFinished = true;
    count = 0;
    return true;
  }
  return false;
}

function counterWin() {
  if (player === 0) {
    countX++;
    $("#player-one-score").text(countX);
  } else {
    countY++;
    $("#player-two-score").text(countY);
  }
}

function placeElement(findId) {
  $("#" + findId).text(stroke[player]);
  mas[findId] = stroke[player];
  isWinner();
}

function writeState(event) {
  var findId = event.target.id;
  if (mas[findId] != null || isFinished) {
    return 1;
  }
  count++;
  player = (player == 0 ? 1 : 0);
  placeElement(findId);
  log += "Игрок " + player + " сделал ход\n";
  console.log(log);
  $("#myTextArea").val(log);
}
