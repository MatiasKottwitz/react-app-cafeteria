import { Button } from "./common/Button"

export const AboutItems = ({id,aboutUs, aboutInfoP, btnData, btnClass}) => {
  return (
   <div className="acerca-info" >
        <h3 className="acerca-info-h">{aboutUs}</h3>
        <p className="acerca-info-p">{aboutInfoP}</p>
        <Button btnClass={btnClass} btnData={btnData}/>
   </div>
  )
}
