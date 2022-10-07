import React, { useState} from 'react';
import { getProducts } from '../../services/apiServices';
import HomeCard from '../../components/HomeCard/HomeCard';

import './Home.css'
import box from '../../assets/images/package-variant-closed.svg';
import store from '../../assets/images/store.svg';
import ChartBar from '../../components/ChartBar/ChartBar';
import PieCharts from '../../components/ChartPie/ChartPie';

const Home = () => {

  const [ totalProducts, setTotalProducts ] = useState(0);
  
    getProducts()
    .then((res)=>{
      setTotalProducts(res.length)
    })
    .catch((error)=>{
      console.log(error);
    });


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
          <h2>Productos mayor Stock</h2>
            <ChartBar />
          </div>
          <div className='home-charts__pie'>
          <h2>Productos más visitados</h2>
            <PieCharts />
          </div>
        </div>

      </div>
  )
}

export default Home