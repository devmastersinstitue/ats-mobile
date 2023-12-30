import React from 'react';

const SideMenu = () => {
  return (
    <aside className='w-[40%] h-screen bg-blue-950 text-center text-white text-2xl font-bold pt-10 -mt-56 text-3xl'>GeeksforGeeks
    <div className=" text-white h-screen">
    {/* Sidebar Header */}
    {/* <div className="p-4 text-xl font-bold">Your Logo</div> */}

    {/* Menu Items */}
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