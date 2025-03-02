import React, { useState } from "react";
import Navbar from "./../components/Navbar";
import DevLogo from './../images/Dev Masters Learning.png'

function Dashboard(props) {
    const [sidebarOpen, setSidebarOpen] = useState(true); // Track sidebar state

    return (
        <div className="flex h-screen overflow-hidden"> {/* Prevent scrolling */}
            {/* Pass sidebar state to Navbar */}
            <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            
            <div className={`flex-1 h-full md:pt-1 md:pl-6 md:mr-1 md:mt-0 transition-all duration-300 ${sidebarOpen ? "md:ml-64 " : "md:ml-16 ml-0"}`}>
                <div className="flex justify-center text-center">
                    <h1 className="text-2xl font-bold h-14 bg-[#26a69d] text-white py-2 md:rounded-md w-full">
                        ATS Dashboard
                    </h1>
                </div>
                <img src={DevLogo} alt="" className="mt-60"/>
                {/* Other dashboard content */}
            </div>
        </div>
    );
}

export default Dashboard;
