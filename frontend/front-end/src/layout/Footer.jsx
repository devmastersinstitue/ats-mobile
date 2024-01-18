import React from "react";

import {
  CubeIcon,
  CalendarIcon,
  UserIcon,
  CalculatorIcon,
  CameraIcon,
} from "@heroicons/react/solid";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-row justify-between h-xl bg-gray-100 w-auto mt-5 ">
        <div className="pl-32">
          <h1 className="mt-12 text-4xl mb-5  font-bold">Mentor</h1>
          <pre>
            A108 Adam Street <br />
            New York, NY 535022 <br />
            United States
          </pre>
          <br />
          <pre>
            <b>Phone:</b> +1 5589 55488 55 <br />
            <b>Email:</b> info@example.com
          </pre>
        </div>

        <div>
          <h1 className="mt-12 text-2xl mb-5 font-bold">Useful Links</h1>
          <div
            className=" text-xl text-black
         hover:text-green-400 flex flex-row "
          >
            <svg
              className="w-3 h-7  "
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="4"
                d="M9 5l7 7-7 7"
              />
            </svg>
            Home
          </div>
          <br />
          <div
            className=" text-xl text-black
         hover:text-green-400 flex flex-row   "
          >
            <svg
              className="w-3 h-7  "
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="4"
                d="M9 5l7 7-7 7"
              />
            </svg>
            About us
          </div>
          <br />
          <div
            className=" text-xl text-black
         hover:text-green-400 flex flex-row  "
          >
            <svg
              className="w-3 h-7  "
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="4"
                d="M9 5l7 7-7 7"
              />
            </svg>
            Services
          </div>
          <br />
          <div
            className=" text-xl text-black
         hover:text-green-400 flex flex-row   "
          >
            <svg
              className="w-3 h-7  "
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="4"
                d="M9 5l7 7-7 7"
              />
            </svg>
            Terms of service
          </div>
          <br />
          <div
            className=" text-xl text-black
         hover:text-green-400 flex flex-row   "
          >
            <svg
              className="w-3 h-7 "
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="4"
                d="M9 5l7 7-7 7"
              />
            </svg>
            Privacy policy
          </div>
        </div>
        <div>
          <div>
            <h1 className="mt-12 text-2xl mb-5 font-bold">Our Services</h1>
            <div
              className=" text-xl text-black
         hover:text-green-400 flex flex-row "
            >
              <svg
                className="w-3 h-7  "
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="4"
                  d="M9 5l7 7-7 7"
                />
              </svg>
              Web Design
            </div>
            <br />
            <div
              className=" text-xl text-black
         hover:text-green-400 flex flex-row   "
            >
              <svg
                className="w-3 h-7  "
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="4"
                  d="M9 5l7 7-7 7"
                />
              </svg>
              Web Development
            </div>
            <br />
            <div
              className=" text-xl text-black
         hover:text-green-400 flex flex-row  "
            >
              <svg
                className="w-3 h-7  "
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="4"
                  d="M9 5l7 7-7 7"
                />
              </svg>
              Product Management
            </div>
            <br />
            <div
              className=" text-xl text-black
         hover:text-green-400 flex flex-row   "
            >
              <svg
                className="w-3 h-7  "
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="4"
                  d="M9 5l7 7-7 7"
                />
              </svg>
              Marketing
            </div>
            <br />
            <div
              className=" text-xl text-black
         hover:text-green-400 flex flex-row   "
            >
              <svg
                className="w-3 h-7 "
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="4"
                  d="M9 5l7 7-7 7"
                />
              </svg>
              Graphic Design
            </div>
          </div>
        </div>
        <div>
          <h1 className="mt-12 text-2xl mb-5 font-bold">Join Our Newsletter</h1>
          <br />
          <pre className="text-xl">
            Tamen quem nulla quae legam multos aute sint culpa <br />
            legam noster magna
          </pre>
          <br />
          <div className="bg-gray-200 h-16 w-11/12 rounded-full my-5">
            <button className="p-3 rounded-full w-36 h-16 mt-6 text-2xl text-white bg-green-400 border border-white px-4 py-2 flex flex-row ml-96 ">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-row  justify-between bg-gray-200  w-auto h-36   ">
        <div className="flex flex-row   items-center justify-center ml-48 ">
          <CubeIcon className=" h-4 w-4  text-neutral-700 mx-2 mb-5 " />
          <pre>
            Copyright <b>Mentor</b>. All Rights Reserved <br />
            Designed by <span className="text-green-400">BootstrapMade</span>
          </pre>
        </div>
        <div className="flex flex-row    justify-between  items-center  mr-48">
          <CalculatorIcon className=" h-8 w-8  text-green-400 mx-2  " />
          <CameraIcon className=" h-8 w-8  text-green-400 mx-2  " />
          <CubeIcon className=" h-8 w-8  text-green-400 mx-2  " />
          <CalendarIcon className=" h-8 w-8  text-green-400 mx-2  " />
          <UserIcon className=" h-8 w-8  text-green-400 mx-2" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
