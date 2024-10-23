import './footer.css'
import visa from './../../../../public/images/visa.svg'
import master from './../../../../public/images/master.svg'
import facebook from './../../../../public/images/facebook.svg'
import insta from './../../../../public/images/instagram.svg'
import twitt from './../../../../public/images/twitter.svg'

export const Footer = () => {
  return (
    <footer >
      <div className='footer-container'>
      <div className='footer-izq'>
        <p>&copy; <span id="año">2024 </span> Matias Kottwitz </p>
      </div>

      <div className='footer-centro'>
        <p>Tarjetas</p>
          <img src={visa} alt=""/>
          <img src={master} alt="" />
      </div>

      <div className='footer-der' > 
        <p>Nuestras Redes</p>
        <img src={facebook} alt="" />
        <img src={insta} alt="" />
        <img src={twitt} alt="" />
      </div>
      </div>
    </footer>
  )
}
