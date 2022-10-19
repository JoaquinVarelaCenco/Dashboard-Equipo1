import AppRouter from "./AppRouter";
import { render, screen } from "@testing-library/react";
import App from '../App';
import pathName from '../utils/pathName'

jest.mock('../utils/pathName')

describe("Testing de rutas", ()=>{


    let originalLocation;
	beforeAll(() => {
		originalLocation = window.location;
		delete window.location;
		window.location = { href: "/" };
	});
	afterAll(() => {
		window.location = originalLocation;
	});


    test("Se renderiza componente Home", ()=>{
        let component = render(<App/>)
        let {container} = component;
        expect(container).toMatchSnapshot()
        // expect(window.location.href).toEqual("/home");
        screen.debug()
        
    })
})