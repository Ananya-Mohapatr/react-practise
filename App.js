
{/* <div id = "parent">
    <div id="child">
        <h1>Hello from lalu</h1>
    </div>
</div>
 */}
//In order to create above code inside dom,do below code changes
//React element is the object.When we render the code ,it converts the object to html(browser undersrands )


// const heading = React.createElement("div", {id:"parent"},
// React.createElement("div", {id:"child"} ,
// React.createElement("h1", {} ,"Hello from lalu")))
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

//Example-2

{/* <div id = "parent">
    <div id="child">
        <h1>Hello from lalu</h1>
        <h2>Hello from Anku</h2>
    </div>
</div>
 */}
//In order to create above code inside dom,do below code changes
//We can pass multiple children as an array


const heading1 = React.createElement("div", {id:"parent"},
React.createElement("div", {id:"child"} ,
[React.createElement("h1", {} ,"Hello from lalu"),React.createElement("h2", {} ,"Hello from Anku")]
))
const root1 = ReactDOM.createRoot(document.getElementById("root"));
root1.render(heading1);