import { NavLink, Link } from "react-router-dom";
import "./SideBar.css";
import logo from "../../assets/images/MiEcommerce.png";
import casita from "../../assets/images/home.svg";
import profilePic from "../../assets/images/ProfilePic.png";
import pakage from "../../assets/images/package-variant-closed.svg";
import store from "../../assets/images/store.svg";
import { useRef } from "react";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import SwitchToggle from "../SwitchToggle/SwitchToggle";
import { SideBarContext } from "../../context/SideBarContext";
import Button from "../Button/Button";

const Sidebar = () => {

  const {visibility, hideSideBar} = useContext(SideBarContext)
  const { theme } = useContext(ThemeContext); 

  return (
    <div className={`sideBar ${theme} ${visibility}`}>

      <div>
        <img className="sideBar__img-logo" src={logo} />
        <div className="sideBar__Links">
          <NavLink onClick={hideSideBar} to="/home" className={`sideBar_eachLink ${theme}`}> <img src= {casita} />Inicio</NavLink>
          <NavLink onClick={hideSideBar} to="/products" className={`sideBar_eachLink ${theme}`}> <img src= {pakage} />Productos</NavLink>
          <NavLink onClick={hideSideBar} to="/stores" className={`sideBar_eachLink ${theme}`}> <img src= {store} />Tiendas</NavLink>
        </div>
      </div>

      <div>
        <SwitchToggle />
        

       <Link to={"/profile"} className={`sideBar_eachLink ${theme}`} >
          <Button
            classN={"sideBar__user-button"}
          >
            <div className="sideBar__user-button__profile">
              <img className="sideBar__user-img" src={profilePic} />
            </div>
            <div>
              <p className="sideBar__user-name">Olivia</p>
            </div>
          </Button>

        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
