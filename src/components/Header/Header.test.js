import { render, screen, act, createEvent } from "@testing-library/react";
import Header from "./Header";
import { MemoryRouter } from "react-router-dom";
import { HeaderProvider } from "../../context/HeaderContext";
import userEvent from "@testing-library/user-event";
import { SideBarProvider } from "../../context/SideBarContext";

let component;

describe("Test formulario de productos", () => {
  beforeEach(() => {
    component = render(
      <MemoryRouter>
        <SideBarProvider>
          <Header />
        </SideBarProvider>
      </MemoryRouter>,
      { wrapper: HeaderProvider }
    );
  });

  test("El componente debe renderizarse correctamente", () => {
    const { container } = component;

    expect(container).toMatchSnapshot();
  });

  test("El menú hamburguesa debe estar en el componente", () => {
    const menuHamburguesa = screen.getByRole(
      "button",
      (name = "Menú hamburguesa")
    );

    expect(menuHamburguesa.firstChild).toHaveAccessibleName("Menú hamburguesa");
  });

  test("Click menú hamburguesa", () => {
    const menuHamburguesa = screen.getByRole(
      "button",
      (name = "Menú hamburguesa")
    );

    userEvent.click(menuHamburguesa);
  });
});
