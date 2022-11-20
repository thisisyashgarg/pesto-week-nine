import ReactDOM from 'react-dom'
import React from 'react';
// import {classComponent, functionComponent } from './App.js';


const rootElement = document.getElementById('root'); 

//normal jsx
// const helloWorld = <h1>HELLO WORLD!!</h1> 
// const helloWorld2 = React.createElement('h1', null, 'Hello pesto');
//helloWorld translates into helloWorld2 in inside react, but helloWorld2 
//is easy to make


//class component 
// const input = new classComponent();
// ReactDOM.render( input.render(), rootElement);
function functionComponent(){
    return (<h1>I am a function component with name </h1>); 
}

//function component
ReactDOM.render( <this.functionComponent/>, rootElement);


//composing components
// let compose = 
// <div>
//     <functionComponent name = "yash"/>
//     <functionComponent name = "ankit"/>
//     <functionComponent name = "rohan"/>
// </div>

// ReactDOM.render( compose, rootElement);



