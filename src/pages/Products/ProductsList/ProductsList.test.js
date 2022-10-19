import { render, act, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { SearchProvider } from "../../../context/SearchContext";
import productsData from "../../../mockData/productsData";
import { getProducts } from "../../../services/apiServices";
import { orderByAlphabet, orderByHighPrice, orderByLowPrice, orderByMostRelevants } from "../../../utils/product";
import Error404 from "../../Error404/Error404";
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

  it("Se debe renderizar correctamente",  () => {
    const { container } = component;
    expect(container).toMatchSnapshot();
  });

  it("Se debe renderizar correctamente los items",  () => {
      const items = screen.getAllByRole('article') 
      expect(items.length).toBe(productsData.length)
  });

  it("Seleccion de filtrado predeterminada",  () => {
     const optionMasRelevantes = screen.getByRole('option', { name: 'Mas relevantes' }).selected;
     const optionMayorPrecio = screen.getByRole('option', { name: 'Mayor precio' }).selected;
     const optionMenorPrecio = screen.getByRole('option', { name: 'Menor precio' }).selected;
     const optionAZ = screen.getByRole('option', { name: 'A-Z' }).selected;

     expect(optionMasRelevantes).toBe(true)
     expect(optionMayorPrecio).toBe(false)
     expect(optionMenorPrecio).toBe(false)
     expect(optionAZ).toBe(false)
});

it("Seleccion de filtrado por interaccion del usuario por Mayor precio",  () => {

  
  userEvent.selectOptions(
    screen.getByRole('combobox'),
    screen.getByRole('option', { name: 'Mayor precio' }),
  )

  const optionMasRelevantes = screen.getByRole('option', { name: 'Mas relevantes' }).selected;
  const optionMayorPrecio = screen.getByRole('option', { name: 'Mayor precio' }).selected;
  const optionMenorPrecio = screen.getByRole('option', { name: 'Menor precio' }).selected;
  const optionAZ = screen.getByRole('option', { name: 'A-Z' }).selected;

  expect(optionMayorPrecio).toBe(true)
  expect(optionMenorPrecio).toBe(false)
  expect(optionAZ).toBe(false)
  expect(optionMasRelevantes).toBe(false)
});

it("Se deben renderizar los items filtrados por Mayor precio",  () => {

  userEvent.selectOptions(
    screen.getByRole('combobox'),
    screen.getByRole('option', { name: 'Mayor precio' }),
  );

  const optionMayorPrecio = screen.getByRole('option', { name: 'Mayor precio' }).selected;

  expect(optionMayorPrecio).toBe(true);

  const arrayProd = screen.getAllByTestId('id-product');
  const arrayProdPivot = arrayProd.map(a => a.innerHTML);
  let orderProductsData = orderByHighPrice(productsData);
  orderProductsData = orderProductsData.map(b => `#${b.id}`);
  expect(orderProductsData).toEqual(arrayProdPivot);
});

it("Seleccion de filtrado por interaccion del usuario por Menor precio",  () => {

  userEvent.selectOptions(
    screen.getByRole('combobox'),
    screen.getByRole('option', { name: 'Menor precio' }),
  )

  const optionMasRelevantes = screen.getByRole('option', { name: 'Mas relevantes' }).selected;
  const optionMayorPrecio = screen.getByRole('option', { name: 'Mayor precio' }).selected;
  const optionMenorPrecio = screen.getByRole('option', { name: 'Menor precio' }).selected;
  const optionAZ = screen.getByRole('option', { name: 'A-Z' }).selected;

  expect(optionMayorPrecio).toBe(false)
  expect(optionMenorPrecio).toBe(true)
  expect(optionAZ).toBe(false)
  expect(optionMasRelevantes).toBe(false)

});

it("Se deben renderizar los items filtrados por Menor precio",  () => {

  userEvent.selectOptions(
    screen.getByRole('combobox'),
    screen.getByRole('option', { name: 'Menor precio' }),
  );

  const optionMayorPrecio = screen.getByRole('option', { name: 'Menor precio' }).selected;

  expect(optionMayorPrecio).toBe(true);

  const arrayProd = screen.getAllByTestId('id-product');
  const arrayProdPivot = arrayProd.map(a => a.innerHTML);
  let orderProductsData = orderByLowPrice(productsData);
  orderProductsData = orderProductsData.map(b => `#${b.id}`);
  expect(orderProductsData).toEqual(arrayProdPivot);
});

it("Seleccion de filtrado por interaccion del usuario por Mas relevantes",  () => {

  userEvent.selectOptions(
    screen.getByRole('combobox'),
    screen.getByRole('option', { name: 'Mas relevantes' }),
  )

  const optionMasRelevantes = screen.getByRole('option', { name: 'Mas relevantes' }).selected;
  const optionMayorPrecio = screen.getByRole('option', { name: 'Mayor precio' }).selected;
  const optionMenorPrecio = screen.getByRole('option', { name: 'Menor precio' }).selected;
  const optionAZ = screen.getByRole('option', { name: 'A-Z' }).selected;

  expect(optionMayorPrecio).toBe(false)
  expect(optionMenorPrecio).toBe(false)
  expect(optionAZ).toBe(false)
  expect(optionMasRelevantes).toBe(true)

});

it("Se deben renderizar los items filtrados por Mas relevantes",  () => {

  userEvent.selectOptions(
    screen.getByRole('combobox'),
    screen.getByRole('option', { name: 'Mas relevantes' }),
  );

  const optionMayorPrecio = screen.getByRole('option', { name: 'Mas relevantes' }).selected;

  expect(optionMayorPrecio).toBe(true);

  const arrayProd = screen.getAllByTestId('id-product');
  const arrayProdPivot = arrayProd.map(a => a.innerHTML);
  let orderProductsData = orderByMostRelevants(productsData);
  orderProductsData = orderProductsData.map(b => `#${b.id}`);
  expect(orderProductsData).toEqual(arrayProdPivot);
});

it("Seleccion de filtrado por interaccion del usuario por A-Z",  () => {

  userEvent.selectOptions(
    screen.getByRole('combobox'),
    screen.getByRole('option', { name: 'A-Z' }),
  )

  const optionMasRelevantes = screen.getByRole('option', { name: 'Mas relevantes' }).selected;
  const optionMayorPrecio = screen.getByRole('option', { name: 'Mayor precio' }).selected;
  const optionMenorPrecio = screen.getByRole('option', { name: 'Menor precio' }).selected;
  const optionAZ = screen.getByRole('option', { name: 'A-Z' }).selected;

  expect(optionMayorPrecio).toBe(false)
  expect(optionMenorPrecio).toBe(false)
  expect(optionAZ).toBe(true)
  expect(optionMasRelevantes).toBe(false)

});

it("Se deben renderizar los items filtrados por orden alfabetico de A a la Z",  () => {

  userEvent.selectOptions(
    screen.getByRole('combobox'),
    screen.getByRole('option', { name: 'A-Z' }),
  );

  const optionMayorPrecio = screen.getByRole('option', { name: 'A-Z' }).selected;

  expect(optionMayorPrecio).toBe(true);

  const arrayProd = screen.getAllByTestId('id-product');
  const arrayProdPivot = arrayProd.map(a => a.innerHTML);
  let orderProductsData = orderByAlphabet(productsData);
  orderProductsData = orderProductsData.map(b => `#${b.id}`);
  expect(orderProductsData).toEqual(arrayProdPivot);
});
// test.only('Se debe renderizar el warning message cuando no hay nada en la lista de productos', async () => { 
//   cleanup()
//   await getProducts.mockRejectedValue([]);
//    render(
//     <MemoryRouter><ProductsList/></MemoryRouter>, { wrapper: SearchProvider });
// screen.debug()
//   });
 })


