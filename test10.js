// Buat fungsi untuk membalik urutan array tanpa reverse().

function balikArray(array) {
    let hasil = [];

    for(let i = array.length - 1; i >= 0; i--) {
        hasil.push(array[i]);
    }

    return hasil;
}

console.log(balikArray([1, 2, 3, 4]));