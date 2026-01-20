import React from "react";

function TransactionDetailsModal({ isOpen, onClose, transaction }) {
    if (!isOpen || !transaction) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white w-full max-w-3xl p-6 rounded shadow-lg overflow-y-auto max-h-[90vh]">
                <h2 className="text-xl font-bold mb-4">
                    Transactions for {transaction.customer?.firstName} {transaction.customer?.lastName}
                </h2>
                
                <table className="min-w-full bg-white border">
                    <thead className="bg-gray-100 text-center">
                        <tr>
                            <th className="py-2 px-4 border">Date</th>
                            <th className="py-2 px-4 border">Debit</th>
                            <th className="py-2 px-4 border">Credit</th>
                            <th className="py-2 px-4 border">Remaining Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transaction.transactions && [...transaction.transactions].reverse().map((tx, index) => (
                            <tr key={index} className="text-center">
                                <td className="py-2 px-4 border">{tx.date}</td>
                                <td className="py-2 px-4 border">{tx.type=="DEBIT" && tx.amount}</td>
                                <td className="py-2 px-4 border">{tx.type=="CREDIT" && tx.amount}</td>
                                <td className="py-2 px-4 border">{tx.remainingAmount}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="mt-4 flex justify-end">
                    <button onClick={onClose} className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700">
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
}

export default TransactionDetailsModal;
