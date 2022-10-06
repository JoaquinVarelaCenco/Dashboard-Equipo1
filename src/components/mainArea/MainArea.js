import "./MainArea.css";
import Header from "../header/Header"
import AppRouter from "../../routes/AppRouter"
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const MainArea = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`mainArea ${theme}`}>
      <Header/>
      <div className="mainArea__content">
      <AppRouter>
      </AppRouter>
      </div>
      </div> 
      
  );
};

export default MainArea;
