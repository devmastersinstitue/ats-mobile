import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import RootForm from "./forms/RootForm";

function AddRoot() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [roots, setRoots] = useState([]); // Root list

    // 🚀 Fetch root list from backend
    useEffect(() => {
        fetchRoots();
    }, [setIsModalOpen, isModalOpen]);

    const fetchRoots = async () => {
        try {
            const response = await axios.get("http://localhost:8080/root");
            setRoots(response.data); // Update state with API data
        } catch (error) {
            console.error("Error fetching roots:", error);
        }
    };

    // 🚀 Handle adding new root
    const handleAddRoot = async (newRoot) => {
        try {
            await axios.post("http://localhost:8080/root", newRoot);
            fetchRoots(); // Refresh list after adding
        } catch (error) {
            console.error("Error adding root:", error);
        }
    };

    return (
        <div>
            {/* Sidebar */}
            <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

            {/* Main Content */}
            <div className={`flex-1 h-full md:pt-1 md:pl-6 md:mr-1 md:mt-0 transition-all duration-300 ${
                    sidebarOpen ? "md:ml-64" : "md:ml-16 ml-0"
                }`}>
                {/* Header */}
                {!isMobile && <div className="flex justify-center text-center">
                    <h1 className="text-2xl font-bold h-14 bg-[#26a69d] text-white py-2 md:rounded-md w-full">
                        Root Management
                    </h1>
                </div>}

                {isMobile && <div className="flex">
                    <h1 className="text-xl pl-16 font-bold h-14 bg-[#26a69d] text-white py-2 md:rounded-md w-full">
                        Root Management
                    </h1>
                </div>}

                {/* Add Root Button */}
                <div className="p-6 flex justify-start">
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="px-4 py-2 bg-[#26a69d] text-white rounded hover:bg-[#208888]"
                    >
                        Add Root
                    </button>
                </div>

                {/* Root List Table */}
                <div className="p-6">
                    <div className="overflow-auto max-h-[70vh] border border-gray-300 rounded-md shadow-md">
                        <table className="min-w-full bg-white">
                            <thead className="bg-[#26a69d] text-white">
                                <tr>
                                    <th className="py-2 px-4 border whitespace-nowrap">#</th>
                                    <th className="py-2 px-4 border whitespace-nowrap">Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                {roots.map((root, index) => (
                                    <tr key={root.id} className="text-center border hover:bg-gray-100">
                                        <td className="py-2 px-4 border">{index + 1}</td>
                                        <td className="py-2 px-4 border">{root.name}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Root Form Modal */}
                <RootForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onAdd={handleAddRoot} />
            </div>
        </div>
    );
}

export default AddRoot;
