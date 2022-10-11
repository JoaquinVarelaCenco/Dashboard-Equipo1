import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import './Error404.css';

const Error404 = () => {
  return (
    <>
        <div className='error404__Main'>
            <div className='error404__top'>
                <h2>404</h2>
            </div>
            <div className='error404__bottom'>
                <p>Disculpa, Página No Encontrada</p>
                <p>La página que deseas acceder no existe</p>
                <Link to="/home">
                    <Button 
                        title={"Inicio"}
                    />
                </Link>
            </div>
        </div>
    </>
  )
}

export default Error404
