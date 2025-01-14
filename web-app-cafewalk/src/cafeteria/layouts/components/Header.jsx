import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import PropTypes from 'prop-types'


import logo from '../../../assets/logoCafe.svg'
import cart from '../../../assets/logoCart.svg'

export const Header = ({imgLogo, imgCart, logoAlt}) => {
  
    const [isOpen, setIsOpen] = useState(false);

    const handleMenuClick = () => {
        setIsOpen(!isOpen);
      };
  
    return (
    <header className="my-header" >
    <div className="nav-container">
        <i className="logos">
            <img src={imgLogo} alt={logoAlt} />
            <span>Cafe</span>Walk</i>
        <ul className="links" >
            {/* <NavLink className="my-li" to="/">Inicio</NavLink>
            <NavLink className="my-li" to="/menu">Productos</NavLink>
            <NavLink className="my-li" to="/envios">Envios</NavLink> */}
            <li className="my-li"><a href="#home" >Inicio</a></li>
            <li className="my-li"><a href="#servicios" >Servicios</a></li>
            <li className="my-li"><a href="#acerca" >Acerca de</a></li>
            <li className="my-li"><a href="#menu-section">Menu</a></li>
            <li className="my-li"><a href="#gallery-section">Locales</a></li>
            <li className="my-li"><a href="#contacto">Contacto</a></li>
        </ul>
        {/* <NavLink className='pedido' to="/pedidos">Pedidos Especiales</NavLink> */}
        <i className="cart"><img src={imgCart} alt=""/></i>
            <div className="menu" onClick={handleMenuClick} >
                <i className={isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'}></i>
            </div>
    </div>
   <div className={`menu-resp ${isOpen ? 'open' : ''}`}>
        <li className="my-li" ><a href="#home" className="my-a" >Inicio</a></li>
        <li className="my-li" ><a href="#servicios" className="my-a" >Servicios</a></li>
        <li className="my-li" ><a href="#acerca" className="my-a" >Acerca de</a></li>
        <li className="my-li" ><a href="#menu-section" className="my-a" >Menu</a></li>
        <li className="my-li" ><a href="#locales" className="my-a" >Locales</a></li>
        <li className="my-li" ><a href="#contacto" className="my-a" >Contacto</a></li>
        <li className="my-li" ><a href="#" className="my-a" >Menu Especial</a></li>
   </div>
   {/* <script src="JS/menu_resp.js" ></script> */}
</header>
  )
}


//Props por defecto.
Header.defaultProps = {
    imgLogo: logo,
    logoAlt: "Brand",
    imgCart: cart
};


export default Header;