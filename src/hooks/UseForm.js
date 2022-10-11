import { useContext, useRef } from "react";
import { ProductContext } from "../context/ProductContext";

const useForm = () => {
  const { product, currentProduct } = useContext(ProductContext);

  const handleInputChange = ({ target }) => {
    if (target.name === "price") {
      currentProduct({ ...product, [target.name]: Number(target.value) });
    } else {
      currentProduct({ ...product, [target.name]: target.value });
    }
  };

  const handleInputChangeStock = (operation) => {
    if (operation === "+") {
      currentProduct({ ...product, stock: product.stock + 1 });
    } else if (operation === "-" && product.stock > 0) {
      currentProduct({ ...product, stock: product.stock - 1 });
    }
  };

  const handleAddImage = () => {
    let imageValue = document.getElementById("input-img-add").value;
    let aux = [...product.images];
    aux.push(imageValue);
    currentProduct({ ...product, images: aux });
  };

  const handleRemoveImage = (index) => {
    let aux = [...product.images];
    aux.splice(index, 1);
    currentProduct({ ...product, images: aux });
  };

  return {
    handleInputChange,
    handleInputChangeStock,
    handleAddImage,
    handleRemoveImage,
  };
};

export default useForm;
