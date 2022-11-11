export interface NavItem {
    title: string;
    icon: string;
}

export interface CatalogItem {
    title: string;
    link: string;
}

export interface CustomError {
    status?: number;
    code?: number;
    name: string;
    message: string;
    stack?: string;
    statusCode?: number;
    statusMessage?: string;
}

export interface Catalog {
    electronics: string;
    jewelery: string;
    womens: string;
    mens: string;
}

export interface ProducRating {
    rate: number;
    count: number;
}

export interface Product {
    category: string;
    description: string;
    id: number;
    image: string;
    price: number;
    rating: ProducRating;
    title: string;
}

export interface CategoryParams {
    type?: string;
}
