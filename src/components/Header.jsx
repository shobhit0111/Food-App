import { LOGO_URL } from "../Utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const[btnName, setbtnName] = useState("Login");

    return (
      <div className="header">
        <div className="logo-container">
          <img className="logo" src={LOGO_URL} alt="logo" />
        </div>
        <div className="nav-item">
          <ul>
            <li>
              <Link to ="/">Home</Link>
            </li>
            <li>
              <Link to ="/about">About Us</Link>
            </li>
            <li>
              <Link to ="/contact">Contact Us</Link>
            </li>
            <li>Cart</li>
            <button
              className="Login"
              onClick={() =>{
                btnName === "Login"
                ? setbtnName("Logout")
                : setbtnName("Login");
              }}
            >
              {btnName}
            </button>
          </ul>
        </div>
      </div>
    );
};
export default Header;