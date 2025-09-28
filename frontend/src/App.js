import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // 👈 required CSS

import Login from "./layouts/Login";
import Dashboard from "./layouts/Dashboard";
import AddEmployee from "./layouts/AddEmployee";
import AddCustomer from "./layouts/AddCustomer";
import AddProvider from "./layouts/AddSupplier";
import AddRoot from "./layouts/AddRoot";
import AddSupplier from "./layouts/AddSupplier";
import AddProduct from "./layouts/AddProduct";
import UpdateProductPurchasePrice from "./layouts/UpdateProductPurchasePrice";
import AddExpenses from "./layouts/AddExpenses";
import ShowCustomerRemainingBalance from "./layouts/ShowCustomerRemainingBalance";
import Sale from "./layouts/Sale";
import PendingSale from "./layouts/PendingSale";
import Purchase from "./layouts/Purchase";
import Transaction from "./layouts/Transaction";
import DebitTransactionRecord from "./layouts/DebitTransactionRecord";
import ReturnProduct from "./layouts/ReturnProduct";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/app/dashboard" element={<Dashboard />} />
        <Route path="/app/add-root" element={<AddRoot />} />
        <Route path="/app/add-employee" element={<AddEmployee />} />
        <Route path="/app/add-customer" element={<AddCustomer />} />
        <Route path="/app/add-supplier" element={<AddSupplier />} />
        <Route path="/app/add-provider" element={<AddProvider />} />
        <Route path="/app/add-product" element={<AddProduct />} />
        <Route path="/app/update-price" element={<UpdateProductPurchasePrice />} />
        <Route path="/app/expenses" element={<AddExpenses />} />
        <Route path="/app/customer-balance" element={<ShowCustomerRemainingBalance />} />
        <Route path="/app/sale-product" element={<Sale />} />
        <Route path="/app/return-product" element={<ReturnProduct />} />
        <Route path="/app/pending-sale" element={<PendingSale />} />
        <Route path="/app/purchase-product" element={<Purchase />} />
        <Route path="/app/transaction" element={<Transaction />} />
        <Route path="/app/debit-transaction-record" element={<DebitTransactionRecord />} />
      </Routes>

      {/* ✅ Global Toast Container (always available) */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored" // or "light" / "dark"
      />
    </Router>
  );
}
