import popularStyle from './../../../public/css/popular.module.css'

export const PopularCards = ({id, ProductImage, imageAlt, productPopular, pricePopular}) => {
  return (
      <div className={popularStyle.card_popular}>
        <img src={ ProductImage } alt={ imageAlt} />
        <div className={popularStyle.card_popular_content} >
          <div className={popularStyle.card_popular_title}>
            <h4>{productPopular}</h4>
            <h4>{pricePopular}</h4>
          </div>
          <div className={popularStyle.card_popular_buttons}>
              <div className={popularStyle.radios} >
              <fieldset>
                <div className={popularStyle.radio_block}>
                    <input type="radio" name={`popular-product-${id}`} id={`popular-product-${id}-on`} checked={true} />
                    <label className={popularStyle.label} htmlFor={`popular-product-${id}-on`}>Caliente</label>
                    <input type="radio" name={`popular-product-${id}`} id={`popular-product-${id}-off`}/>
                    <label htmlFor={`popular-product-${id}-off`} className={popularStyle.off_label}>Frio</label>
                    <span className={popularStyle.selected}aria-hidden="true"></span>
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
