function checkType(arg, type) {
    
    return typeof arg === type;
}

function sum(a, b, check) {
    let result = a + b;

    return  check(a, b) ? result : 'wrong'
}


const res2 = sum(2,3, function (a, b) {
    return checkType(a, 'number') && checkType(b, 'number')
})
console.log(res2)

