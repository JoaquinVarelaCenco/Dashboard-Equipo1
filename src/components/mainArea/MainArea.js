import { useContext } from "react";
import "./MainArea.css";
import Header from "../header/Header"
import { ThemeContext } from "../../context/ThemeContext";
import AppRouter from "../../routes/AppRouter";

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

export default MainArea
