import React from 'react'
import PropTypes from 'prop-types'

import '../layouts/header.css'
import logo from '../../assets/logoCafe.svg'
import cart from '../../assets/logoCart.svg'

export const Header = ({imgLogo, imgCart }) => {
  return (
    <header className="my-header" >
    <div className="nav-container">
        <i className="logos">
            <img src={imgLogo} alt="" />
            <span>Cafe</span>Walk</i>
        <ul className="links" >
            <li className="my-li"><a href="#home"  >Inicio</a></li>
            <li className="my-li"><a href="#servicios" >Servicios</a></li>
            <li className="my-li"><a href="#acerca" >Acerca de</a></li>
            <li className="my-li"><a href="#menu">Menu</a></li>
            <li className="my-li"><a href="#locales">Locales</a></li>
            <li className="my-li"><a href="#contacto">Contacto</a></li>
        </ul>
            <a href="pages/pedidos.html" className="pedido" >Menu Especial</a>
            <i className="cart"><img src={imgCart} alt=""/>
            </i>
            <div className="menu">
                <i className="fa-solid fa-bars"></i>
            </div>
    </div>
   <div className="menu-resp">
        <li className="my-li" ><a href="#home" className="my-a" >Inicio</a></li>
        <li className="my-li" ><a href="#servicios" className="my-a" >Servicios</a></li>
        <li className="my-li" ><a href="#acerca" className="my-a" >Acerca de</a></li>
        <li className="my-li" ><a href="#menu" className="my-a" >Menu</a></li>
        <li className="my-li" ><a href="#locales" className="my-a" >Locales</a></li>
        <li className="my-li" ><a href="#contacto" className="my-a" >Contacto</a></li>
        <li className="my-li" ><a href="#" className="my-a" >Menu Especial</a></li>
   </div>
   <script src="JS/menu_resp.js" ></script>
</header>
  )
}

//Props por defecto.

Header.defaultProps = {
    imgLogo: logo,
    imgCart: cart
};

export default Header;