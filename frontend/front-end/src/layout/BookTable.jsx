import React, { useState,useEffect } from 'react'
import Book from '../Component/Book';


export default function BookTable() {
  const [book, setBooks] = useState([]);
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
 fetchData()
},[])

return (

<div>
   
  <Book  books={book}/>

</div>
)
}

 