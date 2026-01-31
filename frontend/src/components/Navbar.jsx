import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
    MenuIcon,
    XIcon,
    LogoutIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    ChevronDownIcon,
} from "@heroicons/react/outline";

export default function Navbar({ sidebarOpen, setSidebarOpen }) {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const [menuOpen, setMenuOpen] = useState(false);
    const [openSubMenu, setOpenSubMenu] = useState("");

    const userRole = localStorage.getItem("role");
    const userName = localStorage.getItem("userName");
    const userEmail = localStorage.getItem("email")



    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleLogout = () => {
        localStorage.clear();
        window.location.href = "/";
    };

    return (
        <div>
            {/* Sidebar for Tablet & Desktop (Collapsible) */}
            {!isMobile ? (
                <div
                    className={`h-screen bg-[#26a69d] text-white fixed top-0 left-0 transition-all duration-300 flex flex-col justify-between ${
                        sidebarOpen ? "w-64" : "w-16"
                    }`}
                >
                    <div>
                        {/* Sidebar Toggle Button */}
                        <button
                            className="absolute top-4 right-[-15px] bg-[#208888] text-white p-1 rounded-full shadow-md"
                            onClick={() => setSidebarOpen(!sidebarOpen)}
                        >
                            {sidebarOpen ? (
                                <ChevronLeftIcon className="w-6 h-6" />
                            ) : (
                                <ChevronRightIcon className="w-6 h-6" />
                            )}
                        </button>

                        <div className="p-6 text-md font-bold">{sidebarOpen ? userName : "🎯"}</div>
                        <div className="p-6 text-md font-bold">{sidebarOpen ? userRole : "🚀"}</div>
                        <nav className="mt-4">
                            <Link
                                className={`block py-2 px-6 hover:bg-[#208888] font-bold ${
                                    !sidebarOpen && "text-center"
                                }`}
                                to="/app/dashboard"
                            >
                                {sidebarOpen ? "Home" : "🏠"}
                            </Link>
                            
                            {/* Users Dropdown */}
                            <div className="relative">
                                <button
                                    className="flex items-center justify-between w-full py-2 px-6 hover:bg-[#208888] font-bold"
                                    onClick={() => setOpenSubMenu(openSubMenu === "users" ? "" : "users")}
                                >
                                    {sidebarOpen ? "Users" : "👤"}
                                    {sidebarOpen && <ChevronDownIcon className="w-5 h-5" />}
                                </button>
                                {openSubMenu === "users" && sidebarOpen && (
                                    <div className="pl-6">
                                        {userRole !== "Sales Man" && <Link className="block py-2 px-6 hover:bg-[#208888]" to="/app/add-employee">
                                            Employee Record
                                        </Link>}
                                        {userRole !== "Sales Man" && <Link className="block py-2 px-6 hover:bg-[#208888]" to="/app/add-root">
                                            Root Record
                                        </Link>}
                                        <Link className="block py-2 px-6 hover:bg-[#208888]" to="/app/add-customer">
                                            Customer Record
                                        </Link>
                                        {userRole === "Super Admin" && <Link className="block py-2 px-6 hover:bg-[#208888]" to="/app/add-supplier">
                                            Supplier Record
                                        </Link>}
                                    </div>
                                )}
                            </div>

                            {/* Products Dropdown */}
                            <div className="relative">
                                <button
                                    className="flex items-center justify-between w-full py-2 px-6 hover:bg-[#208888] font-bold"
                                    onClick={() => setOpenSubMenu(openSubMenu === "products" ? "" : "products")}
                                >
                                    {sidebarOpen ? "Products" : "📦"}
                                    {sidebarOpen && <ChevronDownIcon className="w-5 h-5" />}
                                </button>
                                {openSubMenu === "products" && sidebarOpen && (
                                    <div className="pl-6">
                                        <Link className="block py-2 px-6 hover:bg-[#208888]" to="/app/add-product">
                                            Product Record
                                        </Link>
                                        {userRole === "Super Admin" && <Link className="block py-2 px-6 hover:bg-[#208888]" to="/app/update-price">
                                            Update Product Record
                                        </Link>}
                                    </div>
                                )}
                            </div>

                            {/* Transactions Dropdown */}
                            <div className="relative">
                                <button
                                    className="flex items-center justify-between w-full py-2 px-6 hover:bg-[#208888] font-bold"
                                    onClick={() => setOpenSubMenu(openSubMenu === "transactions" ? "" : "transactions")}
                                >
                                    {sidebarOpen ? "Transactions" : "💰"}
                                    {sidebarOpen && <ChevronDownIcon className="w-5 h-5" />}
                                </button>
                                {openSubMenu === "transactions" && sidebarOpen && (
                                    <div className="pl-6">
                                        <Link className="block py-2 px-6 hover:bg-[#208888]" to="/app/sale-product">
                                            Sale Product
                                        </Link>
                                        <Link className="block py-2 px-6 hover:bg-[#208888]" to="/app/transaction">
                                            Transaction Record
                                        </Link>
                                        {userRole === "Super Admin" && <Link className="block py-2 px-6 hover:bg-[#208888]" to="/app/purchase-product">
                                            Purchase Product
                                        </Link>}
                                        <Link className="block py-2 px-6 hover:bg-[#208888]" to="/app/return-product">
                                            Return Product
                                        </Link>
                                        {/* <Link className="block py-2 px-6 hover:bg-[#208888]" to="/app/exchange-product">
                                            Exchange Product
                                        </Link>
                                        <Link className="block py-2 px-6 hover:bg-[#208888]" to="/app/exchange-waiting-product">
                                            Exchange Waiting Product
                                        </Link> */
                                        }
                                    </div>
                                )}
                            </div>

                            {/* Finance Dropdown */}
                            <div className="relative">
                                <button
                                    className="flex items-center justify-between w-full py-2 px-6 hover:bg-[#208888] font-bold"
                                    onClick={() => setOpenSubMenu(openSubMenu === "finance" ? "" : "finance")}
                                >
                                    {sidebarOpen ? "Finance" : "💳"}
                                    {sidebarOpen && <ChevronDownIcon className="w-5 h-5" />}
                                </button>
                                {openSubMenu === "finance" && sidebarOpen && (
                                    <div className="pl-6">
                                        {userRole !== "Sales Man" && <Link className="block py-2 px-6 hover:bg-[#208888]" to="/app/expenses">
                                            Expenses Record
                                        </Link>}
                                        <Link className="block py-2 px-6 hover:bg-[#208888]" to="/app/debit-transaction-record">
                                            Debit Transaction Record
                                        </Link>
                                        {userRole !== "Sales Man" && <Link className="block py-2 px-6 hover:bg-[#208888]" to="/app/pending-sale">
                                            Verify Salesman Bill
                                        </Link>}
                                        <Link className="block py-2 px-6 hover:bg-[#208888]" to="/app/customer-balance">
                                            Customer Balance Record
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </nav>
                    </div>

                    {/* Logout Button at Bottom */}
                    <div className="pb-4">
                        <button
                            onClick={handleLogout}
                            className={`w-full py-3 bg-red-600 hover:bg-red-700 text-white font-bold flex items-center justify-center gap-2 ${
                                !sidebarOpen && "justify-center"
                            }`}
                        >
                            <LogoutIcon className="w-5 h-5" />
                            {sidebarOpen && "Logout"}
                        </button>
                    </div>
                </div>
            ) : (
                // Mobile Navbar (Hamburger Menu)
                <div className="bg-[#26a69d] text-white fixed top-0 left-0 p-3">
                    <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
                        {menuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
                    </button>
                </div>
            )}

            {/* Mobile Menu Dropdown */}
            {isMobile && menuOpen && (
                <div className="bg-[#26a69d] text-white absolute top-16 left-0 w-full z-10">
                    <nav className="flex flex-col items-center py-2 text-lg">
                        <Link className="py-2 px-6 hover:bg-[#208888] font-bold w-full text-center" to="/app/dashboard">
                            Home
                        </Link>

                        {/* Users Dropdown */}
                        <div className="relative w-full">
                            <button
                                className="flex items-center justify-center w-full py-2 px-6 hover:bg-[#208888] font-bold relative"
                                onClick={() => setOpenSubMenu(openSubMenu === "users" ? "" : "users")}
                            >
                                <span className="flex-1 text-center">Users</span>
                                <ChevronDownIcon className="w-5 h-5 absolute ml-40" />
                            </button>

                            {/* Full-width submenu on mobile */}
                            {openSubMenu === "users" && (
                                <div className={`pl-6 ${isMobile ? "w-full text-center bg-[#26a69d]" : ""}`}>
                                    <Link
                                        className="block w-full py-2 px-6 hover:bg-[#208888] font-bold"
                                        to="/app/add-employee"
                                    >
                                        Employee Record
                                    </Link>
                                    <Link
                                        className="block w-full py-2 px-6 hover:bg-[#208888] font-bold"
                                        to="/app/add-root"
                                    >
                                        Root Record
                                    </Link>
                                    <Link
                                        className="block w-full py-2 px-6 hover:bg-[#208888] font-bold"
                                        to="/app/add-customer"
                                    >
                                        Customer Record
                                    </Link>
                                    <Link
                                        className="block w-full py-2 px-6 hover:bg-[#208888] font-bold"
                                        to="/app/add-supplier"
                                    >
                                        Supplier Record
                                    </Link>
                                </div>
                            )}
                        </div>

                        {/* Products Dropdown */}
                        <div className="relative w-full">
                            <button
                                className="flex items-center justify-center w-full py-2 px-6 hover:bg-[#208888] font-bold relative"
                                onClick={() => setOpenSubMenu(openSubMenu === "products" ? "" : "products")}
                            >
                                <span className="flex-1 text-center">Products</span>
                                <ChevronDownIcon className="w-5 h-5 absolute ml-40" />
                            </button>

                            {/* Full-width submenu on mobile */}
                            {openSubMenu === "products" && (
                                <div className={`pl-6 ${isMobile ? "w-full text-center bg-[#26a69d]" : ""}`}>
                                    <Link
                                        className="block w-full py-2 px-6 hover:bg-[#208888] font-bold"
                                        to="/app/add-product"
                                    >
                                        Product Record
                                    </Link>
                                    <Link
                                        className="block w-full py-2 px-6 hover:bg-[#208888] font-bold"
                                        to="/app/update-price"
                                    >
                                        Update Product Record
                                    </Link>
                                </div>
                            )}
                        </div>

                        {/* Transactions Dropdown */}
                        <div className="relative w-full">
                            <button
                                className="flex items-center justify-center w-full py-2 px-6 hover:bg-[#208888] font-bold relative"
                                onClick={() => setOpenSubMenu(openSubMenu === "transactions" ? "" : "transactions")}
                            >
                                <span className="flex-1 text-center">Transactions</span>
                                <ChevronDownIcon className="w-5 h-5 absolute ml-40" />
                            </button>

                            {/* Full-width submenu on mobile */}
                            {openSubMenu === "transactions" && (
                                <div className={`pl-6 ${isMobile ? "w-full text-center bg-[#26a69d]" : ""}`}>
                                    <Link
                                        className="block w-full py-2 px-6 hover:bg-[#208888] font-bold"
                                        to="/app/sale-product"
                                    >
                                        Sale Product
                                    </Link>
                                    <Link
                                        className="block w-full py-2 px-6 hover:bg-[#208888] font-bold"
                                        to="/app/transaction"
                                    >
                                        Transaction Record
                                    </Link>
                                    {userRole !== "Sales Man" && (<><Link
                                        className="block w-full py-2 px-6 hover:bg-[#208888] font-bold"
                                        to="/app/purchase-product"
                                    >
                                        Purchase Product
                                    </Link>
                                    <Link
                                        className="block w-full py-2 px-6 hover:bg-[#208888] font-bold"
                                        to="/app/return-product"
                                    >
                                        Return Product
                                    </Link>
                                    <Link
                                        className="block w-full py-2 px-6 hover:bg-[#208888] font-bold"
                                        to="/app/exchange-product"
                                    >
                                        Exchange Product
                                    </Link>
                                    <Link
                                        className="block w-full py-2 px-6 hover:bg-[#208888] font-bold"
                                        to="/app/exchange-waiting-product"
                                    >
                                        Exchange Waiting Product
                                    </Link></>)}
                                </div>
                            )}
                        </div>

                        {/* Finance Dropdown */}
                        <div className="relative w-full">
                            <button
                                className="flex items-center justify-center w-full py-2 px-6 hover:bg-[#208888] font-bold relative"
                                onClick={() => setOpenSubMenu(openSubMenu === "finance" ? "" : "finance")}
                            >
                                <span className="flex-1 text-center">Finance</span>
                                <ChevronDownIcon className="w-5 h-5 absolute ml-40" />
                            </button>

                            {/* Full-width submenu on mobile */}
                            {openSubMenu === "finance" && (
                                <div className={`pl-6 ${isMobile ? "w-full text-center bg-[#26a69d]" : ""}`}>
                                    <Link
                                        className="block w-full py-2 px-6 hover:bg-[#208888] font-bold"
                                        to="/app/expenses"
                                    >
                                        Expenses Record
                                    </Link>
                                    <Link
                                        className="block w-full py-2 px-6 hover:bg-[#208888] font-bold"
                                        to="/app/debit-transaction-record"
                                    >
                                        Debit Transaction Record
                                    </Link>
                                    <Link
                                        className="block w-full py-2 px-6 hover:bg-[#208888] font-bold"
                                        to="/app/pending-sale"
                                    >
                                        Verify Salesman Bill
                                    </Link>
                                    <Link
                                        className="block w-full py-2 px-6 hover:bg-[#208888] font-bold"
                                        to="/app/customer-balance"
                                    >
                                        Customer Balance Record
                                    </Link>
                                </div>
                            )}
                        </div>
                    </nav>

                    {/* Logout Button in Mobile Menu */}
                    <button
                        onClick={handleLogout}
                        className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-bold flex items-center justify-center gap-2"
                    >
                        <LogoutIcon className="w-5 h-5" />
                        Logout
                    </button>
                </div>
            )}
        </div>
    );
}
