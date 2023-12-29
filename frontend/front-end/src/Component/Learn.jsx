import React, { useState } from 'react';
import Select from 'react-select';

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

const Learn = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  return (
    <div>
      <h1>Customized React Select Dropdown</h1>
      <Select
        value={selectedOption}
        // onChange={handleChange}
        // options={options}
        placeholder="Select an option"
        isSearchable={true}
        isClearable={true}
        
      />
      <div>
        Selected Option: {selectedOption ? selectedOption.label : 'None'}
      </div>
    </div>
  );
};

export default  Learn;
