import logo from './logo.svg';
import './App.css';

import React, { useState, useEffect } from "react";

export default function App(props) {
  

  return (
    
    <div >
      <h2 className="text-3xl font-bold underline text-red-800">Heading</h2>
      <h1>{props.name}</h1>
      <h3>{props.fatherName}</h3>

    </div>
  );
}

 
