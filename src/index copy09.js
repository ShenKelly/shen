import React from 'react';
import ReactDOM from 'react-dom';
import jsonDate from './data.json';

let provinceObject = {};
 
jsonDate.data.map((item)=>{
  provinceObject[item.city] = {
    province:item.city,
    confirmed:item.confirmed,
    died:item.died,
    crued:item.crued
  }
})

let provinceList = [];
for(let key in provinceObject){
  // provinceObject[key].province =  key;
  provinceList.push(provinceObject[key]);
}

let provinceListSort = provinceList.sort((a,b)=>{
  if(a.confirmed>b.confirmed){
    return 1;
  }else{
    return -1;
  }
})

console.log(provinceListSort);

class Parent extends React.Component{
  constructor(){
    super();
  }

  render(){
    return (
      <div>
        <ul>
          <li>
            <span>地区</span>   
            <span>确诊</span>
            <span>治愈</span>
            <span>死亡</span>
          </li>
          {
            this.props.list.map((item)=>{
              return(
                <li>
                  <span>{item.province}</span>
                  <span>{item.confirmed}</span>
                  <span>{item.crued}</span>
                  <span>{item.died}</span>
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }
}

ReactDOM.render(
  <Parent list={provinceListSort} />,
  document.querySelector('#root')
)


