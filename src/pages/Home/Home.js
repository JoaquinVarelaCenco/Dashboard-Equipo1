import React, { useState, useEffect } from 'react';
import { getProducts } from '../../services/apiServices';
import { sortByCount, sortByStock } from '../../utils/product';
import HomeCard from '../../components/HomeCard/HomeCard';
import box from '../../assets/images/package-variant-closed.svg';
import store from '../../assets/images/store.svg';
import ChartBar from '../../components/ChartBar/ChartBar';
import PieCharts from '../../components/ChartPie/ChartPie';
import './Home.css'


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


  const eightMostCount = sortByCount(products).slice(0,8);

  const eightMostStock = sortByStock(products).slice(0,8);

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
            <h2>Productos con mayor Visitas</h2>
              <PieCharts 
                products = {eightMostCount}
              />
          </div>

        </div>

      </div>
  )
}

export default Home