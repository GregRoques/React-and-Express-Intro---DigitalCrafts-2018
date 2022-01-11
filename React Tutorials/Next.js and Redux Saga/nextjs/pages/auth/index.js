import React from 'react';

import User from '../components/User'

const authIndexPage = props =>(
    <div>
        <h1>Auth Index Page – {props.appName}</h1>
        <User name='Callie' age={11} />
        <User name="Midnight" age={10} />
    </div>
);

authIndexPage.getInitialProps = context =>{
    const promise = new Promise ((resolve, reject) =>{
        setTimeout(()=>{
            resolve({appName: `Greg's Cats`});
        },1000);
    });
    return promise
};

export default authIndexPage;