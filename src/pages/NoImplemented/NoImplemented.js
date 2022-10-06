import { useContext } from 'react';
import { Link } from 'react-router-dom'
import { ThemeContext } from '../../context/ThemeContext';
import './NoImplemented.css'

const NoImplemented = () => {

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`noImplemented ${theme}`}>
        <h3><span>En</span> Construcción</h3>
        <p>Esta sección estara lista pronto</p>
        <div className='progress'>
            <div className='progress-bar'>
            </div>
        </div>
        <Link to="/">
            <button>Home</button>
        </Link>
    </div>
  )
}

export default NoImplemented