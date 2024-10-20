import { MenuCardsContainer } from "../components/MenuCardsContainer"
export const MenuContainer = ({productCards}) => {
  return (
    <div id="menu-section">
        <h2>Un menu Especial para ti</h2>
        <div className="menu-card-container">
        {productCards.map (productsMenu => (
            <MenuCardsContainer key={productsMenu.id} {...productsMenu} />
        ))}
        </div>
    </div>
  )
}
