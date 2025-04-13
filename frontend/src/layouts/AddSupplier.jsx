import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import SupplierForm from "./forms/SupplierForm";

function AddSupplier() {
    const [isMobile] = useState(window.innerWidth < 768);
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [Suppliers, setSuppliers] = useState([]); // Supplier list

    // Fetch Supplier list from backend
    useEffect(() => {
        fetchSuppliers();
    }, [isModalOpen]);

    const fetchSuppliers = async () => {
        try {
            const response = await axios.get("http://localhost:8080/supplier");
            setSuppliers(response.data); // Update state with API data
        } catch (error) {
            console.error("Error fetching Suppliers:", error);
        }
    };

    // Handle adding new Supplier
    const handleAddSupplier = async (newSupplier) => {
        try {
            await axios.post("http://localhost:8080/supplier", newSupplier);
            fetchSuppliers(); // Refresh list after adding
        } catch (error) {
            console.error("Error adding Supplier:", error);
        }
    };

    return (
        <div>
            {/* Sidebar */}
            <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

            {/* Main Content */}
            <div
                className={`flex-1 h-full md:pt-1 md:pl-6 md:mr-1 md:mt-0 transition-all duration-300 ${
                    sidebarOpen ? "md:ml-64" : "md:ml-16 ml-0"
                }`}
            >
                {/* Header */}
                {!isMobile && <div className="flex justify-center text-center">
                    <h1 className="text-2xl font-bold h-14 bg-[#26a69d] text-white py-2 md:rounded-md w-full">
                        Supplier Management
                    </h1>
                </div>}

                {isMobile && <div className="flex">
                    <h1 className="text-xl pl-16 font-bold h-14 bg-[#26a69d] text-white py-2 md:rounded-md w-full">
                        Supplier Management
                    </h1>
                </div>}

                {/* Add Supplier Button */}
                <div className="p-6 flex justify-start">
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="px-4 py-2 bg-[#26a69d] text-white rounded hover:bg-[#208888]"
                    >
                        Add Supplier
                    </button>
                </div>

                {/* Supplier List Table */}
                <div className="p-6">
                    <div className="overflow-auto max-h-[70vh] border border-gray-300 rounded-md shadow-md">
                        <table className="min-w-full bg-white">
                            <thead className="bg-[#26a69d] text-white sticky top-0 z-9">
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
                                {Suppliers.map((Supplier, index) => (
                                    <tr key={Supplier.id} className="text-center border hover:bg-gray-100">
                                        <td className="py-2 px-4 border">{index + 1}</td>
                                        <td className="py-2 px-4 border">{Supplier.firstName}</td>
                                        <td className="py-2 px-4 border">{Supplier.lastName}</td>
                                        <td className="py-2 px-4 border">{Supplier.contact}</td>
                                        <td className="py-2 px-4 border">{Supplier.email}</td>
                                        <td className="py-2 px-4 border">{Supplier.city}</td>
                                        <td className="py-2 px-4 border">{Supplier.address}</td>
                                        <td className="py-2 px-4 border">{Supplier.companyName}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Supplier Form Modal */}
                <SupplierForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onAdd={handleAddSupplier} />
            </div>
        </div>
    );
}

export default AddSupplier;
