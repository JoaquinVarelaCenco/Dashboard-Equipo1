import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import { ProductProvider } from "../../../context/ProductContext";
import { newProduct } from "../../../services/apiServices";
import ProductCreate from "./ProductCreate";

jest.mock("../../../services/apiServices");


describe("Test formulario de productos", ()=>{

    let component;

    beforeEach( async()=>{

        newProduct.mockResolvedValue({value: "true"})

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
  
    test("Se debe ejecutar funcion handleSubmit cuando se le de click al boton Crear", async () => {
        const crear = screen.getByText(/crear/i);
        await act ( async ()=> await userEvent.click(crear));
        expect(newProduct).toHaveBeenCalledTimes(1)
      });


})