import React, { useContext, useEffect, useState } from 'react'
import ResCardComponent,{withpromotedLabel} from '../Modal/ResCardComponent'
import { resObj } from '../utils/RestaurantList'
import Shimmer from './Shimmer'
import { Link } from 'react-router-dom'
import UseOnlineStatus from '../utils/UseOnlineStatus'
import UserContext from '../utils/UserContext'


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
  const {loggedInUser,setUsername} = useContext(UserContext)
  const RestaurantCardpromoted = withpromotedLabel(ResCardComponent)    //We are calling the
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
  const isOnline = UseOnlineStatus()
   
  if(!isOnline)
  return(<h1>Seems like you are offline</h1>);
    return (
      <div className="body">
          <div className="filter flex justify-between">
            <div className='search m-4 p-4'>
              <input type='text' className="ml-10 border border-solid border-black rounded-lg shadow-md" value={searchText} onChange={(e)=>setSearchText(e.target.value)}></input>
              <button className=' px-5 ml-4 py-1 bg-green-100 rounded-lg shadow-md' onClick={search} >Search</button>

            </div>
            <div className='search m-4 p-4 flex items-center'>
            <button className='px-5 py-1 mr-10 rounded-lg shadow-md bg-gray-50'
             onClick={()=>setFilteredRest(filteredRest.filter(i=>i.avgRating > 4))}>Top Rated Resturants</button>
             </div> 
             <div className=' m-4 p-4 flex items-center'><label>Username</label><input type='text' className="ml-10 border border-solid border-black rounded-lg shadow-md" onChange={(e)=>setUsername(e.target.value)} ></input></div>
             </div>
             {listOfRestaurants.length == 0 ? (<Shimmer/>):
              (<div className="flex flex-wrap justify-center">
              {filteredRest.map((i)=>{
                  return <Link to = {'/restaurant/'+i.id}>
                    {i.avgRating >4.3 ? <RestaurantCardpromoted key={i.id}
                   resData={i}/> : 
                    <ResCardComponent
                   key={i.id}
                   resData={i}/>}</Link>
              })}
               
              </div>)}
      </div>
  
  )
}

export default Body