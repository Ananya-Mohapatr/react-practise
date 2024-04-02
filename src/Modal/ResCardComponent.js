import React from 'react'
import { CDN_URL } from '../utils/constants'
const styleCard = {
    backgroundColor:"#f0f0f0"
}
const ResCardComponent = ({resData}) =>{
    const  {name,cuisines,avgRating,sla,costForTwo,cloudinaryImageId} = resData

    return(
        <div className="res-card" style={styleCard}>
            <img src={CDN_URL+ cloudinaryImageId}
            className="res-logo"
            alt='res-logo'/>
            <h4>{name}</h4>
            <p>{cuisines.join(', ')}</p>
            <p>{avgRating} stars</p>
            <p>{sla.deliveryTime}</p>
            <p>{costForTwo}</p>
        </div>
    )
}

export default ResCardComponent