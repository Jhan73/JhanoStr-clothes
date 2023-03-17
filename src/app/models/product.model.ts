export interface Product{
    id: string;
    image : string;
    price : number;
    title: string;
    description: string,
    category: string,
    rating: {
        rate: number,
        count: number
    }
}