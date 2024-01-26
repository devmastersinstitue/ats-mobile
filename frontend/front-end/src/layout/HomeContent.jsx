import React from "react";
import thirdImage from "./Walter.jpg";
import fourthImage from "./images/Sarah.jpg";
import fifthImage from "./images/Bill.jpg";

import {
  SortAscendingIcon,
  BellIcon,
  SortDescendingIcon,
  CheckCircleIcon,
  CubeIcon,
  DuplicateIcon,
  DocumentIcon,
  PhotographIcon,
  DeviceTabletIcon,
  CalendarIcon,
  WalletIcon,
  StarIcon,
  StopIcon,
  ClipboardIcon,
  WifiIcon,
  ArchiveIcon,
  TableIcon,
  UserIcon,
  HeartIcon,
  CalculatorIcon,
  CameraIcon,
  cogIcon,
} from "@heroicons/react/solid";
import AboutContent from "./AboutContent";
import CourseContent from "./CourseContent";

export default function HomeContent() {
  return (
    <div>
      <div
        className="w-auto h-auto bg-no-repeat"
        style={{ backgroundImage: "url(girl-pic1.jpg )" }}
      >
        <div className="p-10 border-8 ">
          <h1 className="text-white font-bold text-6xl">Learning Today,</h1>
          <h1 className="text-white font-bold text-6xl">Leading Tomorrow</h1>
          <br />
          <h3 className="text-white text-4xl">
            We are team of talented designers making websites with Bootstrap.
          </h3>
          <button className="p-3 rounded-full w-44 h-14 mt-6 text-2xl text-white hover:bg-green-400 border border-white">
            Get Started
          </button>
        </div>
      </div>
      <AboutContent/>
      <div className="flex flex-row justify-between border-8 p-20">
        <div className="w-[500px] h-auto bg-green-400 rounded-lg p-2">
          <h1 className="text-white text-5xl font-bold text-center">
            Why Choose Mentor?
          </h1>
          <br />
          <p className="text-white text-2xl text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
            aute irure dolor in reprehenderit Asperiores dolores sed et. Tenetur
            quia eos. Autem tempore quibusdam vel necessitatibus optio ad
            corporis.
          </p>
          <div className="flex items-center justify-center pb-28 ">
            <button
              className="p-3 rounded-full w-56 h-14 mt-6 text-2xl text-white hover:bg-white
         hover:text-green-400 border border-white bg-green-400"
            >
              Learn More
              <svg
                className="w-3 h-7 ml-44 -mt-7"
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
            </button>
          </div>
        </div>
        <div className="w-96 h-96 bg-gray-200 rounded-lg justify-items-center ">
          <CubeIcon className=" h-12 w-12 flex mx-auto mt-16 text-green-400 " />
          <h1 className="text-center pt-20 text-3xl font-bold">
            Corporis voluptates <br /> sit
          </h1>{" "}
          <br />
          <p className="pl-20 text-lg">
            Consequuntur sunt aut quasi <br />
            enim aliquam quae harum <br /> pariatur laboris nisi ut aliquip
          </p>
        </div>
        <div className="w-96 h-96 bg-gray-200 rounded-lg justify-items-center">
          <DuplicateIcon className=" h-12 w-12 flex mx-auto mt-16 text-green-400 " />
          <h1 className="text-center pt-20 text-3xl font-bold">
            Ullamco laboris <br /> ladore pan
          </h1>{" "}
          <br />
          <p className="pl-20 text-lg">
            Excepteur sint occaecat <br /> cupidatat non proident, <br /> sunt
            in culpa qui officia deserunt
          </p>
        </div>
        <div className="w-96 h-96 bg-gray-200 rounded-lg justify-items-center">
          <DocumentIcon className="  h-12 w-12 flex mx-auto mt-16 text-green-400 " />
          <h1 className="text-center pt-20 text-3xl font-bold">
            Labore consequatur
          </h1>{" "}
          <br />
          <p className="pl-20 text-lg">
            Aut suscipit aut cum nemo <br /> deleniti aut omnis. Doloribus{" "}
            <br /> ut maiores omnis facere
          </p>
        </div>
      </div>
      <div className="flex flex-row justify-between mx-20">
        <div className="flex flex-col">
          <div className="flex flex-row my-5 w-96 h-20 py-4 border-2  hover:text-green-400 hover:border-green-400 ">
            <PhotographIcon className=" h-10 w-10 text-yellow-600  " />
            <h1 className="text-xl ">Lorem Ipsum</h1>
          </div>
          <div className="flex flex-row my-5 w-96 h-20 py-4 border-2  hover:text-green-400 hover:border-green-400 ">
            <CubeIcon className=" h-10 w-10 text-blue-600  " />
            <h1 className="text-xl ">Nemo Enim</h1>
          </div>
          <div className="flex flex-row my-5 w-96 h-20 py-4 border-2  hover:text-green-400 hover:border-green-400 ">
            <SortAscendingIcon className=" h-10 w-10 text-amber-700 " />
            <h1 className="text-xl ">Dirada Pack</h1>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row my-5 w-96 h-20 py-4 border-2  hover:text-green-400 hover:border-green-400 ">
            <DeviceTabletIcon className=" h-10 w-10 text-blue-400  " />
            <h1 className="text-xl ">Dolor Sitema</h1>
          </div>
          <div className="flex flex-row my-5 w-96 h-20 py-4 border-2  hover:text-green-400 hover:border-green-400 ">
            <CalendarIcon className=" h-10 w-10 text-yellow-400  " />
            <h1 className="text-xl ">Eiusmod Tempor</h1>
          </div>
          <div className="flex flex-row my-5 w-96 h-20 py-4 border-2  hover:text-green-400 hover:border-green-400 ">
            <StarIcon className=" h-10 w-10 text-red-800  " />
            <h1 className="text-xl ">Moton Ideal</h1>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row my-5 w-96 h-20 py-4 border-2  hover:text-green-400 hover:border-green-400 ">
            <StopIcon className=" h-10 w-10 text-pink-600  " />
            <h1 className="text-xl ">Sed Perspiciaais </h1>
          </div>
          <div className="flex flex-row my-5 w-96 h-20 py-4 border-2  hover:text-green-400 hover:border-green-400 ">
            <ClipboardIcon className=" h-10 w-10 text-green-600  " />
            <h1 className="text-2xl ">Midela Teren</h1>
          </div>
          <div className="flex flex-row my-5 w-96 h-20 py-4 border-2  hover:text-green-400 hover:border-green-400 ">
            <WifiIcon className=" h-10 w-10 text-red-600  " />
            <h1 className="text-xl ">Verdo Park</h1>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row my-5 w-96 h-20 py-4 border-2  hover:text-green-400 hover:border-green-400 ">
            <ArchiveIcon className=" h-10 w-10 text-purple-600  " />
            <h1 className="text-xl ">Magni Dolores</h1>
          </div>
          <div className="flex flex-row my-5 w-96 h-20 py-4 border-2  hover:text-green-400 hover:border-green-400 ">
            <DocumentIcon className=" h-10 w-10 text-blue-600  " />
            <h1 className="text-xl ">Pira Neve</h1>
          </div>
          <div className="flex flex-row my-5 w-96 h-20 py-4 border-2  hover:text-green-400 hover:border-green-400 ">
            <TableIcon className=" h-10 w-10 text-red-600  " />
            <h1 className="text-xl ">Flavor Mivelanda</h1>
          </div>
        </div>
      </div>
      <div className="mx-20">
        <h2 className="text-xl text-gray-400">
          Courses <span className="text-green-400">______________</span>
        </h2>{" "}
        <br />
        <h1 className="font-bold text-5xl">POPULAR COURSES</h1>
       <CourseContent/>
        
      </div>
      <div className="flex flex-row justify-between">
          <div className="text-center border-2">
            <img src={thirdImage} alt="My Image" className=" h-96 w-96" />
            <h1 className="text-2xl mt-4">Walter White</h1>
            <h2>Web development</h2> <br />
            <p>
              Magni qui quod omnis unde et eos fuga et exercitationem. <br />
              Odio veritatis perspiciatis quaerat qui aut aut aut
            </p>{" "}
            <br />
            <div className="flex flex-row  flex items-center justify-center ">
              <CalculatorIcon className=" h-10 w-10  text-gray-400 mx-2  " />
              <CameraIcon className=" h-10 w-10  text-gray-400 mx-2  " />
              <CubeIcon className=" h-10 w-10  text-gray-400 mx-2  " />
              <CalendarIcon className=" h-10 w-10  text-gray-400 mx-2  " />
            </div>
          </div>

          <div className="text-center border-2">
            <img src={fourthImage} alt="My Image" className=" h-96 w-96" />
            <h1 className="text-2xl mt-4">Sarah Jhinson</h1>
            <h2>Marketing</h2> <br />
            <p>
              Repellat fugiat adipisci nemo illum nesciunt voluptas <br />
              repellendus. In architecto rerum rerum temporibus
            </p>
            <br />
            <div className="flex flex-row  flex items-center justify-center ">
              <CalculatorIcon className=" h-10 w-10  text-gray-400 mx-2  " />
              <CameraIcon className=" h-10 w-10  text-gray-400 mx-2  " />
              <CubeIcon className=" h-10 w-10  text-gray-400 mx-2  " />
              <CalendarIcon className=" h-10 w-10  text-gray-400 mx-2  " />
            </div>
          </div>
          <div className="text-center border-2">
            <img src={fifthImage} alt="My Image" className=" h-96 w-96" />
            <h1 className="text-2xl mt-4">William Anderson</h1>
            <h2>Content</h2> <br />
            <p>
              Voluptas necessitatibus occaecati quia. Earum totam <br />
              consequuntur qui porro et laborum toro des clara
            </p>
            <br />
            <div className="flex flex-row items-center justify-center ">
              <CalculatorIcon className=" h-10 w-10  text-gray-400 mx-2  " />
              <CameraIcon className=" h-10 w-10  text-gray-400 mx-2  " />
              <CubeIcon className=" h-10 w-10  text-gray-400 mx-2  " />
              <CalendarIcon className=" h-10 w-10  text-gray-400 mx-2  " />
            </div>
          </div>
        </div>
    </div>
  );
}
