import React, { useEffect, useState,useContext} from 'react'
import { LOGO_URl } from '../utils/constants'
import {Link} from 'react-router-dom'
import UseOnlineStatus from '../utils/UseOnlineStatus'
import UserContext from '../utils/UserContext'
import { useSelector } from 'react-redux'

const Header = () =>{
    const [buttonName,setButtonname] = useState('Login')
    const onlineStatus = UseOnlineStatus()
    const data = useContext(UserContext)

    //We are subscribing to store using useSelector
    const cartItems = useSelector((store) =>store.cart.items)
    // console.log("cart",cartItems)
    // function func(){
    //     console.log("hiii clicked")
    // }
    return (
        <div className="flex justify-between bg-gray-50 px-5 items-center shadow-lg">
            <div className="p-2">
                <img className = 'w-20 rounded-full shadow-lg' src = {LOGO_URl}/>
            </div>
            <div className="flex">
                <ul className = 'flex p-4 m-4 '>
                    <li className='px-4  m-2 '>Online status : {onlineStatus ? '🟢' : '🔴'}</li>
                    <li className='px-5 py-1 m-2 bg-green-100 rounded-lg shadow-md'><Link to='/'>Home</Link></li>
                    <li className='px-5 py-1 m-2 bg-green-100 rounded-lg shadow-md'><Link to='/about'>About Us</Link></li>
                    <li className='px-5 py-1 m-2 bg-green-100 rounded-lg shadow-md'><Link to='/contact' >Contact us</Link></li>
                    <li className='px-5 py-1 m-2 bg-green-100 rounded-lg shadow-md'><Link to='/grocery' >Grocery</Link></li>
                    <li className='px-5 py-1 m-2 bg-green-100 rounded-lg shadow-md'><Link to='/cart'>Cart ({cartItems.length} items)</Link></li>
                    <li className='px-5 py-1 m-2 bg-green-100 rounded-lg shadow-md'>🧑‍💻 {data.loggedInUser} </li>
                    {/* <button onClick={()=>func()}>Hello</button> */}
                    <button className='login-btn' onClick={()=>buttonName == 'Login' ? setButtonname('LogOut') : setButtonname('Login')}>{buttonName}</button>
    
                </ul>
            </div>
        </div>
    )
    
    }

export default Header