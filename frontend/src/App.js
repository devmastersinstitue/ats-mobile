
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './layouts/Login';
import Dashboard from './layouts/Dashboard';
import AddEmployee from './layouts/AddEmployee';
import AddCustomer from './layouts/AddCustomer';
import AddProvider from './layouts/AddSupplier';
import AddRoot from './layouts/AddRoot';
import AddSupplier from './layouts/AddSupplier';

export default function App() {
  
  return (
    <Router basename="/">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/app/dashboard" element={<Dashboard />} />
        <Route path="/app/add-root" element={<AddRoot />} />
        <Route path="/app/add-employee" element={<AddEmployee />} />
        <Route path="/app/add-customer" element={<AddCustomer />} />
        <Route path="/app/add-supplier" element={<AddSupplier />} />
        <Route path="/app/add-provider" element={<AddProvider />} />
      </Routes>
    </Router>
  );
}
