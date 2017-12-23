var cards = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] ];
//console.log(cards);
var player = [4,5];
var banker = [8,1];
var sum_player = 0
var sum_banker = 0


var check_the_natural = function (player, banker) {
  for (var i of player) {
    sum_player += i;
    if (sum_player === 8 || sum_player === 9) {
      console.log("sum of player is Natural");
    }
  }
  for (var j of banker) {
    sum_banker += j;
    if (sum_banker === 8 || sum_banker === 9) {
      console.log("sum of banker is Natural");
      }
    }
  }
 check_the_natural(player, banker);
