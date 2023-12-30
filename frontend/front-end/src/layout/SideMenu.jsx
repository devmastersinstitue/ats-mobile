import React from 'react';

const SideMenu = () => {
  return (
    <aside className='w-[20%]  bg-blue-700'>
    <div className=" text-white h-screen">
    {/* Sidebar Header */}
    {/* <div className="p-4 text-xl font-bold">Your Logo</div> */}

    {/* Menu Items */}
    <ul className="space-y-2 p-4">
      <li>
        <a href="#" className="block hover:bg-blue-900 px-4 py-2 rounded">
          Dashboard
        </a>
      </li>
      <li>
        <a href="#" className="block hover:bg-gray-700 px-4 py-2 rounded">
          Products
        </a>
      </li>
      <li>
        <a href="#" className="block hover:bg-gray-700 px-4 py-2 rounded">
          Orders
        </a>
      </li>
      <li>
        <a href="#" className="block hover:bg-gray-700 px-4 py-2 rounded">
          Customers
        </a>
      </li>
    </ul>
  </div>
  </aside>
  );
}

export default SideMenu;