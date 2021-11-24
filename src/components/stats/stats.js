import './stats.css';
import Button from '../button/button';
import { Link } from 'react-router-dom';

function Stats() {
  return (
    <div className="stats">
      <div className="statsElement">
        <h1 className="title">Our stats</h1>
        <p id="statsText">
          In 2019 there were about 931 MILLION TONS of food wasted in the whole
          world. 61% of this waste comes from our homes, 26% from restaurants,
          while the remainging 13% comes from supermarkets and others. This two
          last percentages combined represent 363 million tons of food, enough
          to round the planet Earth almost three times by lining up trucks fully
          loaded with all kinds of meals.
        </p>
          <Link to="/signup">
            <Button variant="primary">Sign Up</Button>
          </Link>
      </div>
      <img
        id="graph_1"
        src="https://i.ibb.co/m650YQG/graph-1-desktop.png"
        alt="a graphic about food"
        className="graph"
      ></img>
    </div>
  );
}

export default Stats;
