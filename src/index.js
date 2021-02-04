import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'


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

function ChildCom(props) {
  console.log(props);
  return (
    <div style={elementStyle}>
      <h1>函数组件</h1>
      <h2 className="App-link">{1+1}</h2>
      <h2>{props.man=='发热'?<button>隔离</button>:element2}</h2>
    </div>
  );
}

class HelloWorld extends React.Component{
  render(){
    console.log(this);
    return (
      <div style={elementStyle}>
        <h1>类组件</h1>
        <h2 className="App-link">{1+1}</h2>
        <h2>{this.props.man=='发热'?<button>隔离</button>:element2}</h2>
        <ChildCom man='bufare' />
      </div>
    );
  }
}


ReactDOM.render(
  <HelloWorld man="发热" />,
  document.querySelector('#root')
)


