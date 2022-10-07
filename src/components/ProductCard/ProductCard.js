import "./ProductCard.css";
import leftArrow from '../../assets/images/chevron-right (1).svg'
import { Link } from "react-router-dom";
import Spinner from '../Spinner/Spinner';


const ProductCard = ({ title, price, image, id }) => {
  
  return (
    <Link to={`/products/${id}`} className="product-card-link">
      <article className="main-product__related-product-card">
      <div className="main-product__imageAndDesc">
          <div className="section-article__image">
          <img
            src={image}
            alt="Imagen de producto"
            className="imagenPrincipal"
          /> 
          </div>

          <div className="section-article__desc">
            <div className="desc">
              <p>{title}</p>
            </div>

            <div className="section-article__price">
              <p className="valorNumerico">#{id}</p>
            </div>
          </div>
      </div>
      <div className="section-article__goToProduct">
        <img src={leftArrow} alt="" />
      </div>
    </article>
    </Link>
    
  );
};

export default ProductCard;
