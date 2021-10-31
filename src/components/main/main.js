import './main.css';
import { Link } from 'react-router-dom';
import Button from '../button/button';

function Main() {
  return (
    <main className="main">
      <h1 className="title">Let's save food</h1>
      <p className="description">
        Do you feel in need for a hand? Maybe getting food for free or at lower
        price than usual? Start to use SaveFood right now and find the best
        options!
      </p>
      <div className="main-button">
        <Link to="/discovery">
          <Button variant="quaternary">Look for food!</Button>
        </Link>
      </div>
    </main>
  );
}

export default Main;
