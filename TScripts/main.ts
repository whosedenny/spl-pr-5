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
type Electronics  = BaseProduct & {
    category: 'electronics';
    warrantyPeriod: string;
    electricityConsumption: string;
}

//Тип для товарів одягу 
type Clothing = BaseProduct & {
    category: "clothing";
    size: "XS" | "S" | "M" | "L" | "XL" | "XXL";
    gender: "M" | "W" | "M&W";
};

//Тип для кошику
type CartItem<T> ={
    product: T,
    quantity: number
}

// Метод пошуку товару за його Id
const findProduct = <T extends BaseProduct>(products: T[], id: number): T | undefined => {
    return products.find((product) => product.id === id);
};

//Метод фільтрації товарів за мінімальною та максимальною ціною
const filterByPrice = <T extends BaseProduct>(products: T[], maxPrice: number, minPrice: number = 0): T[] => {
    return products.filter((product) => product.price >= minPrice && product.price <= maxPrice);
};

//Метод додавання товару до кошику
const addToCart = <T extends BaseProduct>(cart: CartItem<T>[], product: T, quantity: number): CartItem<T>[] => {
    const cartItem = cart.find(
        (item) => item.product.id === product.id
    );

    if (cartItem) {
        cartItem.quantity += quantity;
    } else {
        cart.push({ product, quantity });
    }

    return cart;
};


// Метод підрахунку загальної ціни товарів у кошику
const calculateTotal = <T extends BaseProduct>(cart: CartItem<T>[]): number=>{
    let res: number = 0;
    
    for (const item of cart) {
        res += item.product.price * item.quantity;
    }

    return res;
}