import React, { useState } from "react";
import Dropdown from "../Component/Dropdown";
import LayoutThree from "./LayoutThree";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };
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
            <a href="/courses" className="text-white hover:text-gray-300">
              Courses
            </a>
          </li>
          <li>
            <a href="trainers" className="text-white hover:text-gray-300">
              Trainers
            </a>
          </li>
          <li>
            <a href="events" className="text-white hover:text-gray-300">
              Events
            </a>
          </li>
          <li>
            <a href="pricing" className="text-white hover:text-gray-300">
              Pricing
            </a>
          </li>
          <li>
            <a href="Studentform" className="text-white hover:text-gray-300">
              StudentForm
            </a>
          </li>
          <li>
            <a href="Studentrecord" className="text-white hover:text-gray-300">
              Studentrecord
            </a>
          </li>
          <li>
            <a href="Studentdetails" className="text-white hover:text-gray-300">
              Studentdetails
            </a>
          </li>
          <li>
            <a href="Booksrecord" className="text-white hover:text-gray-300">
              Booksrecord
            </a>
          </li>
          <div className="relative inline-block text-left">
            <button
              onClick={toggleDropdown}
              type="button"
              className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white
               bg-gray-800  focus:outline-none -mt-2"
              id="options-menu"
              aria-haspopup="true"
              aria-expanded={isOpen}
            >
              Drop Down
              <svg
                className="-mr-1 ml-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 0 1 1.414 0L10 11.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414z"
                />
              </svg>
            </button>

            {isOpen && (
              <div
                onBlur={closeDropdown}
                className="origin-top-right absolute right-0 mt-2 w-56 rounded-md  bg-white ring-1
                 hover:text-green-400"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                <div className="py-1" role="none">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    Drop Down 1
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    Drop Down 2
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-green-700 hover:bg-gray-100 hover:text-green-900"
                    role="menuitem"
                  >
                    Drop Down 3
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-green-700 hover:bg-gray-100 hover:text-green-900"
                    role="menuitem"
                  >
                    Drop Down 4
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-green-700 hover:bg-gray-100 hover:text-green-900"
                    role="menuitem"
                  >
                    Drop Down 5
                  </a>
                  {/* Add more items as needed */}
                </div>
              </div>
            )}
          </div>
          <li>
            <a href="contacts" className="text-white hover:text-gray-300 mr-5">
              Contacts
            </a>
          </li>
          <button className="bg-green-400 w-36 h-12 rounded-3xl -mt-2">
            Get Started
            
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
