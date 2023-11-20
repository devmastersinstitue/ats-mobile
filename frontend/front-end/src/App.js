import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

function UserInfo(props){
  return (
  <div className='flex flex-row border-blue-500 border-2 justify-between m-10 py-5'>
    <div className='pl-20'>
      <p><span className='text-xl text-red-500'>Name </span> : {props.name}</p><br/>
      <p><span className='text-xl text-red-500'>Father Name</span> : {props.fatherName}</p>
    </div>
    <div className='mr-20'>
      <p><span className='text-xl text-red-500'>Age</span> : {props.age}</p><br/>
      <p><span className='text-xl text-red-500'>Email</span> : {props.email}</p>
    </div>
  </div>
  );
}

export default function App() {
  const [books, setBooks] = useState([]);
  
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
  
  return (
    // <div >
    //   <UserInfo name ="KASHMALA" fatherName ="Aziz-ur-Rehman" age ="18" email ="kkhankkhan009@gmail.com"/>
    //   <UserInfo name ="Mala" fatherName ="Ali" age ="23" email ="malakhan009@gmail.com"/>
    //   <UserInfo name ="Mala" fatherName ="Ali" age ="23" email ="malakhan009@gmail.com"/>
    // </div>
    <div>
      
        <div>
          <div className='flex flex-row justify-between px-40'>
            <div>Book Name</div>
            <div>Color</div>
            <div>Price</div>
            <div>Author</div>
          </div>
          {books.map((book)=>(
          <div className='flex flex-row justify-between px-40 border'>
            <div>{book.name}</div>
            <div>{book.color}</div>
            <div>{book.price}</div>
            <div>{book.author.name}</div>
          </div>
          ))}
        </div>
    </div>
  );
}