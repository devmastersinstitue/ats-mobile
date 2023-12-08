import React, { useState } from "react";

const SyncStatus = () => {
  return (
    <>
      <div>
        <img className="my-10 w-56 h-30 mx-auto" src="logo01.png" alt="logo" />
        <h2 className="text-center text-3xl font-bold -mb-14">SYNC STATUS</h2>
      </div>
      <div>
        <div className="flex flex-row gap-x-9 my-20 justify-end  ">
          <select
            id="Select School"
            class="bg-white border border-gray-300 text-gray-700 text-base rounded-lg focus:ring-blue-500
 focus:border-blue-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
   dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Select School</option>
            <option value="APS School">APS School</option>
            <option value="FG School">FG School</option>
            <option value="Allied School">Allied School</option>
            <option value="Pace school">Pace school</option>
          </select>
          <select
            id="Sync Type"
           
            class="bg-white border border-gray-300 text-gray-700 text-base rounded-lg focus:ring-blue-500
 focus:border-blue-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
  dark:focus:ring-blue-500 dark:focus:border-blue-500 "
          >
            <option selected>Sync Type</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
        <div
          className="bg-white w-full h-44  text-center pt-14 text-xl -mt-10 text-gray-600 border-solid border-2
         border-black-600"
        >
          <span>Please Select School to View Sync Status</span>
        </div>
      </div>
    </>
  );
};
export default SyncStatus;
