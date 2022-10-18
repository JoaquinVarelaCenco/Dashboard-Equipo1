import { act, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Home from './Home.js'
import { getProducts } from "../../services/apiServices";
import productsData from '../../mockData/productsData'
import HomeCard from "../../components/HomeCard/HomeCard";
import { sortByCount, sortByStock } from "../../utils/product";



//mocks
jest.mock('../../services/apiServices');



jest.mock('recharts', () => {
  const OriginalModule = jest.requireActual('recharts');

  return {
      ...OriginalModule,
      ResponsiveContainer: ({ height, children }) => (
          <OriginalModule.ResponsiveContainer width={800} height={height}>
              {children}
          </OriginalModule.ResponsiveContainer>
      ),
  };
});


let component;
let productos

describe("Test para la vista Home", () => {

  beforeEach( async()=>{
    productos = await getProducts.mockResolvedValue([...productsData ])

    await act( async ()=>{
      component = render(<Home />, { wrapper: BrowserRouter })
    })
  })


  it('Test vacio para prueba', ()=>{

  })
  
  
  it("Se renderiza correctamente", async () => {
    const { container } = component;

    expect(container).toMatchSnapshot()
  });
});
