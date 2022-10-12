import { deleteProduct } from "../services/apiServices";


export function deleteProductFunction(id) {
    deleteProduct(id).then((res) => {
    });
}

export const sortByCount = (products) =>{
    const sorted = products.sort((a,b) =>{
    if(a.rating.count < b.rating.count){
        return 1;
    }else  if(a.rating.count > b.rating.count){
        return -1;
    }else{
        return 0;
    }
    });
    return sorted;
}

export const sortByStock = (products) =>{
    const sorted = products.sort((a,b) =>{
    if(a.stock < b.stock){
        return 1;
    }else  if(a.stock > b.stock){
        return -1;
    }else{
        return 0;
    }
    });
    return sorted;
}