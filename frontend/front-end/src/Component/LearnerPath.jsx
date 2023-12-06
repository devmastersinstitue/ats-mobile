import React, { useState } from "react";
// import "./LearnerPathForm.css";


const LearnerPath = () => {
  const [formData, setFormData] = useState({
    fees: "",
    name: "",
    cnic: "",
    contactNo: "",
    gender: "",
    age: "",
    country: "",
    city: "",
    houseNo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name);
    console.log(value);

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <div className="flex flex-row p-3 mt-5 justify-between items-center">
        <span className="inline-grid">
          {/* <ArrowLeftIcon className="hover:cursor-pointer h-5 w-5 text-black-500 " /> */}
        </span>
        <label className="pl-[70px] mt-0 text-2xl font-bold has-text-centered">
          Add New Learner
        </label>
        <img className=" h-[45px] w-auto" src="logo01.png" alt="logo" />
      </div>
      <div className="grid grid-cols-2 w-max-xs ml-[23%]">
        <div className="grid grid-cols-1 max-w mx-32 my-3 p-3 z-0 ">
        <form className="w-80 h-96">
        <div className="mb-4  ">
          <label
            htmlFor="Power School Number"
            className="block text-gray-600 text-sm font-medium mb-2 "
          >
           Power School Number
          </label>
          <input
            type="text"
            id="Power School Number"
            name="Power School Number"
            value={formData.name}
            onChange={handleChange}
            className=" p-2 border rounded-md w-80"
           required
          />
        </div>
       
        
        <div className="mb-4 ">
          <label
            htmlFor="UIC"
            className="block text-gray-600 text-sm font-medium mb-2"
          >
            UIC
          </label>
          <input
            type="text"
            id="UIC"
            name="UIC"
            value={formData.contactNo}
            onChange={handleChange}
            className="w-80 p-2 border rounded-md bg-gray-100"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="First Name"
            className="block text-gray-600 text-sm font-medium mb-2"
          >
            First Name
          </label>
          <input
            type="text"
            id="cFirst Namey"
            name="First Namey"
            value={formData.country}
            onChange={handleChange}
            className="w-80 p-2 border rounded-md  bg-gray-100"
            required
          />
        </div>
        
        
        <div className="mb-4">
          <label
            htmlFor="Last Name"
            className="block text-gray-600 text-sm font-medium mb-2"
          >
            Last Name
          </label>
          <input
            type="text"
            id="Last Name"
            name="Last Name"
            value={formData.fees}
            onChange={handleChange}
            className="w-80 p-2 border rounded-md  bg-gray-100"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="Grade level"
            className="block text-gray-600 text-sm font-medium mb-2"
          >
            Grade level
          </label>
          <input
            type="text"
            id="Grade level"
            name="Grade level"
            value={formData.fees}
            onChange={handleChange}
            className="w-80 p-2 border rounded-md  bg-gray-100"
            required
          />
        </div>
        
      </form>
        </div>
        <div className="grid grid-cols-2 w-max -ml-20 my-3 p-3 z-0">
        <form className=" w-96" >
        <div className="mb-4">
          <label
            htmlFor="School Name"
            className="block text-gray-600 text-sm font-medium mb-2"
          >
           School Name 
          </label>
          <input
            type="text"
            id="School Name"
            name="School Name"
            value={formData.name}
            onChange={handleChange}
            className="w-80 p-2 border rounded-md  bg-gray-100"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="Activate Date"
            className="block text-gray-600 text-sm font-medium mb-2"
          >
            Activate Date
          </label>
          <input
            type="date"
            id="Activate Date"
            name="Activate Date"
            value={formData.cnic}
            onChange={handleChange}
            className="w-80 p-2 border rounded-md"
            required
          />
        </div>
        
        <div className="mb-4">
          <label
            htmlFor="Learner Paths"
            className="block text-gray-600 text-sm font-medium mb-2"
          >
            Learner Paths
          </label>
          <input
            type="text"
            id="Learner Paths"
            name="Learner Paths"
            placeholder="Choose a learner's path"
            value={formData.gender}
            onChange={handleChange}
            className="w-80 p-2 border rounded-md  bg-gray-100"
            required
          />
        </div>
        
        <div className="mb-4">
          <label
            htmlFor="Cohort year"
            className="block text-gray-600 text-sm font-medium mb-2"
          >
           Cohort year
          </label>
          <input
            type="text"
            id="Cohort year"
            name="Cohort year"
            value={formData.city}
            onChange={handleChange}
            className="w-80 p-2 border rounded-md"
            required
          />
        </div> <br /> <br />
        <div className="container mx-auto mt-8">
      
    </div>
    <div className="-my-11">
    <label
  class="inline-block pl-[0.15rem] hover:cursor-pointer"
  for="flexSwitchCheckDefault"
  >Skip Grade Sync with Power School</label>

      <input
  class="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
  type="checkbox"
  role="switch"
  id="flexSwitchCheckDefault" />
</div>
<div className="my-20">

        <button
          type="submit"
          className="bg-green-400 text-white p-1 m-1 h-8 w-40  rounded-md hover:bg-blue-600 "
        >
          Reset
        </button>
        <button
          type="submit"
          className="bg-green-400 text-white p-1 m-1 h-8 w-44 rounded-md hover:bg-blue-600 "
        >
          Add new Learner
        </button>
        </div>
      </form>
     
        </div>
      </div>
    </div>
  );
};

export default LearnerPath;
