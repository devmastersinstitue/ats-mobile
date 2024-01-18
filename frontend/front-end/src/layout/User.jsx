import React from 'react'

export default function User() {
  return (
    <div>
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
    </div>
  )
}
