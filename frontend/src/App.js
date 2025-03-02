
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './layouts/Login';
import Dashboard from './layouts/Dashboard';
import AddEmployee from './layouts/AddEmployee';
import AddCustomer from './layouts/AddCustomer';
import AddProduct from './layouts/AddProduct';
import AddProvider from './layouts/AddProvider';

export default function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/app/dashboard" element={<Dashboard />} />
        <Route path="/app/add-employee" element={<AddEmployee />} />
        <Route path="/app/add-customer" element={<AddCustomer />} />
        <Route path="/app/add-product" element={<AddProduct />} />
        <Route path="/app/add-provider" element={<AddProvider />} />
      </Routes>
    </Router>
  );
}
