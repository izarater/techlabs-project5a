import React from 'react';
import Select from 'react-select';
import { typeOfFood } from '../docs/data';


class Dropdown extends React.Component {
  state = {
    selectedOption: null,
  };
  handleChange = (selectedOption) => {
    this.setState({ selectedOption }, () =>
      console.log(`Option selected:`, this.state.selectedOption)
    );
  };
  render() {
    const { selectedOption } = this.state;

    return (
      <Select
        value={selectedOption}
        onChange={this.handleChange}
        placeholder={'Type of food'}
        options={typeOfFood}
      />
    );
  }
}

export default Dropdown;