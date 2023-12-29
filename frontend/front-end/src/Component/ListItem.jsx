import React from "react";

// const people = [
//     'Creola Katherine Johnson: mathematician',
//     'Mario José Molina-Pasquel Henríquez: chemist',
//     'Mohammad Abdus Salam: physicist',
//     'Percy Lavon Julian: chemist',
//     'Subrahmanyan Chandrasekhar: astrophysicist'
//   ];
  
//     function ListItem() {
//     const listItem = people.map(person =>
//       <li>{person}</li>
//     );
//     return <ul>{listItem}</ul>;
//   }
const ListItem = () => {
    // Sample list data
    const myList = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
  
    return (
      <div>
        <h1>List Example</h1>
        <ul>
          {myList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default ListItem