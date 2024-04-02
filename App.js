import React from "react";
import ReactDOM from "react-dom/client"
import resObj from "./restaurantData";
import Header from "./src/Components/Header";
import Body from "./src/Components/Body";

const AppLayout = () =>{
return (
    <div className="app">
        <Header/>
        <Body/>
    </div>
)
}
const root2 = ReactDOM.createRoot(document.getElementById("root"));
root2.render(<AppLayout/>)