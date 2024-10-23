import { Button } from "./common/Button"

export const MenuCardsContainer = ({
    id,
    productImage, 
    productAlt, 
    productName, 
    productDescription, 
    productPrice, 
    btnClass, 
    btnName
}) => {
  return (
    <div className="menu-card" key={id} >
        <img className="menu-card-image" src={productImage} alt={productAlt} />
        <div className="menu-card-content">
            <div className="menu-card-info">
                <h4 className="menu-product-name">{productName}</h4>
                <p className="menu-product-description">{productDescription}</p>
            </div>
            <div className="menu-card-purchase">
                <p className="menu-product-price">{productPrice}</p>
                <Button btnClass={btnClass} btnData={btnName}/>
            </div>
        </div>   
    </div>
  )
}
