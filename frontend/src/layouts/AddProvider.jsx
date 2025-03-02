import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import ProviderForm from "./forms/ProviderForm";

function AddProvider() {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [providers, setProviders] = useState([]); // Provider list

    // Fetch provider list from backend
    useEffect(() => {
        fetchProviders();
    }, [isModalOpen]);

    const fetchProviders = async () => {
        try {
            const response = await axios.get("http://localhost:8080/provider");
            setProviders(response.data); // Update state with API data
        } catch (error) {
            console.error("Error fetching providers:", error);
        }
    };

    // Handle adding new provider
    const handleAddProvider = async (newProvider) => {
        try {
            await axios.post("http://localhost:8080/provider", newProvider);
            fetchProviders(); // Refresh list after adding
        } catch (error) {
            console.error("Error adding provider:", error);
        }
    };

    return (
        <div className="flex h-screen overflow-hidden">
            {/* Sidebar */}
            <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

            {/* Main Content */}
            <div
                className={`flex-1 h-full md:pt-1 md:pl-6 md:mr-1 md:mt-0 transition-all duration-300 ${
                    sidebarOpen ? "md:ml-64" : "md:ml-16 ml-0"
                }`}
            >
                {/* Header */}
                <div className="flex justify-center text-center">
                    <h1 className="text-2xl font-bold h-14 bg-[#26a69d] text-white py-2 md:rounded-md w-full">
                        Provider Management
                    </h1>
                </div>

                {/* Add Provider Button */}
                <div className="p-6 flex justify-end">
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="px-4 py-2 bg-[#26a69d] text-white rounded hover:bg-[#208888]"
                    >
                        Add Provider
                    </button>
                </div>

                {/* Provider List Table */}
                <div className="p-6">
                    <div className="overflow-auto max-h-[70vh] border border-gray-300 rounded-md shadow-md">
                        <table className="min-w-full bg-white">
                            <thead className="bg-[#26a69d] text-white">
                                <tr>
                                    <th className="py-2 px-4 border whitespace-nowrap">#</th>
                                    <th className="py-2 px-4 border whitespace-nowrap">First Name</th>
                                    <th className="py-2 px-4 border whitespace-nowrap">Last Name</th>
                                    <th className="py-2 px-4 border whitespace-nowrap">Contact</th>
                                    <th className="py-2 px-4 border whitespace-nowrap">Email</th>
                                    <th className="py-2 px-4 border whitespace-nowrap">City</th>
                                    <th className="py-2 px-4 border whitespace-nowrap">Address</th>
                                    <th className="py-2 px-4 border whitespace-nowrap">Company Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                {providers.map((provider, index) => (
                                    <tr key={provider.id} className="text-center border hover:bg-gray-100">
                                        <td className="py-2 px-4 border">{index + 1}</td>
                                        <td className="py-2 px-4 border">{provider.firstName}</td>
                                        <td className="py-2 px-4 border">{provider.lastName}</td>
                                        <td className="py-2 px-4 border">{provider.contact}</td>
                                        <td className="py-2 px-4 border">{provider.email}</td>
                                        <td className="py-2 px-4 border">{provider.city}</td>
                                        <td className="py-2 px-4 border">{provider.address}</td>
                                        <td className="py-2 px-4 border">{provider.companyName}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Provider Form Modal */}
                <ProviderForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onAdd={handleAddProvider} />
            </div>
        </div>
    );
}

export default AddProvider;
