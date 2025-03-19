import React, { useState, useEffect } from "react";
import axios from "axios";
import Select from "react-select";

export default function SaleProductModal({ isOpen, onClose }) {
    const [customers, setCustomers] = useState([]);
    const [products, setProducts] = useState([]);
    const [selectedCustomer, setSelectedCustomer] = useState(null);
    const [remainingAmount, setRemainingAmount] = useState(0);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [quantity, setQuantity] = useState();
    const [cart, setCart] = useState([]);
    const [discount, setDiscount] = useState(0);
    const [paidAmount, setPaidAmount] = useState(0);
    const userName = localStorage.getItem("userName");
    const userRole = localStorage.getItem("role");
    const todayDate = new Date().toLocaleDateString("en-GB").replace(/\//g, "-");

    useEffect(() => {
        fetchCustomers();
        fetchProducts();
    }, []);

    useEffect(() => {
        if (isOpen) {
            setSelectedCustomer(null);
            setRemainingAmount(0);
            setSelectedProduct(null);
            setQuantity(1);
            setCart([]);
            setDiscount(0);
            setPaidAmount(0);
        }
    }, [isOpen]);

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
        // Check if the product is already in the cart
        const productInCart = cart.find((item) => item.id === selectedProduct.id);
        if (productInCart) {
            productInCart.quantity += quantity;
            productInCart.total = productInCart.quantity * productInCart.unitSalePrice;
            setCart([...cart]);
        } else {
            setCart([...cart, { ...selectedProduct, quantity, total: quantity * selectedProduct.unitSalePrice }]);
        }

        // Update the stock quantity in the product list
        setProducts((prevProducts) =>
            prevProducts.map((product) =>
                product.id === selectedProduct.id
                    ? { ...product, quantity: product.quantity - quantity } // Reduce stock
                    : product
            )
        );
        // Reset selected product and quantity
        setSelectedProduct(null);
        setQuantity(1);
    };

    const handleRemoveFromCart = (id) => {
        setCart(cart.filter((item) => item.id !== id));
    };

    const totalBill = cart.reduce((acc, item) => acc + item.total, 0);
    const grandTotal = totalBill + remainingAmount - discount;
    const remainingBill = grandTotal - paidAmount;

    const handleSaveSale = async () => {
        // Find the full customer record from the customers list
        const customer = customers.find((c) => c.id === selectedCustomer?.value);

        if (!customer) {
            alert("Customer not found!");
            return;
        }
        if (paidAmount > 0) {
            customer.lastPaidDate = todayDate;
        }
    
        customer.remainingAmount = remainingBill;
        console.log(customer);
        
        const saleData = {
            date: todayDate,
            employeeName: userName,
            employeeRole: userRole,
            customer,
            items: cart,
            totalBill,
            discount,
            grandTotal,
            paidAmount,
            remainingAmount: remainingBill,
        };
        console.log(saleData);
        

        try {
            // await axios.post("http://localhost:8080/sale", saleData);
            // await axios.put(`http://localhost:8080/customer/${selectedCustomer.id}/updateRemaining`, {
            //     remainingAmount: remainingBill,
            // });
            alert("Sale saved successfully!");
            // onClose();
        } catch (error) {
            console.error("Error saving sale:", error);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl font-bold text-center text-[#26a69d] mb-4">Sale Product</h2>
                <p>
                    Today Date : <b>{todayDate}</b>
                </p>
                <p>
                    Employee Name : <b>{userName}</b>
                </p>
                <p>
                    Employee Role : <b>{userRole}</b>
                </p>
                {/* <input type="text" value={todayDate} disabled className="w-full p-2 border rounded mb-2" />
                <input type="text" value={userName} disabled className="w-full p-2 border rounded mb-2" />
                <input type="text" value={userRole} disabled className="w-full p-2 border rounded mb-2" /> */}
                <div className="gap-y-10 auto-rows-min md:gap-x-6">
                    <fieldset>
                        <div className="pt-6 space-y-6 sm:pt-4 sm:space-y-4">
                            <Select
                                width="175px"
                                className="react-select"
                                classNamePrefix="react-select"
                                isSearchable={true}
                                value={selectedCustomer}
                                isClearable
                                inputMode="text"
                                menuPlacement="bottom"
                                menuPosition="fixed"
                                placeholder="Select Customer"
                                options={customers.map((customer) => ({
                                    value: customer.id,
                                    label: `${customer.firstName} ${customer.lastName}-${customer.shopName}-${customer.root}`,
                                }))}
                                backspaceRemovesValue={true}
                                clearValue={() => ""}
                                noOptionsMessage={() => "No customers found"}
                                menuPortalTarget={document.querySelector("body")}
                                onChange={(selectedOption) => {
                                    const customer = customers.find((c) => c.id === selectedOption?.value);
                                    setSelectedCustomer(selectedOption);
                                    setRemainingAmount(customer?.remainingAmount || 0);
                                }}
                            />
                        </div>
                    </fieldset>
                </div>
                <p className="mt-2">Remaining Amount: {remainingAmount}</p>
                {/* <input type="text" value={remainingAmount} disabled className="w-full p-2 border rounded mb-2" /> */}

                <div className="gap-y-10 auto-rows-min md:gap-x-6">
                    <fieldset>
                        <div className="pt-6 space-y-6 sm:pt-4 sm:space-y-4">
                            <Select
                                width="175px"
                                className="react-select"
                                classNamePrefix="react-select"
                                isSearchable={true}
                                value={
                                    selectedProduct
                                        ? {
                                              value: selectedProduct.id,
                                              label: `${selectedProduct.name} (Stock: ${selectedProduct.quantity})`,
                                          }
                                        : null
                                }
                                isClearable
                                inputMode="text"
                                menuPlacement="bottom"
                                menuPosition="fixed"
                                placeholder="Select Product"
                                options={products.map((product) => ({
                                    value: product.id,
                                    label: `${product.name} (Stock: ${product.quantity})`,
                                }))}
                                backspaceRemovesValue={true}
                                clearValue={() => ""}
                                noOptionsMessage={() => "No products found"}
                                menuPortalTarget={document.querySelector("body")}
                                onChange={(selectedOption) => {
                                    const product = products.find((p) => p.id === selectedOption?.value);
                                    setSelectedProduct(product);
                                }}
                            />
                        </div>
                    </fieldset>

                    {/* Quantity Input */}
                    <fieldset>
                        <div className="pt-6 mb-2 space-y-6 sm:pt-4 sm:space-y-4">
                            <input
                                type="number"
                                className={`w-full p-2 border rounded ${
                                    quantity > selectedProduct?.quantity
                                        ? "text-red-700 border-red-500"
                                        : "text-black border-gray-300"
                                }`}
                                value={quantity}
                                onChange={(e) => setQuantity(+e.target.value)}
                                min="1"
                                max={selectedProduct?.stock || 100} // Limit max quantity to stock availability
                                placeholder="Enter quantity"
                            />
                        </div>
                    </fieldset>
                </div>
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
                                <td className="text-left">{item.name}</td>
                                <td>{item.quantity}</td>
                                <td>{item.unitSalePrice}</td>
                                <td>{item.total}</td>
                                <td>
                                    <button onClick={() => handleRemoveFromCart(item.id)}>❌</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <p>
                    Total Bill : <b>{totalBill}</b>
                </p>
                <input
                    type="number"
                    className="w-full p-2 border rounded mb-2"
                    placeholder="Discount"
                    onChange={(e) => setDiscount(+e.target.value)}
                />
                <p>
                    Grand Total : <b>{grandTotal}</b>
                </p>
                <input
                    type="number"
                    className="w-full p-2 border rounded mb-2"
                    placeholder="Paid Amount"
                    onChange={(e) => setPaidAmount(+e.target.value)}
                />
                <p>
                    Remaining Bill : <b>{remainingBill}</b>
                </p>

                <div className="flex justify-between">
                    <button className="px-4 py-2 bg-gray-400 text-white rounded" onClick={onClose}>
                        Cancel
                    </button>
                    <button className="px-4 py-2 bg-[#26a69d] text-white rounded" onClick={handleSaveSale}>
                        Save Sale
                    </button>
                </div>
            </div>
        </div>
    );
}
