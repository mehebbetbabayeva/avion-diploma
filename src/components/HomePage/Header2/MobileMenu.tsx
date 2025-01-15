
import "../Header/Header1.css"



import { Link } from "react-router-dom";

const MobileMenu = () => {

  return (
   
       <div className="menu" >
     
   
       <nav>
         <Link to="#">About</Link>
         <Link to="#">Products</Link>
         <Link to="#">Shopping</Link>
         <Link to="#">Blog</Link>
         <Link to="#">Pricing</Link>
         <Link to="#">Learn</Link>
       </nav>
     </div>


  )
}

export default MobileMenu