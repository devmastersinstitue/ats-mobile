import React from "react";

export default function Info() {
  return (
    <div>
    
      <div className="flex flex-row w-full justify-between mt-12">
        <div className="pl-24 ">
          <h1 className="font-medium text-3xl ">
            Voluptatem dignissimos provident quasi corporis <br />
            voluptates sit assumenda.
          </h1>
          <h3 className="text-xl font-thin  mt-2 text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt
            <br />
            ut labore et dolore magna aliqua.
          </h3>{" "}
          <br />
          <div className="flex items-center space-x-2">
            {/* Circle with correct mark icon */}
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
          <div className="flex items-center space-x-2">
            {/* Circle with correct mark icon */}
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
          <div className="flex items-center space-x-2">
            {/* Circle with correct mark icon */}
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

        <div
          className="w-4/12 h-72 bg-no-repeat  mr-10 "
          style={{ backgroundImage: "url(pic4.jpg )" }}
        ></div>
      </div>
    </div>
  );
}
