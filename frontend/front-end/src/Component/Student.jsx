import React from "react";

class Student extends React.Component {
  render() {
    return (
      <div>
        <div className=" bg-blue-400 mx-30 my-30 p-5 text-center text-black-600">
          <h2>Hi, i am a student</h2>
        </div>
        <div className="container mx-auto mt-5">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr className="bg-blue-200">
                <th className="py-2 px-4 border-b font-bold uppercase text-lg text-gray-600">
                  Name
                </th>
                <th className="py-2 px-4 border-b font-bold uppercase text-lg text-gray-600">
                  CNIC
                </th>
                <th className="py-2 px-4 border-b font-bold uppercase text-lg text-gray-600">
                  Contact Number
                </th>
                <th className="py-2 px-4 border-b font-bold uppercase text-lg text-gray-600">
                  Fees
                </th>
              </tr>
            </thead>
            <tbody class="[&>*:nth-child(even)]:bg-gray-100 [&>*:nth-child(odd)]:bg-gray-300">
              {this.props.students.map((student) => (
                <tr className="text-center">
                  <td className="py-2 px-4 border-b text-sm text-gray-600">
                    {student.human.name}
                  </td>
                  <td className="py-2 px-4 border-b text-sm text-gray-600">
                    {student.human.cnic}
                  </td>
                  <td className="py-2 px-4 border-b text-sm text-gray-600">
                    {student.human.contactNo}
                  </td>
                  <td className="py-2 px-4 border-b text-sm text-gray-600">
                    {student.fees}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
       
      </div>
    );
  }
}

export default Student;
