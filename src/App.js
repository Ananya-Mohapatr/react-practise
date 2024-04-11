import React from "react";
import ReactDOM from "react-dom/client"
import Header from './Components/Header'
import Body from "./Components/Body";  //this is default import 
import {createBrowserRouter,RouterProvider,Outlet} from 'react-router-dom'
import About from "./Components/About";
import Contact from './Components/Contact'
import Errors from './Components/Error'
import RestaurantMenu from "./Components/RestaurantMenu";

const AppLayout = () =>{
return (
    <div className="app">
        <Header/>
        <Outlet/>
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
                element : <About/>
            },
            {
                path:'/contact',
                element : <Contact/>
            },
            {
                path:'/restaurant/:resId',
                element : <RestaurantMenu/>
            }
        ],
        errorElement:<Errors/>
    },
   
])

const root2 = ReactDOM.createRoot(document.getElementById("root"));
root2.render(<RouterProvider router = {appRouter}/>)