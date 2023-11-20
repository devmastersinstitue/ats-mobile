import logo from './logo.svg';
import './App.css';

import React, { useState, useEffect } from "react";

function UserInfo(props){
  return (
  <div className='flex flex-row border-blue-500 border-2 justify-between m-10 py-5'>
    <div className='pl-20'>
      <p><span className='text-xl text-red-500'>Name </span> : {props.name}</p><br/>
      <p><span className='text-xl text-red-500'>Father Name</span> : {props.fatherName}</p>
    </div>
    <div className='mr-20'>
      <p><span className='text-xl text-red-500'>Age</span> : {props.age}</p><br/>
      <p><span className='text-xl text-red-500'>Email</span> : {props.email}</p>
    </div>
    
  </div>
  );
}

export default function App(props) {
    return (
    <div >
      <UserInfo name ="KASHMALA" fatherName ="Aziz-ur-Rehman" age ="18" email ="kkhankkhan009@gmail.com"/>
      <UserInfo name ="Mala" fatherName ="Ali" age ="23" email ="malakhan009@gmail.com"/>
      <UserInfo name ="Mala" fatherName ="Ali" age ="23" email ="malakhan009@gmail.com"/>
    </div>
  );
}

 
{/* <h2 className="text-5xl font-bold underline text-blue-800 my-8
       m-8">
       Promotion of tree plantation on state and private land</h2>
      <h1 className="text-4xl font-bold text-red-700 p-8">  { props.name }</h1>
      <h3 className='text-2xl font-bold m-8'>{props.topic}</h3> */}