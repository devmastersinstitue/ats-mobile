import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import TransactionDetailsModal from "./TransactionDetailsModal";
import AddTransactionModal from "./forms/AddTransactionModal";

function Transaction() {
    const [isMobile] = useState(window.innerWidth < 768);
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [transactions, setTransactions] = useState([]);
    const [filteredTransactions, setFilteredTransactions] = useState([]);
    const [selectedTransaction, setSelectedTransaction] = useState(null);
    const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [customerFilter, setCustomerFilter] = useState("");
    const [rootFilter, setRootFilter] = useState("");

    // 🚀 Fetch transaction list from backend
    useEffect(() => {
        fetchTransactions();
    }, []);

    useEffect(() => {
        applyFilters();
    }, [customerFilter, rootFilter, transactions]);

    const fetchTransactions = async () => {
        try {
            const response = await axios.get("http://localhost:8080/transaction");
            setTransactions(response.data);
        } catch (error) {
            console.error("Error fetching Transactions:", error);
        }
    };

    const applyFilters = () => {
        const filtered = transactions.filter((t) => {
            const fullName = `${t.customer?.firstName ?? ""} ${t.customer?.lastName ?? ""}`.toLowerCase();
            const rootName = t.customer?.root?.name?.toLowerCase() || "";
            return fullName.includes(customerFilter.toLowerCase()) && rootName.includes(rootFilter.toLowerCase());
        });
        setFilteredTransactions(filtered);
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
                {!isMobile && (
                    <div className="flex justify-center text-center">
                        <h1 className="text-2xl font-bold h-14 bg-[#26a69d] text-white py-2 md:rounded-md w-full">
                            Transaction Management
                        </h1>
                    </div>
                )}

                {isMobile && (
                    <div className="flex">
                        <h1 className="text-xl pl-16 font-bold h-14 bg-[#26a69d] text-white py-2 md:rounded-md w-full">
                            Transaction Management
                        </h1>
                    </div>
                )}

                <div className="p-6">
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="px-4 py-2 bg-[#26a69d] text-white rounded hover:bg-[#208888]"
                    >
                        Debit Amount
                    </button>
                </div>

                {/* Filters */}
                <div className="px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
                    <input
                        type="text"
                        placeholder="Filter by Customer Name"
                        className="p-2 border rounded"
                        value={customerFilter}
                        onChange={(e) => setCustomerFilter(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Filter by Root"
                        className="p-2 border rounded"
                        value={rootFilter}
                        onChange={(e) => setRootFilter(e.target.value)}
                    />
                </div>

                {/* Transaction Table */}
                <div className="p-6">
                    <div className="overflow-auto max-h-[70vh] border border-gray-300 rounded-md shadow-md">
                        <table className="min-w-full bg-white">
                            <thead className="bg-[#26a69d] text-white sticky top-0 z-9">
                                <tr>
                                    <th className="py-2 px-4 border">Sr</th>
                                    <th className="py-2 px-4 border">Customer</th>
                                    <th className="py-2 px-4 border">Root</th>
                                    <th className="py-2 px-4 border">Remaining Amount</th>
                                    <th className="py-2 px-4 border">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredTransactions.map((transaction, index) => (
                                    <tr key={transaction.id} className="text-center border hover:bg-gray-100">
                                        <td className="py-2 px-4 border">{index + 1}</td>
                                        <td className="py-2 px-4 border">
                                            {transaction.customer?.shopName}
                                        </td>
                                        <td className="py-2 px-4 border">
                                            {transaction.customer?.root?.name || "N/A"}
                                        </td>
                                        <td className="py-2 px-4 border">
                                            {transaction.customer?.remainingAmount}
                                        </td>
                                        <td className="py-2 px-4 border">
                                            <button
                                                className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                                                onClick={() => {
                                                    setSelectedTransaction(transaction);
                                                    setIsDetailModalOpen(true);
                                                }}
                                            >
                                                View
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                                {filteredTransactions.length === 0 && (
                                    <tr>
                                        <td colSpan="4" className="text-center py-4 text-gray-500">
                                            No matching records found.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Transaction Details Modal */}
                <TransactionDetailsModal
                    isOpen={isDetailModalOpen}
                    onClose={() => setIsDetailModalOpen(false)}
                    transaction={selectedTransaction}
                />

                <AddTransactionModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    onSuccess={fetchTransactions}
                />
            </div>
        </div>
    );
}

export default Transaction;
