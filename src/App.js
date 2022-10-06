import "./App.css";
import Sidebar from "./components/sideBar/SideBar";
import MainArea from "./components/mainArea/MainArea";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { SideBarProvider } from "./context/SideBarContext";

function App() {
  return (
    <div className="App">
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
