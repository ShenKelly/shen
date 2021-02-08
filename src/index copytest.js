import React from 'react';
import ReactDOM from 'react-dom';
import jsonDate from './data.json';
import * as echarts from 'echarts';
 

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
let province = [];
for(let key in provinceObject){
  // provinceObject[key].province =  key;
  provinceList.push(provinceObject[key]);
  province.push(key);
}

let provinceListSort = provinceList.sort((a,b)=>{
  if(a.confirmed>b.confirmed){
    return 1;
  }else{
    return -1;
  }
})

// let provinceListCharts = {};

console.log(provinceObject);
console.log(provinceList)

console.log(provinceListSort);

class Parent extends React.Component{
  constructor(){
    super();
  }

  componentDidMount() {
    this.myChart = echarts.init(this.refs.main);
    this.myChart.setOption({
      title: { text: 'ECharts 入门示例' },
      tooltip: {},
      xAxis: {
          data: this.props.province
      },
      yAxis: {},
      series: this.props.provinceList
    });
  }


  render(){
    return (
      <div>
        <div ref="main" style={{ width: "500px", height: "300px" }}></div>
        <ul>
          <li>
            <span>地区</span>   
            <span>确诊</span>
            <span>治愈</span>
            <span>死亡</span>
          </li>
          {
            this.props.list.map((item,index)=>{
              return(
                <li key={index}>
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


