export interface Product{
    id: string;
    images : string [];
    price : number;
    title: string;
    description: string,
    category: Category,
}
export interface Category{
    id:number,
    name: string,
    typeImg: string
}
export interface CreateProductDTO extends Omit<Product,'id' | 'category'>{
    categoryId: number
}