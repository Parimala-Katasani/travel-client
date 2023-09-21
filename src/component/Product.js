import React from 'react'
import { Link } from 'react-router-dom' 
import { Outlet } from 'react-router-dom'
import robo from "../assets/robo.gif"
import './Product.css'

const Product = () => {
    return (
      <div>
        {/* <center>
        <img src={robo} alt='robo' className='robo'/>
        <button>Lets Chat</button>
        </center> */}
        <iframe src="https://links.collect.chat/650305ae17960a15b2336821"  width="100%" height="600" frameBorder="0"></iframe><script async type="text/javascript" src="https://collectcdn.com/embed.js"></script>
        {/* <input type = 'search' placeholder='Search'/> */}
        {/* <nav>
       <Link to ="new">New </Link>  
       <Link to = "best">Best</Link>   
        </nav> */}
        {/* <Outlet/> */}
      </div>
    )
  }


export default Product