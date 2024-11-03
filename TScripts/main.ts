type BaseProduct = {
    id: number;
    name: string;
    price: number;
    count: number;
    color: string;
    description: string;
    type: string;
};

type Electronics  = BaseProduct & {
    category: 'electronics';
    warrantyPeriod: string;
    electricityConsumption: string;
}

type Clothing = BaseProduct & {
    category: "clothing";
    size: "XS" | "S" | "M" | "L" | "XL" | "XXL";
    gender: "M" | "W" | "M&W";
};