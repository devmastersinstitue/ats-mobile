import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import EmployeeForm from "./forms/EmployeeForm";

function AddEmployee() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [employees, setEmployees] = useState([]); // Employee list

    // 🚀 Fetch employee list from backend
    useEffect(() => {
        fetchEmployees();
    }, [setIsModalOpen, isModalOpen]);

    const fetchEmployees = async () => {
        try {
            const response = await axios.get("http://localhost:8080/employee");
            setEmployees(response.data); // Update state with API data
        } catch (error) {
            console.error("Error fetching employees:", error);
        }
    };

    // 🚀 Handle adding new employee
    const handleAddEmployee = async (newEmployee) => {
        try {
            await axios.post("http://localhost:8080/employee", newEmployee);
            fetchEmployees(); // Refresh list after adding
        } catch (error) {
            console.error("Error adding employee:", error);
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
                        Employee Management
                    </h1>
                </div>}

                {isMobile && <div className="flex">
                    <h1 className="text-xl pl-16 font-bold h-14 bg-[#26a69d] text-white py-2 md:rounded-md w-full">
                        Employee Management
                    </h1>
                </div>}

                {/* Add Employee Button */}
                <div className="p-6 flex justify-start">
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="px-4 py-2 bg-[#26a69d] text-white rounded hover:bg-[#208888]"
                    >
                        Add Employee
                    </button>
                </div>

                {/* Employee List Table */}
                <div className="p-6">
                    {/* Wrapper to allow both horizontal and vertical scrolling */}
                    <div className="overflow-auto max-h-[70vh] border border-gray-300 rounded-md shadow-md">
                        <table className="min-w-full bg-white">
                            <thead className="bg-[#26a69d] text-white">
                                <tr>
                                    <th className="py-2 px-4 border whitespace-nowrap">#</th>
                                    <th className="py-2 px-4 border whitespace-nowrap">First Name</th>
                                    <th className="py-2 px-4 border whitespace-nowrap">Last Name</th>
                                    <th className="py-2 px-4 border whitespace-nowrap">Contact</th>
                                    <th className="py-2 px-4 border whitespace-nowrap">CNIC</th>
                                    <th className="py-2 px-4 border whitespace-nowrap">Email</th>
                                    <th className="py-2 px-4 border whitespace-nowrap">Password</th>
                                    <th className="py-2 px-4 border whitespace-nowrap">Role</th>
                                    <th className="py-2 px-4 border whitespace-nowrap">Address</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                {employees.map((employee, index) => (
                                    <tr key={employee.id} className="text-center border hover:bg-gray-100">
                                        <td className="py-2 px-4 border">{index + 1}</td>
                                        <td className="py-2 px-4 border">{employee.firstName}</td>
                                        <td className="py-2 px-4 border">{employee.lastName}</td>
                                        <td className="py-2 px-4 border">{employee.contact}</td>
                                        <td className="py-2 px-4 border">{employee.cnic}</td>
                                        <td className="py-2 px-4 border">{employee.email}</td>
                                        <td className="py-2 px-4 border">{employee.password}</td>
                                        <td className="py-2 px-4 border">{employee.role}</td>
                                        <td className="py-2 px-4 border">{employee.address}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Employee Form Modal */}
                <EmployeeForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onAdd={handleAddEmployee} />
            </div>
        </div>
    );
}

export default AddEmployee;
