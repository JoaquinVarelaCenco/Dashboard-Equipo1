import { useContext } from "react";
import { SearchContext } from "../../context/SearchContext";
import "./Header.css"

const Header = () => {

const context = useContext(SearchContext);
    
  return (
    <div className='header'>
      <input type="text" placeholder="Search..." onChange={context.handleSearch} /> Header</div>
  )
}

export default Header