import React, {useRef} from "react";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import './Header2.css';

const Header2: React.FC = () => {

  const mobileMenyuDivi = useRef<HTMLDivElement>(null)
    


    const navbariAc = () => {
        //default olaraq true
        if(mobileMenyuDivi.current) {
            mobileMenyuDivi.current.classList.add("aktiv")
        }
    }


    const navbariBagla = () => {
        //default olaraq true
        if(mobileMenyuDivi.current) {
            mobileMenyuDivi.current.classList.remove("aktiv")
        }
    }

    return (
    <>
      {/* Mobile Menu Start */}
    <div className="menu " ref={mobileMenyuDivi}>

    <IoMdClose onClick={navbariBagla} className="fa-regular fa-rectangle-xmark" />

    <nav>
        <a href="">Sounds</a>
        <a href="">Skills</a>
        <a href="">Plugins</a>
        <a href="">Studio</a>
        <a href="">Community</a>
        <a href="">Blog</a>
        <a href="">Pricing</a>
    </nav>
    <div className="menu-buttonlar">

        <button className="first-menu-button">Login</button>
        <button className="second-menu-button">Sign up</button>
    </div>

</div>
 {/* Mobile Menu End */}

      <header className="header py-3">
        <div className="container">
          <div className="header-comp">
            
            <nav className="nav-links  d-md-flex header2-links">
              <Link to="">About</Link>
              <Link to="">Products</Link>
              <Link to="">Shopping</Link>
              <Link to="">Blog</Link>
              <Link to="">Pricing</Link>
              <Link to="">Learn</Link>
            </nav>
  
      <HiMiniBars3BottomRight onClick={navbariAc} className='fa-solid fa-bars-staggered' />
            
          </div>
        </div>
      </header>
      </>
    );
  };
  
  export default Header2;