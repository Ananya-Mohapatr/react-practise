import React, { useEffect, useState } from 'react'
import ResCardComponent from '../Modal/ResCardComponent'
import { resObj } from '../utils/RestaurantList'

const Body = () =>{
    const [listOfRestaurants,setListOfRestaurants] = useState(resObj) //array destructuring
    //above line can be written as 
    //--------------------------------------
    // const abc = useState(resObj)
    // const [listOfRestaurants,setListOfRestaurants] = abc
    //or-----
    //const listOfRestaurant = arr[0]
    //const setListOfRestaurant = arr[1]
    //---------------------------------------
    // useEffect(()=>{
    //     setListOfRestaurants(resObj)
    // },[])
    // function restCheck (){
    //     let arr = listOfRestaurants.filter((i)=>i.avgRating >4)
    //     setListOfRestaurants(arr)
    // }
  return(
      <div className="body">
          <div className="filter">
            <button className='filter-btn'
             onClick={()=>{setListOfRestaurants(listOfRestaurants.filter(i=>i.avgRating >4))}}>Top Rated Resturants</button> </div> 
              <div className="res-container">
              {listOfRestaurants.map((i)=>{
                  return <ResCardComponent
                   key={i.id}
                   resData={i}/>
              })}
               
              </div>
      </div>
  
  )
}

export default Body