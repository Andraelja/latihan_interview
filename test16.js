// Buat fungsi untuk mengecek apakah array sudah terurut naik.

function cekTerurut(array) {
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) {
      return false;
    }
  }
  return true;
}

console.log(cekTerurut([1, 2, 3, 4]));
