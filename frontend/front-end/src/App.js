
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import HomePage from "./layout/HomePage";
// import AboutPage from "./layout/AboutPage";
// import LayoutThree from "./layout/LayoutThree";
// import LayoutFour from "./layout/LayoutFour";
// import LayoutFive from "./layout/LayoutFive";
// import LayoutSix from "./layout/LayoutSix";
// import LayoutSeven from './layout/LayoutSeven';

export default function App() {
  
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/courses" element={<LayoutThree />} />
        <Route path="/trainers" element={<LayoutFour />} />
        <Route path="/events" element={<LayoutFive />} />
        <Route path="/pricing" element={<LayoutSix />} />
        <Route path="/contacts" element={<LayoutSeven />} /> */}
      </Routes>
    </Router>
  );
}
