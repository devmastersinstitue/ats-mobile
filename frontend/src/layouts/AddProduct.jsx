import React, { useState, useEffect } from "react";
import api from "../api";
import Navbar from "../components/Navbar";
import ProductForm from "./forms/ProductForm";
import Barcode from "react-barcode"; // ✅ import
import { toast } from "react-toastify";

function AddProduct() {
    const [isMobile] = useState(window.innerWidth < 768);
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const userRole = localStorage.getItem("role");

    // useEffect(() => {
    //     fetchProducts();
    // }, [isModalOpen]);

    // const fetchProducts = async () => {
    //     try {
    //         const response = await api.get("/product");
    //         setProducts(response.data);
    //     } catch (error) {
    //         console.error("Error fetching products:", error);
    //     }
    // };

    // const handleAddProduct = async (newProduct) => {
    //     try {
    //         await api.post("/product", newProduct);
    //         fetchProducts();
    //     } catch (error) {
    //         console.error("Error adding product:", error);
    //     }
    // };

    // const filteredProducts = products.filter((product) =>
    //     product.name.toLowerCase().includes(searchTerm.toLowerCase())
    // );

    // Load initial data
    const fetchProducts = async () => {
        try {
            const response = await api.get("/product");
            setProducts(response.data);
        } catch (error) {
            console.error("Error fetching products:", error);
            toast.error("Failed to load products", { position: "top-right" });
        }
    };

    // Real-time subscription with SSE
    useEffect(() => {
        fetchProducts(); // first load

        const eventSource = new EventSource(`${process.env.REACT_APP_API_URL}/product/stream`);

        eventSource.onmessage = (event) => {
            const newProduct = JSON.parse(event.data);
            setProducts((prev) => [...prev, newProduct]); // add new product instantly
            toast.info(`New product added: ${newProduct.name} - ${newProduct.unitSalePrice}`, {
                position: "top-right",
            });
        };

        eventSource.onerror = (err) => {
            console.error("SSE connection error:", err);
            eventSource.close();
        };

        return () => {
            eventSource.close();
        };
    }, []);


    return (
        <div>
            <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            <div
                className={`flex-1 h-full md:pt-1 md:pl-6 md:mr-1 md:mt-0 transition-all duration-300 ${
                    sidebarOpen ? "md:ml-64" : "md:ml-16 ml-0"
                }`}
            >
                {!isMobile ? (
                    <div className="flex justify-center text-center">
                        <h1 className="text-2xl font-bold h-14 bg-[#26a69d] text-white py-2 md:rounded-md w-full">
                            Product Management
                        </h1>
                    </div>
                ) : (
                    <div className="flex">
                        <h1 className="text-xl pl-16 font-bold h-14 bg-[#26a69d] text-white py-2 md:rounded-md w-full">
                            Product Management
                        </h1>
                    </div>
                )}

                <div className="p-6 flex items-center">
                    {userRole !== "Sales Man" && (
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="px-4 py-2 bg-[#26a69d] text-white rounded hover:bg-[#208888]"
                        >
                            Add Product
                        </button>
                    )}
                    <input
                        type="text"
                        placeholder="Search by name..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className={`ml-4 px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#26a69d]`}
                    />
                </div>

                <div className="p-6">
                    <div className="overflow-auto max-h-[70vh] border border-gray-300 rounded-md shadow-md">
                        <table className="min-w-full bg-white">
                            <thead className="bg-[#26a69d] text-white sticky top-0 z-9">
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
                                    <th className="py-2 px-4 border">Provider Name</th>
                                    <th className="py-2 px-4 border">Barcode</th> {/* ✅ New column */}
                                </tr>
                            </thead>
                            <tbody>
                                {products.length > 0 ? (
                                    products.map((product, index) => (
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
                                                {product.barcodeBase64 && (
                                                    <Barcode 
                                                        value={product.barcodeBase64}
                                                        height={40}
                                                        width={0.1}
                                                        displayValue={false} // hide number text under barcode
                                                    />
                                                )}
                                                {product.itemCode}
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
                <ProductForm
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                />
            </div>
        </div>
    );
}

export default AddProduct;
