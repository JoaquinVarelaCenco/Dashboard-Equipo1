import "./App.css";
import Sidebar from "./components/SideBar/SideBar";
import MainArea from "./components/MainArea/MainArea";
import { BrowserRouter } from "react-router-dom";
import { ThemeContext, ThemeProvider } from "./context/ThemeContext";
import { SideBarProvider } from "./context/SideBarContext";
import { useContext } from "react";

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
      </BrowserRouter>
    </div>
   
  );
}

export default App;
