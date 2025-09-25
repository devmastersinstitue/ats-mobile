import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Select from "react-select";

function DebitTransactionRecord() {
    const [isMobile] = useState(window.innerWidth < 768);
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [transactions, setTransactions] = useState([]);
    const [selectedDate, setSelectedDate] = useState("");
    const [employees, setEmployees] = useState([]);
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [roots, setRoots] = useState([]);
    const [selectedRoot, setSelectedRoot] = useState(null);

    useEffect(() => {
        // fetchTransactions();
        fetchEmployees();
        fetchRoots();
    }, []);

    // const fetchTransactions = async () => {
    //     try {
    //         const response = await axios.get("http://localhost:8080/transaction/debit-records");
    //         setTransactions(response.data);
    //     } catch (error) {
    //         console.error("Error fetching debit transactions:", error);
    //     }
    // };

    const fetchEmployees = async () => {
        try {
            const response = await axios.get("http://localhost:8080/employee");
            setEmployees(response.data);
        } catch (error) {
            console.error("Error fetching employees:", error);
        }
    };

    const fetchRoots = async () => {
        try {
            const response = await fetch("http://localhost:8080/root");
            if (!response.ok) {
                throw new Error("Failed to fetch roots");
            }
            const data = await response.json();
            setRoots(data);
        } catch (error) {
            console.error("Error fetching roots:", error);
        }
    };

    const formatToYYYYMMDD = (dateStr) => {
        const parts = dateStr.split("-"); // "23-03-2025-2:15 PM"
        if (parts.length < 3) return "";
        const day = parts[0];
        const month = parts[1];
        const year = parts[2].split(" ")[0];
        return `${year}-${month}-${day}`;
    };

    const calculateTotalAmount = () => {
        return transactions.reduce((total, tx) => total + (tx.amount || 0), 0);
    };

    const handleSearch = async () => {
        const params = new URLSearchParams();
        if (selectedEmployee) params.append("employeeCnic", selectedEmployee.value);
        if (selectedDate) {
            const dateObj = new Date(selectedDate);
            const day = String(dateObj.getDate()).padStart(2, '0');
            const month = String(dateObj.getMonth() + 1).padStart(2, '0');
            const year = dateObj.getFullYear();
            const formattedDate = `${day}-${month}-${year}`;
            params.append("date", formattedDate);
        }
        if (selectedRoot) params.append("rootName", selectedRoot.value);
        try {
            const response = await fetch(`http://localhost:8080/transaction/debit-records?${params.toString()}`);
            const data = await response.json();
            setTransactions(data);
        } catch (error) {
            console.error("Error searching debit transactions:", error);
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
                {!isMobile ? (
                    <div className="flex justify-center text-center">
                        <h1 className="text-2xl font-bold h-14 bg-[#26a69d] text-white py-2 md:rounded-md w-full">
                            Debit Transaction Record
                        </h1>
                    </div>
                ) : (
                    <div className="flex">
                        <h1 className="text-xl pl-16 font-bold h-14 bg-[#26a69d] text-white py-2 md:rounded-md w-full">
                            Debit Transaction Record
                        </h1>
                    </div>
                )}

                {/* Filters */}
                <div className="mt-5 px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
                    <input
                        type="date"
                        className="p-2 mt-4 border rounded h-9"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                    />
                    <div className="gap-y-10 auto-rows-min md:gap-x-6">
                        <fieldset>
                            <div className="pt-6 space-y-6 sm:pt-4 sm:space-y-4">
                                <Select
                                    width="175px"
                                    className="react-select"
                                    classNamePrefix="react-select"
                                    isSearchable={true}
                                    value={selectedEmployee}
                                    isClearable
                                    inputMode="text"
                                    menuPlacement="bottom"
                                    menuPosition="fixed"
                                    placeholder="Select Employee"
                                    options={employees.map((employee) => ({
                                        value: employee.cnic,
                                        label: `${employee.firstName}`,
                                    }))}
                                    backspaceRemovesValue={true}
                                    clearValue={() => ""}
                                    noOptionsMessage={() => "No employee found"}
                                    menuPortalTarget={document.querySelector("body")}
                                    onChange={(selectedOption) => {
                                        setSelectedEmployee(selectedOption);
                                    }}
                                />
                            </div>
                        </fieldset>
                    </div>
                    {/* <div className="gap-y-10 auto-rows-min md:gap-x-6">
                        <fieldset>
                            <div className="pt-6 space-y-6 sm:pt-4 sm:space-y-4">
                                <Select
                                    width="175px"
                                    className="react-select"
                                    classNamePrefix="react-select"
                                    isSearchable={true}
                                    value={selectedRoot}
                                    isClearable
                                    inputMode="text"
                                    menuPlacement="bottom"
                                    menuPosition="fixed"
                                    placeholder="Select Root"
                                    options={roots.map((root) => ({
                                        value: root.name,
                                        label: root.name,
                                    }))}
                                    backspaceRemovesValue={true}
                                    clearValue={() => ""}
                                    noOptionsMessage={() => "No root found"}
                                    menuPortalTarget={document.querySelector("body")}
                                    onChange={(selectedOption) => {
                                        setSelectedRoot(selectedOption);
                                    }}
                                />
                            </div>
                        </fieldset>
                    </div> */}
                    <button
                        className="bg-[#26a69d] hover:bg-[#2bbbad] text-white font-semibold py-2 px-4 rounded-md mt-4 h-[38px]"
                        onClick={handleSearch}
                    >
                        Search
                    </button>
                </div>

                {/* Total Amount */}
                <div className="px-6 text-lg font-semibold mb-2">
                    Total Amount: <span className="text-green-700">Rs {calculateTotalAmount()}</span>
                </div>

                {/* Table */}
                <div className="overflow-auto max-h-[70vh] border border-gray-300 rounded-md shadow-md">
                    <table className="min-w-full bg-white">
                        <thead className="bg-[#26a69d] text-white sticky top-0 z-9">
                            <tr>
                                <th className="py-2 px-4 border">Sr</th>
                                <th className="py-2 px-4 border">Date</th>
                                <th className="py-2 px-4 border">Shop Name</th>
                                <th className="py-2 px-4 border">Root</th>
                                <th className="py-2 px-4 border">Employee Name</th>
                                <th className="py-2 px-4 border">Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {transactions.map((tx, index) => (
                                <tr key={index} className="text-center hover:bg-gray-100">
                                    <td className="py-2 px-4 border">{index + 1}</td>
                                    <td className="py-2 px-4 border">{tx.date}</td>
                                    <td className="py-2 px-4 border">{tx.customer?.shopName}</td>
                                    <td className="py-2 px-4 border">{tx.customer?.root?.name}</td>
                                    <td className="py-2 px-4 border">{tx.employee?.firstName}</td>
                                    <td className="py-2 px-4 border">{tx.amount}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default DebitTransactionRecord;
