import { Link } from 'react-router-dom';
import leftArrow from '../../assets/images/chevron-right (1).svg';
import { deleteProductFunction } from '../../utils/product';
import Button from '../Button/Button';
import './HeaderEditAddProduct.css'

const HeaderEditAddProduct = ({productContent, editProduct}) => {
  return (
    <>
          <div className="headerEditProduct">
            <img src={leftArrow} alt="" />
            <h2>{productContent}</h2>
          </div>
          {editProduct?
            <div className="headerEditProduct__btnDeleteContainer">
              <Link to={"/products"}>
                <Button 
                  classN={"headerEditProduct__btnDelete"}
                  title={"ELIMINAR"}
                  click={()=>deleteProductFunction(productContent)}
                />
              </Link>
          </div>
          :
          ""  
        }
    </>
  )
}


export default HeaderEditAddProduct