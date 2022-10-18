import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import SideBar from './SideBar';

describe("Test formulario de productos", ()=>{
   
 
        let component;
        beforeEach(()=>{
            component = render(<SideBar />,
            {wrapper: BrowserRouter })
        })
    
        test("Se debe renderiza correctamente", ()=>{
           
            const { container } = component
            expect(container).toMatchSnapshot()
                })
  
    test("Los links deben mostrarse y dirigir al lugar esperado", ()=>{
        const buttons = screen.getAllByRole('link');
        const btnHome = buttons[0];
        const btnProductos = buttons[1];
        const btnStores = buttons[2]
        const btnProfile = buttons[3]
        
        expect(btnHome.getAttribute('href')).toBe('/home');
        expect(btnProductos.getAttribute('href')).toBe('/products');
        expect(btnStores.getAttribute('href')).toBe('/stores');
        expect(btnProfile.getAttribute('href')).toBe('/profile');
    })   
})