import React from 'react';
import { useState, useEffect } from 'react';
import ProductCard from '../../../components/ProductCard/ProductCard';
import { getProducts} from '../../../services/apiServices';
import './ProductsList.css';
import Spinner from '../../../components/Spinner/Spinner'

const ProductsList = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then(data => {
         setProducts(data)
      });
  }, [])
  

  return (
    <div className='productList__container'>
      {products.length ? products.map(p => <ProductCard title={p.title} price={p.price} key={p.id} image={p.images[0]}/>)
      : <Spinner/>
    }
    </div>
  )
}

export default ProductsList

