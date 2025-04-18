import React, { useState } from "react";

export default function ExpensesForm({ isOpen, onClose }) {
    const [expenseModel, setExpenseModel] = useState({
        name: "",
        amount: "",
        remarks: "",
        date: new Date().toLocaleDateString("en-GB").split("/").join("-") // Format: DD-MM-YYYY
    });

    const handleChange = (e) => {
        setExpenseModel({ ...expenseModel, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(expenseModel);
        try {
            const response = await fetch("http://localhost:8080/expenses", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(expenseModel),
            });
    
            if (!response.ok) {
                throw new Error("Failed to create expense");
            }
    
            const newExpense = await response.json();
            console.log("Expense added:", newExpense);
            alert("Expense added successfully!");
            setExpenseModel({
                name: "",
                amount: "",
                remarks: "",
                date: new Date().toLocaleDateString("en-GB").split("/").join("-")
            });
            onClose(); // Close modal after successful submission
        } catch (error) {
            console.error("Error:", error);
            alert("Something went wrong");
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl font-bold text-center text-[#26a69d] mb-4">Add Expense</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input 
                        type="text" 
                        name="name" 
                        value={expenseModel.name} 
                        onChange={handleChange} 
                        placeholder="Expense Name" 
                        className="w-full p-2 border rounded" 
                        required 
                    />
                    <input 
                        type="number" 
                        name="amount" 
                        value={expenseModel.amount} 
                        onChange={handleChange} 
                        placeholder="Amount" 
                        className="w-full p-2 border rounded" 
                        required 
                    />
                    <input 
                        type="text" 
                        name="remarks" 
                        value={expenseModel.remarks} 
                        onChange={handleChange} 
                        placeholder="Remarks" 
                        className="w-full p-2 border rounded" 
                    />
                    <input 
                        type="text" 
                        name="date" 
                        value={expenseModel.date} 
                        className="w-full p-2 border rounded bg-gray-100 cursor-not-allowed" 
                        disabled 
                    />
                    <div className="flex justify-between">
                        <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-400 text-white rounded">Cancel</button>
                        <button type="submit" className="px-4 py-2 bg-[#26a69d] text-white rounded hover:bg-[#208888]">Add Expense</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
