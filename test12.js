// Buat fungsi untuk mencari angka terbesar ke-2 dalam array.

function terbesarKedua(array) {
    if (array.length < 2) return null;

    let terbesar = -Infinity;
    let kedua = -Infinity;

    for (let i = 0; i < array.length; i++) {
        if (array[i] > terbesar) {
            kedua = terbesar;
            terbesar = array[i];
        } else if (array[i] < terbesar && array[i] > kedua) {
            kedua = array[i];
        }
    }

    return kedua === -Infinity ? null : kedua;
}

console.log(terbesarKedua([10, 5, 20, 8, 20]));
