for (let i = 2; i <= 9; i++) {
    let result = '';
    for (let j = 1; j <= 9; j++) {
        result = result + i * j + ',';
    }
    console.log(result)
}