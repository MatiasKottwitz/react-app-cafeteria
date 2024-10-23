import popularStyle from'./../../../public/css/popular.module.css'
import PopularCards from "./../components/PopularCards"

export const PopularContainer = ({popularMenuData}) => {
  return (
    <div id={popularStyle.popular_section} >
      <h2>Populares Hoy</h2>
      <div className={popularStyle.popular_container_background}>
      <div className={popularStyle.popular_cards}>
        {popularMenuData.map (popular => (
          <PopularCards key={popular.id} {...popular} />
        ))}
      </div>
      </div>
    </div>
  )
}
