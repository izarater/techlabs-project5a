import { createContext, useState } from 'react';

import Filter from '../components/filter/filter';
import FoodList from '../components/foodList/foodList';

const initialContext = {
  filter: {
    value: 'All',
    label: 'All',
  },
  setFilter: () => {},
};

export const DiscoveryContext = createContext(initialContext);

function ContextFilter() {
  const [filter, setFilter] = useState(initialContext.filter);
  const value = { filter, setFilter };
  return (
    <DiscoveryContext.Provider value={value}>
      <Filter />
      <FoodList />
    </DiscoveryContext.Provider>
  );
}

export default ContextFilter;
