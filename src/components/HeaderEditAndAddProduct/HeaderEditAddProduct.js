import leftArrow from '../../assets/images/chevron-right (1).svg';
import Button from '../button/Button';
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
            <Button 
              classN={"headerEditProduct__btnDelete"}
              title={"ELIMINAR"}
            />
          </div>
          :
          ""  
        }
    </>
  )
}

export default HeaderEditAddProduct