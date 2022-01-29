import './filter.css';
import Dropdown from '../dropdown/dropdown';
//import { dataFood } from '../../utils/dataFood';
import { useSelector } from 'react-redux';

function Filter() {
  const tagFood = useSelector(state => state.products.listTypes)
  const uniqTags = ['All', ...new Set(tagFood)];
  const tagMap = uniqTags.map((tag) => ({
    value: tag,
    label: tag,
  }));

  return (
    <div className="filter">
      <div className="filter-column1">
        <Dropdown text={'Categories'} data={tagMap} />
      </div>
    </div>
  );
}

export default Filter;
