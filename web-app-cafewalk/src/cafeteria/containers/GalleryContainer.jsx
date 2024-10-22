import { GalleryItems } from "../components/GalleryItems"
import './../../../public/css/gallery.css'
export const GalleryContainer = ({galleryImages}) => {
  return (
   <div id="gallery-section">
    <h2>Nuestros 6 Locales</h2>
     <div className="gallery" >
        
        {galleryImages.map(imagesGallery => (
            <GalleryItems key={imagesGallery.id} {...imagesGallery} />
        ))}
    </div>
   </div>
  )
}
