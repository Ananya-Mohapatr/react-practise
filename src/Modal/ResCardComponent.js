import React from 'react'
const styleCard = {
    backgroundColor:"#f0f0f0"
}
const ResCardComponent = ({resData}) =>{
    const  {name,cuisines,avgRating,sla,costForTwo,cloudinaryImageId} = resData

    return(
        <div className="res-card" style={styleCard}>
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ cloudinaryImageId}
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