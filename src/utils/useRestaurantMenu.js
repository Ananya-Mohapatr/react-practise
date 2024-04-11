import { useEffect,useState } from "react";


 const useRestaurantMenu = (resId) =>{
   const [resInfo,setResInfo] = useState(null) 
    useEffect(()=>{
      fetchData()
    },[])
      
    const fetchData= async()=>{
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.909674&lng=77.6393447&restaurantId=${resId}&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER`) 
        const res = await data.json()
        setResInfo(res)
       
        console.log("data",res)
    }
    return resInfo;

   

};
export default useRestaurantMenu