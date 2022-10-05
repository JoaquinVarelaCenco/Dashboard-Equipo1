import React, { useState } from 'react'
import { getProducts } from '../../services/apiServices'
import './Home.css'
import box from '../../assets/images/package-variant-closed.svg'

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
          <button>Ver Listado</button>
          <button>Agregar Producto</button>
        </div>
      </div>
    </>
  )
}

export default Home