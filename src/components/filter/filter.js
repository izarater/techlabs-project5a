import './filter.css';
import Dropdown from '../dropdown/dropdown';
import { dataFood } from '../../utils/dataFood';

function Filter() {
  const tagFood = dataFood.map((food) => food.tags).flat();
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
