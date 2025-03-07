import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import CustomerForm from "./forms/CustomerForm";

function AddCustomer() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [customers, setCustomers] = useState([]); // Customer list

    // 🚀 Fetch customer list from backend
    useEffect(() => {
        fetchCustomers();
    }, [setIsModalOpen, isModalOpen]);

    const fetchCustomers = async () => {
        try {
            const response = await axios.get("http://localhost:8080/customer");
            setCustomers(response.data); // Update state with API data
        } catch (error) {
            console.error("Error fetching customers:", error);
        }
    };

    // 🚀 Handle adding new customer
    const handleAddCustomer = async (newCustomer) => {
        try {
            await axios.post("http://localhost:8080/customer", newCustomer);
            fetchCustomers(); // Refresh list after adding
        } catch (error) {
            console.error("Error adding customer:", error);
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
                        Customer Management
                    </h1>
                </div>}

                {isMobile && <div className="flex">
                    <h1 className="text-xl pl-16 font-bold h-14 bg-[#26a69d] text-white py-2 md:rounded-md w-full">
                        Customer Management
                    </h1>
                </div>}

                {/* Add Customer Button */}
                <div className="p-6 flex justify-start">
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="px-4 py-2 bg-[#26a69d] text-white rounded hover:bg-[#208888]"
                    >
                        Add Customer
                    </button>
                </div>

                {/* Customer List Table */}
                <div className="p-6">
                    {/* Wrapper for both horizontal and vertical scrolling */}
                    <div className="overflow-x-auto overflow-y-auto max-h-[70vh] border border-gray-300 rounded-md shadow-md">
                        <table className="min-w-full bg-white">
                            <thead className="bg-[#26a69d] text-white">
                                <tr>
                                    <th className="py-2 px-4 border whitespace-nowrap">#</th>
                                    <th className="py-2 px-4 border whitespace-nowrap">First Name</th>
                                    <th className="py-2 px-4 border whitespace-nowrap">Last Name</th>
                                    <th className="py-2 px-4 border whitespace-nowrap">Contact</th>
                                    <th className="py-2 px-4 border whitespace-nowrap">CNIC</th>
                                    <th className="py-2 px-4 border whitespace-nowrap">Email</th>
                                    <th className="py-2 px-4 border whitespace-nowrap">Root</th>
                                    <th className="py-2 px-4 border whitespace-nowrap">Shop Name</th>
                                    <th className="py-2 px-4 border whitespace-nowrap">Address</th>
                                    <th className="py-2 px-4 border whitespace-nowrap">Remaining Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {customers.map((customer, index) => (
                                    <tr key={customer.id} className="text-center border hover:bg-gray-100">
                                        <td className="py-2 px-4 border">{index + 1}</td>
                                        <td className="py-2 px-4 border">{customer.firstName}</td>
                                        <td className="py-2 px-4 border">{customer.lastName}</td>
                                        <td className="py-2 px-4 border">{customer.contact}</td>
                                        <td className="py-2 px-4 border">{customer.cnic}</td>
                                        <td className="py-2 px-4 border">{customer.email}</td>
                                        <td className="py-2 px-4 border">{customer.root}</td>
                                        <td className="py-2 px-4 border">{customer.shopName}</td>
                                        <td className="py-2 px-4 border">{customer.address}</td>
                                        <td className="py-2 px-4 border">{customer.remainingAmount}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Customer Form Modal */}
                <CustomerForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onAdd={handleAddCustomer} />
            </div>
        </div>
    );
}

export default AddCustomer;
