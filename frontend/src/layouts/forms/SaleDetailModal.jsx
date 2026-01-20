import React, { useRef } from "react";
import LogoImage from "./../../images/ats_logo.jpeg";

function SaleDetailsModal({ isOpen, onClose, sale }) {
    const billRef = useRef(null);

    // Print Function - Prints only the bill
    const handlePrint = () => {
        if (billRef.current) {
            const printContent = billRef.current.innerHTML;
            const originalContent = document.body.innerHTML;

            document.body.innerHTML = printContent; // Replace body with modal content
            window.print(); // Trigger print
            document.body.innerHTML = originalContent; // Restore original content
            window.location.reload(); // Refresh to prevent broken UI
        }
    };

    if (!isOpen || !sale) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 print:bg-transparent print:items-start">
            <div className="bg-white p-6 rounded-lg shadow-lg w-[450px] print:w-full print:p-4 border print:border-none" ref={billRef}>
                
                {/* 🔷 Company Info with Logo */}
                <div className="text-center">
                    <img src={LogoImage} alt="Company Logo" className="h-16 mx-auto print:h-12" />
                    <h2 className="text-2xl font-bold mt-1">ATS Mobile Accessories</h2>
                    <p className="text-sm">Abbasia Chowk</p>
                    <p className="text-sm">Phone: 0307-9732980 | Email: tariqajmal7845@gmail.com</p>
                    <hr className="my-2 border-gray-400" />
                </div>

                {/* 🛒 Sale & Customer Info */}
                <div className="mt-2 space-y-1 text-sm">
                    <p><strong>Date:</strong> {sale.date}</p>
                    <p><strong>Bill Number:</strong> {sale.billNumber}</p>
                    <p><strong>Employee:</strong> {sale.employeeName}</p>
                    <p><strong>Customer:</strong> {sale.customerModel.firstName} {sale.customerModel.lastName} ({sale.customerModel.shopName})</p>
                    <p><strong>Root:</strong> {sale.customerModel.root}</p>
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
                                {sale.items?.map((item, index) => (
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
                    <p><strong>Remaining Amount:</strong> {sale.remainingAmount}</p>
                    <p><strong>Total Bill:</strong> {sale.totalBill}</p>
                    <p><strong>Discount:</strong> {sale.discount}</p>
                    <p><strong>Grand Total:</strong> {sale.grandTotal}</p>
                    <p><strong>Payed Amount:</strong> {sale.payedAmount}</p>
                    <p><strong>Remaining Bill:</strong> {sale.remainingBill}</p>
                </div>

                <hr className="my-2 border-gray-400" />

                {/* 🔻 Disclaimer & Footer */}
                <div className="text-center mt-2 text-sm">
                    <p className="text-gray-500 italic">Note: This is a system-generated bill.</p>
                    <p className="font-bold mt-2">Thank you for your business!</p>
                </div>

                {/* 📄 Print & Close Buttons */}
                <div className="mt-4 flex justify-between print:hidden">
                    <button className="px-3 py-1 bg-gray-300 rounded" onClick={onClose}>
                        Close
                    </button>
                    <button className="px-3 py-1 bg-blue-500 text-white rounded" onClick={handlePrint}>
                        Print 🖨️
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SaleDetailsModal;
