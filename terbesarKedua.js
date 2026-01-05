// Buat fungsi untuk mencari angka terbesar ke-2 dalam array.

function terbesarKedua(array) {
    if (array.length < 2) return null;

    let terbesar = array[0];
    let kedua = null;

    for (let i = 1; i < array.length; i++) {
        if (array[i] > terbesar) {
            kedua = terbesar;
            terbesar = array[i];
        } else if (
            array[i] < terbesar &&
            (kedua === null || array[i] > kedua)
        ) {
            kedua = array[i];
        }
    }

    return kedua;
}

console.log(terbesarKedua([10, 5, 20, 8, 20]));
