import React from 'react'
import myImage from "./image2.jpg";
import firstImage from "./pic3.jpg";
import secondImage from "./pic4.jpg";
import thirdImage from "./Walter.jpg";
import fourthImage from "./images/Sarah.jpg";
import fifthImage from "./images/Bill.jpg";

import {
   
    UserIcon,
    HeartIcon,
   
  } from "@heroicons/react/solid";

export default function CourseContent() {
  return (
    <div>
       <div className="flex flex-row justify-between py-10">
          <div className=" border-2 ">
            <div className="flex items-center justify-center mb-5 w-96">
              <img src={myImage} alt="My Image" className="w-full" />
            </div>
            <div className="flex flex-row justify-between mx-2">
              <div className=" bg-green-400 h-8 w-40 text-white text-center py-1 ">
                {" "}
                Web Development
              </div>
              <span className="font-bold">$169</span>
            </div>
            <div className="mx-2">
              <h1 className="font-bold text-2xl py-3  hover:text-green-500 cursor-pointer">
                Website Design
              </h1>
              <p>
                Et architecto provident deleniti facere repellat nobis iste.
                <br />
                Id facere quia quae dolores dolorem tempore.
              </p>{" "}
            </div>
            <br />
            <hr />
            <div className=" flex flex-row  justify-between ">
              <div>
                <div className=" flex flex-row p-1 ">
                  <img
                    src={thirdImage}
                    alt="My Image"
                    className="rounded-full h-7 w-7 "
                  />
                  <span className="text-xl">Antonio</span>
                </div>
              </div>
              <div className="flex space-x-2">
                <UserIcon className=" h-10 w-10  text-gray-400 mx-2" />
                <span className="text-2xl p-1 ">50</span>
                <HeartIcon className="h-10 w-10  text-gray-400 " />
                <span className="text-2xl">65</span>
              </div>
            </div>
          </div>
          <div className=" border-2">
            <div className="flex items-center justify-center mb-5 w-96">
              <img src={firstImage} alt="My Image" />
            </div>
            <div className="flex flex-row justify-between ">
              <div className=" bg-green-400 h-8 w-40 text-white text-center py-1 ">
                {" "}
                Marketing
              </div>
              <span className="font-bold">$250</span>
            </div>
            <div>
              <h1 className="font-bold text-2xl py-3  hover:text-green-500 cursor-pointer">
                Search Engine Optimization
              </h1>
              <p className="">
                Et architecto provident deleniti facere repellat nobis iste.
                <br />
                Id facere quia quae dolores dolorem tempore.
              </p>{" "}
            </div>
            <br />
            <hr />
            <div className=" flex flex-row  justify-between mx-2  ">
              <div className="">
                <div className=" flex flex-row p-1 ">
                  <img
                    src={fourthImage}
                    alt="My Image"
                    className="rounded-full h-7 w-7 "
                  />
                  <span className="text-xl">Lana</span>
                </div>
              </div>
              <div className="flex space-x-2">
                <UserIcon className=" h-10 w-10  text-gray-400 mx-2" />
                <span className="text-2xl p-1 ">35</span>
                <HeartIcon className="h-10 w-10  text-gray-400 " />
                <span className="text-2xl">42</span>
              </div>
            </div>
          </div>
          <div className=" border-2">
            <div className="flex items-center justify-center mb-5 w-96">
              <img src={secondImage} alt="My Image" />
            </div>
            <div className="flex flex-row justify-between ">
              <div className=" bg-green-400 h-8 w-40 text-white text-center py-1 ">
                {" "}
                Content
              </div>
              <span className="font-bold">$180</span>
            </div>
            <div>
              <h1 className="font-bold text-2xl py-3 hover:text-green-500 cursor-pointer">
                CopyWriting
              </h1>
              <p className="">
                Et architecto provident deleniti facere repellat nobis iste.
                <br />
                Id facere quia quae dolores dolorem tempore.
              </p>{" "}
            </div>
            <br />
            <hr />
            <div className=" flex flex-row  justify-between mx-2 ">
              <div>
                <div className=" flex flex-row p-1 ">
                  <img
                    src={fifthImage}
                    alt="My Image"
                    className="rounded-full h-7 w-7 "
                  />
                  <span className="text-xl">Brandon</span>
                </div>
              </div>
              <div className="flex space-x-2">
                <UserIcon className=" h-10 w-10  text-gray-400 mx-2" />
                <span className="text-2xl p-1 ">20</span>
                <HeartIcon className="h-10 w-10  text-gray-400 " />
                <span className="text-2xl">85</span>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
