import { cleanup, render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import HeaderEditAddProduct from "./HeaderEditAddProduct"
import { deleteProductFunction } from '../../utils/product';


let component;

jest.mock("../../utils/product")

describe('Test boton eliminar producto del componente Header', ()=>{

  beforeEach(()=>{

    component = render(
      <MemoryRouter>
        <HeaderEditAddProduct editProduct={true}>
        </HeaderEditAddProduct>
        </MemoryRouter>)
  })

  it('El botón Eliminar debe estar en el Header cuando se esta editando un producto', ()=>{

    expect(screen.getByText(/eliminar/i)).toBeInTheDocument;

  })

  it('El botón Eliminar debe ejecutar la funcion al hacerse click', ()=>{
    let btnEliminar = screen.getByRole('button');
    userEvent.click(btnEliminar);
    expect(deleteProductFunction).toHaveBeenCalled();
  })


  it('El botón Eliminar no debe estar en el Header cuando no se esta editando un producto', ()=>{
    cleanup();

    render(
        <MemoryRouter>
          <HeaderEditAddProduct editProduct={false}>
          </HeaderEditAddProduct>
          </MemoryRouter>)

    expect(screen.queryByText(/eliminar/i)).not.toBeInTheDocument;

  })
})