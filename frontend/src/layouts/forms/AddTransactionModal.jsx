import React, { useState, useEffect } from "react";
import axios from "axios";
import Select from "react-select";

export default function AddTransactionModal({ isOpen, onClose, onSuccess }) {
    const [customers, setCustomers] = useState([]);
    const [selectedCustomer, setSelectedCustomer] = useState(null);
    const [amount, setAmount] = useState(0);

    const userName = localStorage.getItem("userName");
    const userRole = localStorage.getItem("role");
    const todayDate = new Date().toLocaleDateString("en-GB").replace(/\//g, "-");
    const currentTime = new Date().toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
    });

    useEffect(() => {
        if (isOpen) {
            setSelectedCustomer(null);
            setAmount(0);
            fetchCustomers();
        }
    }, [isOpen]);

    const fetchCustomers = async () => {
        try {
            const response = await axios.get("http://localhost:8080/customer");
            setCustomers(response.data);
        } catch (error) {
            console.error("Error fetching customers:", error);
        }
    };

    const handleSaveTransaction = async () => {
        if (!selectedCustomer || amount <= 0) {
            alert("Please select a customer and enter a valid amount.");
            return;
        }

        const transactionData = {
            customerCnic: selectedCustomer.value,
            amount,
            employeeName: userName,
            employeeRole: userRole,
            dateTime: `${todayDate} - ${currentTime}`,
            transactionType: "DEBIT",
        };

        try {
            const response = await axios.post("http://localhost:8080/transaction/debit", transactionData, {
                headers: { "Content-Type": "application/json" },
            });
            
            const message = response.data;
            console.log(message);
            
            if (message != "Transaction created successfully") {
                alert("Error: " + message);
            }
            else{
                alert("Success: " + message);
            }
            onSuccess();
            onClose();
        } catch (error) {
            console.error("Error saving transaction:", error.response?.data || error.message);
            alert("Failed to save transaction. Check console for details.");
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl font-bold text-center text-[#26a69d] mb-4">Add Transaction</h2>

                <p>Date: <b>{todayDate}</b></p>
                <p>Time: <b>{currentTime}</b></p>
                <p>Employee Name: <b>{userName}</b></p>
                <p>Role: <b>{userRole}</b></p>

                <div className="gap-y-10 auto-rows-min md:gap-x-6">
                    <fieldset>
                        <div className="pt-6 space-y-6 sm:pt-4 sm:space-y-4">
                            <Select
                                width="175px"
                                className="react-select"
                                classNamePrefix="react-select"
                                isSearchable={true}
                                value={selectedCustomer}
                                isClearable
                                inputMode="text"
                                menuPlacement="bottom"
                                menuPosition="fixed"
                                placeholder="Select Customer"
                                options={customers.map((customer) => ({
                                    value: customer.cnic,
                                    label: `${customer.shopName}-${customer.root}`,
                                }))}
                                backspaceRemovesValue={true}
                                clearValue={() => ""}
                                noOptionsMessage={() => "No customers found"}
                                menuPortalTarget={document.querySelector("body")}
                                onChange={(selectedOption) => {
                                    // const customer = customers.find((c) => c.id === selectedOption?.value);
                                    setSelectedCustomer(selectedOption);
                                }}
                            />
                        </div>
                    </fieldset>
                </div>

                <input
                    type="number"
                    className="w-full p-2 border rounded mb-4"
                    placeholder="Enter Amount"
                    value={amount}
                    onChange={(e) => setAmount(+e.target.value)}
                    min="0"
                />

                <div className="flex justify-between">
                    <button
                        className="px-4 py-2 bg-gray-400 text-white rounded"
                        onClick={onClose}
                    >
                        Cancel
                    </button>
                    <button
                        className="px-4 py-2 bg-[#26a69d] text-white rounded"
                        onClick={handleSaveTransaction}
                    >
                        Save Transaction
                    </button>
                </div>
            </div>
        </div>
    );
}
