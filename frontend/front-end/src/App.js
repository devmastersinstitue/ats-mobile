
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LayoutOne from "./layout/LayoutOne";
import LayoutTwo from "./layout/LayoutTwo";

export default function App() {
  //   const [books, setBooks] = useState([]);
  //   const [students, setStudents] = useState([]);

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

  //   useEffect(() => {
  //     const fetchData = async () => {
  //         try {
  //             // Make the GET request using the fetch method
  //             const response = await fetch('http://localhost:8080/student/list');
  //             // Check if the response is successful (status code 200-299)
  //             if (!response.ok) {
  //                 throw new Error(`HTTP error! Status: ${response.status}`);
  //             }
  //             // Parse the response JSON
  //             const result = await response.json();
  //             // Update the state with the fetched data
  //             setStudents(result);
  //         } catch (error) {
  //             console.error('Error fetching data:', error);
  //         }
  //     };

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
      </Routes>
    </Router>
  );
}
