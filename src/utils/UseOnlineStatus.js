import { useEffect, useState } from "react";

export default  useOnlineStatus = () =>{
    //check if online  using event listener
    const [onlineStatus,setOnlineStatus] = useState(true)
    useEffect (()=>{
      window.addEventListener("offline",()=>{
         setOnlineStatus(false)
      })
      window.addEventListener("online",()=>{
        setOnlineStatus(true)
      })
    },[])

    return onlineStatus;  // this is a custom hook to get online status in boolean value.
}