// Buat fungsi untuk menghapus duplikat tanpa Set.

function hapusDuplikat(array) {
    let hasil = [];
    for(let i = 0; i < array.length; i++) {
        if(!hasil.includes(array[i])) {
            hasil.push(array[i]);
        }
    }

    return hasil;
}

console.log(hapusDuplikat([1, 2, 2, 3]));