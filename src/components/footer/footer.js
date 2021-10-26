import { Divide } from 'hamburger-react';
import './footer.css';
import facebook from '../../assets/facebook.png'
import instagram from '../../assets/instagram.png'
import twitter from '../../assets/twitter.png'

function Footer() {
    return (
        <footer className="footer">
            <div class="ft-box1">
                <h2>SaveFood</h2>
                <p class="footer">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum, metus id fermentum ultrices, quam urna luctus felis, quis malesuada lorem ex ut metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum, metus id fermentum ultrices, quam urna luctus felis, quis malesuada lorem ex ut metus.</p>
                <a href="http://facebook.com"><img src={facebook} alt='facebook logo' /></a>
                <a href="https://instagram.com"><img src={instagram} alt='instagram logo' /></a>
                <a href="https://twitter.com"><img src={twitter} alt='twitter logo' /></a>
                
            </div>

            <div class="ft-box2">
                <h3>Sitemap</h3>
                <ul>
                    <li><a href="/index" alt="home">Home</a></li>
                    <li>About us</li>
                    <li>Register your restaurant</li>
                </ul>
            </div>
            
            <div class="ft-box2">
            <h3>More information</h3>
                <ul>
                    <li>Look all cities</li>
                    <li>Read more in our FAQ</li>
                    <li>How you can help me us</li>
                </ul>
            </div>
        </footer>
    );
  }

export default Footer;
