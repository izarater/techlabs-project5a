import './restaurant.css';
import { Link } from 'react-router-dom';
import Button from '../button/button';

function Restaurant() {
  return (
    <div className="restaurant">
      <div className="restaurant-column1"></div>
      <div className="restaurant-column2">
        <div className="restaurant-text">
          <h2>Subscribe your restaurant or store</h2>
          <p>
            Energistically productize alternative technologies, interactively
            innovate superior total linkage, rapidiously restore integrated
            products professionally empower inexpensive methods of
            empowermententhusiastically target sticky action items, compellingly
            network user-centric e-services fungibly facilitate adaptive
            adoption.
          </p>
        </div>
        <div className="restaurant-button">
          <Link to="/">
            <Button variant="primary" size="m">
              Start now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Restaurant;
