import React, { useState, useEffect } from "react";
import axios from "axios";
import Select from "react-select";

export default function ReturnProductModal({ isOpen, onClose }) {
    const [customers, setCustomers] = useState([]);
    const [products, setProducts] = useState([]);
    const [selectedCustomer, setSelectedCustomer] = useState(null);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [cart, setCart] = useState([]);
    const [currentTime, setCurrentTime] = useState("");
    const [unitSalePrice, setUnitSalePrice] = useState("");
    const userName = localStorage.getItem("userName");
    const userRole = localStorage.getItem("role");
    const todayDate = new Date().toLocaleDateString("en-GB").replace(/\//g, "-");

    useEffect(() => {
        fetchCustomers();
        fetchProducts();
        updateTime();
        const timer = setInterval(updateTime, 1000);
        return () => clearInterval(timer);
    }, []);

    const updateTime = () => {
        const now = new Date();
        const hours = now.getHours() % 12 || 12;
        const minutes = now.getMinutes().toString().padStart(2, "0");
        const ampm = now.getHours() >= 12 ? "PM" : "AM";
        setCurrentTime(`${hours}:${minutes} ${ampm}`);
    };

    const fetchCustomers = async () => {
        try {
            const response = await axios.get("http://localhost:8080/customer");
            setCustomers(response.data);
        } catch (error) {
            console.error("Error fetching customers:", error);
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

    const handleAddToCart = () => {
        if (!selectedProduct || quantity <= 0) return;
        const productInCart = cart.find((item) => item.id === selectedProduct.id);
        if (productInCart) {
            productInCart.quantity += quantity;
            productInCart.total = productInCart.quantity * unitSalePrice;
            setCart([...cart]);
        } else {
            setCart([...cart, { ...selectedProduct, quantity, unitSalePrice: unitSalePrice, total: quantity * unitSalePrice }]);
        }
        setSelectedProduct(null);
        setUnitSalePrice(0);
        setQuantity(1);
    };

    const handleRemoveFromCart = (id) => {
        setCart(cart.filter((item) => item.id !== id));
    };

    const totalReturnAmount = cart.reduce((acc, item) => acc + item.total, 0);

    const handleSaveReturn = async () => {
        const customer = customers.find((c) => c.id === selectedCustomer?.value);
        if (!customer) {
            alert("Customer not found!");
            return;
        }

        const returnData = {
            date: todayDate + "-" + currentTime,
            employeeName: userName,
            employeeRole: userRole,
            customerModel: customer,
            items: cart.map((item) => ({
                name: item.name,
                quantity: item.quantity,
                unitSalePrice: item.unitSalePrice,
                total: item.total,
            })),
            totalReturnAmount,
        };

        try {
            await axios.post("http://localhost:8080/return", returnData, {
                headers: { "Content-Type": "application/json" },
            });
            alert("Return saved successfully!");
            onClose();
        } catch (error) {
            console.error("Error saving return:", error.response?.data || error.message);
            alert("Failed to save return. Check console for details.");
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl font-bold text-center text-[#26a69d] mb-4">Return Product</h2>
                <p>Today Date : <b>{todayDate}</b></p>
                <p>Time : <b>{currentTime}</b></p>
                <p>Employee Name : <b>{userName}</b></p>
                <p>Employee Role : <b>{userRole}</b></p>

                <Select
                    classNamePrefix="react-select"
                    isSearchable
                    className="my-2"
                    value={selectedCustomer}
                    isClearable
                    placeholder="Select Customer"
                    options={customers.map((c) => ({
                        value: c.id,
                        label: `${c.firstName} ${c.lastName}-${c.shopName}`,
                    }))}
                    onChange={(selectedOption) => setSelectedCustomer(selectedOption)}
                />

                <Select
                    classNamePrefix="react-select"
                    isSearchable
                    value={
                        selectedProduct
                            ? { value: selectedProduct.id, label: selectedProduct.name }
                            : null
                    }
                    isClearable
                    placeholder="Select Product"
                    options={products.map((p) => ({
                        value: p.id,
                        label: p.name,
                    }))}
                    onChange={(selectedOption) => {
                        const product = products.find((p) => p.id === selectedOption?.value);
                        product !== undefined ? setUnitSalePrice(product.unitSalePrice) : setUnitSalePrice(0);
                        setSelectedProduct(product);
                    }}
                />

                <input
                    type="number"
                    className="w-full p-2 border rounded mt-2"
                    value={unitSalePrice}
                    onChange={(e) => setUnitSalePrice(+e.target.value)}
                    placeholder="Return Price"
                />

                <input
                    type="number"
                    className="w-full p-2 border rounded mt-2"
                    value={quantity}
                    onChange={(e) => setQuantity(+e.target.value)}
                    min="1"
                    placeholder="Quantity"
                />

                <button className="w-full p-2 bg-[#26a69d] text-white rounded mt-2" onClick={handleAddToCart}>
                    Add to Return List
                </button>

                <table className="w-full my-2 border">
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
                                <td className="text-left">{item.name}</td>
                                <td>{item.quantity}</td>
                                <td>{item.unitSalePrice}</td>
                                <td>{item.total}</td>
                                <td><button onClick={() => handleRemoveFromCart(item.id)}>❌</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <p>Total Return Amount : <b>{totalReturnAmount}</b></p>

                <div className="flex justify-between">
                    <button className="px-4 py-2 bg-gray-400 text-white rounded" onClick={onClose}>Cancel</button>
                    <button className="px-4 py-2 bg-[#26a69d] text-white rounded" onClick={handleSaveReturn}>Save Return</button>
                </div>
            </div>
        </div>
    );
}
