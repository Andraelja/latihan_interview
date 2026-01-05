function angkaTerbesar(array) {
    if(array.length === 0) return null;

    let terbesar = array[0];
    for(let i = 1; i < array.length; i++) {
        if(array[i] > terbesar) {
            terbesar = array[i];
        }
    }

    return terbesar;
}

console.log(angkaTerbesar([11, 2, 5, -1, 20, 5, 6]));