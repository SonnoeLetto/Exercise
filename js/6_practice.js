var cylinder = {
     radius: 3,
     height: 4,
     square: function () {
          return this.height * this.radius;
     },
     capacity: function () {
          var result = this.radius ** 2 * this.height * 3.1415;
          return result.toFixed(3);

     }
};


function getResult(firstN, secondN, flag) {
     switch (flag) {
          case '+':
               return firstN + secondN;
          case '-':
               return firstN - secondN;
          case '*':
               return firstN * secondN;
          case '/':
               return firstN / secondN;
          default:
               return 'wrong';
     }
}



function isCharPresent(string, symbol) {
     for (let i = 0; i < string.length; i++) {
          return string[i] === symbol && true
     }
     return false
}
// function isCharPresent(string, symbol) {

//      for (var i = 0; i < string.length; i++) {
//           if (string[i] === symbol) {
//                return true
//           } 
//      }
//      return false
// }

function charIndexOf(string, symbol) {

     for (var i = 0; i < string.length; i++) {
          if (string[i] === symbol) {
               return i
          }
     }
     return -1
}
