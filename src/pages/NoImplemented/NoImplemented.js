import { Link } from 'react-router-dom'
import './NoImplemented.css'

const NoImplemented = () => {
  return (
    <div className='noImplemented'>
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