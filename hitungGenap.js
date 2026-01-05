// Buat fungsi untuk menghitung berapa banyak angka genap dalam array.
function hitungGenap(angka) {
    let genap = 0;
    for(let num of angka) {
        if(num % 2 === 0) {
            genap++
        }
    }

    return genap;
}

console.log(hitungGenap([1, 2, 3, 4, 6, 7]));