import { render, screen } from "@testing-library/react";
import HomeCard from './HomeCard'
import {BrowserRouter} from 'react-router-dom';
import { getProducts } from "../../services/apiServices";
import productsData from '../../mockData/productsData'

//mocks
jest.mock('../../services/apiServices')

describe("Test formulario de productos", ()=>{
    let component;
    beforeEach(()=>{
            component = render(<HomeCard
            title={"Productos"}
            linkBtnList= {"/products"}
            textBtnAdd = {"Agregar Producto"}
            linkBtnAdd = {"/products/new"}
            img = {"as"}
        />, 
        { wrapper: BrowserRouter })
    })

    test("Se debe renderiza correctamente", ()=>{
        const { container } = component
        expect(container).toMatchSnapshot()
    })

    test("Los links deben mostrarse y dirigir al lugar esperado", ()=>{
        const buttons = screen.getAllByRole('link');
        const btnViewList = buttons[0];
        const btnAddProduct = buttons[1];
        
        expect(btnViewList.getAttribute('href')).toBe('/products');
        expect(btnAddProduct.getAttribute('href')).toBe('/products/new');
    })   

    test("La cantidad de productos se debe renderizar correctamente",async ()=>{
        getProducts.mockResolvedValue({ json: () => new Promise(resolve => resolve({ ...productsData }) )})
        await act(async ()=> {
            component = render(<HomeProduct
                title={"Productos"}
                linkBtnList= {"/products"}
                textBtnAdd = {"Agregar Producto"}
                linkBtnAdd = {"/products/new"}
                img = {"as"}
            />, { wrapper: BrowserRouter })
        })
    })

})