import { render, act, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import {
  SearchContext,
  SearchProvider,
  handleSearch,
  products,
  productsExist,
  getAllProducts,
  helpProducts,
  searchTermValue,
  orderBy,
  orderProducts,
} from "../../../context/SearchContext";
import productsData from "../../../mockData/productsData";
import { getProducts } from "../../../services/apiServices";
import ProductsList from "./ProductsList";

jest.mock("../../../services/apiServices");

describe("Test formulario de productos", () => {
  let component;

  beforeEach(async () => {

    getProducts.mockResolvedValue([...productsData])

    await act(async () => {
      component = await render(
      <MemoryRouter><ProductsList /></MemoryRouter>, { wrapper: SearchProvider });

    });
  });

  it("Se debe renderizar correctamente", async () => {
    const { container } = component;
    expect(container).toMatchSnapshot();
    screen.debug();
  });

  it("Se debe renderizar correctamente los items", async () => {
  });

});

//se renderiza correctamente
//muestra cantidad de productos correctamente - baja
//se ordena según opción seleccionada - media
