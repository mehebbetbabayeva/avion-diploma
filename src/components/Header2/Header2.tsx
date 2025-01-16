
import { Link } from "react-router-dom";
import './Header2.css';
import { FormattedMessage } from "react-intl";


const Header2: React.FC = () => {
  

  return (
    <>
 
  
          <div className="header-comp " >
            <nav className="nav-links d-md-flex header2-links">
            <Link to="/"><FormattedMessage id="anasehife"/></Link>
              <Link to="/about"><FormattedMessage id="about"/></Link>
              <Link to="/products"><FormattedMessage id="product"/></Link>
              <Link to="/contact"><FormattedMessage id="contact"/></Link>
            </nav>
          
          </div>
    
    </>
  );
};

export default Header2;
