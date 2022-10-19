import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import WarningMessage from './WarningMessage';

describe("Test formulario de productos", ()=>{

    
        test("Se debe renderiza correctamente", ()=>{
            render(<WarningMessage text={"Hola, esto es un test"} search={false}/>,
            {wrapper: BrowserRouter })
            expect(screen.queryByText(/test/i)).toBeInTheDocument()
                })
            

        test("Se debe renderiza correctamente la tarjeta", ()=>{
            render(<WarningMessage text={"Hola, search en verdadero"} search={true}/>,
            {wrapper: BrowserRouter })
            expect(screen.queryByText(/ortografia/i)).toBeInTheDocument()
      
        })
       
    })