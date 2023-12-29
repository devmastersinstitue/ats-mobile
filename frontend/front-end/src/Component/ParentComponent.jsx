import { useState } from 'react';
const ParentComponent = () => {
  	const [message, setMessage] = useState("Hello");
	
  	const changeMessage = (newMessage) => {
    	setMessage(newMessage);
  	}
	
  	return (
    	<>
      		<label>{message}</label>
      		<ChildComponent changeMessage={changeMessage}/>
    	</>    
  	);
};
const ChildComponent = ({changeMessage}) => {
  	const ClickHandler = () => {
    	changeMessage("Goodbye!");
  	}
	
  	return (
    	<button onClick={ClickHandler}>Show Goodbye</button>
  	);
};
export default ParentComponent;