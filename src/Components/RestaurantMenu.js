import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Shimmer from './Shimmer'
import useRestaurantMenu from '../utils/useRestaurantMenu'
import MenuCardComponent from '../Modal/MenuCardComponent'
import { CDN_URL } from '../utils/constants'
import RestantCategories from '../Modal/RestaurantCategories'

export default RestaurantMenu = () => {
  // const [resInfo,setResInfo] = useState(null)
  const { resId } = useParams()
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
  const [showIndex,setShowIndex] = useState(null)
  const { name, cuisines, costForTwo, areaName, locality, avgRating, totalRatingsString, cloudinaryImageId } = resInfo?.data?.cards[2]?.card?.card?.info || {};
  var listMenu = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards || []
  const data = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((i)=>{
   return(
    i.card.card["@type"] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory')
  })

  return (
    resInfo === null ? <Shimmer /> : (
      <div className='item-center'>
        <div className="flex justify-between m-4 pl-8 w-[950px] h-[250px] rounded-lg bg-gray-50 hover:bg-gray-200 shadow-lg items-center">
          <div>
            <h1 className="font-bold py-2 text-4xl">{name}</h1>
            <p>📍 {areaName + ',' + locality}</p>
            <h2>🍽️ {cuisines.join(', ')}</h2>
            <h3>Price for two ₹{costForTwo / 100}</h3>
            <div className="flex justify-between">
            <h3>Average Rating {avgRating} ⭐</h3>
            <h3>Total Ratings {totalRatingsString}</h3>
            </div>
          </div>
          <div className='flex items-center p-4'>
            <img src={CDN_URL + cloudinaryImageId}
              className="h-[210px] w-[250px] rounded-xl"
              alt='res-logo' />
          </div>
        </div>
        <div className='p-4'><Link to='/' className='px-5 py-1 m-2 bg-green-100 rounded-lg shadow-md'>Back</Link></div>
        <div className='m-2 p-4'>
          {/* Categories accordion*/}
          {data.map((i,index)=>{
            return(<RestantCategories
            key={i.card.card.title}
            data = {i.card.card}
            showItems={index==showIndex  ?true : false}
            showIndex={showIndex}
            setShowIndex = {()=>setShowIndex(index)}
            />)
          })}
        </div>


        {/* <div className=" font-bold text-2xl m-2 p-4 w-[850px] h-10 flex justify-center">
          <h1>Menu</h1>
        </div>
        <div className="flex flex-wrap justify-center">
          {listMenu.map((i) => {
            return (
              // <li key={i.card.info.id}>{i.card.info.name} - {i.card.info.price/100 || i.card.info.defaultPrice/100}</li>
              <MenuCardComponent key={i.card.info.id} res={i} />
            )
          })}

        </div> */}
      </div>
    )


  )
}