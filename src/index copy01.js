import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';


//<App />   JS普通对象

// ReactDOM.render(
//   <React.StrictMode>
//     <h1>Hello World!</h1>
//   </React.StrictMode>,
//   document.getElementById('root')
// );


function Clock(props){
  return (
    <h1>当前时间为{props.date.toLocaleTimeString()}</h1>
  )
  // ReactDOM.render(element,
  //   document.getElementById('root')
  // );
}

function setClock(){
  ReactDOM.render(<Clock date={new Date()} />,
    document.getElementById('root')
  );
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// setInterval(setClock,1000)
