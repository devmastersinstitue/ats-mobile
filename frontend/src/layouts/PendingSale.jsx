import React, { useState, useEffect } from "react";
import axios from "axios";
import { PencilIcon, CheckIcon, XIcon } from "@heroicons/react/solid";
import Navbar from "../components/Navbar";
import SaleProductModal from "./forms/SaleProductForm";
import UpdateSaleForm from "./forms/UpdateSaleForm";

function PendingSale() {
    const [isMobile] = useState(window.innerWidth < 768);
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedSale, setSelectedSale] = useState(null);
    const [sales, setSales] = useState([]);

    // Get user role and name from localStorage
    const userRole = localStorage.getItem("role");
    const userName = localStorage.getItem("userName");

    useEffect(() => {
        fetchSales();
    }, [isModalOpen]);

    const fetchSales = async () => {
        try {
            const response = await axios.get("http://localhost:8080/sale", {
                params: {
                    isApproval: false,
                    approvedStatus: "PENDING"
                },
            });
            setSales(response.data);
        } catch (error) {
            console.error("Error fetching pending sales:", error);
        }
    };

    const handleSaleAction = async (billNumber, status) => {
        try {
            await axios.put(`http://localhost:8080/sale/status`, null, {
                params: { billNumber, status, userRole, userName }, // Include userRole & userName
            });
            fetchSales();
        } catch (error) {
            console.error("Error updating sale status:", error);
        }
    };

    const handleEditSale = (sale) => {
        setSelectedSale(sale);
        setIsModalOpen(true);
    };

    return (
        <div>
            <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            <div className={`flex-1 h-full md:pt-1 md:pl-6 md:mr-1 md:mt-0 transition-all duration-300 ${
                    sidebarOpen ? "md:ml-64" : "md:ml-16 ml-0"
                }`}>
                <div className="flex justify-center text-center">
                    <h1 className="text-2xl font-bold h-14 bg-[#26a69d] text-white py-2 md:rounded-md w-full">
                        Pending Sales Management
                    </h1>
                </div>
                <div className="p-6">
                    <div className="overflow-auto max-h-[70vh] border border-gray-300 rounded-md shadow-md">
                        <table className="min-w-full bg-white">
                            <thead className="bg-[#26a69d] text-white sticky top-0 z-10">
                                <tr>
                                    <th className="py-2 px-4 border">Sr</th>
                                    <th className="py-2 px-4 border">Date</th>
                                    <th className="py-2 px-4 border">Bill Number</th>
                                    <th className="py-2 px-4 border">Employee Name</th>
                                    <th className="py-2 px-4 border">Root</th>
                                    <th className="py-2 px-4 border">Customer Info</th>
                                    <th className="py-2 px-4 border">Remaining Amount</th>
                                    <th className="py-2 px-4 border">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {sales.map((sale, index) => (
                                    <tr key={sale.id} className="text-center border hover:bg-gray-100">
                                        <td className="py-2 px-4 border">{index + 1}</td>
                                        <td className="py-2 px-4 border">{sale.date}</td>
                                        <td className="py-2 px-4 border">{sale.billNumber}</td>
                                        <td className="py-2 px-4 border">{sale.employeeName}</td>
                                        <td className="py-2 px-4 border">{sale.customerModel?.root}</td>
                                        <td className="py-2 px-4 border">{sale.customerModel.firstName} {sale.customerModel.lastName} - {sale.customerModel.shopName}</td>
                                        <td className="py-2 px-4 border">{sale.remainingBill}</td>
                                        <td className="py-2 px-4 border flex justify-center space-x-2">
                                            <CheckIcon className="w-6 h-6 text-green-500 cursor-pointer" onClick={() => handleSaleAction(sale.billNumber, "APPROVED")} />
                                            <XIcon className="w-6 h-6 text-red-500 cursor-pointer" onClick={() => handleSaleAction(sale.billNumber, "REJECTED")} />
                                            <PencilIcon className="w-6 h-6 text-blue-500 cursor-pointer" onClick={() => handleEditSale(sale)} />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <UpdateSaleForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} billData={selectedSale} />
            </div>
        </div>
    );
}

export default PendingSale;
