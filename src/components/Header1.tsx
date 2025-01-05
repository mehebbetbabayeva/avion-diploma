import React from "react";
// import { Link } from "react-router-dom";
import './Header1.css';
import search from "../assets/images/header/Search.png";
import basket from "../assets/images/header/Basket.png";
import account from "../assets/images/header/Account.png";

const Header1: React.FC = () => {
  return (
    <header className="header py-3">
      <div className="container">
        <div className="header-content">
          <img className="search-icon" src={search} alt="Search Icon" />
          <h1 className="avion">Avion</h1>
          <img className="basket-icon" src={basket} alt="basket Icon" />
          <img className="account-icon" src={account} alt="account Icon" />

          
          {/* <nav className="nav-links-left d-none d-lg-flex">
            <Link to="/start">Start</Link>
            <Link to="/sell">Sell</Link>
            <Link to="/market">Market</Link>
            <Link to="/manage">Manage</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/learn">Learn</Link>
          </nav> */}

         
          
        </div>
      </div>
    </header>
  );
};

export default Header1;


