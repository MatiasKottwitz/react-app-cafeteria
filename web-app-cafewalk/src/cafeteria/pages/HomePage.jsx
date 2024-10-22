import PropTypes from "prop-types";
import { PopularContainer,BannerContainer, ServicesContainer, AboutContainer, MenuContainer, ContactContainer, GalleryContainer } from "../containers";
import {bannerData, popularMenuData, servicesData,aboutData, productCards, galleryImages} from './../data/data'

export const HomePage = () => {
  return (
    <>  
        <BannerContainer bannerData={bannerData} />
        <PopularContainer popularMenuData={popularMenuData} />
        <ServicesContainer servicesData={servicesData} />
        <AboutContainer aboutData={aboutData}/>
        <MenuContainer productCards={productCards}/>
        <GalleryContainer galleryImages={galleryImages} />
        <ContactContainer />

    </>
  )
}

