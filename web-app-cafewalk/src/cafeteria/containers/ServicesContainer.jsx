import ServicesItem from "../components/ServicesItem"

export const ServicesContainer = ({servicesData}) => {
  return (
    <div id="servicios">
        <div className="services-container">
        <h2>Como utilizar nuestros servicios de envio</h2>
            <div className="service">
                {servicesData.map (service => (
                    <ServicesItem key={service.id} {...service} />
                )) } 
            </div>
        </div>
    </div>
  )
}

export default ServicesContainer