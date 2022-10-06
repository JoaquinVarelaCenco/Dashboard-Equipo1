import { NavLink } from "react-router-dom";
import "./SideBar.css";
import logo from "../../assets/images/MiEcommerce.png";
import casita from "../../assets/images/home.svg";
import profilePic from "../../assets/images/ProfilePic.png";
import pakage from "../../assets/images/package-variant-closed.svg";
import store from "../../assets/images/store.svg";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const Sidebar = () => {

  const { theme, toggleTheme } = useContext(ThemeContext);
  console.log(theme)

  return (
    <div className={`sideBar ${theme}`}>
      <div>
        <img className="sideBar__img-logo" src={logo} />
        <div className="sideBar__Links">
          <NavLink  to="/home" className="sideBar_eachLink"> <img src= {casita} />Inicio</NavLink>
          <NavLink  to="/products" className="sideBar_eachLink"> <img src= {pakage} />Productos</NavLink>
          <NavLink  to="/tiendas" className="sideBar_eachLink"> <img src= {store} />Tiendas</NavLink>
        </div>
        <button onClick={() => toggleTheme()}>Cambiar tema</button>
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
