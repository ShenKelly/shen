import React from 'react';
import ReactDOM from 'react-dom';

let man = 'bu发热';

let element2 = (
  <div>
    <span>111</span>
    <span>222</span>
  </div>
)

let element = (
  <div>
    <h1>JSX表达式</h1>
    <h2>{1+1}</h2>
    <h2>{man=='发热'?<button>隔离</button>:element2}</h2>
  </div>
);


ReactDOM.render(
  element,
  document.querySelector('#root')
)


