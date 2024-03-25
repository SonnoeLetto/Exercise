function getsumm() {
     let start = 0;
     return function (num) {
          return start += num;
     }
}
const sum = getsumm();



function createCounter(start, step) {

     let count = start;
     return function (res) {
          if (res) {
               return count = start
          } else {
               return count += step
          }
     }
}

const fbLikes = createCounter(3, 1)
console.log(fbLikes());
console.log(fbLikes());
console.log(fbLikes());
console.log(fbLikes());
console.log(fbLikes());
console.log(fbLikes());
console.log(fbLikes());
console.log(fbLikes(true));
console.log(fbLikes());









// function getSum(num) {
//      // let num = 0;
//      return function () {
//           return ++num;
//      }
// }
// const a = getSum(3);
// console.log(a())
// console.log(a())