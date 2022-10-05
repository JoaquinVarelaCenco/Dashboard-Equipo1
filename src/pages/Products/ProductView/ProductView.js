import React, { useEffect, useState } from "react";
import { newProduct } from "../../../services/apiServices";
import "./ProductView.css";

const ProductView = () => {
  const defaultValues = {
    title: "",
    price: 0,
    stock: 0,
    description: "",
    category: "",
    images: [],
    rating: {
      rate: 0,
      count: 0,
    },
  };

  const [product, setProduct] = useState(defaultValues);

  const handleInputChange = ({ target }) => {
    if (target.name === "price") {
      setProduct({ ...product, [target.name]: Number(target.value) });
    } else {
      setProduct({ ...product, [target.name]: target.value });
    }
    console.log(product);
  };

  const handleInputChangeStock = (operation) => {
    if (operation === "+") {
      setProduct({ ...product, stock: product.stock + 1 });
    } else if (operation === "-" && product.stock > 0) {
      setProduct({ ...product, stock: product.stock - 1 });
    }
  };

  const handleAddImage = () => {
    let imageValue = document.getElementById("input-img-add").value;
    let aux = product.images;
    aux.push(imageValue);
    setProduct({ ...product, images: aux });
  };

  function handleSubmit() {
    newProduct(product).then((res) => {
      console.log(res);
    });
  }

  return (
    <div className="product-new">
      <h1>Informacion</h1>
      <form onSubmit={handleSubmit} className="product-new__form">
        <p>Nombre</p>
        <input
          type="text"
          name="title"
          value={product.title}
          placeholder="Nombre"
          onChange={handleInputChange}
          required
        />
        <p>Valor</p>
        <input
          type="number"
          name="price"
          value={product.price}
          onChange={handleInputChange}
          required
        />
        <p>Stock</p>
        <div className="product-new-form__stock">
          <button onClick={() => handleInputChangeStock("+")} type="button">
            +
          </button>
          <span>{product.stock}</span>
          <button onClick={() => handleInputChangeStock("-")} type="button">
            -
          </button>
        </div>

        <p>Descripcion</p>
        <textarea
          type="number"
          name="description"
          placeholder="Descripcion del producto"
          value={product.description}
          onChange={handleInputChange}
          required
        />
        <p>Tienda</p>
        <select
          name="category"
          value={product.categoria}
          onChange={handleInputChange}
        >
          <option value="categoria-1">categoria-1</option>
          <option value="categoria-2">categoria-2</option>
          <option value="categoria-3">categoria-3</option>
          <option value="categoria-4">categoria-4</option>
        </select>
        <h3>Galeria de imagenes</h3>
        <p>Nueva imagen</p>
        <input type="text" name="image" id="input-img-add" />
        <button onClick={() => handleAddImage()} type="button">
          Add image
        </button>
        <p>Imagenes actuales</p>

        {product.images.map((img) => {
          return <p>{img}</p>;
        })}
        <button type="submit">Crear</button>
      </form>
    </div>
  );
};

export default ProductView;
