import {useRef, useEffect, useState, useContext} from 'react'
import { Link } from 'react-router-dom';
import { SearchContext } from "../../context/SearchContext";
import { HeaderContext } from '../../context/HeaderContext';
import { WidthScreenContext } from '../../context/WidthScreenContext';
import searchImage from "../../assets/images/magnify.svg";
import './HeaderProducts.css'

const HeaderProducts = () => {

//Context
const context = useContext(SearchContext);
const {currentTitleContainer } = useContext(HeaderContext);
const {widthScreen} = useContext(WidthScreenContext)

//Estados para cambiar estilos
const [styleSearchAnimation, setStyleSearchAnimation] = useState("")
const [styleDisplayNone, setStyleDisplayNone ] = useState("")
const [styleCloseSearchAnimation, setStyleCloseSearchAnimation] = useState('')

//Elementos del DOM Logica expandir input de búsqueda
const inputSearch = useRef("");
const inputSearchContainer = useRef("");
const btnClose = useRef("");
const containerAddProduct = useRef("");


useEffect(() => {
    currentTitleContainer("displayFlex");    
}, [])

useEffect(() => {
  const handleResize = ()=>{
      closeSearchInput();
      if(widthScreen>500){
        // inputSearch.current.style.width = "280px";
        setStyleCloseSearchAnimation('');
      }
    }
    handleResize()
  }, [widthScreen])
  
  //Borramos placeholder de buscador en caso de que el componente se cargue en pantalla pequeña
  useEffect(()=>{
      if(window.screen.width<501){
              inputSearch.current.placeholder = "";
      }
  }, [inputSearch])

//cambiamos estilos al expandir searchBar
const expandSearchInput = () => {
    if (widthScreen <= 500) {
      
        inputSearch.current.placeholder = "Buscar productos...";

        //este elemento depende del evento || NO del mediaQuery - 
        currentTitleContainer("displayNone")
        containerAddProduct.current.style.display = "none";
        
        //Estados para agregar clases al cerar search input (modificacion con css)
        setStyleSearchAnimation('expandSearchBarStyle');
        setStyleDisplayNone("showComponent");
        setStyleCloseSearchAnimation('');
    } else {
      currentTitleContainer("displayFlex")
    }
  };

//cambiamos estilos al cerrar searchBar
const closeSearchInput = () => {
    inputSearch.current.placeholder = "";
    
    if(widthScreen> 500){ 
      inputSearch.current.placeholder = "Buscar productos...";
    }
    
    //Estados para agregar clases al cerar search input (modificacion con css)
    setStyleSearchAnimation('')
    setStyleDisplayNone('')
    setStyleDisplayNone("hideComponent")
    setStyleCloseSearchAnimation('closeSearchBarAnimation')
    setTimeout(()=>{
      currentTitleContainer("displayFlex")
    }, 200)
    containerAddProduct.current.style.display = "block";
};


return (
    <div className="headerProducts">
          <div className={`headerProducts__search-container  ${styleSearchAnimation} ${styleCloseSearchAnimation} `} ref={inputSearchContainer}>
            <button
              onClick={closeSearchInput}
              className={`headerProducts-search-container__btnClose headerBtn ${styleDisplayNone}`}
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
              className="headerProducts-search-container__btnSearch headerBtn"
              
            >
              <img src={searchImage} alt="Lupa de busqueda" className='headerProducts-search-container__btnImage'/>
            </button>
          </div>
          <div className="headerProducts-ContainerAdd" >
            <Link to={"/products/new"}>
              <button className="headerProducts__btnAdd">
                Agregar Producto
              </button>
            </Link>
          </div>
          <div className="headerProducts-ContainerAdd" >
            <Link to={"/products/new"} ref={containerAddProduct}>
              <button className="headerProducts__btnAddAlternative">
                +
              </button>
            </Link>
          </div>
        </div>
  )
}

export default HeaderProducts