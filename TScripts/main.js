var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var electronics = [
    {
        id: 1,
        name: "IPhone 16 pro max",
        price: 20000,
        count: 5,
        color: "Білий",
        description: "Новинка від компанії Apple",
        type: "smartphone",
        category: "electronics",
        warrantyPeriod: "2 роки",
        electricityConsumption: "10W",
    },
    {
        id: 2,
        name: "MSI pro Gaming",
        price: 30000,
        count: 3,
        color: "Чорний",
        description: "Зручний ноутбук для зручного геймінгу",
        type: "laptop",
        category: "electronics",
        warrantyPeriod: "1.5 року",
        electricityConsumption: "65W",
    },
];
var clothing = [
    {
        id: 3,
        name: "Футболка",
        price: 500,
        count: 20,
        color: "Зелена",
        description: "Футблока для повсягденних прогулянок.",
        type: "T-shirt",
        category: "clothing",
        size: "M",
        gender: "M&W",
    },
    {
        id: 4,
        name: "Футболка",
        price: 850,
        count: 10,
        color: "Синій",
        description: "Спортивна футблока для бігунів.",
        type: "T-shirt",
        category: "clothing",
        size: "L",
        gender: "M",
    },
];
// Метод пошуку товару за його Id
var findProduct = function (products, id) {
    return products.find(function (product) { return product.id === id; });
};
//Метод фільтрації товарів за мінімальною та максимальною ціною
var filterByPrice = function (products, maxPrice, minPrice) {
    if (minPrice === void 0) { minPrice = 0; }
    return products.filter(function (product) { return product.price >= minPrice && product.price <= maxPrice; });
};
//Метод додавання товару до кошику
var addToCart = function (cart, product, quantity) {
    var cartItem = cart.find(function (item) { return item.product.id === product.id; });
    if (cartItem) {
        cartItem.quantity += quantity;
    }
    else {
        cart.push({ product: product, quantity: quantity });
    }
    return cart;
};
// Метод підрахунку загальної ціни товарів у кошику
var calculateTotal = function (cart) {
    var res = 0;
    for (var _i = 0, cart_1 = cart; _i < cart_1.length; _i++) {
        var item = cart_1[_i];
        res += item.product.price * item.quantity;
    }
    return res;
};
var phone = findProduct(electronics, 1);
console.log("Пошук товару за Id:", phone);
var filteredProducts = filterByPrice(__spreadArray(__spreadArray([], electronics, true), clothing, true), 1000, 100000);
console.log("Відфільтровані за ціною товари: :", filteredProducts);
var cart = addToCart([], phone, 1);
console.log("Оновлена корзина після додавання:", cart);
var totalCost = calculateTotal(cart);
console.log("Загальна ціна:", totalCost);
