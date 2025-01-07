import React from "react";
// import { Link } from "react-router-dom";
import './Header1.css';
import search from "../../assets/images/header/Search.png";
import basket from "../../assets/images/header/Basket.png";
import account from "../../assets/images/header/Account.png";
import { Link } from "react-router-dom";

const Header1: React.FC = () => {
  return (
    <header >
      <div className="header-top-container">
        <div className="header-content">
          <img className="header-icon" src={search} alt="Search Icon" />
         <Link to="/" className="avion">Avion</Link> 
          <div className="header-icon-container">
          <img className="header-icon" src={basket} alt="basket Icon"  />
          <img className="header-icon" src={account} alt="account Icon" />
          </div>
         
        </div>
      </div>
    </header>
  );
};

export default Header1;


