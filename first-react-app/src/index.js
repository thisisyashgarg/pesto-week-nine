import ReactDOM from 'react-dom'
import { helloWorld } from './App.js';


const rootElement = document.getElementById('root'); //jsx, way to create component in react

// const helloWorld = <h1>HELLO WORLD!!</h1>
// const helloWorld2 = React.createElement('h1', null, 'Hello pesto');
//helloWorld translates into helloWorld2 in inside react, but helloWorld2 
//is easy to make
console.log(typeof helloWorld);
ReactDOM.render(helloWorld, rootElement);