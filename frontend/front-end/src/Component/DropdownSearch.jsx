import React from 'react';


// Example data for dropdown options


// Custom styles for react-select dropdown


// DropdownSearch component
const DropdownSearch = () => {
  return (
    <div className="flex flex-row gap-x-9 ml-96 -mb-7 pl-56">
          <input
            type="text"
            id="Manage Courses"
            value={"Manage Courses"}
            className="border border-gray-300 w-36 text-center rounded-md "
          />
          <select
            id="Select School"
            class="bg-white border border-gray-300 text-gray-400 text-sm rounded-md focus:ring-blue-500
 focus:border-blue-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Select School</option>
            <option value="APS School">APS School</option>
            <option value="FG School">FG School</option>
            <option value="Allied School">Allied School</option>
            <option value="Pace school">Pace school</option>
          </select>
          <select
            id="Learner's Paths"
            disabled={true}
            class="bg-gray-50 border-gray-300 text-gray-400 text-sm rounded-md focus:ring-blue-500
 focus:border-blue-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600
  dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Learners's Paths</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
  );
};

export default DropdownSearch;

