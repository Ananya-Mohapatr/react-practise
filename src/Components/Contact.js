import React from 'react'
export default Contact = () =>{
    return(
        <div>
        <h1 className = 'font-bold text-3xl m-4 p-4'>Contact Us Pgae </h1>
        <form>
            <input type='text' className='border border-black p-2 m-2' placeholder='name'/>
            <input type='text' className='border border-black p-2 m-2' placeholder='message'/>
            <button  className='boder border-black p-2 m-2 bg-gray-100 rounded-lg'>Submit</button>
        </form>
        </div>
    )
}
