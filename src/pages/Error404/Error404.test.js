import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Error404 from "./Error404";

let component;
let btnInicio;

describe('Test de la vista Error404', ()=>{

    beforeEach(()=>{
        component = render(<Error404 />, { wrapper: BrowserRouter })
        btnInicio = screen.getByRole('link');
    })

    test('La vista debe renderizarse correctamente', ()=>{
        const { container } = component;

        expect(container).toMatchSnapshot();
    });

    test('El boton debe contener la palabra inicio', ()=>{
        expect(btnInicio).toHaveTextContent(/inicio/i)
    });

    test('El botón debe redirigir a la ruta de Home', ()=>{
        expect(btnInicio.getAttribute('href')).toBe('/home')
    })

})