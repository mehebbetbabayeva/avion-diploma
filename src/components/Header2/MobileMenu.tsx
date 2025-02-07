import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import "../Header/Header1.css";

interface MobileMenuProps {
  closeMenu: () => void; 
}

const MobileMenu: React.FC<MobileMenuProps> = ({ closeMenu }) => {
  return (
    <div className="menu">
      <nav>
        <Link to="/" onClick={closeMenu}>
          <FormattedMessage id="anasehife" />
        </Link>
        <Link to="/about" onClick={closeMenu}>
          <FormattedMessage id="about" />
        </Link>
        <Link to="/products" onClick={closeMenu}>
          <FormattedMessage id="product" />
        </Link>
        <Link to="/contact" onClick={closeMenu}>
          <FormattedMessage id="contact" />
        </Link>
        <Link to="/blog" onClick={closeMenu}>
          <FormattedMessage id="Blog" />
        </Link>
      </nav>
    </div>
  );
};

export default MobileMenu;
