import React, { useState,useEffect } from 'react'
import Student from '../Component/Student';


export default function StudentTable() {
    const [students, setStudents] = useState([]);
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
        fetchData()
    },[])
    
  return (

    <div>
       
      <Student students={students}/>
    </div>
  )
}
