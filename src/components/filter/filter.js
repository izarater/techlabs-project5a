import './filter.css';
import Dropdown from '../dropdown/dropdown';
import { typeOfFood } from '../dropdown/data';
import { dietaryRestrictions } from '../dropdown/data';


function Filter() {
  return (
    <filter className="filter">
        <div className="filter-column1">
            <Dropdown text={'Categories'} data={typeOfFood} />
        </div>
        <div className="filter-column2">
            <Dropdown text={'Dietary Restrictions'} data={dietaryRestrictions}/>
        </div>
      
    </filter>
  );
}

export default Filter;
