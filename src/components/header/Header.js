// import { SearchContext } from "../../context/SearchContext";
// import searchImage from "../../assets/images/magnify.svg";
// import leftArrow from '../../assets/images/chevron-right (1).svg'
import "./Header.css";
import { useContext, useEffect, useRef, useState } from "react";
import { HeaderContext } from "../../context/HeaderContext";
import { useLocation, Link } from "react-router-dom";
import menuImage from "../../assets/images/menu.svg";
import { SideBarContext, SideBarProvider } from "../../context/SideBarContext";
import { ThemeContext } from "../../context/ThemeContext";
import HeaderProducts from "../HeaderProducts/HeaderProducts";
import HeaderEditAddProduct from "../HeaderEditAndAddProduct/HeaderEditAddProduct";


const Header = () => {
  let buttonMenu = useRef();

  //Contextos : tema - page - buscador
  const { theme } = useContext(ThemeContext);
  const { page, currentPage, titleContainer, currentTitleContainer } = useContext(HeaderContext);

  const location = useLocation();
  const { toggleVisibility } = useContext(SideBarContext);
  let pageTitle = "¡Hola Olivia!";
  let productId = "";
  let titleLink = "/home";

  //USe effect para setear la url en la que me encuentro
  useEffect(() => {
    currentPage(location.pathname);
    // titleContainer.current.style.display="flex";
    currentTitleContainer("displayFlex")
    
  }, [location]);

  if (page === "/products") {
    pageTitle = "Products";
    titleLink =page;
  } else if (page.includes("/stores")) {
    pageTitle = "Tiendas";
    titleLink =page;
  } else if (page === "/products/new") {
    pageTitle = "Productos";
    titleLink ="/products";
  } else if (page.includes("/products/")) {
    pageTitle = "Productos";
    titleLink ="/products";
    productId = "#" + location.pathname.split("/")[2];
  }

  return (
    <div className={`header ${theme}`}>
      <div className={`headerGeneric ${titleContainer}`}>
        

        <button
          ref={buttonMenu}
          onClick={() => {
            toggleVisibility();
          }}
          className="header__menu-hamburguesa"
        >
          <img
            src={menuImage}
            alt="Menú hamburguesa"
            className="hamburguerMenu"
          />
        </button>
        <div className="title">
          <Link to={titleLink}><h2>{pageTitle}</h2></Link>
        </div>
      </div>

      {page === "/products" ? (
        <HeaderProducts/>
      ) : page === "/products/new" ? (
        <HeaderEditAddProduct productContent="Nuevo Producto" editProduct={false}/>
      ) : page.includes("/products/") ? (
        <HeaderEditAddProduct productContent={productId} editProduct={true}/>
      ) : (
        ""
      )}
    </div>
  );
};

export default Header;
