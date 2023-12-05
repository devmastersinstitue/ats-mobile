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
        <img className=" h-[45px] w-auto" src="" alt="logo" />
      </div>
      <div className="grid grid-cols-2 w-max ml-[23%]">
        <div className="grid grid-cols-1 w-max mr-10 p-3 z-0 ">
        <form className="">
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
            className=" p-2 border rounded-md"
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
            className="w-full p-2 border rounded-md"
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
            className="w-full p-2 border rounded-md"
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
            className="w-full p-2 border rounded-md"
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
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        
      </form>
        </div>
        <div className="grid grid-cols-1 w-max mr-10 p-3 z-0">
        <form >
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
            className="w-full p-2 border rounded-md"
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
            className="w-full p-2 border rounded-md"
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
            className="w-full p-2 border rounded-md"
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
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-green-700 text-white p-2 m-3  rounded-md hover:bg-blue-600 transition duration-300"
        >
          Reset
        </button>
        <button
          type="submit"
          className="bg-green-700 text-white p-2 m-3 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Add new Learner
        </button>
      </form>
        </div>
      </div>
    </div>
  );
};

export default LearnerPath;
