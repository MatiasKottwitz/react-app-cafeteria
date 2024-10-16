import './../../../public/css/popular.css'

export const PopularCards = ({id, ProductImage, imageAlt, productPopular, pricePopular}) => {
  return (
    <div className="popular-cards">
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
                <div class="radio-block">
                    <input type="radio" name="popular-product-one" id="popular-product-one-on" checked>
                    <label for="popular-product-one-on">Caliente</label>
                    <input type="radio" name="popular-product-one" id="popular-product-one-off">
                    <label for="popular-product-one-off" class="off-label">Frio</label>
                    <span class="selected" aria-hidden="true"></span>
                </div>
              </fieldset>
              </div>
              <button className="fa-solid fa-cart-shopping"></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PopularCards;
