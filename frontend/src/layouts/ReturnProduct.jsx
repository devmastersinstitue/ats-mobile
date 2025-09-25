import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import ReturnProductModal from "./forms/ReturnProductModal";
// import ReturnDetailsModal from "./forms/ReturnDetailModal";

function ReturnProduct() {
    const [isMobile] = useState(window.innerWidth < 768);
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDetailModelOpen, setIsDetailModelOpen] = useState(false);
    const [returns, setReturns] = useState([]); // All Returns
    const [filteredReturns, setFilteredReturns] = useState([]); // Filtered Returns
    const [selectedReturn, setSelectedReturn] = useState(null);

    // Filter state variables
    const [filterDate, setFilterDate] = useState("");
    const [filterBillNumber, setFilterBillNumber] = useState("");
    const [filterEmployee, setFilterEmployee] = useState("");
    const [filterRoot, setFilterRoot] = useState("");
    const [filterShopName, setFilterShopName] = useState("");
    const [filterTotalBill, setFilterTotalBill] = useState("");

    useEffect(() => {
        fetchReturns();
    }, [isModalOpen]);

    const fetchReturns = async () => {
        try {
            const response = await axios.get("http://localhost:8080/return", {
                params: { isApproval: true, approvedStatus: "APPROVED" },
            });
            setReturns(response.data);
            setFilteredReturns(response.data);
        } catch (error) {
            console.error("Error fetching returns:", error);
        }
    };

    const handleReturnProduct = async (newReturn) => {
        try {
            await axios.post("http://localhost:8080/return", newReturn);
            fetchReturns();
        } catch (error) {
            console.error("Error returning product:", error);
        }
    };

    useEffect(() => {
        const filtered = returns.filter((ret) => {
            const retDate = ret.date ? formatToYYYYMMDD(ret.date) : "";
            return (
                (filterDate ? retDate === filterDate : true) &&
                (filterBillNumber ? ret.billNumber.includes(filterBillNumber) : true) &&
                (filterEmployee ? ret.employeeName.toLowerCase().includes(filterEmployee.toLowerCase()) : true) &&
                (filterRoot ? ret.customerModel?.root?.toLowerCase().includes(filterRoot.toLowerCase()) : true) &&
                (filterShopName ? ret.customerModel?.shopName?.toLowerCase().includes(filterShopName.toLowerCase()) : true) &&
                (filterTotalBill ? ret.totalBill.toString().includes(filterTotalBill) : true)
            );
        });
        setFilteredReturns(filtered);
    }, [filterDate, filterBillNumber, filterEmployee, filterRoot, filterShopName, filterTotalBill, returns]);

    const formatToYYYYMMDD = (dateStr) => {
        const parts = dateStr.split("-");
        if (parts.length < 3) return "";
        const day = parts[0];
        const month = parts[1];
        const year = parts[2].split(" ")[0];
        return `${year}-${month}-${day}`;
    };

    const anyFilterApplied = () => {
        return filterDate || filterBillNumber || filterEmployee || filterRoot || filterShopName || filterTotalBill;
    };

    return (
        <div>
            <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

            <div className={`flex-1 h-full md:pt-1 md:pl-6 md:mr-1 md:mt-0 transition-all duration-300 ${sidebarOpen ? "md:ml-64" : "md:ml-16 ml-0"}`}>
                {!isMobile && <div className="flex justify-center text-center">
                    <h1 className="text-2xl font-bold h-14 bg-[#26a69d] text-white py-2 md:rounded-md w-full">
                        Product Return Management
                    </h1>
                </div>}

                {isMobile && <div className="flex">
                    <h1 className="text-xl pl-16 font-bold h-14 bg-[#26a69d] text-white py-2 md:rounded-md w-full">
                        Product Return Management
                    </h1>
                </div>}

                <div className="p-6">
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="px-4 py-2 bg-[#26a69d] text-white rounded hover:bg-[#208888]"
                    >
                        Return Product
                    </button>
                </div>

                <div className="px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
                    <input type="date" className="p-2 border rounded" value={filterDate} onChange={(e) => setFilterDate(e.target.value)} />
                    <input type="text" placeholder="Bill Number" className="p-2 border rounded" value={filterBillNumber} onChange={(e) => setFilterBillNumber(e.target.value)} />
                    <input type="text" placeholder="Employee Name" className="p-2 border rounded" value={filterEmployee} onChange={(e) => setFilterEmployee(e.target.value)} />
                    <input type="text" placeholder="Root" className="p-2 border rounded" value={filterRoot} onChange={(e) => setFilterRoot(e.target.value)} />
                    <input type="text" placeholder="Shop Name" className="p-2 border rounded" value={filterShopName} onChange={(e) => setFilterShopName(e.target.value)} />
                    <input type="number" placeholder="Total Bill" className="p-2 border rounded" value={filterTotalBill} onChange={(e) => setFilterTotalBill(e.target.value)} />
                </div>

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
                                {filteredReturns.map((ret, index) => (
                                    <tr key={ret.id} className="text-center border hover:bg-gray-100">
                                        <td className="py-2 px-4 border">{index + 1}</td>
                                        <td className="py-2 px-4 border">{ret.date}</td>
                                        <td className="py-2 px-4 border">{ret.billNumber}</td>
                                        <td className="py-2 px-4 border">{ret.employeeName}</td>
                                        <td className="py-2 px-4 border">{ret.customerModel?.root}</td>
                                        <td className="py-2 px-4 border">{ret.customerModel?.firstName} {ret.customerModel?.lastName} - {ret.customerModel?.shopName}</td>
                                        <td className="py-2 px-4 border">{ret.totalBill}</td>
                                        <td className="py-2 px-4 border">{ret.remainingBill}</td>
                                        <td className="py-2 px-4 border">
                                            <button className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                                                onClick={() => { setSelectedReturn(ret); setIsDetailModelOpen(true); }}>
                                                View
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <ReturnProductModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onAdd={handleReturnProduct} />
                {/* <ReturnDetailsModal isOpen={isDetailModelOpen} onClose={() => setIsDetailModelOpen(false)} ret={selectedReturn} /> */}
            </div>
        </div>
    );
}

export default ReturnProduct;
