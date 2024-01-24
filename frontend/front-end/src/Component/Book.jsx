import React  from 'react';

function Book(props) {
  return (
    <div>
      <div className=" bg-blue-400 mx-30 my-30 p-5 text-center">
        <h2>Book Function</h2>
      </div>
      <div className="container mx-auto mt-5">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-blue-200">
              <th className="py-2 px-4 border-b font-bold uppercase text-lg text-gray-600 ">
                Book Name
              </th>
              <th className="py-2 px-4 border-b font-bold uppercase text-lg text-gray-600">
                Color
              </th>
              <th className="py-2 px-4 border-b font-bold uppercase text-lg text-gray-600">
                Price
              </th>
              <th className="py-2 px-4 border-b font-bold uppercase text-lg text-gray-600">
                Author
              </th>
            </tr>
          </thead>
          <tbody class="[&>*:nth-child(even)]:bg-gray-100 [&>*:nth-child(odd)]:bg-gray-300">
            {props.books.map((book) => (
              <tr className="text-center">
                <td className="py-2 px-4 border-b text-sm text-gray-600">
                  {book.name}
                </td>
                <td className="py-2 px-4 border-b text-sm text-gray-600">
                  {book.color}
                </td>
                <td className="py-2 px-4 border-b text-sm text-gray-600">
                  {book.price}
                </td>
                <td className="py-2 px-4 border-b text-sm text-gray-600">
                  {book.author.name}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Book;
