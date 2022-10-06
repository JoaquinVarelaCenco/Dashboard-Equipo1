import { NavLink } from "react-router-dom";
import "./SideBar.css";
import logo from "../../assets/images/MiEcommerce.png";
import casita from "../../assets/images/home.svg";
import profilePic from "../../assets/images/ProfilePic.png";
import pakage from "../../assets/images/package-variant-closed.svg";
import store from "../../assets/images/store.svg";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import SwitchToggle from "../SwitchToggle/SwitchToggle";

const Sidebar = () => {

  const { theme } = useContext(ThemeContext);

  return (
    <div className={`sideBar ${theme}`}>
      <div>
        <img className="sideBar__img-logo" src={logo} />
        <div className="sideBar__Links">
          <NavLink  to="/home" className={`sideBar_eachLink ${theme}`}> <img src= {casita} />Inicio</NavLink>
          <NavLink  to="/products" className={`sideBar_eachLink ${theme}`}> <img src= {pakage} />Productos</NavLink>
          <NavLink  to="/stores" className={`sideBar_eachLink ${theme}`}> <img src= {store} />Tiendas</NavLink>
        </div>


        <SwitchToggle />

      </div>
      <button className="user-button">
        <div className="user-button__profile">
          <img className="user-img" src={profilePic} />
        </div>
        <div>
          <p className="user-name">Olivia</p>
        </div>
      </button>
    </div>
  );
};

export default Sidebar;
