
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LayoutOne from "./layout/LayoutOne";
import LayoutTwo from "./layout/LayoutTwo";
import LayoutThree from "./layout/LayoutThree";
import LayoutFour from "./layout/LayoutFour";
import LayoutFive from "./layout/LayoutFive";
import LayoutSix from "./layout/LayoutSix";
import LayoutSeven from './layout/LayoutSeven';
import LayoutNine from './layout/LayoutNine';
import Layoutten from './layout/Layoutten';
import Layouteleven from './layout/Layouteleven';
import Layouttwelve from './layout/Layouttwelve';
export default function App() {
  //   const [books, setBooks] = useState([]);
    

  //   useEffect(() => {
  //       const fetchData = async () => {
  //           try {
  //               // Make the GET request using the fetch method
  //               const response = await fetch('http://localhost:8080/books/detail');
  //               // Check if the response is successful (status code 200-299)
  //               if (!response.ok) {
  //                   throw new Error(`HTTP error! Status: ${response.status}`);
  //               }
  //               // Parse the response JSON
  //               const result = await response.json();
  //               // Update the state with the fetched data
  //               setBooks(result);
  //           } catch (error) {
  //               console.error('Error fetching data:', error);
  //           }
  //       };

  //       // Call the fetchData function when the component mounts
  //       fetchData();
  //   }, []);

    
  //         // Call the fetchData function when the component mounts
  //     fetchData();
  // }, []);
  return (
    //  <div>
    //   <LayoutOne/>

    //   <Route path="/home" component={LayoutOne} />
    //   <Route path="/about" component={LayoutTwo} />

    //  </div>
    <Router>
      <Routes>
        <Route path="/" element={<LayoutOne />} />
        <Route path="/about" element={<LayoutTwo />} />
        <Route path="/courses" element={<LayoutThree />} />
        <Route path="/trainers" element={<LayoutFour />} />
        <Route path="/events" element={<LayoutFive />} />
        <Route path="/pricing" element={<LayoutSix />} />
        <Route path="/contacts" element={<LayoutSeven />} />
        <Route path="/Studentform" element={<LayoutNine />} />
        <Route path="/Studentrecord" element={<Layoutten />} />
        <Route path="/Studentdetails" element={<Layouteleven />} />
        <Route path="/Booksrecord" element={<Layouttwelve />} />
      </Routes>
    </Router>
  );
}
