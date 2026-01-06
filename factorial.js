function factorial(value) {
    if(value <= 0) {
        return 1;
    }

    let hasil = 1;

    for(let i = value; i >= 1; i--) {
        hasil *= i;
    }

    return hasil;
}

console.log(factorial(4));