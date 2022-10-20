import { getByText, queryByTestId, queryByText, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import { HeaderProvider } from "./context/HeaderContext";
import { SearchProvider } from './context/SearchContext';
import { SideBarProvider } from "./context/SideBarContext";

let component
describe("Testing de app", ()=>{
  beforeEach(()=>{
    component = render(
      <SearchProvider>
        <HeaderProvider>
        <SideBarProvider>
        <App/>
        </SideBarProvider>
      </HeaderProvider>
      </SearchProvider>
      )
  })

  test("Cuando el usuario está en la raíz ('/') se renderiza el componente <Home/>", () => {
    let buttons = screen.queryAllByRole('button', {name: "Ver listado"})
    expect(buttons.length).toBe(2)
  });
  
  test("Click en Sidebar-'Productos' rendirecciona a /products y renderiza <ProductsList/>", () => {
    let btnProductos = screen.queryByRole('link', {name: "Productos"})
    userEvent.click(btnProductos);
    const currentRoute = screen.queryByTestId('location-display');
    expect(currentRoute.innerHTML).toBe('/products')

    const verificadorProductsList = screen.queryByText("Mas relevantes");
    expect(verificadorProductsList).toBeInTheDocument();
  });

  test("Click en Sidebar-'Tiendas' rendirecciona a /stores y renderiza <NoImplemented/>", () => {
    let btnTiendas = screen.queryByRole('link', {name: "Tiendas"})
    userEvent.click(btnTiendas);
    const currentRoute = screen.queryByTestId('location-display');
    expect(currentRoute.innerHTML).toBe('/stores')

    const verificadorComponenteProfile = screen.queryByText("Esta sección estara lista pronto");
    expect(verificadorComponenteProfile).toBeInTheDocument();
  });

  test("Click en Sidebar-'Profile' rendirecciona a /profile y renderiza <NoImplemented/>", () => {
    let btnProfile = screen.queryByRole('link', {name: /Olivia/i})

    let currentRoute = screen.queryByTestId('location-display');
    expect(currentRoute.innerHTML).not.toBe('/profile')

    userEvent.click(btnProfile);
    currentRoute = screen.queryByTestId('location-display');
    expect(currentRoute.innerHTML).toBe('/profile')
    const verificadorComponenteProfile = screen.queryByText("Esta sección estara lista pronto");
    expect(verificadorComponenteProfile).toBeInTheDocument();
  });

  test("Click en  Sidebar-'Inicio' rendirecciona a /home y renderiza <Home/>", () => {
    let btnsInicio = screen.queryAllByRole('link', {name: "Inicio"});
    let btnInicio = btnsInicio[0];
    userEvent.click(btnInicio);
    const currentRoute = screen.queryByTestId('location-display');
    expect(currentRoute.innerHTML).toBe('/home');

    let buttons = screen.queryAllByRole('button', {name: "Ver listado"})
    expect(buttons.length).toBe(2)
  });
  
})

