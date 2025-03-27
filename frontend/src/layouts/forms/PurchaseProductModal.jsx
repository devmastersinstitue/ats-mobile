import React, { useState, useEffect } from "react";
import axios from "axios";
import Select from "react-select";

export default function PurchaseProductModal({ isOpen, onClose }) {
    const [suppliers, setSuppliers] = useState([]);
    const [products, setProducts] = useState([]);
    const [selectedSupplier, setSelectedSupplier] = useState(null);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [purchasePrice, setPurchasePrice] = useState(0);
    const [salePrice, setSalePrice] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [cart, setCart] = useState([]);
    const [billNumber, setBillNumber] = useState("");
    const todayDate = new Date().toLocaleDateString("en-GB").replace(/\//g, "-");

    useEffect(() => {
        if (isOpen) {
            fetchSuppliers();
            fetchProducts();
            resetForm();
        }
    }, [isOpen]);

    const fetchSuppliers = async () => {
        try {
            const response = await axios.get("http://localhost:8080/supplier");
            setSuppliers(response.data);
        } catch (error) {
            console.error("Error fetching suppliers:", error);
        }
    };

    const fetchProducts = async () => {
        try {
            const response = await axios.get("http://localhost:8080/product");
            setProducts(response.data);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    const resetForm = () => {
        setSelectedSupplier(null);
        setSelectedProduct(null);
        setPurchasePrice(0);
        setSalePrice(0);
        setQuantity(1);
        setCart([]);
        setBillNumber("");
    };

    const handleAddToCart = () => {
        if (!selectedProduct || quantity <= 0) return;
        const newItem = {
            id: selectedProduct.id,
            name: selectedProduct.name,
            quantity,
            unitPurchasePrice: purchasePrice,
            unitSalePrice: salePrice,
            total: quantity * purchasePrice,
        };
        setCart([...cart, newItem]);
        resetProductSelection();
    };

    const resetProductSelection = () => {
        setSelectedProduct(null);
        setPurchasePrice(0);
        setSalePrice(0);
        setQuantity(0);
    };

    const handleRemoveFromCart = (id) => {
        setCart(cart.filter((item) => item.id !== id));
    };

    const totalBill = cart.reduce((acc, item) => acc + item.total, 0);

    const handleSavePurchase = async () => {
        if (!selectedSupplier || cart.length === 0) {
            alert("Please select a supplier and add at least one product!");
            return;
        }

        const purchaseData = {
            billNumber,
            date: todayDate,
            supplierModel: selectedSupplier,
            items: cart,
            totalBill,
        };

        try {
            await axios.post("http://localhost:8080/purchase", purchaseData, {
                headers: { "Content-Type": "application/json" },
            });
            alert("Purchase saved successfully!");
            onClose();
        } catch (error) {
            console.error("Error saving purchase:", error);
            alert("Failed to save purchase.");
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl font-bold text-center text-[#26a69d] mb-4">Purchase Product</h2>
                <p>
                    Today Date: <b>{todayDate}</b>
                </p>
                <input
                    type="text"
                    className="w-full p-2 border rounded mb-2"
                    placeholder="Enter Bill Number"
                    value={billNumber}
                    onChange={(e) => setBillNumber(e.target.value)}
                />

                <div className="gap-y-10 auto-rows-min md:gap-x-6">
                    <fieldset>
                        <div className="pt-6 space-y-6 sm:pt-4 sm:space-y-4">
                            <Select
                                width="175px"
                                className="react-select"
                                classNamePrefix="react-select"
                                isSearchable={true}
                                value={selectedSupplier ? { value: selectedSupplier.companyName, label: selectedSupplier.companyName } : null} // ✅ Fix
                                isClearable
                                inputMode="text"
                                menuPlacement="bottom"
                                menuPosition="fixed"
                                placeholder="Select Supplier"
                                options={suppliers.map((supplier) => ({
                                    value: supplier.companyName,
                                    label: supplier.companyName,
                                }))}
                                backspaceRemovesValue={true}
                                clearValue={() => ""}
                                noOptionsMessage={() => "No suppliers found"}
                                menuPortalTarget={document.querySelector("body")}
                                onChange={(selectedOption) => {
                                    const supplier = suppliers.find((s) => s.companyName === selectedOption?.value);
                                    setSelectedSupplier(supplier);
                                }}
                            />
                        </div>
                    </fieldset>
                </div>

                <Select
                    className="my-2 "
                    placeholder="Select Product"
                    options={products.map((product) => ({ value: product.id, label: product.name }))}
                    value={selectedProduct ? { value: selectedProduct.id, label: selectedProduct.name } : null}
                    onChange={(option) => {
                        const product = products.find((p) => p.id === option?.value);
                        setSelectedProduct(product);
                        setPurchasePrice(product?.unitPurchasePrice || 0);
                        setSalePrice(product?.unitSalePrice || 0);
                    }}
                />
                <input
                    type="number"
                    className="w-full p-2 border rounded mb-2"
                    placeholder="Purchase Price"
                    value={purchasePrice}
                    onChange={(e) => setPurchasePrice(+e.target.value)}
                />
                <input
                    type="number"
                    className="w-full p-2 border rounded mb-2"
                    placeholder="Sale Price"
                    value={salePrice}
                    onChange={(e) => setSalePrice(+e.target.value)}
                />
                <input
                    type="number"
                    className="w-full p-2 border rounded mb-2"
                    placeholder="Quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(+e.target.value)}
                />
                <button className="w-full p-2 bg-[#26a69d] text-white rounded mb-2" onClick={handleAddToCart}>
                    Add Product
                </button>
                <table className="w-full mb-2 border">
                    <thead>
                        <tr className="bg-gray-200">
                            <th>Item</th>
                            <th>Qty</th>
                            <th>Price</th>
                            <th>Total</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((item) => (
                            <tr key={item.id} className="text-center">
                                <td>{item.name}</td>
                                <td>{item.quantity}</td>
                                <td>{item.unitPurchasePrice}</td>
                                <td>{item.total}</td>
                                <td>
                                    <button onClick={() => handleRemoveFromCart(item.id)}>❌</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <p>
                    Total Bill: <b>{totalBill}</b>
                </p>
                <div className="flex justify-between">
                    <button className="px-4 py-2 bg-gray-400 text-white rounded" onClick={onClose}>
                        Cancel
                    </button>
                    <button className="px-4 py-2 bg-[#26a69d] text-white rounded" onClick={handleSavePurchase}>
                        Save Purchase
                    </button>
                </div>
            </div>
        </div>
    );
}
