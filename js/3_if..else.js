var yourAge = prompt('Сколько тебе лет?');
var first = yourAge % 10
var second = yourAge % 100
if ((yourAge % 10 === 1) && (yourAge % 100 !== 11)) {
      alert(yourAge + " год");
} else if (((first > 1) && (first < 5)) && (second !== 12) && (second !== 13) && (second !== 14)) {
     alert(yourAge + " года");
} else {
     alert(yourAge + "  лет")}