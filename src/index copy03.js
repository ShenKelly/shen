import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'

let man = 'bu发热';
let elementStyle = {
  background:'blue',
  borderBottom:'1px solid red'
}

let element2 = (
  <div>
    <span>111</span>
    <span>222</span>
  </div>
)
let elementClass = 'App-link';

let element = (
  <div style={elementStyle}>
    <h1>JSX表达式</h1>
    <h2 className="App-link">{1+1}</h2>
    <h2>{man=='发热'?<button>隔离</button>:element2}</h2>
  </div>
);


ReactDOM.render(
  element,
  document.querySelector('#root')
)


