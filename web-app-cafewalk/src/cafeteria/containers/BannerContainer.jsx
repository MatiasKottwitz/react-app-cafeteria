// import './../../../public/css/HomePage.css'


export const BannerContainer = ({bannerData}) => {
  return (
   <>
    <div id="home">
            <div className="home-image" role="img"></div>
            {bannerData.map (dataBan => (
            <div className="rectangle-img" key={dataBan.id}>
               <img className="image-local" src={dataBan.imageBanner} alt={dataBan.imageAlt}/>
               {console.log(dataBan.imageBanner)}
                <div className="home-text">
                    <h1>{dataBan.titleBanner}</h1>
                    <p>
                        {dataBan.textbanner}
                    </p>
                </div>
             </div>
            )) }
    </div>
   </>
  )
}
