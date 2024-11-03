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

// Метод пошуку товару за його Id
const findProduct = <T extends BaseProduct>(products: T[], id: number): T | undefined => {
    return products.find((product) => product.id === id);
};

//Метод фільтрації товарів за мінімальною та максимальною ціною
const filterByPrice = <T extends BaseProduct>(products: T[], maxPrice: number, minPrice: number = 0): T[] => {
    return products.filter((product) => product.price >= minPrice && product.price <= maxPrice);
};