import "./App.css";
import Sidebar from "./components/sideBar/SideBar";
import MainArea from "./components/mainArea/MainArea";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <ThemeProvider>
            <Sidebar />
            <MainArea />
          </ThemeProvider>
      </BrowserRouter>
    </div>
   
  );
}

export default App;
