const electronics: Electronics[] = [
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

const clothing: Clothing[] = [
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

//Базовий тип товару
type BaseProduct = {
    id: number;
    name: string;
    price: number;
    count: number;
    color: string;
    description: string;
    type: string;
};

//Тип для товарів електроніки
type Electronics = BaseProduct & {
    category: "electronics";
    warrantyPeriod: string;
    electricityConsumption: string;
};

//Тип для товарів одягу
type Clothing = BaseProduct & {
    category: "clothing";
    size: "XS" | "S" | "M" | "L" | "XL" | "XXL";
    gender: "M" | "W" | "M&W";
};

//Тип для кошику
type CartItem<T> = {
    product: T;
    quantity: number;
};

// Метод пошуку товару за його Id
const findProduct = <T extends BaseProduct>(products: T[], id: number): T | undefined => {
    for (const product of products) {
        if (product.id === id) {
            return product;
        }
    }
    return undefined;
};

//Метод фільтрації товарів за мінімальною та максимальною ціною
const filterByPrice = <T extends BaseProduct>( products: T[], maxPrice: number, minPrice: number = 0): T[] => {
    const filteredProducts: T[] = [];
    for (const product of products) {
        if (product.price >= minPrice && product.price <= maxPrice) {
            filteredProducts.push(product);
        }
    }
    return filteredProducts;
};

//Метод додавання товару до кошику
const addToCart = <T extends BaseProduct>(cart: CartItem<T>[], product: T, quantity: number): CartItem<T>[] => {
    let itemFound = false;

    for (const item of cart) {
        if (item.product.id === product.id) {
            item.quantity += quantity; 
            itemFound = true; 
            break; 
        }
    }

    if (!itemFound) {
        cart.push({ product, quantity });
    }

    return cart; 
};

// Метод підрахунку загальної ціни товарів у кошику
const calculateTotal = <T extends BaseProduct>(cart: CartItem<T>[]): number => {
    let res: number = 0;

    for (const item of cart) {
        res += item.product.price * item.quantity;
    }

    return res;
};

const phone = findProduct(electronics, 1);
console.log("Пошук товару за Id:", phone);
const filteredProducts = filterByPrice([...electronics, ...clothing], 1000, 100000);
console.log("Відфільтровані за ціною товари: :", filteredProducts);
let cart: CartItem<BaseProduct>[] = addToCart([], phone!, 1);
console.log("Оновлена корзина після додавання:", cart);
const totalCost = calculateTotal(cart);
console.log("Загальна ціна:", totalCost);