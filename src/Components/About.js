import React from 'react'
import UserClass from './UserClass'
import Contact from './Contact'
import UserContext from '../utils/UserContext'
export default class  About extends React.Component {
    constructor(props){
        super(props)
        console.log("parentConstructor")
        

    }
     async componentDidMount(){
      console.log("parentComponent DidMount")
      
    }
    render(){
        console.log("parentComponent render")
    return (
        <div>
            <h1>About US</h1>
            <UserContext.Consumer>
            {(data)=><h1>Logged In User : {data.loggedInUser}</h1>}  
            </UserContext.Consumer>
            <UserClass
            />
           <Contact/></div>
    )
    }
}

//  parentComponent render
// childConstructor Ananya
// childRender Ananya
// child2Construct
// child2 render
//  childComponentDidMount Ananya
//  child2 DidMount
// parentComponent DidMount