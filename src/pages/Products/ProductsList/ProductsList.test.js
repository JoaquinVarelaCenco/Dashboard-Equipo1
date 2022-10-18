import { render, screen } from "@testing-library/react";
import ProductsList from './ProductsList'
import {BrowserRouter} from 'react-router-dom';
import productsData from '../../mockData/productsData'



jest.mock('../../../context/SearchContext')

beforeEach( async()=>{
    let component;
    getAllProducts.mockReturnValue(productsData)
    await act(async ()=> {
        component = render(<ProductsList/>, { wrapper: BrowserRouter })
      })
})

describe("Test formulario de productos", ()=>{

    test("La lista de productos se debe renderizar correctamente", ()=>{})
    const { container } = component
    expect(container).toMatchSnapshot()
    //se renderiza correctamente
    //muestra cantidad de productos correctamente - baja
    //se ordena según opción seleccionada - media

})