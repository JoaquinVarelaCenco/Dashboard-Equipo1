import leftArrow from '../../assets/images/chevron-right (1).svg'

const HeaderEditAddProduct = ({productContent, editProduct}) => {
  return (
    <>
          <div className="headerEditProduct">
            <img src={leftArrow} alt="" />
            <h2>{productContent}</h2>
          </div>
          {editProduct?
            <div className="headerEditProduct__btnDeleteContainer">
            <button className="headerEditProduct__btnDelete">ELIMINAR</button>
          </div>
          :
          ""  
        }
        </>
  )
}

export default HeaderEditAddProduct