import { render, screen } from "@testing-library/react";
import HomeCard from './HomeCard'
import {BrowserRouter} from 'react-router-dom';
import { getProducts } from "../../services/apiServices";
import productsData from '../../mockData/productsData'


//mocks
jest.mock('../../services/apiServices');

let component;

describe("Test formulario de productos", ()=>{

    beforeEach( async()=>{
            await getProducts.mockResolvedValue({ json: () => new Promise(resolve => resolve({ ...productsData }) )})
            
            component = render(<HomeCard
                count={productsData.length}
                title={"Productos"}
                linkBtnList= {"/products"}
                textBtnAdd = {"Agregar Producto"}
                linkBtnAdd = {"/products/new"}
                img = {"as"}
            />, 
        { wrapper: BrowserRouter })

        
    })

    test("El componente debe renderizarse correctamente", ()=>{
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

    test("Se debe mostrar la cantidad del item correctamente", async ()=>{

        const total = productsData.length
        const countValue = screen.getByText(total)

        expect(countValue.innerHTML).toBe( (total.toString()))

    })

})