import {useRef, useEffect, useState, useContext} from 'react'
import { Link } from 'react-router-dom';
import { SearchContext } from "../../context/SearchContext";
import { HeaderContext } from '../../context/HeaderContext';
import searchImage from "../../assets/images/magnify.svg";
import './HeaderProducts.css'
import Button from '../button/Button';




const HeaderProducts = () => {

//Context
const context = useContext(SearchContext);
const {currentTitleContainer } = useContext(HeaderContext);

//Estados para cambiar estilos
const [styleSearchAnimation, setStyleSearchAnimation] = useState("")
const [styleDisplayNone, setStyleDisplayNone ] = useState("")

useEffect(() => {
    currentTitleContainer("displayFlex");

    
}, [])

useEffect(() => {
  const handleResize = ()=>{
    window.addEventListener('resize', ()=>{
      // console.log(window.screen.width);
        closeSearchInput();
        if(window.innerWidth> 500){ 
          // console.log(window.screen.width);
            inputSearch.current.placeholder = "Buscar productos...";
        }
    })
  }
  handleResize()
}, [])


//Logica expandir input de búsqueda
const inputSearch = useRef("");
const inputSearchContainer = useRef("");
const btnClose = useRef("");
const containerAddProduct = useRef("");

//cambiamos estilos al expandir searchBar
const expandSearchInput = () => {
    let width = window.innerWidth;
    if (width <= 500) {
        inputSearch.current.placeholder = "Buscar productos...";
        
        //este elemento depende del evento || NO del mediaQuery - 
        currentTitleContainer("displayNone")
        containerAddProduct.current.style.display = "none";
        
        setStyleSearchAnimation('expandSearchBarStyle');
        setStyleDisplayNone("showComponent")
    } else {
      inputSearch.current.placeholder = "";
        currentTitleContainer("displayFlex")
    }
};

//cambiamos estilos al cerrar searchBar
const closeSearchInput = () => {
    inputSearch.current.placeholder = "";
    currentTitleContainer("displayFlex")
    containerAddProduct.current.style.display = "block";
    
    setStyleSearchAnimation('')
    setStyleDisplayNone('')
    setStyleDisplayNone("hideComponent")
};

//al cambiar tamaño de pantalla se ejecutan las funciones expand || close search input
// window.onresize = ()=>{
//   console.log(window.screen.width);
//     closeSearchInput();
//     if(window.screen.width> 500){ 
//       console.log(window.screen.width);
//         inputSearch.current.placeholder = "Buscar productos...";
//     }
// }

//Borramos placeholder de buscador en caso de que el componente se cargue en pantalla pequeña
useEffect(()=>{
    if(window.screen.width<501){
            inputSearch.current.placeholder = "";
    }
}, [inputSearch])

return (
    <div className="headerProducts">
          <div className={`header__search-container  ${styleSearchAnimation}`} ref={inputSearchContainer}>

            <Button
              f={closeSearchInput}
              classN={`search-container__btnClose headerBtn ${styleDisplayNone}`}
              title={"X"}
              ref={btnClose}
            />

            <input
              type="text"
              className={`header__search  ${styleSearchAnimation}`}
              placeholder="Buscar productos..."
              ref={inputSearch}
              onChange={context.handleSearch}
            />

            <Button
              f={expandSearchInput}
              classN={"search-container__btnSearch headerBtn"}
            >
              <img src={searchImage} alt="Lupa de busqueda" className='search-container__btnImage'/>
            </Button>

          </div>
          <div className="headerProducts-ContainerAgregar" >
            <Link to={"/products/new"}>
              <Button 
                title={"Agregar Producto"}
                classN={"headerProducts__btnAgregar"}
              />
            </Link>
          </div>
          <div className="headerProducts-ContainerAgregar" >
            <Link to={"/products/new"} ref={containerAddProduct}>
              <Button 
                classN={"headerProducts__btnAgregarAlternative"}
                title={"+"}
              />
            </Link>
          </div>
        </div>
  )
}

export default HeaderProducts