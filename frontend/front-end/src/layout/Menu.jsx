import React from 'react';


const Menu = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        
        <div className="text-white font-bold text-xl">Learning Tech</div>

    
        <ul className="flex space-x-4">
          <li>
            <a href="/" className="text-white hover:text-gray-300">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="text-white hover:text-gray-300">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300">
              Courses
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300">
              Trainers
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300">
              Events
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300">
              Pricing
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300">
              Contacts
            </a>
          </li>

        </ul>
      </div>
    </nav>
  );
};

export default Menu;