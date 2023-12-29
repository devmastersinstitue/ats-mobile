// import logo from './logo.svg';
// import './App.css';
// import React,{ useState, useEffect } from 'react';
// import Student from './Component/Student.jsx';
// import Book from './Component/Book.jsx';
// import School from './Component/School.jsx';
// import Teachers from './Component/Teachers.jsx';
// import Chairs from './Component/Chairs.jsx';
// import StudentCreate from './Component/StudentCreate.jsx';
// import LearnerPath from './Component/LearnerPath.jsx';
// import FormsData from './Component/FormsData.jsx';
// import SyncStatus from './Component/SyncStatus.jsx';
// import Courses from './Component/Courses.jsx';
// import DropdownSearch from './Component/DropdownSearch.jsx';
// import Dropdown from './Component/Dropdown.jsx';

import ListItem from "./Component/ListItem";

// import Learn from './Component/Learn.jsx';
// import MyComponent from './Component/MyComponent.jsx';
// import Message from './Component/Message.jsx';
// import SetState from './Component/SetState.jsx';
// import EventBind from './Component/EventBind.jsx';
// import ParentComponent from './Component/ParentComponent.jsx';
// import AlertMessage from './Component/AlertMessage.jsx';
// import Render from './Component/Render.jsx';
// import List from './Component/List.jsx';
// import ClassClick from './Component/ClassClick.jsx';
// import Form from './Component/Form.jsx';

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
    <div>
       {/* <Student students = {students}/> */}
        {/* <Book books={books}/> */}
        {/* <School/>
         <Teachers/> */}
       <search/>
        {/* <StudentCreate/> */}
        {/* <LearnerPath/> */}
       {/* <FormsData/> */}
      {/* <SyncStatus/> */}
      {/* <Courses/> */}
      {/* <DropdownSearch/> */}
     {/* <AssignmentSchool/> */}
     {/* <Optionlist/> */}
     {/* <Learn/> */}
     {/* <Dropdown/> */}
     {/* <SetState/> */}
     {/* <Message/> */}
     {/* <Form/> */}
     {/* <ClassClick/> */}
     {/* <EventBind/> */}
     {/* <ParentComponent ChangeMessage={'Goodbye'}/> */}
     {/* <AlertMessage/> */}
     {/* <Render/>  */}
     {/* <List/> */}
     <ListItem/>
    </div>
  );
}





