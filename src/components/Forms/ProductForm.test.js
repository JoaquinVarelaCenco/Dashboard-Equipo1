import { render, screen, act } from "@testing-library/react";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import { ProductProvider } from "../../context/ProductContext";
import ProductForm from "./ProductForm";
import productsData from "../../mockData/productsData";
import { getProducts } from "../../services/apiServices";
import userEvent from "@testing-library/user-event";

let component;

jest.mock("../../services/apiServices");

describe("Test formulario de productos", () => {
  beforeEach(async () => {
    getProducts.mockResolvedValue([...productsData]);
    await act(async () => {
      component = await render(
        <MemoryRouter>
          <ProductForm productId={"2"} handleSubmit={() => {}} />
        </MemoryRouter>,
        {
          wrapper: ProductProvider,
        }
      );
    });
  });

  it("Se renderiza el componente", () => {
    const { container } = component;
    expect(container).toMatchSnapshot();
    // screen.debug();
  });

  //Validar inputs
  it("Se renderiza input title con el valor default", () => {
    const value = screen.getByPlaceholderText(/Nombre/i);
    expect(value).toHaveValue("");
  });

  it("Se renderiza input price con el valor default", () => {
    const value = screen.getByRole("spinbutton");
    expect(value).toHaveValue(0);
  });

  it("Se renderiza span stock con el valor default", () => {
    const value = screen.getByTestId("spanProdStock");
    expect(value.innerHTML).toBe("0");
  });

  it("Se renderiza description con el valor default", () => {
    const value = screen.getByPlaceholderText(/Descripcion del producto/i);
    expect(value).toHaveValue("");
  });

  it("Se renderiza category con el valor default", () => {
    const value = screen.getAllByRole("combobox")[0];
    expect(value).toHaveValue("");
  });

  it("Se renderiza store con el valor default", () => {
    const value = screen.getAllByRole("combobox")[1];
    expect(value).toHaveValue("");
  });

  //validar botones

  it("Se da click en boton mas del stock", () => {
    const user = userEvent;
    const suma = screen.getByText("+");
    user.click(suma);
    const value = screen.getByTestId("spanProdStock");
    expect(value.innerHTML).toBe("1");
  });

  it("Se da click en boton menos del stock", () => {
    const user = userEvent;
    const suma = screen.getByText("+");
    const resta = screen.getByText("-");
    user.click(suma);
    user.click(resta);
    const value = screen.getByTestId("spanProdStock");
    expect(value.innerHTML).toBe("0");
  });

  it("Se da click en boton cargar imagen", () => {
    const user = userEvent;
    const cargar = screen.getByText(/cargar/i);
    user.click(cargar);
    const imagenes = screen.getAllByText(/quitar/i);
    expect(imagenes.length).toBe(1);
  });

  it("Se da click en quitar imagen", () => {
    const user = userEvent;
    const cargar = screen.getByText(/cargar/i);
    user.click(cargar);
    const quitar = screen.getAllByText(/quitar/i)[0];
    user.click(quitar);
    const imagenes = screen.queryAllByText(/quitar/i);
    expect(imagenes.length).toBe(0);
  });


  //agregar | cancelar -> en caso de addProduct
  //editar  | cancelar | inputs con value -> en caso de editProduct
});
