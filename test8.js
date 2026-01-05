// Buat fungsi untuk menghitung rata-rata nilai dalam array.

function rataRata(angka) {
    let total = 0;
    for(let i = 0; i < angka.length; i++) {
        total += angka[i]
    }

    return total / angka.length
}

console.log(rataRata([80, 90, 70, 100]));