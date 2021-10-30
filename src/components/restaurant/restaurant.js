import './restaurant.css';
import { Link } from 'react-router-dom';
import Button from '../button/button';

function Restaurant() {
  return (
    <footer className="restaurant">
        <div className="restaurant-column1">
        </div>
        <div className="restaurant-column2">
            <div className="restaurant-text">
                <h2>Subscribe your restaurant or store</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Aenean vulputate interdum nisl in molestie. Phasellus elementum 
                    convallis euismod. Vivamus vulputate nulla nisl. 
                    Sed fringilla neque at ultrices luctus. 
                </p>
            </div>
            <div className="restaurant-button">
                <Link to="/restaurant">
                    <Button variant="primary">Register</Button>
                </Link>  
            </div>
        </div>
      
    </footer>
  );
}

export default Restaurant;
