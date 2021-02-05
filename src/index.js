import React from 'react';
import ReactDOM from 'react-dom';
import jsonDate from './data.json';

let provinceList = {};
 
jsonDate.data.map((item)=>{
  provinceList[item.city] = {
    
  }
  return item;
})

class Parent extends React.Component{
  constructor(){
    super();
  }

  render(){
    return (
      <div></div>
    );
  }
}

ReactDOM.render(
  <Parent />,
  document.querySelector('#root')
)


