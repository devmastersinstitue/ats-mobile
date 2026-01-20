import React, { useState, useEffect } from "react";
import api from "../api";
import Navbar from "../components/Navbar";
import SaleProductModal from "./forms/SaleProductForm";
import SaleDetailsModal from "./forms/SaleDetailModal";

function Sale() {
    const [isMobile] = useState(window.innerWidth < 768);
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDetailModelOpen, setIsDetailModelOpen] = useState(false);
    const [sales, setSales] = useState([]); // All Sales
    const [filteredSales, setFilteredSales] = useState([]); // Filtered Sales
    const [selectedSale, setSelectedSale] = useState(null);

    // Filter state variables
    const [filterDate, setFilterDate] = useState("");
    const [filterBillNumber, setFilterBillNumber] = useState("");
    const [filterEmployee, setFilterEmployee] = useState("");
    const [filterRoot, setFilterRoot] = useState("");
    const [filterShopName, setFilterShopName] = useState("");
    const [filterTotalBill, setFilterTotalBill] = useState("");

    useEffect(() => {
        fetchSales();
    }, [isModalOpen]);

    const fetchSales = async () => {
        try {
            const response = await api.get("/sale", {
                params: { isApproval: true, approvedStatus: "APPROVED" },
            });
            setSales(response.data);
            setFilteredSales(response.data); // Initially, display all sales
        } catch (error) {
            console.error("Error fetching sales:", error);
        }
    };

    const handleSaleProduct = async (newSale) => {
        try {
            await api.post("/sale", newSale);
            fetchSales();
        } catch (error) {
            console.error("Error selling product:", error);
        }
    };

    // Function to filter sales based on input fields
    useEffect(() => {
        const filtered = sales.filter((sale) => {
            const saleDate = sale.date ? formatToYYYYMMDD(sale.date) : ""; // Convert sale.date to YYYY-MM-DD

            return (
                (filterDate ? saleDate === filterDate : true) &&
                (filterBillNumber ? sale.billNumber.includes(filterBillNumber) : true) &&
                (filterEmployee ? sale.employeeName.toLowerCase().includes(filterEmployee.toLowerCase()) : true) &&
                (filterRoot ? sale.customerModel?.root?.toLowerCase().includes(filterRoot.toLowerCase()) : true) &&
                (filterShopName ? sale.customerModel?.shopName?.toLowerCase().includes(filterShopName.toLowerCase()) : true) &&
                (filterTotalBill ? sale.totalBill.toString().includes(filterTotalBill) : true)
            );
        });

        setFilteredSales(filtered);
    }, [filterDate, filterBillNumber, filterEmployee, filterRoot, filterShopName, filterTotalBill, sales]);

    // 🔄 Function to Convert "23-03-2025-2:15 PM" → "2025-03-23"
    const formatToYYYYMMDD = (dateStr) => {
        const parts = dateStr.split("-"); // ["23", "03", "2025", "2:15 PM"]
        if (parts.length < 3) return "";

        const day = parts[0];
        const month = parts[1];
        const year = parts[2].split(" ")[0]; // Remove time part

        return `${year}-${month}-${day}`; // Convert to YYYY-MM-DD
    };

    // Helper function to check if any filter is applied
    const anyFilterApplied = () => {
        return filterDate || filterBillNumber || filterEmployee || filterRoot || filterShopName || filterTotalBill;
    };

    return (
        <div>
            <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

            <div className={`flex-1 h-full md:pt-1 md:pl-6 md:mr-1 md:mt-0 transition-all duration-300 ${sidebarOpen ? "md:ml-64" : "md:ml-16 ml-0"
                }`}>
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

                {/* FILTER INPUTS */}
                <div className="px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
                    <input
                        type="date"
                        className="p-2 border rounded"
                        value={filterDate}
                        onChange={(e) => setFilterDate(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Bill Number"
                        className="p-2 border rounded"
                        value={filterBillNumber}
                        onChange={(e) => setFilterBillNumber(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Employee Name"
                        className="p-2 border rounded"
                        value={filterEmployee}
                        onChange={(e) => setFilterEmployee(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Root"
                        className="p-2 border rounded"
                        value={filterRoot}
                        onChange={(e) => setFilterRoot(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Shop Name"
                        className="p-2 border rounded"
                        value={filterShopName}
                        onChange={(e) => setFilterShopName(e.target.value)}
                    />
                    <input
                        type="number"
                        placeholder="Total Bill"
                        className="p-2 border rounded"
                        value={filterTotalBill}
                        onChange={(e) => setFilterTotalBill(e.target.value)}
                    />

                </div>

                {/* Sales List Table */}
                <div className="p-6">
                    <div className="overflow-auto max-h-[70vh] border border-gray-300 rounded-md shadow-md">
                        <table className="min-w-full bg-white">
                            <thead className="bg-[#26a69d] text-white sticky top-0 z-9">
                                <tr>
                                    <th className="py-2 px-4 border">Sr</th>
                                    <th className="py-2 px-4 border">Date</th>
                                    <th className="py-2 px-4 border">Bill Number</th>
                                    <th className="py-2 px-4 border">Employee Name</th>
                                    <th className="py-2 px-4 border">Root</th>
                                    <th className="py-2 px-4 border">Customer Info</th>
                                    <th className="py-2 px-4 border">Total Bill</th>
                                    <th className="py-2 px-4 border">Remaining Bill</th>
                                    <th className="py-2 px-4 border">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredSales.map((sale, index) => (
                                    <tr key={sale.id} className="text-center border hover:bg-gray-100">
                                        <td className="py-2 px-4 border">{index + 1}</td>
                                        <td className="py-2 px-4 border">{sale.date}</td>
                                        <td className="py-2 px-4 border">{sale.billNumber}</td>
                                        <td className="py-2 px-4 border">{sale.employeeName}</td>
                                        <td className="py-2 px-4 border">{sale.customerModel?.root}</td>
                                        <td className="py-2 px-4 border">{sale.customerModel?.firstName} {sale.customerModel?.lastName} - {sale.customerModel?.shopName}</td>
                                        <td className="py-2 px-4 border">{sale.totalBill}</td>
                                        <td className="py-2 px-4 border">{sale.remainingBill}</td>
                                        <td className="py-2 px-4 border">
                                            <button className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                                                onClick={() => { setSelectedSale(sale); setIsDetailModelOpen(true); }}>
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
