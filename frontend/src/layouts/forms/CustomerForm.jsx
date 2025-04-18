import React, { useState, useEffect } from "react";

export default function CustomerForm({ isOpen, onClose }) {
    const [customerModel, setCustomerModel] = useState({
        firstName: "",
        lastName: "",
        contact: "",
        cnic: "",
        email: "",
        root: "",
        shopName: "",
        address: "",
        remainingAmount: ""
    });
    const [roots, setRoots] = useState([]);

    useEffect(() => {
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

        fetchRoots();
    }, []);

    const handleChange = (e) => {
        setCustomerModel({ ...customerModel, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:8080/customer", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(customerModel),
            });
            const message = await response.text();
            
            if (!response.ok) {
                alert("Error: " + message);
            }
            else{
                alert("Success: " + message);
            }
            setCustomerModel({
                firstName: "",
                lastName: "",
                contact: "",
                cnic: "",
                email: "",
                root: "",
                shopName: "",
                address: "",
                remainingAmount: ""
            });
            onClose(); // Close modal after successful submission
        } catch (error) {
            alert("Something went wrong");
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl font-bold text-center text-[#26a69d] mb-4">Add Customer</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input type="text" name="firstName" value={customerModel.firstName} onChange={handleChange} placeholder="First Name" className="w-full p-2 border rounded" required />
                    <input type="text" name="lastName" value={customerModel.lastName} onChange={handleChange} placeholder="Last Name" className="w-full p-2 border rounded" required />
                    <input type="tel" name="contact" value={customerModel.contact} onChange={handleChange} placeholder="Contact Number" className="w-full p-2 border rounded" required />
                    <input type="text" name="cnic" value={customerModel.cnic} onChange={handleChange} placeholder="CNIC" className="w-full p-2 border rounded" required />
                    <input type="email" name="email" value={customerModel.email} onChange={handleChange} placeholder="Email" className="w-full p-2 border rounded" required />
                    <select name="root" value={customerModel.root} onChange={handleChange} className="w-full p-2 border rounded" required>
                        <option value="">Select Root</option>
                        {roots.map((root) => (
                            <option key={root.id} value={root.name}>{root.name}</option>
                        ))}
                    </select>
                    <input type="text" name="shopName" value={customerModel.shopName} onChange={handleChange} placeholder="Shop Name" className="w-full p-2 border rounded" required />
                    <input type="text" name="address" value={customerModel.address} onChange={handleChange} placeholder="Address" className="w-full p-2 border rounded" required />
                    <input type="number" name="remainingAmount" value={customerModel.remainingAmount} onChange={handleChange} placeholder="Remaining Amount" className="w-full p-2 border rounded" required />
                    <div className="flex justify-between">
                        <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-400 text-white rounded">Cancel</button>
                        <button type="submit" className="px-4 py-2 bg-[#26a69d] text-white rounded hover:bg-[#208888]">Add Customer</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
