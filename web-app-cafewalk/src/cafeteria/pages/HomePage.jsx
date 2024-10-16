import PropTypes from "prop-types";

import './../../../public/css/HomePage.css'
import { PopularContainer,BannerContainer } from "../containers";
import {bannerData, popularMenuData} from './../data/data'

export const HomePage = () => {
  return (
    <>  
        <BannerContainer bannerData={bannerData} />
        <PopularContainer popularMenuData={popularMenuData} />
    </>
  )
}

