// Buat fungsi untuk menjumlahkan angka yang lebih besar dari 10.

function jumlahLebih10(array) {
    let angka = 0;
    for(let i = 0; i < array.length; i++) {
        if(array[i] > 10) {
            angka += array[i]++
        }
    }

    return angka;
}

console.log(jumlahLebih10([5, 12, 8, 20]));