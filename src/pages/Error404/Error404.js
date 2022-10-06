import { Link } from 'react-router-dom';
import './Error404.css';

const Error404 = () => {
  return (
    <>
        <div className='error404__Main'>
            <div className='error404__top'>
                <p>404</p>
            </div>
            <div className='error404__bottom'>
                <h3>Disculpa, Página No Encontrada</h3>
                <p>La página que deseas acceder no existe</p>
                <Link to="/">
                    <button>Home</button>
                </Link>
            </div>
        </div>
    </>
  )
}

export default Error404