import React from "react";
import taj from "../assets/taj.jpeg"
import charminar from "../assets/charminar.jpg";
import jaipur from "../assets/jaipur.jpeg";
import hampi from "../assets/hampi.jpg";
import varanasi from "../assets/varanasi.jpeg"
import manali from "../assets/manali.jpeg"
import munnar from "../assets/munnar.jpeg"
import belgum from "../assets/belgum.jpeg"
import darjling from "../assets/darjling.jpeg"
import './Destinations.css';
export default function Destinations() {
  const data = [
    {
      name: "Jaipur palace",
      image: jaipur,
    },
    {
      name: "Hampi",
      image: hampi,
    },
    {
      name: "Varanasi",
      image: varanasi,
    },
    {
      name: "Charminar",
      image: charminar,
    },
    {
      name: "Tajmahal",
      image: taj,
    },
    {
      name: "Manali",
      image: manali,
    },
    {
      name: "Munnar",
      image: munnar,
    },
    {
      name: "Belgum Caves",
      image: belgum,
    },
    {
      name: "Dargiling",
      image: darjling,
    },
  ];
  return (
    <div id="destination">
      <div className="info-dest">
        <h2>
          Top <span>Destinations</span> In INDIA
        </h2>
        <marquee className="mrq" direction="right" bgcolor="#37a69b"  height="35px">Indian-Tourism  Indian-Tourism  Indian-Tourism  Indian-Tourism</marquee>
        <p>
        Tourism in India has shown a phenomenal growth in the past decade. One of the reasons is that the Ministry of tourism, India has realized the immense potential of tourism in India during vacations. 
        India travel tourism has grown rapidly with a great influx of tourists from all across the globe who have been irresistibly attracted to the rich culture, heritage, and incredible natural beauty of India. 
        India tourism with its foggy hill stations, captivating beaches, historical monuments, golden deserts, serene backwaters, pilgrimage sites, rich wildlife, and colourful fairs capture the heart of every tourist. 
       
        </p>
        {/* <button>Discover More</button> */}
      </div>

      <div className="destinations">
        {data.map(({ name, image }) => {
          return (
            <div className="destination" key={name}>
              <div className="images">
                <img src={image} alt="destinations" />
              </div>
              <div className="names">
                <h3>{name}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
