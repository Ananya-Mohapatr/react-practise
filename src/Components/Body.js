import React from 'react'
import ResCardComponent from '../Modal/ResCardComponent'
import resObj from '../restaurantData'

const Body = () =>{
  return(
      <div className="body">
          <div className="search">search </div>
              <div className="res-container">
              {resObj.map((i)=>{
                  return <ResCardComponent
                   key={i.id}
                   resData={i}/>
              })}
               
              </div>
      </div>
  
  )
}

export default Body