import React from 'react';

const user = props => (
    <div>
        <h2>{props.name}</h2>
        <h2>Age: {props.age}</h2>
        <style jsx>{`
            div {
                color: blue;
                text-align: center;
                border: 1px solid #eee;
                box-shadow: 0 2px 3px #ccc;
                padding: 20px;
            }
        `}</style>
    </div>
);

export default user;

