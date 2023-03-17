const products = [
    { name: 'Радар', price: 1300, quantity: 4 },
    { name: 'Сканер', price: 2700, quantity: 3 },
    { name: 'Дроїд', price: 400, quantity: 7 },
    { name: 'Захоплення', price: 1200, quantity: 2 },
];

const calculateTotalPrice = function (allProducts, productName) {
    let totalPrice = 0;
    for (const product of allProducts) {
        if (product.name === productName) {
            totalPrice += product.price * product.quantity;
        }
    }
    return totalPrice;
};

const productTotalPrice = calculateTotalPrice(products, "Радар");
console.log("Загальна ціна продукта:", productTotalPrice);

