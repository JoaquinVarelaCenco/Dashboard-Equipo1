import { Link } from "react-router-dom"
import "./SideBar.css"


const Sidebar = () => {
  return (
    <div className='sideBar'>
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
    </div>
  )
}

export default Sidebar