import React, { Component } from 'react'
import './App.css'

export default class App extends Component {
   state={
    Name:" ",
    Department:" ",
    Rating:" ",
    employe:[]
  };
  changeHandler=(s)=>
  {
    
this.setState({[ s.target.name] :s.target.value})

  }
  submitHandler=(s)=>
  {
    s.preventDefault()
    const empobj={
      Name :this.state.Name,
      Department :this.state.Department,
      Rating :this.state.Rating

    }
    const arr = this.state.employe;
    arr.push (empobj)
    this.setState({employe : arr})
  }

  render() {
    return (
      <div className='maindiv'>
        <center>
      <h1> EMPLOYEE FEEDBACK FORM</h1>
       <form className='myform'>
       <label>NAME:</label> 
       <br/>
        <input type="text"  name="Name" value={this.state.Name} onChange={this.changeHandler}></input> 
        <br/>
        <label>DEPARTMENT:</label> 
        <br/>
        <input type="text"  name="Department" value={this.state.Department} onChange={this.changeHandler}></input>
         <br/>
        <label>RATING:</label>
         <br/>
        <input type="number"  name="Rating" value={this.state.Rating} onChange={this.changeHandler}></input> 
        <br/>
        <button type='sumbit' onClick={this.submitHandler}> SAVE HERE</button>
        </form>

        <div className='output'>
           {this.state.employe.map((value,index)=>
           {
            return(
            <span key={index}>NAME: {value.Name} || Department: {value.Department}  ||  RATING: {value.Rating}</span>
            )
           }

           )}

        </div>
       
      
    </center>
    </div>
    )
  }
}

