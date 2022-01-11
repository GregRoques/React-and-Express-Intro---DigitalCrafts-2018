import { Component } from 'react'
import Link from 'next/link';
import Router from 'next/router';

class indexPage extends Component {
    static async getInitialProps(context){ //can also omit async here and call a promise in the function
        console.log(context)
        return {}; //must pass an object 
    } // can use to initialize app before it loads; 
      // we can prepopulate props in return
      // if using promise in function, return promise here

    render(){
        return(
            <div>
                <h1>Welcome to my Site!</h1>
                <p>Go to <Link href='/auth'><a>Auth</a></Link></p>
                    {/* must include anchor tag within Link tag */}
                <button onClick={()=> Router.push('/auth') }>Go to Auth Here Too!</button>
            </div>
        )
    }
};

export default indexPage;