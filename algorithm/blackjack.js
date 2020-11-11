var count = 0;

function cc(card) {
    // Only change code below this line

    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--;
            break;

    }

}

var holdBet = "Hold"
if (count > 0) {
    holdBet = "Bet";
};

cc(4), cc(5), cc(10), cc("A");







/*
 switch(card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;

    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count--;
      break;
  }

  let holdbet = 'hold';
  if (count > 0) {
    holdbet = 'bet'
  };


  return count + ' ' + holdbet;
  */