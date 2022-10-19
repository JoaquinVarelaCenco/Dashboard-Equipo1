import { queryByTestId, queryByText, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import { HeaderProvider } from "./context/HeaderContext";
import { SearchProvider } from './context/SearchContext';
import { SideBarProvider } from "./context/SideBarContext";
// import ProductsList from './pages/Products/ProductsList/ProductsList'
// import Header from './components/Header/Header'

// jest.mock('./pages/Products/ProductsList/ProductsList')




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

  // afterEach(()=>{
  //   window.prompt = jsdomPrompt;
  // })
  test("Cuando el usuario está en la raíz ('/') se renderiza el componente <Home/>", () => {
    let buttons = screen.queryAllByRole('button', {name: "Ver listado"})
    expect(buttons.length).toBe(2)
  });
  
  test("Cuando clickeamos en Sidebar-'Productos' se rendirecciona a /products", () => {
    let btnProductos = screen.queryByRole('link', {name: "Productos"})
    userEvent.click(btnProductos);
    const currentRoute = screen.queryByTestId('location-display');
    expect(currentRoute.innerHTML).toBe('/products')
  });

  test("Cuando clickeamos en Sidebar-'Tiendas' se rendirecciona a /products", () => {
    let btnTiendas = screen.queryByRole('link', {name: "Tiendas"})
    userEvent.click(btnTiendas);
    const currentRoute = screen.queryByTestId('location-display');
    expect(currentRoute.innerHTML).toBe('/stores')
  });

  test("Cuando clickeamos en Sidebar-'Inicio' se rendirecciona a /home", () => {
    let btnProfile = screen.queryByRole('link', {name: /Olivia/i})

    let currentRoute = screen.queryByTestId('location-display');
    expect(currentRoute.innerHTML).not.toBe('/profile')

    userEvent.click(btnProfile);
    currentRoute = screen.queryByTestId('location-display');
    expect(currentRoute.innerHTML).toBe('/profile')
  });

  test("Cuando clickeamos en Sidebar-'Inicio' se rendirecciona a /home", () => {
    let btnsInicio = screen.queryAllByRole('link', {name: "Inicio"});
    let btnInicio = btnsInicio[0];
    userEvent.click(btnInicio);
    const currentRoute = screen.queryByTestId('location-display');
    expect(currentRoute.innerHTML).toBe('/home')
  });
  
})

