// Buat fungsi untuk menghitung jumlah angka ganjil dalam array.

function hitungGanjil(array) {
    let ganjil = 0;
    for(let num of array) {
        if(num %2 != 0) {
            ganjil++;
        }
    }

    return ganjil;
}

console.log(hitungGanjil([1, 2, 3, 4, 5]));