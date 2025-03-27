import React, { useRef } from "react";

function PurchaseDetailsModal({ isOpen, onClose, purchase }) {
    
    // Print Function - Prints only the bill
    if (!isOpen || !purchase) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 print:bg-transparent print:items-start">
            <div className="bg-white p-6 rounded-lg shadow-lg w-[450px] print:w-full print:p-4 border print:border-none">
                
                {/* 🔷 Company Info with Logo */}
                <div className="text-center">
                    <h2 className="text-2xl font-bold mt-1">{purchase.supplierModel.firstName} {purchase.supplierModel.lastName}</h2>
                    <p className="text-sm">{purchase.supplierModel.companyName}</p>
                    <p className="text-sm">Phone: {purchase.supplierModel.contact} | Email: {purchase.supplierModel.email}</p>
                    <hr className="my-2 border-gray-400" />
                </div>

                {/* 🛒 Sale & Customer Info */}
                <div className="mt-2 space-y-1 text-sm">
                    <p><strong>Date:</strong> {purchase.date}</p>
                    <p><strong>Bill Number:</strong> {purchase.billNumber}</p>
                </div>

                <hr className="my-2 border-gray-400" />

                {/* 📦 Product List */}
                <div className="mt-2">
                    <h3 className="text-lg font-bold border-b pb-1">Products</h3>
                    <div className="overflow-auto max-h-40 mt-2 border border-gray-300 rounded-md">
                        <table className="w-full text-sm border-collapse">
                            <thead>
                                <tr className="bg-gray-200 text-left">
                                    <th className="border p-1">Name</th>
                                    <th className="border p-1 text-center">Qty</th>
                                    <th className="border p-1 text-right">Unit Price</th>
                                    <th className="border p-1 text-right">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {purchase.items?.map((item, index) => (
                                    <tr key={index} className="border text-center">
                                        <td className="border p-1 text-left">{item.name}</td>
                                        <td className="border p-1">{item.quantity}</td>
                                        <td className="border p-1 text-right">{item.unitSalePrice}</td>
                                        <td className="border p-1 text-right">{item.total}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <hr className="my-2 border-gray-400" />

                {/* 💰 Financial Details */}
                <div className="mt-2 text-sm space-y-1">
                    <p><strong>Total Bill:</strong> {purchase.totalBill}</p>
                </div>

                <hr className="my-2 border-gray-400" />

                {/* 📄 Print & Close Buttons */}
                <div className="mt-4 flex justify-between print:hidden">
                    <button className="px-3 py-1 bg-gray-300 rounded" onClick={onClose}>
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PurchaseDetailsModal;