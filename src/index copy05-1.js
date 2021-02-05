import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'

class Clock extends React.Component{
  // 构造函数
  constructor(props){
    super();
    //构造函数初始化数据
    this.state = {
      time:new Date().toLocaleTimeString()
    };
  }

  //渲染
  render(){
    return (
      <div>
        <h1>当前时间:{this.state.time}</h1>
      </div>
    );
  }

  //生命周期函数，组件渲染完成的函数
  componentDidMount(){
    console.log(this.state.time);
    /* 1.调用 setState 的时候，React.js 并不会马上修改 state */
    // this.setState({ time:'22' });
    // this.setState({ time:this.state.time+'22' });

    /* 2.接受一个函数作为参数。React.js 会把上一个 setState 的结果传入这个函数 */
    // this.setState((preState)=>{
    //   return {time:'22'};
    // });
    // this.setState((preState)=>{
    //   return {time:preState.time+'22'};
    // });

    setInterval(()=>{
      //修改state的制并且实时渲染，需要通过this.setState
      //setstate异步,小程序也有借鉴，和flutter中的setState也类似
      this.setState({time:new Date().toLocaleTimeString()})
    },1000);
    console.log(this.state.time);
  }
}

ReactDOM.render(
  <Clock />,
  document.querySelector('#root')
)


