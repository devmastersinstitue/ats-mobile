import React, { useState } from "react";
import api from "../../api";

export default function RootForm({ isOpen, onClose }) {
    const [rootModel, setRootModel] = useState({
        name: ""
    });

    const handleChange = (e) => {
        setRootModel({ ...rootModel, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            
            const response = await api.post("/root", rootModel);
    
            if (!response.ok) {
                throw new Error("Failed to create root");
            }
    
            const newRoot = await response.json();
            alert("Root added successfully!");
            setRootModel({ name: "" });
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
                <h2 className="text-2xl font-bold text-center text-[#26a69d] mb-4">Add Root</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input 
                        type="text" 
                        name="name" 
                        value={rootModel.name} 
                        onChange={handleChange} 
                        placeholder="Root Name" 
                        className="w-full p-2 border rounded" 
                        required 
                    />
                    <div className="flex justify-between">
                        <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-400 text-white rounded">Cancel</button>
                        <button type="submit" className="px-4 py-2 bg-[#26a69d] text-white rounded hover:bg-[#208888]">Add Root</button>
                    </div>
                </form>
            </div>
        </div>
    );
}