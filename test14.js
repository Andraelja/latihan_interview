// Buat fungsi untuk mengambil angka negatif pertama dalam array.

function negatifPertama(array) {
    for(let i = 0; i < array.length; i++) {
        if(array[i] < 0) {
            return array[i]
        }
    }

    return null;
}

console.log(negatifPertama([4, 3, -1, -5]));