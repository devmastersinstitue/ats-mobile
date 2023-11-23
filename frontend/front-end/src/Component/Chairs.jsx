import React from "react";

function Chairs (props) {
    return (
        <div>
            <div className='bg-red-300 mx-15  my-14 p-7 text-center'>
     <h1>
        This is {props.name} Chair
    </h1>
    </div>
    </div>
    )
}

export default Chairs;