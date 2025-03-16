import React, { useState, useEffect } from "react";
import axios from "axios";
import { PencilIcon } from "@heroicons/react/solid";
import Navbar from "../components/Navbar";
import ProductForm from "./forms/ProductForm";

function UpdateProductPurchasePrice() {
    const [isMobile] = useState(window.innerWidth < 768);
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [editProduct, setEditProduct] = useState(null);
    const userRole = localStorage.getItem("role");

    useEffect(() => {
        fetchProducts();
    }, [isModalOpen]);

    const fetchProducts = async () => {
        try {
            const response = await axios.get("http://localhost:8080/product");
            setProducts(response.data);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    const handleAddProduct = async (newProduct) => {
        try {
            await axios.post("http://localhost:8080/product", newProduct);
            fetchProducts();
        } catch (error) {
            console.error("Error adding product:", error);
        }
    };

    const handleEditProduct = (product) => {
        setEditProduct(product);
        setIsModalOpen(true);
    };

    const filteredProducts = products.filter((product) => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            <div className={`flex-1 h-full md:pt-1 md:pl-6 md:mr-1 md:mt-0 transition-all duration-300 ${sidebarOpen ? "md:ml-64" : "md:ml-16 ml-0"}`}>
                {!isMobile && <div className="flex justify-center text-center">
                    <h1 className="text-2xl font-bold h-14 bg-[#26a69d] text-white py-2 md:rounded-md w-full">
                        Product Management
                    </h1>
                </div>}

                {isMobile && <div className="flex">
                    <h1 className="text-xl pl-16 font-bold h-14 bg-[#26a69d] text-white py-2 md:rounded-md w-full">
                        Product Management
                    </h1>
                </div>}
                
                <div className="p-6 flex justify-start">
                    {/* <button
                        onClick={() => setIsModalOpen(true)}
                        className="px-4 py-2 bg-[#26a69d] text-white rounded hover:bg-[#208888]"
                    >
                        Add Product
                    </button> */}
                    <input
                        type="text"
                        placeholder="Search by name..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#26a69d]"
                    />
                </div>
                
                <div className="p-6">
                    <div className="overflow-auto max-h-[70vh] border border-gray-300 rounded-md shadow-md">
                        <table className="min-w-full bg-white">
                            <thead className="bg-[#26a69d] text-white">
                                <tr>
                                    <th className="py-2 px-4 border">#</th>
                                    <th className="py-2 px-4 border">Item Code</th>
                                    <th className="py-2 px-4 border">Item Name</th>
                                    <th className="py-2 px-4 border">Category</th>
                                    <th className="py-2 px-4 border">Unit Sale Price</th>
                                    {userRole === "Super Admin" && (
                                        <th className="py-2 px-4 border">Unit Purchase Price</th>
                                    )}
                                    <th className="py-2 px-4 border">Low Stock Limit</th>
                                    <th className="py-2 px-4 border">Company Name</th>
                                    <th className="py-2 px-4 border">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredProducts.length > 0 ? (
                                    filteredProducts.map((product, index) => (
                                        <tr key={product.id} className="text-center border hover:bg-gray-100">
                                            <td className="py-2 px-4 border">{index + 1}</td>
                                            <td className="py-2 px-4 border">{product.itemCode}</td>
                                            <td className="py-2 px-4 border">{product.name}</td>
                                            <td className="py-2 px-4 border">{product.category}</td>
                                            <td className="py-2 px-4 border">{product.unitSalePrice}</td>
                                            {userRole === "Super Admin" && (
                                                <td className="py-2 px-4 border">{product.unitPurchasePrice}</td>
                                            )}
                                            <td className="py-2 px-4 border">{product.lowStockLimit}</td>
                                            <td className="py-2 px-4 border">{product.companyName}</td>
                                            <td className="py-2 px-4 border">
                                                <button onClick={() => handleEditProduct(product)}>
                                                    <PencilIcon className="h-5 w-5 text-blue-500 hover:text-blue-700" />
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="9" className="py-2 px-4 border text-center">
                                            No matching products found.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
                <ProductForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onAdd={handleAddProduct} productToEdit={editProduct} />
            </div>
        </div>
    );
}

export default UpdateProductPurchasePrice;
