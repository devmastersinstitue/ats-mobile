import React, { useState, useEffect } from "react";
import axios from "axios";
import Student from "../Component/Student";

function Studentdetails() {
  const [studentDetails, setStudentDetails] = useState(null);
  
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get(`http://localhost:8080/student/list`)
      .then(response => {
        if (response.status === 200) {
          setStudentDetails(response.data);
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  
  return (
    <div>
      <Student students={studentDetails} />
    </div>
  );
}

export default Studentdetails;
