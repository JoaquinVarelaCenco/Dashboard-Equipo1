import { Link } from 'react-router-dom'
import Button from '../Button/Button';

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
            <img src= {img} alt="Icono de Card"/>
            <p><strong>{count}</strong> {title}</p>
        </div>
        <div className='itemRow__buttons'>
            <Link to={linkBtnList}>
                <Button 
                    title={"Ver listado"}
                />
            </Link>
            <Link to={linkBtnAdd}>
                <Button 
                    title={textBtnAdd}
                />
            </Link>
        </div>
    </div>
    )
}

export default HomeCard