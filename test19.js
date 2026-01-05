// Buat fungsi untuk mengecek apakah angka adalah palindrome.

function isPalindrome(text) {
    let panjang = text.length;

    for (let i = 0; i < panjang / 2; i++) {
        if (text[i] !== text[panjang - 1 - i]) {
            return false;
        }
    }

    return true;
}

console.log(isPalindrome("katak"));
console.log(isPalindrome("kasur rusak"));
