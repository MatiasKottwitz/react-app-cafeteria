import PropTypes from "prop-types";

import './../../../public/css/HomePage.css'
import { BannerContainer } from "../containers/BannerContainer";
import {bannerData} from './../data/data'

export const HomePage = () => {
  return (
    <>  
        <BannerContainer bannerData={bannerData}/>
    </>
  )
}

