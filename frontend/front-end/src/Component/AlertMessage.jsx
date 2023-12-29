import React from "react";
function AlertMessage() {
    const shoot = () => {
      alert("My name is Mala!");
    }
  
    return (
      <button onClick={shoot}> My name!</button>
    );
  }
  export default AlertMessage;