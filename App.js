import React from "react";
import ReactDOM from "react-dom/client"
const heading1 = React.createElement("div", {id:"parent"},
React.createElement("div", {id:"child"} ,
[React.createElement("h1", {} ,"Hello from lalu1"),React.createElement("h2", {} ,"Hello from Anku")]
))
const root1 = ReactDOM.createRoot(document.getElementById("root"));
root1.render(heading1);