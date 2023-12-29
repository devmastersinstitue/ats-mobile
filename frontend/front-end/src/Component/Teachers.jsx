import React, { useState } from "react";
import Select from "react-select";

function Teachers() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelectChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  const optionsValues = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  return (
    <div>
      <fieldset>
        <legend className="block font-medium">GradAudit Status</legend>
        <div className="pt-6 space-y-6 sm:pt-4 sm:space-y-4">
          <Select
            width="175px"
            className="react-select"
            classNamePrefix="react-select"
            menuPlacement="auto"
            isSearchable={true}
            value={selectedOption}
            isClearable
            inputMode="text"
            menuPosition="absolute"
            placeholder="GradAudit Status"
            options={optionsValues}
            backspaceRemovesValue={true}
            clearValue={() => null} // Use null instead of an empty string
            noOptionsMessage={() => "No results"}
            onChange={handleSelectChange}
          />
        </div>
      </fieldset>
    </div>
  );
}

export default Teachers;
