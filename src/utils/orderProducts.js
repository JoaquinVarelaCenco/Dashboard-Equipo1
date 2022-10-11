
// orderByKey - Ordena la lista de productos por una key
// recibe como parametros la lista y el string de la key por cual ordenar
export const orderByKey = (productList, key) =>{
    const orderer = productList.sort((a,b) =>{
        if(a[key] < b[key]){
            return 1;
        }else  if(a[key] > b[key]){
            return -1;
        }else{
            return 0;
        }
    })
    return orderer;
}

// orderByKey - Ordena la lista de productos por una key
// recibe como parametros la lista y el string de las keys, la segunda es por la cual se ordena
export const orderByKeyDouble = (productList, key1, key2) =>{
    const orderer = productList.sort((a,b) =>{
        if(a[key1][key2] < b[key1][key2]){
            return 1;
        }else  if(a[key1][key2] > b[key1][key2]){
            return -1;
        }else{
            return 0;
        }
    })
    return orderer;
}