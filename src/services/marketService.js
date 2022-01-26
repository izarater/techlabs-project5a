import React from 'react';
//import axios from 'axios';
import api from '../api/api';

export default {
  productData : async () => {
    try {
      const products = await api.get('/products')
      //console.log(products)
      return products.data
    } catch (error) {
      return { error}
    }
  }
}

/*
console.log(Object.values(restaurants.data))
      return { data: Object.values(restaurants.data)}

*/


/*
export default class MarketService extends React.Component {
  state = {
    restaurants: []
  }

  componentDidMount() {
    api.get('/establishment')
      .then(res => {
        const restaurants = res.data;
        this.setState({ restaurants });
      })
  }

  render() {
    return (
      <ul>
        { this.state.restaurants.map(restaurant => <ul>
                                                    <li>{restaurant.establishment_name} - {restaurant.description}  -  {restaurant.phone}</li>
                                                  </ul> )}
      </ul>//<li>{restaurant.establishment_name, restaurant.description}</li>
    )
  }
}
*/


/*
function App() {
  async function getData(){
    const x = await api.get('api/establishment');
    return x;
  }
}
export default App;
*/
/*
class myComponent extends React.Component {
fetch('http://localhost:4500/api/establishment', {
  crossDomain:true,
  method: 'POST',
  headers: {'Content-Type':'application/json'},
  body: JSON.stringify({
    establishment_name: "EatWell2",
    description: "We connect restaurants or stores which usually throw out",
    phone: 6013246543
  })
})
  .then(response => response.json())
  .then(responseJson => {
    console.log('This is your data', data);
  })
  render() {
    return <h1>my Component has Mounted, Check the browser 'console' </h1>;
  }
}
*/
/*
class myComponent extends React.Component {
  componentDidMount() {
    const apiUrl = 'http://localhost:4500/api/establishment';
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
      }
  }
  render() {
    return <h1>my Component has Mounted, Check the browser 'console' </h1>;
  }
}
//console.log('This is your data', data));
export default myComponent;
*/