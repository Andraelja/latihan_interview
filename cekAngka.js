// Buat fungsi untuk mengecek apakah angka tertentu ada di dalam array.

function cekAngka(array, angka) {
    let ada = false;

    for(let i = 0; i < array.length; i++) {
        if(array[i] === angka) {
            ada = true;
        }
    }

    return ada
}

console.log(cekAngka([1, 3, 5, 7], 4));