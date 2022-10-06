import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { newProduct } from "../../../services/apiServices";
import { getProductById } from "../../../services/apiServices";
import { updateProduct } from "../../../services/apiServices";
import { deleteProduct } from "../../../services/apiServices";
import "./ProductView.css";

const ProductView = () => {
  const navigate = useNavigate();

  let defaultValues = {
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
  const [lastState, setLastState] = useState(defaultValues);

  let productId = useParams().id;

  useEffect(() => {
    if (productId) {
      getProductById(productId).then((res) => {
        if (res.status === 404) {
          alert("Producto no encontrado");
          navigate("/");
        }
        delete res.isActive;
        delete res.lastModified;
        delete res.createdAt;
        setProduct(res);
        setLastState(res);
      });
    }
  }, [productId]);

  const handleInputChange = ({ target }) => {
    if (target.name === "price") {
      setProduct({ ...product, [target.name]: Number(target.value) });
    } else {
      setProduct({ ...product, [target.name]: target.value });
    }
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

  const handleRemoveImage = (index) => {
    let aux = product.images;
    aux.splice(index, 1);
    setProduct({ ...product, images: aux });
  };

  function handleSubmit() {
    if (productId) {
      updateProduct(product).then((res) => {
        console.log(res);
      });
    } else {
      newProduct(product).then((res) => {
        console.log(res);
      });
    }
  }

  function handleDeleteProd() {
    deleteProduct(productId).then((res) => {
      console.log(res);
      navigate("/");
    });
  }

  function resetCamps() {
    setProduct(lastState);
  }

  return (
    <div className="product-new">
      <div className="product-new__nav">
        {productId ? (
          <>
            <h2>Productos - #{productId}</h2>
            <button onClick={handleDeleteProd}>Eliminar</button>
          </>
        ) : (
          <h2>Productos - Nuevo Producto</h2>
        )}
      </div>
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
          <button onClick={() => handleInputChangeStock("-")} type="button">
            -
          </button>
          <span>{product.stock}</span>
          <button onClick={() => handleInputChangeStock("+")} type="button">
            +
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
        <p>Categoria</p>
        <select
          name="category"
          value={product.category}
          onChange={handleInputChange}
          required
        >
          <option value="DEFAULT" disabled>
            Seleccione categoria
          </option>
          <option value="categoria-1">categoria-1</option>
          <option value="categoria-2">categoria-2</option>
          <option value="categoria-3">categoria-3</option>
          <option value="categoria-4">categoria-4</option>
        </select>
        <p>Tienda</p>
        <select
          name="store"
          required
        >
          <option value="DEFAULT" disabled>
            Seleccione una tienda
          </option>
          <option value="tienda-1">tienda-1</option>
          <option value="tienda-2">tienda-2</option>
          <option value="tienda-3">tienda-3</option>
          <option value="tienda-4">tienda-4</option>
        </select>
        <h3>Galeria de imagenes</h3>
        <p>Nueva imagen</p>
        <input type="text" name="image" id="input-img-add" />
        <button onClick={() => handleAddImage()} type="button">
          Add image
        </button>
        <p>Imagenes actuales</p>

        {product.images.map((img, index) => {
          return (
            <div key={index}>
              <p>{img}</p>
              <button onClick={() => handleRemoveImage(index)} type="button">
                X
              </button>
            </div>
          );
        })}
        <div className="product-new__action">
          {productId ? (
            <button type="submit">Editar</button>
          ) : (
            <button type="submit">Crear</button>
          )}
          <button type="reset" onClick={resetCamps}>
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductView;
