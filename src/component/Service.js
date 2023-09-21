import React from "react";
import service1 from "../assets/service1.png";
import service2 from "../assets/service2.png";
import service3 from "../assets/service3.png";
import service4 from "../assets/service4.png";
import "./Services.css";
export default function Service() {
  const data = [
    {
      image: service1,
      title: "Choose Destination",
      description:
        "Lorem ipsum Lorem ipsum Lorem Ipsum is simply dummy text of img ",
    },
    {
      image: service2,
      title: "Choose Destination",
      description: "Lorem ipsum Lorem Ipsum is simply dummy text of tyer",
    },
    {
      image: service3,
      title: "Start Your Journey",
      description: "Lorem Ipsum is simply dummy text of the printing setting",
    },
    {
      image: service4,
      title: "Let's Enjoy",
      description: "Lorem Ipsum is simply dummy text of the printing setting",
    },
  ];
  return (
    <div id="services">
      <div className="services">
        {data.map(({ image, title, description }) => {
          return (
            <div className="service" key={title}>
              <img src={image} alt="service" />
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}