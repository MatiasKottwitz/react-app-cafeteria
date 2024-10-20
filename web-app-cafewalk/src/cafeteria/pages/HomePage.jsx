import PropTypes from "prop-types";

import { PopularContainer,BannerContainer, ServicesContainer, AboutContainer, MenuContainer } from "../containers";
import {bannerData, popularMenuData, servicesData,aboutData, productCards} from './../data/data'

export const HomePage = () => {
  return (
    <>  
        <BannerContainer bannerData={bannerData} />
        <PopularContainer popularMenuData={popularMenuData} />
        <ServicesContainer servicesData={servicesData} />
        <AboutContainer aboutData={aboutData}/>
        <MenuContainer productCards={productCards}/>
    </>
  )
}

