import React, {Component } from 'react';
//import './App.css';
import './component/List'
import List from './component/List.js';
import Add from './component/Add.js';


class App extends Component{
  
constructor(props)
{
  super(props)
  this.state={inputValue:"", list:[{}]}
  this.handlechange= this.handlechange.bind(this)
  
}

handlechange=(event)=>{
                        this.setState({inputValue: event.target.value});
                       
                      }
 
render(){ return(
                <div>
                  <h1 style={{textAlign:"center"}}>To-do List</h1>
                  <Add label="Add a to-do-item" value={this.state.inputValue} onchange={(event)=>{this.setState({inputValue:event.target.value});}} handleSubmit={(event)=>{ event.preventDefault(); let item={itemLabel:this.state.inputValue, key:Date.now(), status:"false"} ;this.setState({list:[...this.state.list,item]});console.log(this.state.list) }}/>
                  <h1>ToDo List</h1>
                  <List displaylist={this.state.list}></List>
                </div>)}

 

  
}

export default App;
