import './foodItem.css';
import Button from '../button/button';

function FoodItem(props) {
  return (
    <div className="itemContainer">
      <img src={props.imageSrc} alt={props.imageAlt} />
      <div className="itemInfo">
        <h2>{props.itemName}</h2>
        <p id="itemDescription">
          Quantity: {props.quantity}
          <br />
          Description: {props.foodDescription}
        </p>
        <Button variant="primary" size="m">
          Reserve
        </Button>
      </div>
    </div>
  );
}

export default FoodItem;
