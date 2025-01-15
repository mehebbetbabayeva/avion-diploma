
import { Link } from "react-router-dom";
import './Header2.css';
import { FormattedMessage } from "react-intl";


const Header2: React.FC = () => {
  

  return (
    <>
 
  
          <div className="header-comp" >
            <nav className="nav-links d-md-flex header2-links">
              <Link to="#"><FormattedMessage id="about"/></Link>
              <Link to="#">Products</Link>
              <Link to="#">Shopping</Link>
              <Link to="#">Blog</Link>
              <Link to="#">Pricing</Link>
              <Link to="#">Learn</Link>
            </nav>
          
          </div>
    
    </>
  );
};

export default Header2;
