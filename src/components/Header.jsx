import { LOGO_URL } from "../Utils/constants";
import { useState } from "react";

const Header = () => {
  const[btnName, setbtnName] = useState("Login");

    return (
      <div className="header">
        <div className="logo-container">
          <img className="logo" src={LOGO_URL} alt="logo" />
        </div>
        <div className="nav-item">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
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