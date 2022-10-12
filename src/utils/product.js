
import { deleteProduct } from "../services/apiServices";


export function deleteProductFunction(id) {
    deleteProduct(id).then((res) => {
    });
}
