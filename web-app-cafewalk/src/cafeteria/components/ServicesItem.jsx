export const ServicesItem = ({id, serviceImage, imageAlt, serviceTextHead, serviceTextP }) => {
  return (
    <div className="service-category-1" key={id}>
       <img className="service-image" src={serviceImage} alt={imageAlt}/>
    <h3 className="services-h3">{serviceTextHead}</h3>
    <p className="services-p" >{serviceTextP}</p>
    </div>
  )
}

export default ServicesItem