function hitungHuruf(huruf, string) {
    let hitung = 0;

    for(let i = 0; i < string.length; i++) {
        if(string[i] === huruf) {
            hitung++
        }
    }

    return hitung;
}

console.log(hitungHuruf('a', 'andra elja prama'));