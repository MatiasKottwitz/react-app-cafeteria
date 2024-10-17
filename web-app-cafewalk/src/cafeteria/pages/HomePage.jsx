import PropTypes from "prop-types";

// import './../../../public/css/HomePage.css'
import { PopularContainer,BannerContainer } from "../containers";
import {bannerData, popularMenuData, servicesData} from './../data/data'

export const HomePage = () => {
  return (
    <>  
        <BannerContainer bannerData={bannerData} />
        <PopularContainer popularMenuData={popularMenuData} />
        {/* <ServicesContainer servicesData={servicesData} /> */}
    </>
  )
}

