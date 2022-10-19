import { render, screen, act } from "@testing-library/react";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import { ProductProvider } from "../../../context/ProductContext";
import ProductUpdate from "./ProductUpdate";
import mockProducts from "../../../mockData/productsData";
import { ProductContext } from "../../../context/ProductContext";
import { getProductById, updateProduct } from "../../../services/apiServices";
import React, { useContext } from "react";
import {useParams} from 'react-router-dom'
import userEvent from "@testing-library/user-event";
 

jest.mock("../../../services/apiServices");

jest.mock('react-router-dom', () => {

    const originalModule = jest.requireActual('react-router-dom')
  
    return {
      esModule: true,
      ...originalModule,
      useParams: jest.fn()
    }
  
  })

describe("Test formulario de productos", ()=>{
    let component;
    let data;
    let data2;
    beforeEach(async () => {
        //getProductById.mockResolvedValue({ json: () => new Promise(resolve => resolve(productsData[1])) })
        
         data = mockProducts[0];
         data2 = mockProducts[1];
         useParams.mockImplementation(()=>({id: data.id}))

         getProductById.mockResolvedValue(data)
         updateProduct.mockResolvedValue(data2)
        
        await act(async () => {
            component = await render(
            <ProductProvider>
                <ProductUpdate />
            </ProductProvider>, 
            { wrapper: BrowserRouter });
    
        });
      });

    test("Product update se renderiza correctamente", ()=>{
        const { container } = component;
        expect(container).toMatchSnapshot();

    })

    test("Values vuelven al estado inicial al presionar en 'Cancelar'", ()=>{
        let textboxs = screen.getAllByRole("textbox")
        let btnCancel = screen.getByRole('button', {name: "Cancelar"})
        let productTitle = textboxs[0]

        expect(productTitle.value).toBe(data.title);
        userEvent.type(productTitle , '{backspace}World!')

        expect(productTitle.value).not.toBe(data.title);

        userEvent.click(btnCancel);
        expect(productTitle.value).toBe(data.title);
    })

  test('El input Nombre tiene el valor correcto', () => { 
    let textbox = screen.getByPlaceholderText(/nombre/i)
    expect(textbox).toHaveValue(data.title)
 })

  test("Se renderiza input price con el valor default", () => {
    const value = screen.getByRole("spinbutton");
    expect(value).toHaveValue(data.value);
  });

  test("Se renderiza span stock con el valor default", () => {
    const value = screen.getByTestId("spanProdStock");
    expect(value.innerHTML).toBe(data.stock.toString());
  });

  test("Se renderiza description con el valor default", () => {
    const value = screen.getByPlaceholderText(/Descripcion del producto/i);
    expect(value).toHaveValue(data.description);
  });
  test("Se renderiza category con el valor default", () => {
    const value = screen.getAllByRole("combobox")[0];
    expect(value).toHaveValue(data.category);
  });

 
})