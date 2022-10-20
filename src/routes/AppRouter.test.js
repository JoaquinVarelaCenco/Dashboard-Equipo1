import AppRouter from "./AppRouter";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import ProductsList from "../pages/Products/ProductsList/ProductsList";
import ProductUpdate from "../pages/Products/ProductView/ProductUpdate";
import ProductView from "../pages/Products/ProductView/ProductCreate";
import NoImplemented from "../pages/NoImplemented/NoImplemented";
import Error404 from "../pages/Error404/Error404";

jest.mock("../pages/Home/Home", () => () => <div>Fake Home page</div>);
jest.mock("../pages/Products/ProductsList/ProductsList", () => () => (
  <div>Fake Product List page</div>
));
jest.mock("../pages/Products/ProductView/ProductUpdate", () => () => (
  <div>Fake Product Update page</div>
));
jest.mock("../pages/Products/ProductView/ProductCreate", () => () => (
  <div>Fake Product View page</div>
));
jest.mock("../pages/NoImplemented/NoImplemented", () => () => (
  <div>Fake NotImplemented page</div>
));
jest.mock("../pages/Error404/Error404", () => () => <div>Fake 404 page</div>);
jest.mock("../pages/Home/Home", () => () => <div>Fake Home page</div>);

describe("Testing de las rutas", () => {
  test('Debe renderizar <Home /> cuando se accede a la ruta "/"', async () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <AppRouter />
      </MemoryRouter>
    );

    const text = screen.getByText(/fake home/i);
    expect(text).toBeInTheDocument();
  });

  test('Debe renderizar <Home /> cuando se accede a la ruta "/home"', async () => {
    render(
      <MemoryRouter initialEntries={["/home"]}>
        <AppRouter />
      </MemoryRouter>
    );

    const text = screen.getByText(/fake home/i);
    expect(text).toBeInTheDocument();
  });

  test('Debe renderizar <ProductList /> cuando se accede a la ruta "/products"', async () => {
    render(
      <MemoryRouter initialEntries={["/products"]}>
        <AppRouter />
      </MemoryRouter>
    );

    const text = screen.getByText(/fake product list/i);
    expect(text).toBeInTheDocument();
  });

  test('Debe renderizar <NoImplemented /> cuando se accede a la ruta "/stores"', async () => {
    render(
      <MemoryRouter initialEntries={["/stores"]}>
        <AppRouter />
      </MemoryRouter>
    );

    const text = screen.getByText(/Fake NotImplemented/i);
    expect(text).toBeInTheDocument();
  });

  test('Debe renderizar <ProductView /> cuando se accede a la ruta "/products/new"', async () => {
    render(
      <MemoryRouter initialEntries={["/products/new"]}>
        <AppRouter />
      </MemoryRouter>
    );

    const text = screen.getByText(/Fake Product View/i);
    expect(text).toBeInTheDocument();
  });

  test('Debe renderizar <NotImplemented /> cuando se accede a la ruta "/profile"', async () => {
    render(
      <MemoryRouter initialEntries={["/profile"]}>
        <AppRouter />
      </MemoryRouter>
    );

    const text = screen.getByText(/Fake NotImplemented/i);
    expect(text).toBeInTheDocument();
  });

  test('Debe renderizar <Error404 /> cuando se accede a una ruta no existente "/asd"', async () => {
    render(
      <MemoryRouter initialEntries={["/asd"]}>
        <AppRouter />
      </MemoryRouter>
    );

    const text = screen.getByText(/Fake 404/i);
    expect(text).toBeInTheDocument();
  });

  test('Debe renderizar <ProductUpdate /> cuando se accede a la ruta "/products/:id"', async () => {
    render(
      <MemoryRouter initialEntries={["/products/1"]}>
        <AppRouter />
      </MemoryRouter>
    );

    const text = screen.getByText(/Fake Product Update/i);
    expect(text).toBeInTheDocument();
  });
});
