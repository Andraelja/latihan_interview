// mencari angka terkecil

function angkaTerkecil(array) {
    if(array.length === 0) return null;

    let terkecil = array[0];
    for(let i = 1; i < array.length; i++) {
        if(array[i] < terkecil) {
            terkecil = array[i];
        }
    }

    return terkecil;
}

console.log(angkaTerkecil([4, 2, 9, 0, 7]))