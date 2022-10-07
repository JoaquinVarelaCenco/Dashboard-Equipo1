// import { useState, } from "react";
// import ClipLoader from "react-spinners/ClipLoader";
import './Spinner.css'

function App() {
  // let [loading, setLoading] = useState(true);
  // let [color, setColor] = useState("#ffffff");

  return (
    <div className='spinnerContainer'>
      <div className="lds-ripple">
      <div></div><div></div>
    </div>
    </div>
  );
}

export default App;