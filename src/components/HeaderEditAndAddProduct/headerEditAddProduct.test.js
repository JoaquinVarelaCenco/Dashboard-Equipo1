import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import HeaderEditAddProduct from './HeaderEditAddProduct';

describe("Test formulario de productos", ()=>{
   
 
        let component;
        beforeEach(()=>{
            component = render(<HeaderEditAddProduct editProduct={true}/>,
            {wrapper: BrowserRouter })
        })
    
        test("Se debe renderiza correctamente", ()=>{
           
            const { container } = component
            expect(container).toMatchSnapshot()
                })
  
    test("El boton eliminar debe estar renderizando", ()=>{
        const btnEliminar = screen.queryByText('ELIMINAR')
        expect(btnEliminar).toBeInTheDocument()
    })   
})