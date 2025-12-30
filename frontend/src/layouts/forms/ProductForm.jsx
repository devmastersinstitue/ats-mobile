import React, { useState, useEffect } from "react";
import api from "../../api";
import { toast } from "react-toastify";

export default function ProductForm({ isOpen, onClose, onSave, productToEdit }) {
    const [productModel, setProductModel] = useState({
    itemCode: "",
    name: "",
    category: "",
    unitSalePrice: "",
    unitPurchasePrice: "",
    lowStockLimit: "",
    companyName: "",
  });

  const [suppliers, setSuppliers] = useState([]);
  const userRole = localStorage.getItem("role");

  // Load existing product for edit
  useEffect(() => {
    if (productToEdit) {
      setProductModel(productToEdit);
    } else {
      setProductModel({
        itemCode: "",
        name: "",
        category: "",
        unitSalePrice: "",
        unitPurchasePrice: "",
        lowStockLimit: "",
        companyName: "",
      });
    }
  }, [productToEdit]);

  // Load suppliers for dropdown
  useEffect(() => {
    const fetchSuppliers = async () => {
      try {
        const response = await api.get("/supplier");
        setSuppliers(response.data);
      } catch (error) {
        console.error("Error fetching suppliers:", error);
        toast.error("Failed to load suppliers", { position: "top-right" });
      }
    };
    fetchSuppliers();
  }, []);

  const handleChange = (e) => {
    setProductModel({ ...productModel, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!!productToEdit) {
        await api.put("/product", productModel);
        toast.success("Product updated successfully!", { position: "top-right" });
      } else {
        await api.post("/product", productModel);
        toast.success("Product added successfully!", { position: "top-right" });
      }

      setProductModel({
        itemCode: "",
        name: "",
        category: "",
        unitSalePrice: "",
        unitPurchasePrice: "",
        lowStockLimit: "",
        companyName: "",
      });

      onClose(); // Close modal after success
    } catch (error) {
      console.error("Error:", error);
      toast.error("Something went wrong", { position: "top-right" });
    }
  };

  if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl font-bold text-center text-[#26a69d] mb-4">
                    {productToEdit ? "Edit Product" : "Add Product"}
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input type="text" name="itemCode" value={productModel.itemCode} onChange={handleChange} placeholder="Item Code" className="w-full p-2 border rounded" required />
                    <input type="text" name="name" value={productModel.name} onChange={handleChange} placeholder="Product Name" className="w-full p-2 border rounded" required />
                    <input type="text" name="category" value={productModel.category} onChange={handleChange} placeholder="Category" className="w-full p-2 border rounded" required />
                    <input type="number" name="unitSalePrice" value={productModel.unitSalePrice} onChange={handleChange} placeholder="Unit Sale Price" className="w-full p-2 border rounded" required />
                    {(!!productToEdit || userRole === "Super Admin") && (
                        <input type="number" name="unitPurchasePrice" value={productModel.unitPurchasePrice} onChange={handleChange} placeholder="Unit Purchase Price" className="w-full p-2 border rounded" required />
                    )}
                    <input type="number" name="lowStockLimit" value={productModel.lowStockLimit} onChange={handleChange} placeholder="Low Stock Limit" className="w-full p-2 border rounded" required />
                    <select name="companyName" value={productModel.companyName} onChange={handleChange} className="w-full p-2 border rounded" required>
                        <option value="">Select Supplier</option>
                        {suppliers.map((supplier) => (
                            <option key={supplier.id} value={supplier.companyName}>{supplier.companyName}</option>
                        ))}
                    </select>
                    <div className="flex justify-between">
                        <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-400 text-white rounded">Cancel</button>
                        <button type="submit" className="px-4 py-2 bg-[#26a69d] text-white rounded hover:bg-[#208888]">
                            {productToEdit ? "Update Product" : "Add Product"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
