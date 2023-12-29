import React from 'react';

const Dropdown = () => {
  return (
    <div>
      <form className="relative">
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          {/* Some icon or content here */}
        </span>
        <div>
          <input
            type="search"
            name="q"
            className="py-2 text-sm text-white bg-gray-900 rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900"
            placeholder="Search..."
            autoComplete="off"
          />
        </div>
      </form>
    </div>
  );
};

export default Dropdown;
