import logo from './logo.svg';
import './App.css';

import React, { useState, useEffect } from "react";

export default function App(props) {
  

  return (
    
    <div >
      <h2>Heading</h2>
      <h1>{props.name}</h1>
      <h3>{props.fatherName}</h3>

    </div>
  );
}

 
