// Buat fungsi untuk menghitung berapa kali tiap angka muncul.

function hitungKemunculan(array) {
  let muncul = {};

  for (let i = 0; i < array.length; i++) {
    let angka = array[i];

    if (muncul[angka] === undefined) {
      muncul[angka] = 1;
    } else {
      muncul[angka]++;
    }
  }

  return muncul;
}

console.log(hitungKemunculan([1, 2, 2, 3]));
