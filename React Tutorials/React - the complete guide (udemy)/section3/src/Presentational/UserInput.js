import React from 'react';

const UserInput = (props) =>{
    return(
        <div className = "inputAlign">
            <input type="text" onChange={props.changed} defaultValue={props.name}/>
        </div>
    )
}

export default UserInput;
