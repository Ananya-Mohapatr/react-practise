import React from "react";
import { CDN_URL } from '../utils/constants'
const MenuCardComponent = ({res}) => {
    const {card} = res
    return (<div className="m-4 p-4 w-[250px] h-[350px] rounded-lg bg-gray-50 hover:bg-gray-200">
        <img src={CDN_URL+ card.info.imageId}
            className="h-[200px] w-[200px] rounded-lg ml-2"
            alt='res-logo'/>
        <h1 className="font-bold py-1 text-lg md:line-clamp-1">{card.info.name}</h1>
        <div className="flex justify-between">
        <h4>{card.info.ratings.aggregatedRating.rating ? ('⭐ ' + card.info.ratings.aggregatedRating.rating) : "No Ratings"} </h4>
        <h4>Price: Rs {card.info.price/100 || card.info.defaultPrice/100}</h4>
        </div>
        <p className="md:line-clamp-2">{card.info.description}</p>
    </div>);
}

export default MenuCardComponent;