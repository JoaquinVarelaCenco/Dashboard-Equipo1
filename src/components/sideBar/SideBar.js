import { NavLink } from "react-router-dom";
import "./SideBar.css";
import logo from "../../assets/images/MiEcommerce.png";
import house from "../../assets/images/home.svg";
import profilePic from "../../assets/images/ProfilePic.png";
import paquete from "../../assets/images/package-variant-closed.svg";
import store from "../../assets/images/store.svg";
import { useRef } from "react";

const Sidebar = () => {
  let sideBar = useRef();
 let buttonMenu = useRef();

  window.addEventListener("click", function (e) {
    if(e.target === buttonMenu){
      buttonMenu.addEventListener("click", () => {
        sideBar.classlist.add("hide")
      })
    }
    let findEtiqueta = document.querySelectAll(".sideBar")
    let bool = false
    for (let i = 0; i < findEtiqueta.length; i++) {
      if (findEtiqueta[i] === e.target || sideBar.contains(e.target)){
        bool = true
      }
    }
    if (bool){
      sideBar.classlist.add("hide")
    } else {sideBar.classlist.remove("hide")
  }
  })

  return (
    
    <div ref={sideBar} className="sideBar">
   
      <div>
        <img className="sideBar__img-logo" src={logo} />
        <div className="sideBar__Links">
          <NavLink  to="/home" className="sideBar_eachLink"> <img src= {house} />Inicio</NavLink>
          <NavLink  to="/products" className="sideBar_eachLink"> <img src= {paquete} />Productos</NavLink>
          <NavLink  to="/stores" className="sideBar_eachLink"> <img src= {store} />Tiendas</NavLink>
        </div>
      </div>
      <button className="sideBar__user-button">
        <div className="sideBar__user-button__profile">
          <img className="sideBar__user-img" src={profilePic} />
        </div>
        <div>
          <p className="sideBar__user-name">Olivia</p>
        </div>
      </button>
    </div>
  );
};

export default Sidebar;
