import './foodList.css';
import FoodItem from '../foodItem/foodItem';
import { useContext } from 'react';
import { DiscoveryContext } from '../../context/filter.context';
//import { dataFood } from '../../utils/dataFood';
import React, { useState } from 'react';

import { useSelector } from 'react-redux';
//import { useDispatch } from 'react-redux';

//import watch from 'redux-watch';


function FoodList() {
  //const dispatch = useDispatch()
  const dataFood = useSelector(state => state.markets.market)
  //console.log(dataFood)

  const { filter } = useContext(DiscoveryContext);
  let filteredFood;
  if (filter.value === 'All') {
    filteredFood = dataFood;
    //console.log(filteredFood)
  } else {
    filteredFood = dataFood.filter((el) => el.tags.includes(filter.value));
    //console.log(filteredFood)
  }
  return (
    <div className="foodListContainer">
      {filteredFood?.map((food) => {
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


/*
const restaurant = await marketService.establishmentData()
  const datafood = restaurant.data
  console.log(datafood)
*/