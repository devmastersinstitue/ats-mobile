import React, { useState, useEffect } from "react";
import Student from "../Component/Student";

export default function Studentrecord() {
  const [students, setStudents] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/student/list");
        
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        setStudents(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleSearch = (e) => {
    console.log(searchQuery)
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8080/student/name/${searchQuery}`,{ method: "GET",});
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        console.log(result)
        setStudents(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData()
  };

  return (
    <div>
      {/* Search input */}
      <div className="h-48 justify-items-end">
        <input
          type="text"
          className="w-44 h-16 border-2"
          placeholder="Search by city"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {/* Search button */}
        <button onClick={handleSearch}>Search</button>
      </div>

      {/* Display filtered students */}
      <Student students={students} />
    </div>
  );
}
