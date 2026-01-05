// Buat fungsi untuk menggabungkan dua array tanpa angka duplikat.

function gabungUnik(array1, array2) {
    let hasil = [];

    for (let i = 0; i < array1.length; i++) {
        if (!hasil.includes(array1[i])) {
            hasil.push(array1[i]);
        }
    }

    for (let i = 0; i < array2.length; i++) {
        if (!hasil.includes(array2[i])) {
            hasil.push(array2[i]);
        }
    }

    return hasil;
}

console.log(gabungUnik([1, 2, 3], [3, 4, 5]));