import { render, screen, act } from "@testing-library/react";
import ProductCard from './ProductCard'
import {BrowserRouter} from 'react-router-dom'
import productsData from '../../mockData/productsData'
import userEvent from "@testing-library/user-event";



describe("Test Tarjeta de producto", ()=>{

    let component;
    beforeEach(()=>{
            component = render(<ProductCard
            title={productsData[0].title}
            img = {productsData[0].images[0]}
            id = {productsData[0].id}
        />, 
        { wrapper: BrowserRouter })
    })

    test("Tarjeta de productos se debe renderiza correctamente", ()=>{
        const { container } = component;
        expect(container).toMatchSnapshot()
    })

    test("La tarjeta debe ser un link a la vista de update", ()=>{
        const linkToUpdate = screen.getByRole('link');
        const expectedLink = '/products/' + productsData[0].id;
        expect(linkToUpdate.getAttribute('href')).toBe(expectedLink)
    })  
  



})