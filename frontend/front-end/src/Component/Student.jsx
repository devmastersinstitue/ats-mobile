import React from 'react';

class Student extends React.Component {
    render() {
       
        return (
            <div>
                <div className=' bg-red-400 mx-40 my-10 p-10 text-center text-green-600' >
                    <h2>Hi, i am a student</h2>
                </div>
                <div>
                    <div className='flex flex-row justify-between px-40'>
                        <div className='w-20'>Name</div>
                        <div className='w-40'>CNIC</div>
                        <div className='w-40'>Contact Number</div>
                        <div className='w-20'>Fees</div>
                    </div>
                    {this.props.students.map((student) => (
                        <div className='flex flex-row justify-between px-40 border'>
                            <div className='w-20'>{student.human.name}</div>
                            <div className='w-40'>{student.human.cnic}</div>
                            <div className='w-40'>{student.human.contactNo}</div>
                            <div className='w-20'>{student.fees}</div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
};

export default Student;
