import React from "react";
import './Home.css';
import HeroImage from "../assets/hero.png";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Review from "./Review";
const Home = () => {
  const navigate=useNavigate()
  return(
    <div>
       <div className="background">
                <img src={HeroImage} alt="Hero"/>
            </div>
            <div className="info">
          <h1>It's Time To</h1>
          <h1>Explore The <span style={{color:'#FF715B'}}> INDIA !</span></h1>
         <button onClick={()=>navigate("/signup",{replace:true})}>Plan Your Trip</button>
      </div>
      <br></br>
      <Review/><br></br>
      <Footer/>
    </div>
  )
}
export default Home