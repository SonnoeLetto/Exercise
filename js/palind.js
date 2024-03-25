function getPalindrom(num, step = 0) {
     const reverseNum = reverse(num);

     if (num === reverseNum) {
          return {
               result: num,
               step
          };
     } else {
          try {
               num += reverseNum;
               return getPalindrom(num, ++step);
          } catch (e) {
               console.log(e);
          }
     }
}
function reverse(num) {
     let str = String(num);
     return +str.split('').reverse().join('');
}

console.log(getPalindrom(11));
console.log(getPalindrom(196));
console.log(getPalindrom(89));