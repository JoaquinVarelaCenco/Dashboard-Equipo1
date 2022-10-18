import { render, screen, act } from "@testing-library/react";
import Header from "./Header";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import { pathName } from "../../utils/pathName";
import { HeaderProvider } from "../../context/HeaderContext";



describe("Test formulario de productos", ()=>{

    beforeEach(()=>{
        render(
        <MemoryRouter>
            <Header />
        </MemoryRouter>
            , { wrapper: HeaderProvider })
    })

    test("Test de prueba", ()=>{

    })

    //mostrar menú hamburguesa


    //funcionalidad menú hamburguesa

})