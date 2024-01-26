import React from "react";
import manPic from "./pic4.jpg"

export default function AboutContent() {
  return (
    <div>
      <div className="sm:columns-1 lg:columns-2 w-full h-auto border-8 p-20">
        <div className="">
          <h1 className="font-medium text-3xl ">
            Voluptatem dignissimos provident quasi corporis <br />
            voluptates sit assumenda.
          </h1>
          <h3 className="text-xl font-thin  mt-2 text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt
            <br />
            ut labore et dolore magna aliqua.
          </h3>
          <br />
          <div className="flex space-x-2">
            <svg
              className="w-8 h-8 text-green-500 bg-white p-1 rounded-full"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="12" r="10" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>

            <span className="text-lg">
              Ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </span>
          </div>
          <div className="flex space-x-2">
            <svg
              className="w-8 h-8 text-green-500 bg-white p-1 rounded-full"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="12" r="10" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>

            <span className="text-lg">
              Duis aute irure dolor in reprehenderit in voluptate velit.
            </span>
          </div>
          <div className="flex space-x-2">
            <svg
              className="w-8 h-8 text-green-500 bg-white p-1 rounded-full"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="12" r="10" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>

            <span className="text-lg ">
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in <br />
              reprehenderit in voluptate trideta storacalaperda mastiro dolore
              eu fugiat nulla pariatur.
            </span>
          </div>
          <br />
          <span className="text-lg">
            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in <br />
            reprehenderit in voluptate
          </span>
        </div>
        <div className="lg:ml-40 sm:ml-0">
          <img
            src={manPic}
            alt="My Image"
            className="w-[450px] h-[500px]"
          />
        </div>
      </div>
      <div>
        <div className=" bg-gray-100 lg:columns-4 sm:columns-2 whitespace border-8 p-20  text-center">
          <div className="">
            <h1 className="text-green-400 text-7xl font font-bold">1232</h1>
            <p className="text-3xl">Students</p>
          </div>
          <div className="">
            <h1 className="text-green-400 text-7xl font font-bold">64</h1>
            <p className="text-3xl">Courses</p>
          </div>
          <div className="">
            <h1 className="text-green-400 text-7xl font font-bold">42</h1>
            <p className="text-3xl">Events</p>
          </div>
          <div className="">
            <h1 className="text-green-400 text-7xl font font-bold">15</h1>
            <p className="text-3xl">Trainers</p>
          </div>
        </div>
      </div>
    </div>
  );
}
