import { render, act, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { HeaderProvider } from "../../context/HeaderContext";
import { SearchProvider } from "../../context/SearchContext";
import { SideBarProvider } from "../../context/SideBarContext";
import productsData from "../../mockData/productsData";
import { getProducts } from "../../services/apiServices";
import { orderByMostRelevants } from "../../utils/product";
import MainArea from "./MainArea";

jest.mock("../../services/apiServices");

const filterProducts = (searchTerm, arrayProd) => {
    const newProducts = arrayProd.filter((val) => {
      if (
        searchTerm === "" ||
        val.title.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return val;
      } else if (
        val.description.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return val;
      }
    });
    return newProducts;
  };

describe("Test formulario de productos", () => {
  let component;

  beforeEach(async () => {
    getProducts.mockResolvedValue([...productsData]);

    await act(async () => {
      component = await render(
        <MemoryRouter initialEntries={["/products"]}>
          <HeaderProvider>
            <SideBarProvider>
              <SearchProvider>
                <MainArea />
              </SearchProvider>
            </SideBarProvider>
          </HeaderProvider>
        </MemoryRouter>
      );
    });
  });

  it("renderiza el componente", () => {
    let { container } = component;
    expect(container).toMatchSnapshot();
  });

  it("Se debe poder escribir en el input de busqueda y su valor debe ser el ingresado", ()=>{
    let testWord = "test";
    let inputSearch = screen.getByRole('textbox')
    userEvent.type(inputSearch, testWord);
    expect(inputSearch).toHaveValue(testWord);
})

it("Se deben renderizar todos los productos cuando el input de busqueda no se ingresaron caracteres", ()=>{
    const arrayProd = screen.getAllByTestId('id-product');
    let arrayProdPivot = arrayProd.map(a => a.innerHTML);
    let returnProductsData = orderByMostRelevants(productsData);
    returnProductsData = returnProductsData.map(b => `#${b.id}`);
    expect(returnProductsData).toEqual(arrayProdPivot);
})

it("Se deben renderizar las coincidencias de los productos con lo escrito en el input de busqueda", ()=>{
    let testWord = "iphone";
    let inputSearch = screen.getByRole('textbox')
    userEvent.type(inputSearch, testWord);
    expect(inputSearch.value).toBe(testWord);
    const arrayProd = screen.getAllByTestId('id-product');
    let arrayProdPivot = arrayProd.map(a => a.innerHTML);
    let orderProductsData = filterProducts(testWord, productsData).map(b => `#${b.id}`);
    expect(orderProductsData).toEqual(arrayProdPivot);
})

});
