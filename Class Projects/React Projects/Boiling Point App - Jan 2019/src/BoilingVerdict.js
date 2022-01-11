import React from 'react';

function BoilingVerdict(props){
    if (props.temperature >=100){
    return(
        <h1>The Water is Boiling</h1>
    )
    }else{
        return(
            <h1>Water is not boiling!</h1>
        )
    }
}

export default BoilingVerdict;