import React ,{Component} from 'react'

export default class UserClass extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            count:0
        }
        console.log("childConstructor",this.props.name)
    }
  
    componentDidMount(){
        console.log("childComponentDidMount",this.props.name)
    }
    render(){
        console.log("childRender",this.props.name)
        var {name,location} = this.props
        return(
            <div className='user-card'>
            <h1>Count : {this.state.count}</h1>
            <button onClick={()=>{
                this.setState({
                    count:this.state.count+1
                })
            }}>Count</button>
            <h1>Name : {name}</h1>
            <h3>Location :{location} </h3>
            <h3>Hubby : Ankit</h3>
        </div>
        )
    }
}