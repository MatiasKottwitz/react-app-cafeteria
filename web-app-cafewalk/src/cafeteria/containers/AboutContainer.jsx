import { AboutItems } from "../components/AboutItems"
export const AboutContainer = ({aboutData}) => {

const image = './images/img-acerca.png'

return (
    <div id='acerca'>
        <div className='border-acerca' >
            <img  className="img-acerca" src={image} alt="Imagen Acerca de."/>
        </div>
        {aboutData.map (about => (
            <AboutItems key={about.id} {...about} />
        )) }
    </div>
  )
}

