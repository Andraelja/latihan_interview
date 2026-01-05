function hitungHurufMuncul(huruf) {
    let muncul = {};

    for(let i = 0; i < huruf.length; i++) {
        let string = huruf[i];

        if(muncul[string] === undefined) {
            muncul[string] = 1
        } else {
            muncul[string]++
        }
    }

    return muncul;
}

console.log(hitungHurufMuncul('aaafkjefjrrrskllfjslggglfnvsvvlsairr'));