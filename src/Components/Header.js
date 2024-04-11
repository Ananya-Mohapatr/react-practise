import React, { useEffect, useState } from 'react'
import { LOGO_URl } from '../utils/constants'
import {Link} from 'react-router-dom'

const Header = () =>{
    const [buttonName,setButtonname] = useState('Login')
    return (
        <div className="header">
            <div className="logo-container">
                <img className = 'logo' src = {LOGO_URl}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About Us</Link></li>
                    <li><Link to='/contact' >Contact us</Link></li>
                    <li>Cart</li>
                    <button className='login-btn' onClick={()=>buttonName == 'Login' ? setButtonname('LogOut') : setButtonname('Login')}>{buttonName}</button>
    
                </ul>
            </div>
        </div>
    )
    
    }

export default Header