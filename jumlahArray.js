// Buat fungsi untuk menjumlahkan seluruh angka di dalam array.

function jumlahArray(angka) {
    let hasil = 0;
    for(let i = 0; i < angka.length; i++) {
        hasil += angka[i] ;
    }

    return hasil;
}

console.log(jumlahArray([1, 2, 3, 4, 5]));