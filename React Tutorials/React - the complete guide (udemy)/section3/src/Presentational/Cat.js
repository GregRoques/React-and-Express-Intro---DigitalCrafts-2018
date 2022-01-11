import React from 'react';

const Cat = (props) =>{
     
    // // Example of throwing an error if some parameter isn't met

    //  const rnd = Math.random();
    //  if (rnd >0.7){
    //      throw new Error(`this didn't work`)
    //  }

    return(
        <div>
            <p onClick={props.click}>I'm {props.name} and I am {props.age}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
}

export default Cat;