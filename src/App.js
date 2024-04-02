import React from "react";
import ReactDOM from "react-dom/client"
import Header from './Components/Header'
import Body from "./Components/Body";  //this is default import 

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