import "./App.css";
import Sidebar from "./components/sideBar/SideBar";
import MainArea from "./components/mainArea/MainArea";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Sidebar />
      <MainArea />
      </BrowserRouter>
    </div>
   
  );
}

export default App;
