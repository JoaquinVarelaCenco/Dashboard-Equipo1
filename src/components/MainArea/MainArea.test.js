import { render, act, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import { HeaderProvider } from "../../context/HeaderContext";
import { SearchProvider } from "../../context/SearchContext";
import { SideBarContext, SideBarProvider } from "../../context/SideBarContext";
import productsData from "../../mockData/productsData";
import { getProducts } from "../../services/apiServices";
import MainArea from "./MainArea";

jest.mock("../../services/apiServices");

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

  it("Se deben rednrizar los productos segun el value del input de busqueda", () => {
    
  });
});
