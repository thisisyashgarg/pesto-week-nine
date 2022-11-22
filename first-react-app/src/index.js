import ReactDOM from 'react-dom'
import React from 'react';
// import {classComponent } from './App.js';

function Welcome(props) {
    return <h1>Hello, [props.name](http://props.name/) </h1>;
    }
    
    function App() {
    return (
    <div>
    <Welcome name="Sara" />
    <Welcome name="Cahal" />
    <Welcome name="Edite" />
    </div>
    );
    }
    
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<App />);

// const rootElement = document.getElementById('root'); 

// ReactDOM.render( <App/>, root);

// function Welcome(props) {
//     return <h1>Hello, {props.name}</h1>;
//   }
  
//   function App() {
//     return (
//       <div>      <Welcome name="Sara" />      <Welcome name="Cahal" />      <Welcome name="Edite" />    </div>);
//   }



//normal jsx
// const helloWorld = <h1>HELLO WORLD!!</h1> 
// const helloWorld2 = React.createElement('h1', null, 'Hello pesto');
//helloWorld translates into helloWorld2 in inside react, but helloWorld2 
//is easy to make


//class component 
// const input = new classComponent();
// ReactDOM.render( input.render(), rootElement);


// function functionComponent (){
//     return <h1>I am a function component with name </h1>; 
// }

// class classComponent extends React.Component{
//     render(){
//        const {name} = this.props;
//        return (
//            <>
//            <h1>I am a class component with name {name} </h1>
//            <button onClick={function(){console.log('clicked')}}>Click Me</button>
//            </>
//        );
//     }   
// }

// //function component
// ReactDOM.render( <functionComponent/>);


//composing components
// let compose = 
// <div>
//     <functionComponent name = "yash"/>
//     <functionComponent name = "ankit"/>
//     <functionComponent name = "rohan"/>
// </div>



