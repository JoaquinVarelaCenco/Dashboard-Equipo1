import { ThemeContext } from "../../context/ThemeContext";
import "./Header.css"
import { useContext, useEffect, useState } from "react";
import { HeaderContext } from "../../context/HeaderContext";
import { useLocation, Link } from 'react-router-dom';
import searchImage from '../../assets/images/magnify.svg';
import menuImage from '../../assets/images/menu.svg';
import leftArrow from '../../assets/images/chevron-right (1).svg'


const Header = () => {
  const { page, currentPage } = useContext(HeaderContext)
  // const [productId, setProductId] = useState("");
  const location = useLocation();
  const actualPage = page;
  let pageTitle ="¡Hola Olivia!";
  let productId = "";
  const { theme } = useContext(ThemeContext);
  useEffect(() => {
    currentPage(location.pathname);
  }, [location]);
  if(page==='/products'){
    pageTitle = 'Products';
  }else if(page.includes("/stores")){
    pageTitle = "Tiendas"
  }else if(page === '/products/new'){
    pageTitle = "Productos"
  }else if(page.includes('/products/')){
    pageTitle = "Productos"
    productId = "#"+location.pathname.split('/')[2];
  }

  return (
    <div className={`header ${theme}`}>
      <div className="headerGeneric">
        <button><img src={menuImage} alt="Menú hamburguesa" className="hamburguerMenu"/></button>
        <div className="title"><h2>{pageTitle}</h2></div>
      </div>
      {
      page==="/products" ? 
          <div className="headerProducts">
            <div className="header__search-container">
              <input type="text" class="header__search" placeholder="Buscar productos..." />
              <button><img src={searchImage} alt="Lupa de busqueda" /></button>
            </div>
            <div className="headerProducts-ContainerAgregar"><Link to={"/products/new"}><button className="headerProducts__btnAgregar">Agregar Productos</button></Link></div>
          </div> 
      :
      page === '/products/new'? 
          <div className="headerEditProduct">
            <img src={leftArrow} alt="" />
            <h2>Nuevo Producto</h2>
          </div>
      : page.includes('/products/')? 
          <>
            <div className="headerEditProduct">
              <img src={leftArrow} alt="" />
              <h2>{productId}</h2>
            </div>
            <button className="headerEditProduct__btnDelete">ELIMINAR</button>
          </>
      :
        ""
    }
    
    </div>
  )
}

export default Header