import PropTypes from "prop-types";

// import './../../../public/css/HomePage.css'
import { PopularContainer,BannerContainer, ServicesContainer, AboutContainer } from "../containers";
import {bannerData, popularMenuData, servicesData,aboutData} from './../data/data'

export const HomePage = () => {
  return (
    <>  
        <BannerContainer bannerData={bannerData} />
        <PopularContainer popularMenuData={popularMenuData} />
        <ServicesContainer servicesData={servicesData} />
        <AboutContainer aboutData={aboutData}/>
    </>
  )
}

