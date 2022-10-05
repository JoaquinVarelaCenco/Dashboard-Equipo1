import "./ProductCard.css";


const ProductCard = ({ title, price, image }) => {
  return (
    <article className="main-product__related-product-card">
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
          <p className="valorNumerico">{price}</p>
          <p className="puntos">PUNTOS</p>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
