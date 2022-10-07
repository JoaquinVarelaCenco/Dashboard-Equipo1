import { SearchContext } from "../../context/SearchContext";
import { ThemeContext } from "../../context/ThemeContext";
import "./Header.css"
import { useContext, useEffect, useRef } from "react";
import { HeaderContext } from "../../context/HeaderContext";
import { useLocation, Link } from 'react-router-dom';
import searchImage from '../../assets/images/magnify.svg';
import menuImage from '../../assets/images/menu.svg'
import { SideBarContext, SideBarProvider } from "../../context/SideBarContext";
import leftArrow from '../../assets/images/chevron-right (1).svg'


const Header = () => {
let buttonMenu = useRef();
// const btnSearch = useRef(null);

  const context = useContext(SearchContext);

  const { theme } = useContext(ThemeContext);
  const { page, currentPage } = useContext(HeaderContext)
  // const [productId, setProductId] = useState("");
  const location = useLocation();

  const pageTitle2 ="Products";
  const {toggleVisibility} = useContext(SideBarContext)
  const actualPage = page;
  let pageTitle ="¡Hola Olivia!";
  let productId = "";
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
  }else{
    pageTitle ="";
  }


  //Logica expandir input de búsqueda
  const titleContainer = useRef('');
const expandSearchInput = ()=>{
  let width = window.screen.width;
  if(width<=500){
    titleContainer.current.style.display = "none"
  }
}

  return (
    <div className={`header ${theme}`}>
      <div className="headerGeneric" ref={titleContainer}>
        <button ref={buttonMenu} onClick={()=>{
          toggleVisibility()}} className="header__menu-hamburguesa"><img src={menuImage} alt="Menú hamburguesa" className="hamburguerMenu"/></button>
        <div className="title"><h2>{pageTitle}</h2></div>
      </div>
      {
      page==="/products" ? 
          <div className="headerProducts">
            <div className="header__search-container">
              <input type="text" class="header__search" placeholder="Buscar productos..." onChange={context.handleSearch} ></input>
              <button onClick={ expandSearchInput}><img src={searchImage} alt="Lupa de busqueda" /></button>
            </div>
            <div className="headerProducts-ContainerAgregar"><Link to={"/products/new"}><button className="headerProducts__btnAgregar">Agregar Producto</button></Link></div>
            <div className="headerProducts-ContainerAgregar"><Link to={"/products/new"}><button className="headerProducts__btnAgregarAlternative">+</button></Link></div>
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