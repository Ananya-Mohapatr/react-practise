import React ,{Component} from 'react'

export default class UserClass extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            userInfo: {
                name: "Dummy",
                location: "Default",
                avatar_url: "Default"
            }
        }
        // console.log("childConstructor",this.props.name)
    }
  
    async componentDidMount(){
        console.log("childComponentDidMount",this.props.name)
        let data = await fetch("https://api.github.com/users/Ananya-Mohapatr")
      let res = await data.json();
      console.log("--res--",res)
      this.setState({
        userInfo: res
      })
    }

    componentDidUpdate(){
        console.log("Component did update")
    }

    componentWillUnmount(){
        console.log("-----COMPONENT WILL UNMOUNT------")
    }
    render(){
        console.log("childRender")
        const {name, location, avatar_url} = this.state.userInfo
        return(
            <div className='user-card'>
            {/* <h1>Count : {this.state.count}</h1>
            <button onClick={()=>{
                this.setState({
                    count:this.state.count+1
                })
            }}>Count</button> */}
            <h1>Name : {name}</h1>
            <h3>Location :{location} </h3>
            <img src={avatar_url}></img>
            <h3>Hubby : Ankit</h3>
        </div>
        )
    }
}