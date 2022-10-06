import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import "./Header.css"

const Header = () => {
  const { theme } = useContext(ThemeContext);
    
  return (
    <div className={`header ${theme}`}>Header</div>
  )
}

export default Header