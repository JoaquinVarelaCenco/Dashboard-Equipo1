import { useContext, useRef } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import "./SwitchToggle.css";

const SwitchToggle = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    const checkbox = useRef();

    const handleChange = (e)=>{
        toggleTheme();
    }

    return (
        <label className="switch">
            <input 
                type="checkbox" 
                ref={checkbox}
                onChange={handleChange}
            />
            <span className="slider round"></span>
        </label>
    )
}

export default SwitchToggle