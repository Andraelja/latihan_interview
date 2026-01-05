function pisahGenapGanjil() {
    let genap = [];
    let ganjil = [];

    for(let i = 0; i <= 100; i++) {
        if(i % 2 === 0) {
            genap.push(i)
        } else {
            ganjil.push(i);
        }
    }

    return { genap, ganjil }
}

console.log(pisahGenapGanjil())