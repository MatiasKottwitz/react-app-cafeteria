

export const GalleryItems = ({imageUrl, imageAlt}) => {
  return (
    <div className="gallery-item" >
        <img src={imageUrl} alt={imageAlt} />
    </div>
  )
}
