import './foodList.css';
import FoodItem from '../foodItem/foodItem';
import { useContext } from 'react';
import { DiscoveryContext } from '../../context/filter.context';
import { dataFood } from '../../utils/dataFood';

function FoodList() {
  const { filter } = useContext(DiscoveryContext);
  let filteredFood;
  if (filter.value === 'All') {
    filteredFood = dataFood;
  } else {
    filteredFood = dataFood.filter((el) => el.tags.includes(filter.value));
  }
  return (
    <div className="foodListContainer">
      {filteredFood.map((food) => {
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
