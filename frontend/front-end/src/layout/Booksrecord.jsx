import React, { useState, useEffect } from "react";
import axios from "axios";
import Book from "../Component/Book";


function Booksrecord() {
  const [booksRecord, setBooksRecord] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get(`http://localhost:8080/books/detail`)
      .then((response) => {
        if (response.status === 200) {
          setBooksRecord(response.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  return (
    <div>
      {/* Change 'Booksrecord' to 'booksRecord' in the prop */}
      <Book books={booksRecord} />
    </div>
  );
}

export default Booksrecord;
