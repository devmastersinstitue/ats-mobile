import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import CustomerForm from "./forms/CustomerForm";

function AddCustomer() {
    const [isMobile] = useState(window.innerWidth < 768);
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [customers, setCustomers] = useState([]);
    const [filters, setFilters] = useState({ contact: "", cnic: "", root: "", shopName: "" });
    const [sortOrder, setSortOrder] = useState("asc"); // Sorting order for remainingAmount

    useEffect(() => {
        fetchCustomers();
    }, [isModalOpen]);

    const fetchCustomers = async () => {
        try {
            const response = await axios.get("http://localhost:8080/customer");
            setCustomers(response.data);
        } catch (error) {
            console.error("Error fetching customers:", error);
        }
    };

    const handleAddCustomer = async (newCustomer) => {
        try {
            await axios.post("http://localhost:8080/customer", newCustomer);
            fetchCustomers();
        } catch (error) {
            console.error("Error adding customer:", error);
        }
    };

    // 🚀 Filtering logic
    const filteredCustomers = customers.filter((customer) =>
        customer.contact.includes(filters.contact) &&
        customer.cnic.includes(filters.cnic) &&
        customer.root.toLowerCase().includes(filters.root.toLowerCase()) &&
        customer.shopName.toLowerCase().includes(filters.shopName.toLowerCase())
    );

    // 🚀 Sorting logic for remainingAmount
    const sortedCustomers = [...filteredCustomers].sort((a, b) => {
        const amountA = parseFloat(a.remainingAmount) || 0;
        const amountB = parseFloat(b.remainingAmount) || 0;
        return sortOrder === "asc" ? amountA - amountB : amountB - amountA;
    });

    return (
        <div>
            <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

            <div className={`flex-1 h-full md:pt-1 md:pl-6 md:mr-1 md:mt-0 transition-all duration-300 ${sidebarOpen ? "md:ml-64" : "md:ml-16 ml-0"}`}>
                <div className="flex justify-center text-center">
                    <h1 className="text-2xl font-bold h-14 bg-[#26a69d] text-white py-2 md:rounded-md w-full">
                        Customer Management
                    </h1>
                </div>

                <div className="p-6 flex justify-start">
                    <button onClick={() => setIsModalOpen(true)} className="px-4 py-2 bg-[#26a69d] text-white rounded hover:bg-[#208888]">
                        Add Customer
                    </button>
                </div>

                {/* 🚀 Filters Section */}
                <div className="px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
                    <input
                        type="text"
                        placeholder="Filter by Contact"
                        className="p-2 border rounded-md"
                        value={filters.contact}
                        onChange={(e) => setFilters({ ...filters, contact: e.target.value })}
                    />
                    <input
                        type="text"
                        placeholder="Filter by CNIC"
                        className="p-2 border rounded-md"
                        value={filters.cnic}
                        onChange={(e) => setFilters({ ...filters, cnic: e.target.value })}
                    />
                    <input
                        type="text"
                        placeholder="Filter by Root"
                        className="p-2 border rounded-md"
                        value={filters.root}
                        onChange={(e) => setFilters({ ...filters, root: e.target.value })}
                    />
                    <input
                        type="text"
                        placeholder="Filter by Shop Name"
                        className="p-2 border rounded-md"
                        value={filters.shopName}
                        onChange={(e) => setFilters({ ...filters, shopName: e.target.value })}
                    />
                </div>

                <div className="p-6">
                    <div className="overflow-x-auto overflow-y-auto max-h-[70vh] border border-gray-300 rounded-md shadow-md">
                        <table className="min-w-full bg-white">
                            <thead className="bg-[#26a69d] text-white sticky top-0 z-9">
                                <tr>
                                    <th className="py-2 px-4 border">#</th>
                                    <th className="py-2 px-4 border">First Name</th>
                                    <th className="py-2 px-4 border">Last Name</th>
                                    <th className="py-2 px-4 border">Contact</th>
                                    <th className="py-2 px-4 border">CNIC</th>
                                    <th className="py-2 px-4 border">Email</th>
                                    <th className="py-2 px-4 border">Root</th>
                                    <th className="py-2 px-4 border">Shop Name</th>
                                    <th className="py-2 px-4 border">Address</th>
                                    <th className="py-2 px-4 border cursor-pointer" onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}>
                                        Remaining Amount {sortOrder === "asc" ? "▲" : "▼"}
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {sortedCustomers.map((customer, index) => (
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

                <CustomerForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onAdd={handleAddCustomer} />
            </div>
        </div>
    );
}

export default AddCustomer;
