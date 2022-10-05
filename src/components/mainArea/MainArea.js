import "./MainArea.css";
import Header from "../header/Header"
import AppRouter from "../../routes/AppRouter"

const MainArea = () => {
  return (
    <div className="mainArea">
      <Header/>
      <div className="mainArea__content">Probando
      <AppRouter>
      </AppRouter>
      </div>
      </div> 
      
  );
};

export default MainArea;
