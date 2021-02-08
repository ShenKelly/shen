import React,{Component} from 'react';
import ReactDOM from 'react-dom';

class ComLife extends Component{
  constructor(){
    super();
    this.state = {
      msg:'Hello World',
    }
    console.log('这是一个构造函数：constructor')
  }
  // getDerivedStateFromProps(){
  //   console.log('已替换了ComponentWillMount函数')
  // }
  componentDidMount(){
    console.log('这是一个渲染完毕的函数,componentDidMount');
  }
  static getDerivedStateFromProps(){
    console.log('应该替换ComponentWillReceiveProps');
    return true;
  }
  shouldComponentUpdate(){
    console.log('组件接受到新的state或者props',this.state);
    if(this.state.msg==='Hello World'){
      return true;
    }else{
      return false;
    }
  }
  getSnapshotBeforeUpdate(){
    console.log('替换CompontWillUpdate函数，表示组件将被更新');
    return null;
  }
  componentDidUpdate(){
    console.log('组件已经更新');
  }
  componentwWillUnmount(){
    console.log('组件将要卸载');
  }
  render(){
    console.log('这是一个渲染函数：render')
    return (
      <div>
        <h1>{this.state.msg}</h1>
        <button onClick={this.changeMsg}>更改</button>
      </div>
    );
  }

  changeMsg=()=>{
    this.setState({
      msg:'111'
    });
  }
}


ReactDOM.render(
  <ComLife />,
  document.getElementById('root')
)