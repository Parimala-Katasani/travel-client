import React from "react";
import logo1 from "../assets/logo1.png";
import './Footer.css'
function Footer() {
  const quickLinks = [
    "About Us",
    "Destination",
    "Service",
    "Tour",
    "Profile",
  ];
  const supportLinks = [
    "Customer Support",
    "Privacy Policy",
    "Terms & Condition",
    "Forum",
    "Tour Guide",
  ];
  return (
    <div>
      <div className="upper-footer">
        <div className="col">
          <div className="brand">
            <div className="logo">
              <img src={logo1} alt="logo1" />
            </div>
            <h4>
              <b style={{color:"green",fontSize:"24px"}}>Go See!</b><br></br>
              You can dream, create, design, and build a wonderful vacation.
            </h4>
          </div>
          <ul>
            <li>
              <span> +91 9943823742 </span>
            </li>
            <li>
              <span>parimala.katasani@gmail.com</span>
            </li>
            <li>
              <span>www.youtube.com</span>
            </li>
          </ul>
        </div>
        <div className="col">
          <h2>Quick Links</h2>
          <ul>
            {quickLinks.map((link) => (
              <li key={link}>{link}</li>
            ))}
          </ul>
        </div>
        <div className="col">
          <h2>Support</h2>
          <ul>
            {supportLinks.map((link) => (
              <li key={link}>{link}</li>
            ))}
          </ul>
        </div>
        <div className="col">
          <h2>Newsletter</h2>
          <div className="newsletter">
            <input type="text" placeholder="Your Email" />
            <a href="#" class="button">Subscribe Now</a>
            
          </div>
        </div>
      </div>
      <div className="lower-footer">
        <span>
          Copyright &copy; GoSee!. Designed by <a href="#">Parimala Katasani</a>
        </span>
      </div>
    </div>
  );
}
export default Footer