import { useContext } from "react";
import "./MainArea.css";
import Header from "../header/Header"
import AppRouter from "../../routes/AppRouter";
import { HeaderContext } from "../../context/HeaderContext";

const MainArea = () => {
  const { page } = useContext(HeaderContext)

  return (
    <div className="mainArea">
      <Header/>
      <div className="mainArea__content">
      <AppRouter>
      </AppRouter>
      </div>
    </div> 
      
  );
};

export default MainArea;
