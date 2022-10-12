import { useContext, useEffect, useRef } from "react";
import { HeaderContext } from "../../context/HeaderContext";
import { useLocation, Link } from "react-router-dom";
import { SideBarContext } from "../../context/SideBarContext";
import { ThemeContext } from "../../context/ThemeContext";
import { pathName } from "../../utils/pathName";
import HeaderProducts from "../HeaderProducts/HeaderProducts";
import menuImage from "../../assets/images/menu.svg";
import HeaderEditAddProduct from "../HeaderEditAndAddProduct/HeaderEditAddProduct";
import Button from "../Button/Button";
import "./Header.css";

const Header = () => {
  let buttonMenu = useRef("");

  //Contextos : tema - page
  const { theme } = useContext(ThemeContext);
  const { toggleVisibility } = useContext(SideBarContext);
  const { page, currentPage, titleContainer, currentTitleContainer } = useContext(HeaderContext);
  const location = useLocation();
  
  //USe effect para setear la url en la que me encuentro
  useEffect(() => {
    currentPage(location.pathname);
    currentTitleContainer("displayFlex")
  }, [location]);


  const [pageTitle, titleLink] = pathName(page);
  let productId = "#" + location.pathname.split("/")[2];
  let id = location.pathname.split("/")[2];

  return (
    <div className={`header ${theme}`}>
      <div className={`headerGeneric ${titleContainer}`}>
        

        <Button 
          click={() => {toggleVisibility()}}
          classN={"header__hamburguer-menu-btn noHoverEffect"}
          reference={buttonMenu}
        >
          <img
            src={menuImage}
            alt="Menú hamburguesa"
            className="header__hamburguer-menu-img"
          />
        </Button>
        <div className="title">
          <Link to={titleLink}><h2>{pageTitle}</h2></Link>
        </div>
      </div>

      {page === "/products" ? (
        <HeaderProducts/>
      ) : page === "/products/new" ? (
        <HeaderEditAddProduct productContent="Nuevo Producto" editProduct={false}/>
      ) : page.includes("/products/") ? (
        <HeaderEditAddProduct productContent={productId} editProduct={true} id={id}/>
      ) : (
        ""
      )}
    </div>
  );
};

export default Header;
