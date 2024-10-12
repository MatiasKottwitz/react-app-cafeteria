import './../../../public/css/HomePage.css'
import imagenHome from '../../assets/images/home_image.jpg';

export const BannerContainer = ({homeAlt, homeImage}) => {
  return (
   <>
    <div id="home">
            <div className="home-image" role="img"></div>
            <div className="rectangle-img">
                <img className="image-local" src={homeImage} alt={homeAlt}/>
                <div className="home-text">
                    <h1>Más que una <span>&nbsp; Cafetería</span>, una experiencia sensorial.</h1>
                    <p>
                        Tu momento de tranquilidad, nuestra mejor taza.
                    </p>
                </div>
            </div>
        </div>
   </>
  )
}
BannerContainer.defaultProps = {
  homeImage: imagenHome,
  homeAlt: "Imagen Principal"
};