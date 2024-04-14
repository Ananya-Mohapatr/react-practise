import React,{lazy,Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client"
import Header from './Components/Header'
import Body from "./Components/Body";  //this is default import 
import {createBrowserRouter,RouterProvider,Outlet} from 'react-router-dom'
import Contact from './Components/Contact'
import Errors from './Components/Error'
import RestaurantMenu from "./Components/RestaurantMenu";
import UserContext from "./utils/UserContext";
// import Grocery from "./Components/Grocery";
const Grocery = lazy(() => import ('./Components/Grocery'))
const About = lazy(()=> import ('./Components/About'))
const AppLayout = () =>{
    const [userName,setUsername] = useState('')
   //code splitting / lazy loading/dynamic bundling / chunking

   useEffect (()=>{
      const data = {
        name: 'Anku'
      }
      setUsername(data.name)
   },[])
return (
    <div className="app">
       <UserContext.Provider value = {{loggedInUser : userName,setUsername}}>  
        <Header/>
        <Outlet/>
        </UserContext.Provider> 
    </div>
)
}



const appRouter = createBrowserRouter([
    {
    
        path:'/',
        element : <AppLayout/>,
        children:[
            {
                path : '/',
                element : <Body/>
            },
            {
                path : '/about',
                element : <Suspense
                           fallback = {<h1>Loading ....</h1>}>
                            <About/></Suspense>
            },
            {
                path:'/contact',
                element : <Contact/>
            },
            {
                path:'/restaurant/:resId',
                element : <RestaurantMenu/>
            },
            {
                path:'/grocery',
                //FallBack will show the data when we dont have the response in suspense while the page gets loaded
                element : <Suspense fallback={<h1>Loadin.....</h1>}>  
                    <Grocery/>
                </Suspense>
            }
        ],
        errorElement:<Errors/>
    },
   
])

const root2 = ReactDOM.createRoot(document.getElementById("root"));
root2.render(<RouterProvider router = {appRouter}/>)