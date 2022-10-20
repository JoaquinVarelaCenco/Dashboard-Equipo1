import React, { useContext, useEffect } from "react";
import { ProductContext } from "../../context/ProductContext";
import useForm from "../../hooks/UseForm";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";
import profilePic from "../../assets/images/ProfilePic.png";
import noImage from "../../assets/images/no-image.jpeg";
import "./ProductForm.css";

const ProductForm = ({ productId, handleSubmit }) => {
  const { product, resetCamps, resetForm } = useContext(ProductContext);
  const { theme } = useContext(ThemeContext);

  const {
    handleInputChange,
    handleInputChangeStock,
    handleAddImage,
    handleRemoveImage,
  } = useForm();

  useEffect(() => {
    return () => {
      resetForm();
    };
  }, []);

  return product ? (
    <div className="product-new">
      {productId ? (
        <div className="product-new__view-card">
          <img
            src={product.images[0] === undefined ? noImage : product.images[0]}
            alt="imagen producto"
          />
          <div className="product-new__view-card__content">
            <h2>{product.title}</h2>
            <div className="product-new__view-card__info">
              <div>
                {" "}
                <p>{product.price}</p>
                <span>PUNTOS SUPERCLUB</span>
              </div>
              <div>
                {" "}
                <p>{product.stock}</p>
                <span>STOCK DISPONIBLE</span>{" "}
              </div>
              <div className="profile-container">
                <Link to={"/stores"} className={`eachLink-view ${theme}`}>
                  <Button classN={"user-button-view"}>
                    <div className="user-button__profile-view">
                      <img className="user-img-view" src={profilePic} />
                    </div>
                    <div>
                      <p className="user-name-view">Olivia store</p>
                    </div>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      <h1>Informacion</h1>
      <form
  
        onSubmit={(event) => handleSubmit( product)}
        className="product-new__form"
      >
        <p className="product-new__input-title">Nombre</p>
        <input
          type="text"
          name="title"
          value={product.title}
          placeholder="Nombre"
          onChange={handleInputChange}
          minLength="3"
          required
        />
        <p className="product-new__input-title">Valor</p>
        <input
          type="number"
          name="price"
          value={product.price}
          onChange={handleInputChange}
          min="0"
          required
        />
        <p className="product-new__input-title">Stock</p>
        <div className="product-new-form__stock">
          <Button
            click={() => handleInputChangeStock("-")}
            type={"button"}
            title={"-"}
            classN={"noHoverEffect"}
          />
          <span data-testid="spanProdStock">{product.stock}</span>
          <Button
            click={() => handleInputChangeStock("+")}
            type={"button"}
            title={"+"}
            classN={"noHoverEffect"}
          />
        </div>

        <p className="product-new__input-title">Descripcion</p>
        <textarea
          type="number"
          name="description"
          placeholder="Descripcion del producto"
          value={product.description}
          onChange={handleInputChange}
          required
        />
        <p className="product-new__input-title">Categoria</p>

        <select
          name="category"
          value={product.category}
          onChange={handleInputChange}
          required
          className="form-control"
        >
          <option value="" disabled>
            Seleccione categoria...
          </option>
          <option value="categoria-1">categoria-1</option>
          <option value="categoria-2">categoria-2</option>
          <option value="categoria-3">categoria-3</option>
          <option value="categoria-4">categoria-4</option>
        </select>

        <p className="product-new__input-title">Tienda</p>

        <select name="store" className="form-control" defaultValue="">
          <option value="" disabled>
            Seleccione una tienda
          </option>
          <option value="tienda-1">tienda-1</option>
          <option value="tienda-2">tienda-2</option>
          <option value="tienda-3">tienda-3</option>
          <option value="tienda-4">tienda-4</option>
        </select>

        <h3>Galeria de imagenes</h3>
        <p className="product-new__input-title">Nueva imagen</p>
        <div className="prueba">
          <input type="text" name="image" id="input-img-add" />
          <Button
            title={"Cargar"}
            click={() => handleAddImage()}
            type="button"
          />
        </div>
        <p className="product-new__input-title">Imagenes actuales</p>

        {product.images.map((img, index) => {
          return (
            <div key={index} className="product-new-form__card-image">
              <img src={img} alt="imagen producto" />
              <p>{img}</p>

              <Button
                type={"button"}
                click={() => handleRemoveImage(index)}
                title={"Quitar"}
              />
            </div>
          );
        })}
        <div className="product-new__action">
          {productId ? (
            <Button type={"submit"} title={"Editar"} />
          ) : (
            <Button type={"submit"} title={"Crear"} />
          )}
          <Button type={"reset"} title={"Cancelar"} click={resetCamps} />
        </div>
      </form>
    </div>
  ) : null;
};

export default ProductForm;
