// jika huruf lebih dari 5, maka di revere(balekkan)

function reverseHuruf(huruf) {
    if (huruf.length <= 5) return huruf;

    let hasil = "";
    for (let i = huruf.length - 1; i >= 0; i--) {
        hasil += huruf[i];
    }
    return hasil;
}


console.log(reverseHuruf("Andraa"));