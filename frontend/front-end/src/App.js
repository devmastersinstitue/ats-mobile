import logo from './logo.svg';
import './App.css';
import React,{ useState, useEffect } from 'react';
import Student from './Component/Student.jsx';
import Book from './Component/Book.jsx';
import School from './Component/School.jsx';
import Teachers from './Component/Teachers.jsx';
import Chairs from './Component/Chairs.jsx';

export default function App() {
  const [books, setBooks] = useState([]);
  const [students, setStudents] = useState([]);

  useEffect(() => {
      const fetchData = async () => {
          try {
              // Make the GET request using the fetch method
              const response = await fetch('http://localhost:8080/books/detail');
              // Check if the response is successful (status code 200-299)
              if (!response.ok) {
                  throw new Error(`HTTP error! Status: ${response.status}`);
              }
              // Parse the response JSON
              const result = await response.json();
              // Update the state with the fetched data
              setBooks(result);
          } catch (error) {
              console.error('Error fetching data:', error);
          }
      };

      // Call the fetchData function when the component mounts
      fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
        try {
            // Make the GET request using the fetch method
            const response = await fetch('http://localhost:8080/student/list');
            // Check if the response is successful (status code 200-299)
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            // Parse the response JSON
            const result = await response.json();
            // Update the state with the fetched data
            setStudents(result);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    // Call the fetchData function when the component mounts
    fetchData();
}, []);
  return (
    <div>
        <Student students = {students}/>
        <Book books={books}/>
        <School/>
        <Teachers/>
        <Chairs name="beautiful"/>
    </div>
  );
}
