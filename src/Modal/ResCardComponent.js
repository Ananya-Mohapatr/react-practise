import React ,{ useContext }from 'react'
import { CDN_URL } from '../utils/constants'
import UserContext from '../utils/UserContext'
const styleCard = {
    backgroundColor:"#f0f0f0"
}

const ResCardComponent = ({resData}) =>{
    const  {name,cuisines,avgRating,sla,costForTwo,cloudinaryImageId} = resData
    const {loggedInUser} = useContext(UserContext)
    return(
        <div className="m-4 p-4 w-[250px] h-[350px] rounded-lg bg-gray-50 hover:bg-gray-200" >
            <img src={CDN_URL+ cloudinaryImageId}
            className="h-[200px] w-[200px] rounded-lg ml-2"
            alt='res-logo'/>
            <h4 className="font-bold py-2 text-lg md:line-clamp-1">{name}</h4>
            <div className="flex space-x-2"><p>{avgRating} ⭐ </p><p> ETA- {sla.deliveryTime} mins</p></div>
            <p>{costForTwo}</p>
            <p className="md:line-clamp-1">{cuisines.join(', ')}</p>
            <p>loggedInUser : {loggedInUser}</p>
        </div>
    )
}

// Higher Order Component
//Input => Restaurant card =>RestaurantCardpromoted is returned.

export const withpromotedLabel = (ResCardComponent) =>{     //this is a higher order component which takes resCardComponent as an argument and returns Card components with promotedLabel.


    return(props)=>{
        console.log("propsss",props)
        return(
            <div>
            <label className='absolute bg-black text-white rounded-md p-2 m-2'>Promoted</label>
            <ResCardComponent {...props}/>
            </div>
        )}
    
};

export default  ResCardComponent;