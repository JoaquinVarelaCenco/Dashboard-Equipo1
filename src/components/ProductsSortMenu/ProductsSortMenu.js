import { useContext } from "react";
import { SearchContext } from "../../context/SearchContext";
import './ProductsSortMenu.css'

const ProductsSortMenu = () => {
    const context = useContext(SearchContext);


  return (
    <div className="productList__container__sort">
        <i>Ordenar por</i>
        <select
        name="category"
        required
        value={context.orderBy}
        className="select-control"
        onChange={context.orderProducts}
        >
        <option value="Mayor precio">Mayor precio</option>
        <option value="Menor precio">Menor precio</option>
        <option value="Mas relevantes" selected>Mas relevantes</option>
        <option value="A-Z">A-Z</option>
        </select>   
    </div>
  )
}

export default ProductsSortMenu