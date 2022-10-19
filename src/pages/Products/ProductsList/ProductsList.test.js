import { render, act, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { SearchProvider } from "../../../context/SearchContext";
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
    // screen.debug();
  });

  it("Se debe renderizar correctamente los items", async () => {
      const items = screen.getAllByRole('article') 
      expect(items.length).toBe(productsData.length)
  });

  it("Seleccion de filtrado predeterminada", async () => {
     const optionMasRelevantes = screen.getByRole('option', { name: 'Mas relevantes' }).selected;
     const optionMayorPrecio = screen.getByRole('option', { name: 'Mayor precio' }).selected;
     const optionMenorPrecio = screen.getByRole('option', { name: 'Menor precio' }).selected;
     const optionAZ = screen.getByRole('option', { name: 'A-Z' }).selected;

     expect(optionMasRelevantes).toBe(true)
     expect(optionMayorPrecio).toBe(false)
     expect(optionMenorPrecio).toBe(false)
     expect(optionAZ).toBe(false)
});

it("Seleccion de filtrado por interaccion del usuario por Mayor precio", async () => {

  
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

it("Seleccion de filtrado por interaccion del usuario por Menor precio", async () => {

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

it("Seleccion de filtrado por interaccion del usuario por Mas relevantes", async () => {

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

it("Seleccion de filtrado por interaccion del usuario por A-Z", async () => {

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

});

