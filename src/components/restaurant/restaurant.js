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
          It’s a huge problem, and it affects all of us. Respect 
          Food is our way of highlighting the importance of not 
          wasting food. From the severe effects it has on the 
          environment, to how it can deepen the hole in our pockets, 
          food waste is everyone’s problem. Stop wasting, start 
          saving food.
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
