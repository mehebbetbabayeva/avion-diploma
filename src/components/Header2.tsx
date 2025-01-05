import React from "react";
import { Link } from "react-router-dom";
import './Header2.css';

const Header2: React.FC = () => {
    return (
      <header className="header py-3">
        <div className="container">
          <div className="header-comp">
            
            <nav className="nav-links d-none d-lg-flex">
              <Link to="">About</Link>
              <Link to="">Products</Link>
              <Link to="">Shopping</Link>
              <Link to="">Blog</Link>
              <Link to="">Pricing</Link>
              <Link to="">Learn</Link>
            </nav>
  
           
            
          </div>
        </div>
      </header>
    );
  };
  
  export default Header2;