import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//State
    //- is always an Object (key/value pairs)
    //- is never mutated directly

    const initialState ={
        value: 1
    }

const rootReducer = (state =initialState, action) =>{
    return state;
}

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
serviceWorker.unregister();



//Actions
    //always have a type
    //sometimes have a payload

const ACTION_INCREMENT = 'increment'
const ACTION_DECREMENT = 'decrement'

//It is common to have action-creator functions
const increment = () =>{
    return{
        type: 'increment'
    }
}

const decrement = () =>{
    return{
        type: 'decrement'
    }
}

//A Reducer 
    //calculates the next version of state
    //is always a function...2 args:
        //current state
        //an action...this calculates next version of state

const counter = (state = initialState, action={type:''}) =>{
    //inspect the action and see what type it is

    switch(action.type){
        case increment:
            return{
                ...state,
                value: state.value + 1,
            }
            break;
        case decrement:
            return{
                ...state,
                value: state.value - 1,
            }
            break;
        default:
            return state;
            break;
    }

}

//subscription

store.subscrition(()=>{
    store.getState()
})

//dispatch actions

store.dispatch({type:'increment'})
store.dispatch({type:'decrement'})