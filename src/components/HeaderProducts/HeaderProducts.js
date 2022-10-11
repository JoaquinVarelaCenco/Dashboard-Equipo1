import {useRef, useEffect, useState, useContext} from 'react'
import { Link } from 'react-router-dom';
import { SearchContext } from "../../context/SearchContext";
import searchImage from "../../assets/images/magnify.svg";


const HeaderProducts = ({titleContainer}) => {

    //Context
    const context = useContext(SearchContext);

    //Estados para cambiar estilos
  const [styleSearchAnimation, setStyleSearchAnimation] = useState("")
  const [styleDisplayNone, setStyleDisplayNone ] = useState("")

useEffect(() => {
    titleContainer.current.style.display="flex";
    if(window.screen.width<501){
        setTimeout(()=>{
          inputSearch.current.placeholder = "";
        }, 100)
      }
}, [])


//Logica expandir input de búsqueda
titleContainer.current.style.display="flex";
const inputSearch = useRef("");
const inputSearchContainer = useRef("");
const btnClose = useRef("");
const containerAddProduct = useRef("");

const expandSearchInput = () => {
  let width = window.screen.width;
  if (width <= 500) {
    inputSearch.current.placeholder = "Buscar productos...";
    
    //este elemento depende del evento || NO del mediaQuery - 
    titleContainer.current.style.display = "none";
    containerAddProduct.current.style.display = "none";

    setStyleSearchAnimation('expandSearchBarStyle');
    setStyleDisplayNone("showComponent")
  } else {
    titleContainer.current.style.display = "flex";
  }
};

const closeSearchInput = () => {
  inputSearch.current.placeholder = "";

  titleContainer.current.style.display = "flex";
  containerAddProduct.current.style.display = "block";

  setStyleSearchAnimation('')
  setStyleDisplayNone('')
  setStyleDisplayNone("hideComponent")
};

 //al cambiar tamaño de pantalla se ejecutan las funciones expand || close search input
 window.onresize = ()=>{
  closeSearchInput();
  if(window.screen.width> 500){ 
    inputSearch.current.placeholder = "Buscar productos...";
  }
}


  return (
    <div className="headerProducts">
          <div className={`header__search-container  ${styleSearchAnimation}`} ref={inputSearchContainer}>
            <button
              onClick={closeSearchInput}
              className={`search-container__btnClose headerBtn ${styleDisplayNone}`}
              ref={btnClose}
            >
              X
            </button>
            <input
              type="text"
              className={`header__search  ${styleSearchAnimation}`}
              placeholder="Buscar productos..."
              ref={inputSearch}
              onChange={context.handleSearch}
            />
            <button
              onClick={expandSearchInput}
              className="search-container__btnSearch headerBtn"
              
            >
              <img src={searchImage} alt="Lupa de busqueda" className='search-container__btnImage'/>
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
  )
}

export default HeaderProducts