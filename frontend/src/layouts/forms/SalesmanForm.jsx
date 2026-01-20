import React, { useState } from "react";
import api from "../../api";

export default function SalesmanForm({ isOpen, onClose }) {
    const [saleManModel, setSaleManModel] = useState({
        id:"",
        name: "",
        contact: "",
        cnic: "",
        address: "",
        password: "",
        email: ""
    });

    const handleChange = (e) => {
        setSaleManModel({ ...saleManModel, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await api.post("/sale-man/create", saleManModel);
    
            if (!response.ok) {
                throw new Error("Failed to create salesman");
            }
    
            const newSalesman = await response.json(); // Parse response
            if (response.ok) {
                alert("Salesman added successfully!");
                setSaleManModel({
                    name: "",
                    contact: "",
                    cnic: "",
                    address: "",
                    password: "",
                    email: ""
                });
                onClose(); // Close modal after successful submission
            } else {
                alert("Failed to add salesman");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Something went wrong");
        }
    };

    if (!isOpen) return null; // Hide modal if not open

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl font-bold text-center text-[#26a69d] mb-4">Add Salesman</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        name="name"
                        value={saleManModel.name}
                        onChange={handleChange}
                        placeholder="Name"
                        className="w-full p-2 border rounded"
                        required
                    />
                    <input
                        type="tel"
                        name="contact"
                        value={saleManModel.contactNumber}
                        onChange={handleChange}
                        placeholder="Contact Number"
                        className="w-full p-2 border rounded"
                        required
                    />
                    <input
                        type="text"
                        name="cnic"
                        value={saleManModel.cnic}
                        onChange={handleChange}
                        placeholder="CNIC"
                        className="w-full p-2 border rounded"
                        required
                    />
                    <input
                        type="text"
                        name="address"
                        value={saleManModel.address}
                        onChange={handleChange}
                        placeholder="Address"
                        className="w-full p-2 border rounded"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        value={saleManModel.email}
                        onChange={handleChange}
                        placeholder="Email"
                        className="w-full p-2 border rounded"
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        value={saleManModel.password}
                        onChange={handleChange}
                        placeholder="Password"
                        className="w-full p-2 border rounded"
                        required
                    />
                    <div className="flex justify-between">
                        <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-400 text-white rounded">
                            Cancel
                        </button>
                        <button type="submit" className="px-4 py-2 bg-[#26a69d] text-white rounded hover:bg-[#208888]">
                            Add Salesman
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
