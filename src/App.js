import "./App.css";
import Sidebar from "./components/SideBar/SideBar";
import MainArea from "./components/MainArea/MainArea";
import { BrowserRouter, useLocation } from "react-router-dom";
import { ThemeContext, ThemeProvider } from "./context/ThemeContext";
import { SideBarProvider } from "./context/SideBarContext";
import { useContext } from "react";

export const LocationDisplay = ()=>{
  const location = useLocation();
  return <div data-testid="location-display">{location.pathname}</div>;
}

function App() {

  const { theme } = useContext(ThemeContext);

  return (
    
    <div className={`App ${theme}`}>
      <BrowserRouter>
          <ThemeProvider>
          <SideBarProvider>
            <Sidebar />
            <MainArea />
          </SideBarProvider>
          </ThemeProvider>
      <LocationDisplay/>
      </BrowserRouter>
    </div>
   
  );
}

export default App;
