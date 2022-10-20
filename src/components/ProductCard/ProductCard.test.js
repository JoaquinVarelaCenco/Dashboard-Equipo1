import { render, screen, act } from "@testing-library/react";
import ProductCard from "./ProductCard";
import { BrowserRouter } from "react-router-dom";
import productsData from "../../mockData/productsData";
import userEvent from "@testing-library/user-event";

describe("Test Tarjeta de producto", () => {
  let data = productsData[0];
  let component;
  beforeEach(async () => {
    component = await render(
      <ProductCard title={data.title} img={data.images[0]} id={data.id} />,
      { wrapper: BrowserRouter }
    );
  });

  test("Tarjeta de productos se debe renderiza correctamente", () => {
    const { container } = component;
    expect(container).toMatchSnapshot();
  });

  test("La tarjeta debe ser un link a la vista de update", () => {
    const linkToUpdate = screen.getByRole("link");
    const expectedLink = "/products/" + data.id;
    expect(linkToUpdate.getAttribute("href")).toBe(expectedLink);
  });

  test("Los valores renderizados en la tarjeta corresponden a las props", () => {
    let title = screen.queryByText(data.title);
    let id = screen.queryByText("#" + data.id);
    expect(title).toBeInTheDocument();
    expect(id).toBeInTheDocument();
  });
});
