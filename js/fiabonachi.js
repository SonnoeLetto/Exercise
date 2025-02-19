function fibo () {
     const cash = new Map();

     return function (arg) {
          let result = [];

          if(cash.has(arg)){
               return `You have ${cash.get(arg)}`;
          }
          function* generatFibo() {
               let firstValue = 0;
               let secondValue = 1;
               let index = 0;

               while(index <= arg){
                    yield firstValue;
                    const sum = firstValue + secondValue;
                    firstValue = secondValue;
                    secondValue = sum;
                    index++;
               }
          }
          const genetaror = generatFibo();
          for(let value of genetaror){
               result.push(value);
          }

          cash.set(arg, result);

          return result;
     }
}

const f = fibo();

console.log(f(10));
console.log(f(10));