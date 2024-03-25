let ask;
do {
    ask = prompt('need you magic number');
} while(ask < 5 || ask > 10);

function createArr(arrLength) {
    const array = [];
    while (array.length < arrLength) {
        let number = +prompt('need you for array number');
        array.push(number)
    }
   
    const n = array.length;
    for (let i = 0; i < n-1; i++)
     { for (let j = 0; j < n-1-i; j++)
        { if (array[j+1] < array[j])
           { let t = array[j+1]; array[j+1] = array[j]; array[j] = t; }
        }
     }                     
    return array;

}
console.log(createArr(ask))