import { SearchContext } from "../../context/SearchContext";
import "./Header.css";
import { useContext, useEffect, useRef } from "react";
import { HeaderContext } from "../../context/HeaderContext";
import { useLocation, Link } from "react-router-dom";
import searchImage from "../../assets/images/magnify.svg";
import menuImage from "../../assets/images/menu.svg";
import { SideBarContext, SideBarProvider } from "../../context/SideBarContext";
import { ThemeContext } from "../../context/ThemeContext";
import leftArrow from "../../assets/images/chevron-right (1).svg";

const Header = () => {
  let buttonMenu = useRef();
  // const btnSearch = useRef(null);

  const context = useContext(SearchContext);
  const { theme } = useContext(ThemeContext);
  const { page, currentPage } = useContext(HeaderContext);
  // const [productId, setProductId] = useState("");
  const location = useLocation();

  const pageTitle2 = "Products";
  const { toggleVisibility } = useContext(SideBarContext);
  const actualPage = page;
  let pageTitle = "¡Hola Olivia!";
  let productId = "";

  //USe effect para setear la url en la que me encuentro
  useEffect(() => {
    currentPage(location.pathname);
    titleContainer.current.style.display="flex";
  }, [location]);

 
 


  if (page === "/products") {
    pageTitle = "Products";
  } else if (page.includes("/stores")) {
    pageTitle = "Tiendas";
  } else if (page === "/products/new") {
    pageTitle = "Productos";
  } else if (page.includes("/products/")) {
    pageTitle = "Productos";
    productId = "#" + location.pathname.split("/")[2];
  }

  //Logica expandir input de búsqueda
  const titleContainer = useRef("");
  const inputSearch = useRef("");
  const inputSearchContainer = useRef("");
  const btnClose = useRef("");
  const containerAddProduct = useRef("");

  const expandSearchInput = () => {
    let width = window.screen.width;
    if (width <= 500) {
      titleContainer.current.style.display = "none";
      inputSearch.current.style.width = "100%";
      inputSearchContainer.current.style.width = "100%";
      btnClose.current.style.display = "block";
      containerAddProduct.current.style.display = "none"
    } else {
      titleContainer.current.style.display = "flex";
    }
  };

  const closeSearchInput = () => {
    titleContainer.current.style.display = "flex";
    inputSearch.current.style.width = "45px";
    inputSearchContainer.current.style.width = "45px";
    btnClose.current.style.display = "none";
    containerAddProduct.current.style.display = "block"
  };

   //useEffect para saber si screen width es mayor a 500px
   window.onresize = ()=>{
    if(window.screen.width> 500){
      closeSearchInput();
      inputSearch.current.style.width = "280px";
      inputSearchContainer.current.style.width = "280px";
    }else{
      closeSearchInput();
    }
  }
  return (
    <div className={`header ${theme}`}>
      <div className="headerGeneric" ref={titleContainer}>
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
          <h2>{pageTitle}</h2>
        </div>
      </div>
      {page === "/products" ? (
        <div className="headerProducts">
          <div className="header__search-container" ref={inputSearchContainer}>
            <button
              onClick={closeSearchInput}
              className="search-container__btnClose"
              ref={btnClose}
            >
              X
            </button>
            <input
              type="text"
              className="header__search"
              placeholder="Buscar productos..."
              ref={inputSearch}
              onChange={context.handleSearch}
            />
            <button
              onClick={expandSearchInput}
              className="search-container__btnSearch"
            >
              <img src={searchImage} alt="Lupa de busqueda" />
            </button>
          </div>
          <div className="headerProducts-ContainerAgregar" >
            <Link to={"/products/new"}>
              <button className="headerProducts__btnAgregar">
                Agregar Producto
              </button>
            </Link>
          </div>
          <div className="headerProducts-ContainerAgregar" >
            <Link to={"/products/new"} ref={containerAddProduct}>
              <button className="headerProducts__btnAgregarAlternative">
                +
              </button>
            </Link>
          </div>
        </div>
      ) : page === "/products/new" ? (
        <div className="headerEditProduct">
          <img src={leftArrow} alt="" />
          <h2>Nuevo Producto</h2>
        </div>
      ) : page.includes("/products/") ? (
        <>
          <div className="headerEditProduct">
            <img src={leftArrow} alt="" />
            <h2>{productId}</h2>
          </div>
          <button className="headerEditProduct__btnDelete">ELIMINAR</button>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Header;
