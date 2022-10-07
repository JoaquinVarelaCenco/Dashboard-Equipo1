import React, { useState, useEffect } from 'react';
import { getProducts } from '../../services/apiServices';
import HomeCard from '../../components/HomeCard/HomeCard';

import './Home.css'
import box from '../../assets/images/package-variant-closed.svg';
import store from '../../assets/images/store.svg';
import ChartBar from '../../components/ChartBar/ChartBar';
import PieCharts from '../../components/ChartPie/ChartPie';

const Home = () => {

  const [ totalProducts, setTotalProducts ] = useState(0);
  const [products, setProducts] = useState([]);

  useEffect(() => {
      getProducts()
      .then(res =>{
        setProducts(res)
        setTotalProducts(res.length);
      })
      .catch(error =>{
        console.log(error);
      })
  }, [])
  

  products.sort((a,b) =>{
    if(a.rating.rate < b.rating.rate){
      return 1;
    }else  if(a.rating.rate > b.rating.rate){
      return -1;
    }else{
      return 0;
    }
  });

  const eightMostRate = products.slice(0,8);

  products.sort((a,b) =>{
    if(a.stock < b.stock){
      return 1;
    }else  if(a.stock > b.stock){
      return -1;
    }else{
      return 0;
    }
  });

  const eightMostStock = products.slice(0,8);

  return (
      <div className='home-container'>

        <div className='home-cards'>
          <HomeCard 
            count={totalProducts}
            title={"Productos"}
            linkBtnList= {"/products"}
            textBtnAdd = {"Agregar Producto"}
            linkBtnAdd = {"/products/new"}
            img = {box}
          />

          <HomeCard 
            count={12}
            title={"Tiendas"}
            linkBtnList= {"/stores"}
            textBtnAdd = {"Agregar Tiendas"}
            linkBtnAdd = {"/stores/new"}
            img = {store}
          />
        </div>

        <div className='home-charts'>

          <div className='home-charts__bar'>
            <h2>Productos con mayor Stock</h2>
              <ChartBar 
                products = {eightMostStock}
              />
          </div>

          <div className='home-charts__pie'>
            <h2>Productos con mayor Rating</h2>
              <PieCharts 
                products = {eightMostRate}
              />
          </div>

        </div>

      </div>
  )
}

export default Home