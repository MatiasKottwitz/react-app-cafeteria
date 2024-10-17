// import './../../../public/css/popular.css'

export const PopularCards = ({id, ProductImage, imageAlt, productPopular, pricePopular}) => {
  return (
      <div className="card-popular">
        <img src={ ProductImage } alt={ imageAlt} />
        <div className="card-popular-content" >
          <div className="card-popular-title">
            <h4>{productPopular}</h4>
            <h4>{pricePopular}</h4>
          </div>
          <div className="card-popular-buttons">
              <div className="radios" >
              <fieldset>
                <div className="radio-block">
                    <input type="radio" name={`popular-product-${id}`} id={`popular-product-${id}-on`} checked={true} />
                    <label htmlFor={`popular-product-${id}-on`}>Caliente</label>
                    <input type="radio" name={`popular-product-${id}`} id={`popular-product-${id}-off`}/>
                    <label htmlFor={`popular-product-${id}-off`} className="off-label">Frio</label>
                    <span className="selected" aria-hidden="true"></span>
                 </div>
              </fieldset>
              </div>
              <button className="fa-solid fa-cart-shopping"></button>
          </div>
        </div>
      </div>
  )
}

export default PopularCards;
