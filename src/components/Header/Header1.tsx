
// import { Link } from "react-router-dom";
import './Header1.css';
import search from "../../assets/images/header/Search.png";
import basket from "../../assets/images/header/Basket.png";
import account from "../../assets/images/header/Account.png";
import { Link } from "react-router-dom";
import React, {  useState } from "react";

import { HiMiniBars3BottomRight } from "react-icons/hi2";
import MobileMenu from '../Header2/MobileMenu';
import { IoMdClose } from "react-icons/io";
const Header1: React.FC = () => {
  const [openMenu,setOpenMenu]= useState(false)
  const handleOpenMenu = ()=>{
    setOpenMenu(!openMenu)
  }
  const handleCloseMenu = ()=>{
    setOpenMenu(!openMenu)
  }
  return (
    <header >
      <div className="header-top-container">
        <div className="header-content">
          <div style={{display:"flex",gap:"10px"}}>
          <div className='mobile-open-icon'>
            {
              !openMenu ? (            <HiMiniBars3BottomRight onClick={handleOpenMenu} className="fa-solid fa-bars-staggered" style={{color:"#726E8D"}} /> ):
              (  <IoMdClose onClick={handleCloseMenu} className="fa-regular fa-rectangle-xmark" style={{color:"#726E8D"}} />)
            }

          
          </div> 
          <img className="header-icon" src={search} alt="Search Icon" />
        
          </div>
        
         <Link to="/" className="avion">Avion</Link> 
          <div className="header-icon-container">
          <img className="header-icon" src={basket} alt="basket Icon"  />
          <img className="header-icon" src={account} alt="account Icon" />
          </div>
         
        </div>
      </div>
      {
        openMenu && (
          <MobileMenu/>
        )
      }
  
    </header>
  );
};

export default Header1;


