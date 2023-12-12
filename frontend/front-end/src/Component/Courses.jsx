import React, { useState } from "react";

const Courses = () => {
  return (
    <>
      <div>
        <img className="my-10 w-52 h-20 mx-auto" src="logo01.png" alt="logo" />
      </div>
      <div className="mx-20">
        <div className="flex flex-row gap-x-9  justify-end ">
          <input
            type="text"
            id="Manage Courses"
            value={"Manage Courses"}
            className="border border-gray-300 w-36 h-10 text-center rounded-md "
          />
          <select
            id="Select School"
            class=" border border-gray-300 text-gray-800 text-base rounded-md focus:ring-blue-500
 focus:border-blue-500 block w-80 p-2.5 h-10 bg-white dark:border-gray-600 dark:placeholder-gray-400
   dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
            class="bg-gray-100  text-base rounded-md focus:ring-blue-500
 focus:border-blue-500 block w-80 p-2.5  h-10
  dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Learners's Paths</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
      </div>
      <div
        className="bg-white w-11/12 ml-14 h-48  text-xl mt-16 text-gray-600 border-solid border-2
         border-black-600"
      >
        <div className="text-center py-20 text-2xl font-normal ">
          Please Select School and Learner Path to View Courses
        </div>
      </div>
    </>
  );
};
export default Courses;
