import React  from 'react';
import Select from 'react-select';



const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

class DropdownSearch extends React.Component {
  state = {
    selectedOption: null,
  };
  handleChange = (selectedDropdownSearch) => {
    this.setState({ selectedDropdownSearch }, () =>
      console.log(`Option selected:`, this.state.selectedDropdownSearch)
    );
  };
  render() {
    const { selectedDropdownSearch } = this.state;

    return (
      <Select width="175px"
      className="DropdownSearch-name"
      classNamePrefix="react-select"
      isSearchable={true}
      menuPlacement="auto"
     
      isClearable
      isMulti
      isDisabled={DropdownSearch.length === 1 ? true : false}
      inputMode="text"
      menuPosition="absolute"
      placeholder="Learners Current School"
     
      backspaceRemovesValue={true}
      clearValue={() => []}
      noOptionsMessage={() => "No results"}
      menuPortalTarget={null}
        value={selectedDropdownSearch}
        onChange={this.DropdownSearch}
        options={options}
      />
    );
  }
}

export default DropdownSearch;



// import React from "react";

// export default function Book() {
//     return (
//         <form className="max-w-xs px-4">
//             <div className="relative">
//                 <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="absolute top-0 bottom-0 w-5 h-6 my-auto text-gray-400 left-3"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                 >
//                     <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
//                     />
//                 </svg>
//                 <input
//                     type="text"
//                     placeholder="Search"
//                     className="w-48 h-10 py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white
//                      focus:border-indigo-700"
//                 />
//             </div>
//         </form>
//     );
// }







// function Book(props) {
//   return (
//     <div>
//       <div className=" bg-blue-400 mx-30 my-30 p-5 text-center">
//         <h2>Book Function</h2>
//       </div>
//       <div className="container mx-auto mt-5">
//         <table className="min-w-full bg-white border border-gray-300">
//           <thead>
//             <tr className="bg-blue-200">
//               <th className="py-2 px-4 border-b font-bold uppercase text-lg text-gray-600 ">
//                 Book Name
//               </th>
//               <th className="py-2 px-4 border-b font-bold uppercase text-lg text-gray-600">
//                 Color
//               </th>
//               <th className="py-2 px-4 border-b font-bold uppercase text-lg text-gray-600">
//                 Price
//               </th>
//               <th className="py-2 px-4 border-b font-bold uppercase text-lg text-gray-600">
//                 Author
//               </th>
//             </tr>
//           </thead>
//           <tbody class="[&>*:nth-child(even)]:bg-gray-100 [&>*:nth-child(odd)]:bg-gray-300">
//             {props.books.map((book) => (
//               <tr className="text-center">
//                 <td className="py-2 px-4 border-b text-sm text-gray-600">
//                   {book.name}
//                 </td>
//                 <td className="py-2 px-4 border-b text-sm text-gray-600">
//                   {book.color}
//                 </td>
//                 <td className="py-2 px-4 border-b text-sm text-gray-600">
//                   {book.price}
//                 </td>
//                 <td className="py-2 px-4 border-b text-sm text-gray-600">
//                   {book.author.name}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default Dropdown;
