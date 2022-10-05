import React from 'react';
import { useState, useEffect } from 'react';
import { getProducts} from '../../../services/apiServices'

const ProductsList = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then(data => {
        setProducts(data)
      });
  }, [])
  

  return (
    <div>
      {products.length ? products.map(p => <h4>{p.title}</h4>)
      : <h1>cargando...</h1>  
    }
    </div>
  )
}

export default ProductsList