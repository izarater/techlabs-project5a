import './foodList.css';
import FoodItem from '../foodItem/foodItem';
import { useContext } from 'react';
import { DiscoveryContext } from '../../pages/discovery';
import { dataFood } from './dataFood';

function FoodList() {
  const { filter } = useContext(DiscoveryContext);
  const filteredFood = dataFood.filter((el) => el.tags.includes(filter));
  console.log(filteredFood);
  return (
    <div className="foodListContainer">
      {dataFood.map((food) => {
        return (
          <FoodItem
            key={food.id}
            itemName={food.name}
            quantity={food.quantity}
            foodDescription={food.description}
            imageSrc={food.src}
            imageAlt={food.alt}
          />
        );
      })}
    </div>
  );
}

export default FoodList;
