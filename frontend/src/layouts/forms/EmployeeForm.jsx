import React, { useState } from "react";

export default function EmployeeForm({ isOpen, onClose }) {
    const [employeeModel, setEmployeeModel] = useState({
        firstName: "",
        lastName: "",
        contact: "",
        cnic: "",
        email: "",
        password: "",
        role: "Sales Man", // Default role
        address: ""
    });

    const handleChange = (e) => {
        setEmployeeModel({ ...employeeModel, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(employeeModel);
        try {
            const response = await fetch("http://localhost:8080/employee", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(employeeModel),
            });
    
            if (!response.ok) {
                throw new Error("Failed to create employee");
            }
    
            const newEmployee = await response.json();
            console.log("Employee added:", newEmployee);
            alert("Employee added successfully!");
            setEmployeeModel({
                firstName: "",
                lastName: "",
                contact: "",
                cnic: "",
                email: "",
                password: "",
                role: "Sales Man",
                address: ""
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
                <h2 className="text-2xl font-bold text-center text-[#26a69d] mb-4">Add Employee</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input type="text" name="firstName" value={employeeModel.firstName} onChange={handleChange} placeholder="First Name" className="w-full p-2 border rounded" required />
                    <input type="text" name="lastName" value={employeeModel.lastName} onChange={handleChange} placeholder="Last Name" className="w-full p-2 border rounded" required />
                    <input type="tel" name="contact" value={employeeModel.contact} onChange={handleChange} placeholder="Contact Number" className="w-full p-2 border rounded" required />
                    <input type="text" name="cnic" value={employeeModel.cnic} onChange={handleChange} placeholder="CNIC" className="w-full p-2 border rounded" required />
                    <input type="email" name="email" value={employeeModel.email} onChange={handleChange} placeholder="Email" className="w-full p-2 border rounded" required />
                    <input type="password" name="password" value={employeeModel.password} onChange={handleChange} placeholder="Password" className="w-full p-2 border rounded" required />
                    <select name="role" value={employeeModel.role} onChange={handleChange} className="w-full p-2 border rounded" required>
                        <option value="Super Admin">Super Admin</option>
                        <option value="Admin">Admin</option>
                        <option value="Sales Man">Salesman</option>
                    </select>
                    <input type="text" name="address" value={employeeModel.address} onChange={handleChange} placeholder="Address" className="w-full p-2 border rounded" required />
                    <div className="flex justify-between">
                        <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-400 text-white rounded">Cancel</button>
                        <button type="submit" className="px-4 py-2 bg-[#26a69d] text-white rounded hover:bg-[#208888]">Add Employee</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
