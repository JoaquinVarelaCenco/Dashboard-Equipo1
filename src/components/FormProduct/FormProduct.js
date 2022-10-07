import { updateProduct } from "../../services/apiServices";
import { newProduct } from "../../services/apiServices";
import { useNavigate } from "react-router-dom";

const FormProduct = ({product, setProduct, productId, lastState}) => {

  const navigate = useNavigate();


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
        navigate("/");
      }
    
    
      function resetCamps() {
        setProduct(lastState);
      }
  return (
    <form onSubmit={handleSubmit} className="product-new__form">
    <p className="product-new__input-title">Nombre</p>
    <input
      type="text"
      name="title"
      value={product.title}
      placeholder="Nombre"
      onChange={handleInputChange}
      required
    />
    <p className="product-new__input-title">Valor</p>
    <input
      type="number"
      name="price"
      value={product.price}
      onChange={handleInputChange}
      required
    />
    <p className="product-new__input-title">Stock</p>
    <div className="product-new-form__stock">
      <button onClick={() => handleInputChangeStock("-")} type="button">
        -
      </button>
      <span>{product.stock}</span>
      <button onClick={() => handleInputChangeStock("+")} type="button">
        +
      </button>
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
      required className="form-control"
    >
      <option value="" disabled selected>
        Seleccione categoria
      </option>
      <option value="categoria-1">categoria-1</option>
      <option value="categoria-2">categoria-2</option>
      <option value="categoria-3">categoria-3</option>
      <option value="categoria-4">categoria-4</option>
    </select>
    <p className="product-new__input-title">Tienda</p>
    <select name="store" className="form-control" required>
      <option value="" disabled selected>
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
      <button onClick={() => handleAddImage()} type="button">
        Add
      </button>
    </div>
    <p className="product-new__input-title">Imagenes actuales</p>

    {product.images.map((img, index) => {
      return (
        <div key={index} className="product-new-form__card-image">
          {/* <div className="product-new-form__card-image__info-img"> */}
          <img src={img} alt="imagen producto" />
          <p>{img}</p>
          {/* </div> */}
          <button onClick={() => handleRemoveImage(index)} type="button">
            Quitar
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
  )
}

export default FormProduct