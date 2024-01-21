import React from "react";
import thirdImage from "./Walter.jpg";
import fourthImage from "./images/Sarah.jpg";
import fifthImage from "./images/Bill.jpg";
import {
  CubeIcon,
  CalendarIcon,
  CalculatorIcon,
  CameraIcon,
} from "@heroicons/react/solid";

export default function Trainers() {
  return (
    <div>
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
          <div className="flex flex-row  flex items-center justify-center ">
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
