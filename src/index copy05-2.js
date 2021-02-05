import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'

class Tap extends React.Component{
  constructor(){
    super();
    this.state = {
      c1:"content active",
      c2:"content"
    };

    this.clickEvent = this.clickEvent.bind(this);
  }

  clickEvent(e){
    let index = e.target.dataset.index;
    if(index=="1"){
      this.setState({c1:'content active',c2:'content'});
    }else{
      this.setState({c1:'content',c2:'content active'});
    }
  }

  render(){
    return(
      <div>
        <button onClick={this.clickEvent}>
          <span data-index="1">点赞</span>
          <span>👍</span>
        </button>
        <button onClick={this.clickEvent}>
          <span data-index="2" >取消</span>
          <span>👍</span>
        </button>
        <div className={this.state.c1}>
          <h1>内容1</h1>
        </div>
        <div className={this.state.c2}>
          <h1>内容2</h1>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Tap />,
  document.querySelector('#root')
)


