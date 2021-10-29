import Select from 'react-select';
import React, { useState } from 'react';
  

  const Dropdown = (props) => {

    const [selectedOption, setSelectedOption] = useState(null);
    return (
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        placeholder={props.text}
        options={props.data}
      />
    );
    
  }


export default Dropdown;



