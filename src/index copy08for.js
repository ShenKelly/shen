import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'

class Parent extends React.Component{
  constructor(){
    super();
    this.state = {
      list:[
        {title:'react',type:'前端',status:'在学'},
        {title:'vue',type:'前端',status:'熟练'},
        {title:'flutter',type:'前端',status:'熟悉'},
        {title:'node',type:'前后端',status:'未学习'},
        {title:'python',type:'后端',status:'了解'},
      ]
    };
  }
  render(){
    let itemList = this.state.list.map((item,index)=>{
      return <ListShow2 key={index} index={index} item={item} />;
    })
    return (
      <div>
        <h1>学习</h1>
        <ul>
          {itemList}
        </ul>
      </div>
    );
  }
}

// function ListShow(props){
//   let index = props.index;
//   let item = props.item;
//   return (
//     <li>
//       <h3>{index}:{item.title}</h3>
//       <h5>{item.type}----{item.status}</h5>
//     </li>
//   );
// }

class ListShow2 extends React.Component{
  constructor(){
    super();
  }
  render(){
    let index = this.props.index;
    let item = this.props.item;
    return (
      <li onClick={(e)=>{this.clickShow(index,item)}}>
        <h3>{index}:{item.title}</h3>
        <h5>{item.type}----{item.status}</h5>
      </li>
    );
  }

  clickShow = (index,data)=>{
    console.log(data);
    console.log(index);
  }
}

ReactDOM.render(
  <Parent />,
  document.querySelector('#root')
)


