import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import ExpensesForm from "./forms/ExpenseForm";

function AddExpenses() {
    const [isMobile] = useState(window.innerWidth < 768);
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        fetchExpenses();
    }, [isModalOpen]);

    const fetchExpenses = async () => {
        try {
            const response = await axios.get("http://localhost:8080/expenses");
            setExpenses(response.data);
        } catch (error) {
            console.error("Error fetching expenses:", error);
        }
    };

    const handleAddExpense = async (newExpense) => {
        try {
            await axios.post("http://localhost:8080/expenses", newExpense);
            fetchExpenses();
        } catch (error) {
            console.error("Error adding expense:", error);
        }
    };

    return (
        <div>
            <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

            <div className={`flex-1 h-full md:pt-1 md:pl-6 md:mr-1 md:mt-0 transition-all duration-300 ${
                    sidebarOpen ? "md:ml-64" : "md:ml-16 ml-0"
                }`}>
                {!isMobile && <div className="flex justify-center text-center">
                    <h1 className="text-2xl font-bold h-14 bg-[#26a69d] text-white py-2 md:rounded-md w-full">
                        Expense Management
                    </h1>
                </div>}

                {isMobile && <div className="flex">
                    <h1 className="text-xl pl-16 font-bold h-14 bg-[#26a69d] text-white py-2 md:rounded-md w-full">
                        Expense Management
                    </h1>
                </div>}

                <div className="p-6 flex justify-start">
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="px-4 py-2 bg-[#26a69d] text-white rounded hover:bg-[#208888]"
                    >
                        Add Expense
                    </button>
                </div>

                <div className="p-6">
                    <div className="overflow-auto max-h-[70vh] border border-gray-300 rounded-md shadow-md">
                        <table className="min-w-full bg-white">
                            <thead className="bg-[#26a69d] text-white sticky top-0 z-9">
                                <tr>
                                    <th className="py-2 px-4 border whitespace-nowrap">#</th>
                                    <th className="py-2 px-4 border whitespace-nowrap">Name</th>
                                    <th className="py-2 px-4 border whitespace-nowrap">Amount</th>
                                    <th className="py-2 px-4 border whitespace-nowrap">Remarks</th>
                                    <th className="py-2 px-4 border whitespace-nowrap">Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {expenses.map((expense, index) => (
                                    <tr key={expense.id} className="text-center border hover:bg-gray-100">
                                        <td className="py-2 px-4 border">{index + 1}</td>
                                        <td className="py-2 px-4 border">{expense.name}</td>
                                        <td className="py-2 px-4 border">{expense.amount}</td>
                                        <td className="py-2 px-4 border">{expense.remarks}</td>
                                        <td className="py-2 px-4 border">{expense.date}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <ExpensesForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onAdd={handleAddExpense} />
            </div>
        </div>
    );
}

export default AddExpenses;