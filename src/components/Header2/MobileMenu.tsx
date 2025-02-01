
import { FormattedMessage } from "react-intl";
import "../Header/Header1.css"



import { Link } from "react-router-dom";

const MobileMenu = () => {

  return (
   
       <div className="menu" >
     
   
       <nav>
       <Link to="/"><FormattedMessage id="anasehife"/></Link>
         <Link to="/about"><FormattedMessage id="about"/></Link>
         <Link to="/product"><FormattedMessage id="product"/></Link>
         <Link to="/contact"><FormattedMessage id="contact"/></Link>
         <Link to="/blog"><FormattedMessage id="Blog"/></Link>
       </nav>
     </div>


  )
}

export default MobileMenu