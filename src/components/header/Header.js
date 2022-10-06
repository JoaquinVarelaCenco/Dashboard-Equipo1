import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import "./Header.css"
import { useContext, useEffect, useRef } from "react";
import { HeaderContext } from "../../context/HeaderContext";
import { useLocation } from 'react-router-dom';
import searchImage from '../../assets/images/magnify.svg';
import menuImage from '../../assets/images/menu.svg'

const Header = () => {
  const { page, currentPage } = useContext(HeaderContext)
  const location = useLocation();
  const pageTitle ="Products";
  useEffect(() => {
    currentPage(location.pathname);

  const { theme } = useContext(ThemeContext);

    
  }, [location]);

  // page==='/home' ? pageTitle = "¡Hola Olivia!" :  pageTitle = 'Products'

  const title = useRef(null);

  return (
    <div className='header'>
      <div className="headerGeneric">
        <button><img src={menuImage} alt="Menú hamburguesa" className="hamburguerMenu"/></button>
        <div className="title"><h2 ref={title}>{pageTitle}</h2></div>
      </div>
      {
      page==="/products" ? 
          <div className="headerProducts">
            <div className="header__search-container">
              <input type="text" class="header__search" placeholder="Buscar productos..." />
              <button><img src={searchImage} alt="Lupa de busqueda" /></button>
            </div>
            <button className="headerProducts__btnAgregar">Agregar Productos</button>
          </div> 
      :
      <h1>Chau juan</h1>
    }
    </div>
    <div className={`header ${theme}`}>Header</div>
  )
}

export default Header