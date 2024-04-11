import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import Shimmer from './Shimmer'
import useRestaurantMenu from '../utils/useRestaurantMenu'
export default RestaurantMenu = () =>{
    // const [resInfo,setResInfo] = useState(null)
    const {resId} = useParams()
    const resInfo = useRestaurantMenu(resId)
    //We moved the below code snippet to a custom hook - useRestaurantMenu
//     useEffect(()=>{
//    fetchMenu()
//     },[])
    // const fetchMenu = async() =>{
    //     const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.909674&lng=77.6393447&restaurantId=${resId}&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER`) 
    //     const res = await data.json()
    //     setResInfo(res)
    //     console.log("data",res)
    // }
    const {name,cuisines,costForTwo } = resInfo?.data?.cards[2]?.card?.card?.info || {};
    var listMenu = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards || []

    return (
        resInfo ===null ?<Shimmer/> :(
            <div className='menu'>
             {console.log("Listmenu",listMenu)}
            <h1>{name }</h1>
            <h1>{cuisines.join(', ') }</h1>
            <h1>{costForTwo }</h1>
            <h2>Menu</h2>
            <ul>
                {listMenu.map((i)=>{
                return(<li key={i.card.info.id}>{i.card.info.name} - {i.card.info.price/100 || i.card.info.defaultPrice/100}</li>)
            })}
        
            </ul>
        </div>
        )
    
        
    )
}