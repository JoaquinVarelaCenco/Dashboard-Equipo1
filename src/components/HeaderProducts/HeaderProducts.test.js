import { render, screen, act } from "@testing-library/react";
import React from "react";
import { SearchContext } from "../../context/SearchContext";
import HeaderProducts from './HeaderProducts';
import {BrowserRouter} from 'react-router-dom'
import { HeaderContext } from "../../context/HeaderContext";
import userEvent from "@testing-library/user-event";
import { WidthScreenContext } from "../../context/WidthScreenContext";


function renderHeaderProducts(handleSearch, widthScreen) {
    return render(
        <WidthScreenContext.Provider value={
            widthScreen
        } >
        <HeaderContext.Provider value={
            {currentTitleContainer: ()=>"displayFlex"}
            }
        >
            <SearchContext.Provider value={
                handleSearch
            }>
                <HeaderProducts/>
            </SearchContext.Provider>
        </HeaderContext.Provider>
        </WidthScreenContext.Provider>,
     { wrapper: BrowserRouter });
  }

describe("Test header de productos", ()=>{
let component;

    beforeEach(()=>{
        let handleSearch = ()=>"";
        let width = {widthScreen: 400}
        component = renderHeaderProducts(handleSearch, width)
    })

    test("Se debe renderizar header products", ()=>{
        const { container } = component
        expect(container).toMatchSnapshot()
    })

    test("Se debe expandir inputSearch al presionar sobre el botón de la lupa", ()=>{
        let btnExpand = document.querySelector('.headerProducts-search-container__btnSearch'); 
        let inputSearch = screen.getByRole('textbox')

        //verificamos que el placeholder se muestre vacío en un principio
        expect(inputSearch.getAttribute('placeholder')).toBe("")
        
        userEvent.click(btnExpand);
        //verificamos que se muestre placeholder
        expect(inputSearch.getAttribute('placeholder')).toBe("Buscar productos...")

    })

    test("Se debe colapsar inputSearch al presionar sobre el botón X", ()=>{
        let btnExpand = document.querySelector('.headerProducts-search-container__btnSearch'); 
        let btnColapse = screen.getByRole('button', {name: "X"})
        let inputSearch = screen.getByRole('textbox');

        //expandimos input para que se muestre el placeHolder
        userEvent.click(btnExpand);
        //colapsamos input para que se oculte el placeHolder
        userEvent.click(btnColapse);

        expect(inputSearch.getAttribute('placeholder')).toBe("")
    })

    test("Los dos botones de agregar producto deben redirigir a /products/new", ()=>{
        const btnsAgregarProducto = screen.getAllByRole('link')
        btnsAgregarProducto.forEach(btn =>{
            expect(btn.getAttribute('href')).toBe('/products/new');
        })
    })




})