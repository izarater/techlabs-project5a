import './footer.css';
import { Link } from 'react-router-dom';
import facebook from '../../assets/facebook.png';
import instagram from '../../assets/instagram.png';
import twitter from '../../assets/twitter.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="ft-box1">
        <h2>SaveFood</h2>
        <p className="footer">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          vestibulum, metus id fermentum ultrices, quam urna luctus felis, quis
          malesuada lorem ex ut metus. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Sed vestibulum, metus id fermentum ultrices, quam
          urna luctus felis, quis malesuada lorem ex ut metus.
        </p>
        <a href="http://facebook.com">
          <img src={facebook} alt="facebook logo" />
        </a>
        <a href="https://instagram.com">
          <img src={instagram} alt="instagram logo" />
        </a>
        <a href="https://twitter.com">
          <img src={twitter} alt="twitter logo" />
        </a>
      </div>

      <div className="ft-box2">
        <h3>Sitemap</h3>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/restaurant">Register your restaurant</Link>
          </li>
        </ul>
      </div>

      <div className="ft-box2">
        <h3>More information</h3>
        <ul>
          <li>
            <Link to="/about">Look all cities</Link>
          </li>
          <li>
            <Link to="/faq">Read more in our FAQ</Link>
          </li>
          <li>
            <Link to="/help-us">How you can help me us</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
