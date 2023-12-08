import React, { useState } from "react";

const FormsData = () => {
  const [formData, setFormData] = useState({
    Email: "",
    Password: "",
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
    <>
      <div>
        <img className="my-32 w-56 h-30 mx-auto" src="logo01.png" alt="logo" />
        <h2 className="text-center text-3xl font-bold -my-16">SIGN IN</h2>
      </div>
      <div className="mx-60">
        <div className="mb-4 my-20 mx-auto pl-80">
          <label htmlFor="Email" className="block text-2xl font-medium mb-2 ">
            Email
          </label>
          <input
            type="text"
            id="Email"
            name="Email"
            value={formData.Email}
            onChange={handleChange}
            className="  border rounded-md w-8/12 h-11"
            required
          />
        </div>
        <div className="mb-4  mx-auto pl-80">
          <label
            htmlFor="Password"
            className="block text-2xl font-medium mb-2 "
          >
            Password
          </label>
          <input
            type="text"
            id="Password"
            name="Password"
            value={formData.Password}
            onChange={handleChange}
            className="  border rounded-md w-8/12 h-11"
            required
          />
          <p class="underline  font-medium my-8 pl-40">Forgot Password?</p>
          <button type="Submit" className="w-32 h-10 rounded-md bg-green-400 text-white ml-40 mt-5">Login</button>
        </div>
       
      </div>
      
    </>
  );
};
export default FormsData;
