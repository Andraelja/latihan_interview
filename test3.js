function hitungDiskon(cartItems, promoCode) {

    if (promoCode === "") {
        return 0;
    }

    let totalDiskon = 0;

    for (let i = 0; i < cartItems.length; i++) {
        let quantity = cartItems[i][1];
        let harga = cartItems[i][2];

        if (harga >= 100000) {
            totalDiskon += harga * 0.1 * quantity;
        }
    }

    if (totalDiskon > 1000000) {
        totalDiskon = 1000000;
    }

    return totalDiskon;
}

const items = [
    ["Logitech Mouse", 2, 80000],
    ["Bluetooth Speaker", 1, 200000],
    ["Samsung Galaxy 7", 1, 9000000]
];

console.log(hitungDiskon(items, "diskon"));
