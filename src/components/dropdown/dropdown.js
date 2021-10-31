import Select from 'react-select';
import React, { useContext } from 'react';
import { DiscoveryContext } from '../../context/filter.context';

const Dropdown = (props) => {
  const { filter, setFilter } = useContext(DiscoveryContext);
  const handler = (el) => {
    setFilter(el);
  };

  return (
    <Select
      defaultValue={filter}
      onChange={handler}
      placeholder={props.text}
      options={props.data}
    />
  );
};

export default Dropdown;
