import React from 'react';

const SideMenu = () => {
  return (
    <aside className='w-[20%]  bg-blue-950 text-center text-white text-2xl font-bold '>
    <div className=" text-white h-screen">
   
    <ul className="space-y-2 p-4">
      <li>
        <a href="#" className="block hover:bg-blue-900 px-4 py-2 rounded font-normal">
          Tutorials
        </a>
     
     
        <a href="#" className="block hover:bg-gray-700 px-4 py-2 rounded font-normal">
          Courses
        </a>
     
        <a href="#" className="block hover:bg-gray-700 px-4 py-2 rounded font-normal">
          Jobs
        </a>
      
        <a href="#" className="block hover:bg-gray-700 px-4 py-2 rounded font-normal">
          Practice
        </a>
     
        <a href="#" className="block hover:bg-gray-700 px-4 py-2 rounded font-normal">
          Contact
        </a>
      </li>
    </ul>
  </div>
  </aside>
  );
}

export default SideMenu;