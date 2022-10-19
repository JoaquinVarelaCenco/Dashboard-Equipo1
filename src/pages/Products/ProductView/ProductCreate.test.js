import { render, screen, act } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ProductProvider } from "../../../context/ProductContext";
import ProductCreate from "./ProductCreate";

describe("Test formulario de productos", ()=>{

    let component;

    beforeEach( async()=>{
        await act(async () => {
            component = await render(
                <ProductProvider>

                    <ProductCreate />
                </ProductProvider>,
            { wrapper: BrowserRouter });
    
        });
    })

    test("Product create se renderiza correctamente", ()=>{
        const { container } = component;
        expect(container).toMatchSnapshot();
        screen.debug()
    })
  



})