import { Link } from 'react-router-dom'

import './HomeCard.css'

const HomeCard = (props) => {

    const { count, 
            title, 
            linkBtnList, 
            textBtnAdd, 
            linkBtnAdd, 
            img } = props;

    return (
    <div className='itemRow'>
        <div className='itemRow__count'>
            <img src= {img}/>
            <p><strong>{count}</strong> {title}</p>
        </div>
        <div className='itemRow__buttons'>
            <Link to={linkBtnList}>
                <button>Ver Listado</button>
            </Link>
            <Link to={linkBtnAdd}>
                <button>{textBtnAdd}</button>
            </Link>
        </div>
    </div>
    )
}

export default HomeCard