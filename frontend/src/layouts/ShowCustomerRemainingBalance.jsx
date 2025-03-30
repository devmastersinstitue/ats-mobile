import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

function ShowCustomerRemainingBalance() {
    const [isMobile] = useState(window.innerWidth < 768);
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [customers, setCustomers] = useState([]);
    const today = new Date().toLocaleDateString("en-GB").split("/").join("-"); // Format: DD-MM-YYYY

    console.log(today);
    
    useEffect(() => {
        fetchCustomers();
    }, [setIsModalOpen, isModalOpen]);

    const fetchCustomers = async () => {
        try {
            const response = await axios.get("http://localhost:8080/customer");
            console.log(response.data);
            
            setCustomers(response.data);
        } catch (error) {
            console.error("Error fetching customers:", error);
        }
    };

    return (
        <div>
            <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

            <div
                className={`flex-1 h-full md:pt-1 md:pl-6 md:mr-1 md:mt-0 transition-all duration-300 ${
                    sidebarOpen ? "md:ml-64" : "md:ml-16 ml-0"
                }`}
            >
                <div className="flex justify-center text-center">
                    <h1 className="text-2xl font-bold h-14 bg-[#26a69d] text-white py-2 md:rounded-md w-full">
                        Customer Remaining Balance
                    </h1>
                </div>

                <div className="p-6 flex justify-start">
                    
                </div>

                <div className="p-6">
                    <div className="overflow-x-auto overflow-y-auto max-h-[70vh] border border-gray-300 rounded-md shadow-md">
                        <table className="min-w-full bg-white">
                            <thead className="bg-[#26a69d] text-white sticky top-0 z-10">
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
                                    <th className="py-2 px-4 border whitespace-nowrap">Last Paid Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {customers.map((customer, index) => {
                                    const isOverdue = customer.lastPaidDate < today || customer.lastPaidDate == "" ? true : false;
                                    console.log(customer.paidLastDate);
                                    
                                    return (
                                        <tr key={customer.id} className={`text-center border hover:bg-gray-100 ${isOverdue ? "text-red-500" : ""}`}>
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
                                            <td className="py-2 px-4 border">{customer.lastPaidDate}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShowCustomerRemainingBalance;
