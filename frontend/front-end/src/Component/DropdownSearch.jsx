import React  from 'react';
import Select from 'react-select';



const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

class DropdownSearch extends React.Component {
  state = {
    selectedOption: null,
  };
  handleChange = (selectedDropdownSearch) => {
    this.setState({ selectedDropdownSearch }, () =>
      console.log(`Option selected:`, this.state.selectedDropdownSearch)
    );
  };
  render() {
    const { selectedDropdownSearch } = this.state;

    return (
      <Select width="175px"
      className="DropdownSearch-name"
      classNamePrefix="react-select"
      isSearchable={true}
      menuPlacement="auto"
     
      isClearable
      isMulti
      isDisabled={DropdownSearch.length === 1 ? true : false}
      inputMode="text"
      menuPosition="absolute"
      placeholder="Learners Current School"
     
      backspaceRemovesValue={true}
      clearValue={() => []}
      noOptionsMessage={() => "No results"}
      menuPortalTarget={null}
        value={selectedDropdownSearch}
        onChange={this.DropdownSearch}
        options={options}
      />
    );
  }
}

export default DropdownSearch;
