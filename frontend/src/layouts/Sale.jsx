import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import SaleProductModal from "./forms/SaleProductForm";
import SaleDetailsModal from "./forms/SaleDetailModal";

function Sale() {
    const [isMobile] = useState(window.innerWidth < 768);
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDetailModelOpen, setIsDetailModelOpen] = useState(false);
    const [sales, setSales] = useState([]); // Sales list
    const [selectedSale, setSelectedSale] = useState(null);

    // 🚀 Fetch sales list from backend
    useEffect(() => {
        fetchSales();
    }, [isModalOpen]);

    const fetchSales = async () => {
        try {
            const response = await axios.get("http://localhost:8080/sale", {
                params: {
                    isApproval: true,
                    approvedStatus: "APPROVED"
                }
            });
            setSales(response.data); // Update state with API data
        } catch (error) {
            console.error("Error fetching sales:", error);
        }
    };

    const handleSaleProduct = async (newSale) => {
        try {
            await axios.post("http://localhost:8080/sale", newSale);
            fetchSales();
        } catch (error) {
            console.error("Error saling product:", error);
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
                        Sales Management
                    </h1>
                </div>}

                {isMobile && <div className="flex">
                    <h1 className="text-xl pl-16 font-bold h-14 bg-[#26a69d] text-white py-2 md:rounded-md w-full">
                        Sales Management
                    </h1>
                </div>}

                <div className="p-6">
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="px-4 py-2 bg-[#26a69d] text-white rounded hover:bg-[#208888]"
                    >
                        Sale Product
                    </button>
                </div>

                {/* Sales List Table */}
                <div className="p-6">
                    <div className="overflow-auto max-h-[70vh] border border-gray-300 rounded-md shadow-md">
                        <table className="min-w-full bg-white">
                            <thead className="bg-[#26a69d] text-white">
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
                                        <td className="py-2 px-4 border">
                                            <button 
                                                className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                                                onClick={() => {setSelectedSale(sale);
                                                    setIsDetailModelOpen(true);
                                                }
                                                    
                                                }
                                            >
                                                View
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <SaleProductModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onAdd={handleSaleProduct} />
                <SaleDetailsModal isOpen={isDetailModelOpen} onClose={() => setIsDetailModelOpen(false)} sale={selectedSale} />
                
            </div>
        </div>
    );
}

export default Sale;
