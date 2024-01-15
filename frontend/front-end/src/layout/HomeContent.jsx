import React from "react";
import myImage from "./image2.jpg";
import firstImage from "./pic3.jpg";
import secondImage from "./pic4.jpg";
import thirdImage from "./Walter.jpg";
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
} from "@heroicons/react/solid";

export default function HomeContent() {
  return (
    <div>
      <div
        className="w-full h-96 bg-no-repeat"
        style={{ backgroundImage: "url(girl-pic1.jpg )" }}
      >
        <div className="ml-20 pt-10">
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
      <div className="w-full h-52 bg-gray-100 mt-12 flex flex-row justify-between pt-10 whitespace px-28">
        <div className="flex flex-col pl-28">
          <h1 className="text-green-400 text-7xl font font-bold">1232</h1>
          <p className="text-3xl ml-4 mt-3">Students</p>
        </div>
        <div className="flex flex-col">
          <h1 className="text-green-400 text-7xl font font-bold">64</h1>
          <p className="text-3xl mr-4 mt-3">Courses</p>
        </div>
        <div className="flex flex-col">
          <h1 className="text-green-400 text-7xl font font-bold">42</h1>
          <p className="text-3xl ml-4 mt-3 mr4 ">Events</p>
        </div>
        <div className="flex flex-col pr-20">
          <h1 className="text-green-400 text-7xl font font-bold">15</h1>
          <p className="text-3xl ml-4 mt-3 mr-4 ">Trainers</p>
        </div>
      </div>
      <div className="flex flex-row px-20 my-10 justify-between">
        <div className="w-[500px] h-4/6 bg-green-400 rounded-lg">
          <h1 className="text-white text-5xl font-bold text-center pt-7">
            Why Choose Mentor?
          </h1>{" "}
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
        <div className="flex flex-row justify-between py-10">
          <div>
            <div className="flex items-center justify-center h-96 w-96">
              <img src={myImage} alt="My Image" />
            </div>
            <div className="flex flex-row justify-between ">
              <div className=" bg-green-400 h-8 w-40 text-white text-center py-1 ">
                {" "}
                Web Development
              </div>
              <span className="font-bold">$169</span>
            </div>
            <div>
            <h1 className="font-bold text-2xl py-3">Website Design</h1>
            <p className="">
              Et architecto provident deleniti facere repellat nobis iste.
              <br />
              Id facere quia quae dolores dolorem tempore.
            </p>{" "}
            </div>
            <hr />
            <div className="flex items-center justify-center py-20 h-5 w-20">
              <img src={thirdImage} alt="My Image" className=" rounded-full />
            </div>
          </div>

          <div className="flex items-center justify-center  h-96 w-96">
            <img src={firstImage} alt="My Image" />
          </div>
          <div className="flex items-center justify-center  h-96 w-96">
            <img src={secondImage} alt="My Image" />
          </div>
        </div>
      </div>
    </div>
  );
}
