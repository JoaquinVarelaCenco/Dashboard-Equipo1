import { render, screen, act, cleanup } from "@testing-library/react";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import { ProductProvider } from "../../context/ProductContext";
import ProductForm from "./ProductForm";
import productsData from "../../mockData/productsData";
import { getProducts, updateProduct } from "../../services/apiServices";
import userEvent from "@testing-library/user-event";
import handleSubmit from "../../pages/Products/ProductView/ProductUpdate"

let component;

jest.mock("../../services/apiServices");
jest.mock("../../pages/Products/ProductView/ProductUpdate");

describe("Test formulario de productos para crear un producto", () => {
  beforeEach(async () => {
    // getProducts.mockResolvedValue([...productsData]);
    updateProduct.mockResolvedValue({})
    await act(async () => {
      component = await render(
        <MemoryRouter>
          <ProductForm productId={null} handleSubmit={() => {}} />
        </MemoryRouter>,
        {
          wrapper: ProductProvider,
        }
      );
    });
  });

  test("Se renderiza el componente", () => {
    const { container } = component;
    expect(container).toMatchSnapshot();
    // screen.debug();
  });

  //Validar inputs
  test("Se renderiza input title con el valor default", () => {
    const value = screen.getByPlaceholderText(/Nombre/i);
    expect(value).toHaveValue("");
  });

  test("Se renderiza input price con el valor default", () => {
    const value = screen.getByRole("spinbutton");
    expect(value).toHaveValue(0);
  });

  test("Se renderiza span stock con el valor default", () => {
    const value = screen.getByTestId("spanProdStock");
    expect(value.innerHTML).toBe("0");
  });

  test("Se renderiza description con el valor default", () => {
    const value = screen.getByPlaceholderText(/Descripcion del producto/i);
    expect(value).toHaveValue("");
  });

  test("Se renderiza category con el valor default", () => {
    const value = screen.getAllByRole("combobox")[0];
    expect(value).toHaveValue("");
  });

  test("Se renderiza store con el valor default", () => {
    const value = screen.getAllByRole("combobox")[1];
    expect(value).toHaveValue("");
  });

  //validar botones

  test("Se da click en boton mas del stock", () => {
    const user = userEvent;
    const suma = screen.getByText("+");
    user.click(suma);
    const value = screen.getByTestId("spanProdStock");
    expect(value.innerHTML).toBe("1");
  });

  test("Se da click en boton menos del stock", () => {
    const user = userEvent;
    const suma = screen.getByText("+");
    const resta = screen.getByText("-");
    user.click(suma);
    user.click(resta);
    const value = screen.getByTestId("spanProdStock");
    expect(value.innerHTML).toBe("0");
  });

  test("Se da click en boton cargar imagen", () => {
    const user = userEvent;
    const cargar = screen.getByText(/cargar/i);
    user.click(cargar);
    const imagenes = screen.getAllByText(/quitar/i);
    expect(imagenes.length).toBe(1);
  });

  test("Se da click en quitar imagen", () => {
    const user = userEvent;
    const cargar = screen.getByText(/cargar/i);
    user.click(cargar);
    const quitar = screen.getAllByText(/quitar/i)[0];
    user.click(quitar);
    const imagenes = screen.queryAllByText(/quitar/i);
    expect(imagenes.length).toBe(0);
  });

  test("Se muestra boton crear producto cuando no se recibe un id", () => {
    const crear = screen.getByText(/crear/i);
    expect(crear).toBeInTheDocument();
  });

  test("Se muestra boton editar producto cuando se recibe un id", () => {
    cleanup();
    component = render(
      <MemoryRouter>
        <ProductForm productId={2} handleSubmit={() => {}} />
      </MemoryRouter>,
      {
        wrapper: ProductProvider,
      }
    );
    const editar = screen.getByText(/editar/i);
    expect(editar).toBeInTheDocument();
  });

  test("Se debe hacer una llamada de tipo PUT cuando se le de click al boton editar", async () => {
    const handleSubmit = jest.fn()
    cleanup();
    await act(async () => {component = await render(
      <MemoryRouter>
        <ProductForm productId={2} handleSubmit = {handleSubmit} />
      </MemoryRouter>,
      {
        wrapper: ProductProvider,
      }
    )});
    const editar = screen.getByText(/editar/i);
    await act ( async ()=> await userEvent.click(editar));
    expect(handleSubmit).toHaveBeenCalledTimes(1)
  });
});

