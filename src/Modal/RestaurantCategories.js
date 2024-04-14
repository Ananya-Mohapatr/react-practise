import { useState } from "react"
import { ItemList } from "./ItemList"
const RestantCategories = (props) =>{
    const {data,showItems,setShowIndex} = props
    // const [showItems,setShowItems] = useState(false)
    // const openAccordion = () =>{
    //   setShowItems(!showItems)
    // }
  return (
    <div>
        <div className="w-6/12 m-auto bg-grey-50 shadow-lg p-4 ">
            
            <div className="flex justify-between cursor-pointer " onClick={setShowIndex}>
            <span className="font-bold text-md">{data.title} ({data.itemCards.length})</span>
            <span >⬇️</span>
            </div>
            <div>
            {showItems && <ItemList items = {data.itemCards}/>}
            </div>

        </div>
    </div>
  )
}

export default RestantCategories