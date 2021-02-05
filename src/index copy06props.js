import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'

//在父元素中使用state去控制子元素props从而达到父元素数据传递给子元素
class Parent extends React.Component{
  constructor(){
    super();
    this.state = {
      isActive:true
    };
    this.clickEvent = this.clickEvent.bind(this);
  }

  clickEvent(){
    this.setState({isActive:!this.state.isActive});
  }


  render(){
    return (
      <div>
        <button onClick={this.clickEvent}>控制子元素的显示</button>
        <ChildrenCom isActive={this.state.isActive}/>
      </div>
    );
  }
}

class ChildrenCom extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    let strClass = null;
    if(this.props.isActive){
      strClass = 'active';
    }else{
      strClass = "";
    }

    return (
      <div className={"content"+strClass}>
          <h1>我是子元素</h1>
      </div>
    );
  }
}

ReactDOM.render(
  <Parent />,
  document.querySelector('#root')
)


