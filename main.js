var stroke = ['x', 'o'];
var player = 0;
var mas = [null, null, null, null, null, null, null, null, null];
var winnerMas = ['012', '345', '678', '036', '147', '258', '048', '246'];
var isFinished = false;
var count = 0;

window.onload = function() {
  $(".field").children("div").click(
    function(event) {
      writeState(event)
    });
  $(".button").click(function() {
    restart();
  });
}

function restart() {
  $(".field").children("div").html("");
  mas = [null, null, null, null, null, null, null, null, null];
  isFinished = false;
  count = 0;
}

function isWinner() {
  winnerMas.forEach(function(item, i, arr) {
    var elementMas = item.split("");
    if (mas[elementMas[0]] == mas[elementMas[1]]) {
      if (mas[elementMas[1]] == mas[elementMas[2]]) {
        if (mas[elementMas[0]] != null) {
          alert("Win is " + stroke[player]);
          isFinished = true;
          count = 0;
          return true;
        }
      }
    }
  });
  if(count == 9){
    alert("Вилочки вологодские");
    isFinished = true;
    count = 0;
    return true;
  }
  return false;
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
  count ++;
  player = (player == 0 ?  1 : 0);
  placeElement(findId);
}
