import React from 'react'
import {useRouteError} from 'react-router-dom'
export default Errors = () =>{
    const error = useRouteError()
    console.log("error",error)
    return (
        <div>
            <h1>Oops!</h1>
            <h3>{error.error.message}</h3>
        </div>
    )
}