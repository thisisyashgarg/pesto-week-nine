import React from "react";
import ReactDOM from 'react-dom'

//one way to create component
// const helloWorld = <h1>HELLO WORLD again!!</h1>;


//Class component
class classComponent extends React.Component{
     render(){
        const {name} = this.props;
        return (
            <>
            <h1>I am a class component with name {name} </h1>
            <button onClick={function(){console.log('clicked')}}>Click Me</button>
            </>
        );
     }   
}
// <> and </> are called fragments


//function component
function functionComponent(){
    return (<h1>I am a function component with name </h1>);
    
}

export { classComponent, functionComponent }; //exporting class