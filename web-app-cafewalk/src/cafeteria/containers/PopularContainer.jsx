import './../../../public/css/popular.css'
import PopularCards from "./../components/PopularCards"

export const PopularContainer = ({popularMenuData}) => {
  return (
    <div id="popular-section" >
      <h2>Populares Hoy</h2>
      <div className="popular-container-background">
      <div className="popular-cards">
        {popularMenuData.map (popular => (
          <PopularCards key={popular.id} {...popular} />
        ))}
      </div>
      </div>
    </div>
  )
}
