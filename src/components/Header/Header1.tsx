import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Header1.css';
import search from "../../assets/images/header/Search.png";
import basket from "../../assets/images/header/Basket.png";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import MobileMenu from '../Header2/MobileMenu';
import { IoMdClose } from "react-icons/io";

interface Header1Props {
  changeLanguage: (lang: string) => void;
}

const Header1: React.FC<Header1Props> = ({ changeLanguage }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('AZ');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleOpenMenu = () => setOpenMenu(!openMenu);
  const handleCloseMenu = () => setOpenMenu(!openMenu);

  const handleLanguageChange = (lang: string) => {
    setSelectedLanguage(lang.toUpperCase());
    changeLanguage(lang.toLowerCase());
    setDropdownOpen(false); // Dil seçildikten sonra dropdown menüyü kapat
  };

  return (
    <header>
      <div className="header-top-container">
        <div className="header-content">
          <div style={{ display: "flex", gap: "10px" }}>
            <div className='mobile-open-icon'>
              {!openMenu ? (
                <HiMiniBars3BottomRight onClick={handleOpenMenu} style={{ color: "#726E8D" }} />
              ) : (
                <IoMdClose onClick={handleCloseMenu} style={{ color: "#726E8D" }} />
              )}
            </div>
            <img className="header-icon" src={search} alt="Search Icon" />
          </div>
          <Link to="/" className="avion">Avion</Link>
          <div className="header-icon-container">
            <img className="header-icon" src={basket} alt="Basket Icon" />
            <div className="language-selector">
              <button
                className="language-selected"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                {selectedLanguage}
              </button>
              {dropdownOpen && (
                <div className="language-dropdown">
                  {selectedLanguage !== 'AZ' && (
                    <button onClick={() => handleLanguageChange('az')}>AZ</button>
                  )}
                  {selectedLanguage !== 'EN' && (
                    <button onClick={() => handleLanguageChange('en')}>EN</button>
                  )}
                  {selectedLanguage !== 'RU' && (
                    <button onClick={() => handleLanguageChange('ru')}>RU</button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {openMenu && <MobileMenu />}
    </header>
  );
};

export default Header1;
