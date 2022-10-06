import React, { useState} from 'react'
import { getProducts } from '../../services/apiServices'
import './Home.css'
import box from '../../assets/images/package-variant-closed.svg'
import store from '../../assets/images/store.svg'
import { Link } from 'react-router-dom'


const Home = () => {

  const [ totalProducts, setTotalProducts ] = useState(0);
  


  getProducts()
    .then((res)=>{
      setTotalProducts(res.length)
    })
    .catch((error)=>{
      console.log(error);
    })

  return (
    <>
      <div className='itemRow'>
        <div className='itemRow__count'>
          <img src= {box}/>
          <p><strong>{totalProducts}</strong> Productos</p>
        </div>
        <div className='itemRow__buttons'>
          <Link to="/products">
            <button>Ver Listado</button>
          </Link>
          <Link to="/products/new">
            <button>Agregar Producto</button>
          </Link>
        </div>
      </div>

      <div className='itemRow'>
        <div className='itemRow__count'>
          <img src= {store}/>
          <p><strong>10</strong> Tiendas</p>
        </div>
        <div className='itemRow__buttons'>
        <Link to="/stores">
            <button>Ver Listado</button>
          </Link>
          <Link to="/stores/new">
            <button>Agregar Tienda</button>
          </Link>
        </div>
      </div>
      
    </>
  )
}

export default Home