import React, { useEffect, useState } from 'react'
import ResCardComponent from '../Modal/ResCardComponent'
import { resObj } from '../utils/RestaurantList'
import Shimmer from './Shimmer'
import { Link } from 'react-router-dom'

const Body = () =>{
    const [listOfRestaurants,setListOfRestaurants] = useState([]) //array destructuring
    //above line can be written as 
    //--------------------------------------
    // const abc = useState(resObj)
    // const [listOfRestaurants,setListOfRestaurants] = abc
    //or-----
    //const listOfRestaurant = arr[0]
    //const setListOfRestaurant = arr[1]
    //---------------------------------------
  const [searchText,setSearchText] = useState('') 
  const [filteredRest,setFilteredRest] = useState([])
  useEffect(()=>{
    fetchData()
  },[])
  
  const  fetchData =async () =>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.890818230949936&lng=77.6206533958726&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json()
    console.log("json",json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
    let arr = []
     
    // setListOfRestaurants(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
    json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants.map((i)=>{
      arr.push(i.info)

    })
    console.log("info",arr)
    setListOfRestaurants(arr)
    setFilteredRest(arr)


  }
  
  const search = () =>{
    // let filter = listOfRestaurants.filter((i)=>i.name.includes(searchText))
    // console.log("search",filter)
    // setListOfRestaurants(filter)

    setFilteredRest(listOfRestaurants.filter(i=>i.name.toLowerCase().includes(searchText.toLowerCase())))

  }
    return (
      <div className="body">
          <div className="filter">
            <div className='search'>
              <input type='text' className="search-box" value={searchText} onChange={(e)=>setSearchText(e.target.value)}></input>
              <button onClick={search} >Search</button>

            </div>
            <button className='filter-btn'
             onClick={()=>{setListOfRestaurants(filteredRest.filter(i=>i.avgRating >4))}}>Top Rated Resturants</button> </div> 
             {listOfRestaurants.length == 0 ? (<Shimmer/>):
              (<div className="res-container">
              {filteredRest.map((i)=>{
                  return <Link to = {'/restaurant/'+i.id}><ResCardComponent
                   key={i.id}
                   resData={i}/></Link>
              })}
               
              </div>)}
      </div>
  
  )
}

export default Body