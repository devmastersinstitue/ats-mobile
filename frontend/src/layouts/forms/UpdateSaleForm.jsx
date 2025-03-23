import React, { useState, useEffect } from "react";
import axios from "axios";

export default function UpdateSaleForm({ isOpen, onClose, billData }) {
    const [cart, setCart] = useState([]);
    const [totalBill, setTotalBill] = useState(0);
    const [grandTotal, setGrandTotal] = useState(0);
    const [remainingBill, setRemainingBill] = useState(0);

    useEffect(() => {
        if (isOpen && billData) {
            setCart(billData.items || []);
            calculateTotals(billData.items, billData.discount, billData.payedAmount, billData.remainingAmount);
        }
    }, [isOpen, billData]);

    const calculateTotals = (updatedCart, discount, payedAmount, remainingAmount) => {
        const newTotalBill = updatedCart.reduce((acc, item) => acc + item.total, 0);
        const newGrandTotal = newTotalBill + remainingAmount - discount;
        const newRemainingBill = newGrandTotal - payedAmount;

        setTotalBill(newTotalBill);
        setGrandTotal(newGrandTotal);
        setRemainingBill(newRemainingBill);
    };

    const handlePriceChange = (index, newPrice) => {
        const updatedCart = cart.map((item, i) =>
            i === index ? { ...item, unitSalePrice: newPrice, total: newPrice * item.quantity } : item
        );

        setCart(updatedCart);
        calculateTotals(updatedCart, billData.discount, billData.payedAmount, billData.remainingAmount);
    };

    const handleSaveUpdate = async () => {
        const updatedSaleData = {
            ...billData,
            items: cart,
            totalBill,
            grandTotal,
            remainingBill,
        };

        try {
            await axios.put(`http://localhost:8080/sale/${billData.billNumber}`, updatedSaleData, {
                headers: { "Content-Type": "application/json" },
            });
            alert("Sale bill updated successfully!");
            onClose();
        } catch (error) {
            console.error("Error updating sale bill:", error);
            alert("Failed to update sale bill.");
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl font-bold text-center text-[#26a69d] mb-4">Update Sale Bill</h2>
                <p>
                    Bill Number: <b>{billData.billNumber}</b>
                </p>
                <p>
                    Customer:{" "}
                    <b>
                        {billData.customerModel.firstName} {billData.customerModel.lastName}
                    </b>
                </p>
                <p>
                    Date: <b>{billData.date}</b>
                </p>

                <table className="w-full mb-2 border">
                    <thead>
                        <tr className="bg-gray-200">
                            <th>Item</th>
                            <th>Qty</th>
                            <th>Price</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((item, index) => (
                            <tr key={item.id} className="text-center">
                                <td className="text-left">{item.name}</td>
                                <td>{item.quantity}</td>
                                <td>
                                    <input
                                        type="number"
                                        className="w-16 p-1 border rounded"
                                        value={item.unitSalePrice}
                                        onChange={(e) => handlePriceChange(index, +e.target.value)}
                                    />
                                </td>
                                <td>{item.total}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <p>
                    Total Bill: <b>{totalBill}</b>
                </p>
                <p>
                    Remaining Amount: <b>{billData.remainingAmount}</b>
                </p>
                <p>
                    Discount: <b>{billData.discount}</b>
                </p>
                <p>
                    Grand Total: <b>{grandTotal}</b>
                </p>
                <p>
                    Payed Amount: <b>{billData.payedAmount}</b>
                </p>
                <p>
                    Remaining Bill: <b>{remainingBill}</b>
                </p>

                <div className="flex justify-between">
                    <button className="px-4 py-2 bg-gray-400 text-white rounded" onClick={onClose}>
                        Cancel
                    </button>
                    <button className="px-4 py-2 bg-[#26a69d] text-white rounded" onClick={handleSaveUpdate}>
                        Update Bill
                    </button>
                </div>
            </div>
        </div>
    );
}
