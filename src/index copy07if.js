import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'

function UserLogin(){
  return (
    <h1>请先登录</h1>
  );
}

function UserGreet(){
  return (
    <h1>欢迎</h1>
  );
}

class Parent extends React.Component{
  constructor(){
    super();
    this.state = {
      isLogin:true
    };
  }

  render(){
    let element = null;
    if(this.state.isLogin){
      element = <UserGreet />;
    }else{
      element = <UserLogin />
    }
    return(
      <div>
        <h1>头部</h1>
        {element}
      </div>
    );
  }
}


ReactDOM.render(
  <Parent />,
  document.querySelector('#root')
)


