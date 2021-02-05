import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'

//子传父
class Parent extends React.Component{
  constructor(){
    super();
    this.state = {
      isActive:true,
      childData:''
    };
  }

  setChildData=(data)=>{
    this.setState({
      childData:data
    })
  }


  render(){
    return (
      <div>
        <div>子元素传给父元素的值：{this.state.childData}</div>
        <ChildrenCom setChildData={this.setChildData}/>
      </div>
    );
  }
}

class ChildrenCom extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      msg:'Hello World'
    }
  }

  render(){

    return (
      <div>
         <button onClick={this.showChild}>子传父</button>
      </div>
    );
  }

  showChild = ()=>{
    this.props.setChildData(this.state.msg);
  }
}

ReactDOM.render(
  <Parent />,
  document.querySelector('#root')
)


