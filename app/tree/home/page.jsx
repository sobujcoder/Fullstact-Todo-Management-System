"use client"

import React, { useEffect, useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';


import Table from 'react-bootstrap/Table';

import Image from 'next/image';

import emoji from "/public/emoji.png";
import Milestone from "/public/Milestone.jpg";
import IUBlogo from "/public/IUBlogo.jpg";


import kabboSmile from "/public/kabboSmile.jpg";
import kabbo from "/public/kabbo.jpeg";
import kabboUpdate from "/public/kabboUpdatePic.jpg";
import formal from "/public/formal.jpg";
import kabboNew from "/public/kabboNew.jpg";
import axios from 'axios';


const page = () => {

  const initialTodo = [
    { id: 1, TodoName: "Bangladesh", TodoProject: "best" },
    { id: 2, TodoName: "USA", TodoProject: "Powerful" },
    { id: 3, TodoName: "UK", TodoProject: "Peaceful" },
  ];

  const [todoName, setTodoName] = useState("");
  const [todoProject, setTodoProject] = useState("");
  const [todos, setTodos] = useState(initialTodo);

  const[todoview, setTodoview] = useState([]);

  const handleTodoName = (e) => {
    setTodoName(e.target.value);
  };

  const handleTodoProject = (e) => {
    setTodoProject(e.target.value);
  };

  const handleTodoSubmit = async (e) => {
    e.preventDefault();
    try {

      const todoResponse = await axios.post("http://localhost:3007/todoCreate",{
        todoName,
        todoProject,

      });
      setTodoview(todoResponse.data);
      setTodoName(" ");
      setTodoProject(" ");


      

    } catch (error) {
      console.log(error.message);
    }
  };


const handleTodoRemove = async (taskId) => {
  try {
    await axios.delete(`http://localhost:3007/todoRemove/${taskId}`);
    // After successful deletion, clear the viewTask state
    setTodoview(null);
  } catch (error) {
    console.log(error.message);
  }
};

const handleTodoUpdate = async () => {
  try {
    
    const updatedTodo = {
      _id: todoview._id, 
      todoName: todoName,
      todoProject: todoProject
    };
    const updatedTodoResponse = await axios.put(`http://localhost:3007/todoUpdate/${todoview._id}`, updatedTodo);
    setTodoview(updatedTodoResponse.data);
    setTodoName(todoview.todoName);
    setTodoProject(todoview.todoProject);

  } catch (error) {
    console.log(error.message);
  }
}















  const Imagearray =[
    kabboSmile,
    kabboUpdate,
    formal,
    kabbo,
    kabboNew,

  ];
  const [arr, setArr] = useState(0);

  const handleNext =()=>{
    setArr((e)=>(e+1)%Imagearray.length);
  }
  
  const handlePrev =()=>{
    setArr((e)=>(e-1+Imagearray.length)%Imagearray.length);
  }

  useEffect(()=>{
    const intervalId = setInterval(()=>{
      handleNext();
    },3000);
    return()=> clearInterval(intervalId);
  },[arr]);



  return (
    <div>

        <h2 style={{textAlign: 'center'}}>Home page </h2>

        <div style={{display: 'flex', flexDirection: 'row'}}>

             <div style={{flex:1, margin:"20px"}}>

                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "50vh" }}>
                     <Image src={Imagearray[arr]} alt="" style={{ height: "200px", width: "250px", border: "2px solid gray", borderRadius: "6px", margin: "50px" }} />

        <div>
          <button onClick={handleNext} style={{ marginRight: "10px" }}>Next</button>
          <button onClick={handlePrev} style={{ marginLeft: "10px" }}>Previous</button>
        </div>
                 </div>


     </div>

            <div className="homeLine"></div>

          <div style={{flex:1, margin:"20px"}}>
            <h2>Hi...</h2>
            <p> I am Kawshik Rahman Kabbo . I ssudied at Independent University Bangladesh(IUB) . And this is my last semester. Recently I learn MERN stack. I Want to do intern as well as job in this sector and try to leave this country cause i want to go aborad for higher stduy.</p>



          </div>

     </div> <br/> <br/> 

     <h4 style={{textAlign: "center"}}> Kawshik Rahman Kabbo </h4> <br/>

     <div style={{ display: "flex", flexDirection: "row" }}>
      <Card className="custom-card" style={{margin:"15px", padding:"15px", border: "2px solid gray", cursor: "pointer", }}>
          <Card.Body>
            <Card.Title>School</Card.Title>
            <Card.Text>My School was Meghdubi Adarsha High School. I spent many good memorable days there.</Card.Text>

           

            <Card.Link href=" https://nextjs.org/docs/app/building-your-application/styling"> View Link </Card.Link> <br/>

            <Image src={emoji} alt="" className="custom-Image" style ={{height:"60px", width:"80px"}}/>
           
          </Card.Body>
        </Card>
        <Card className="custom-card" style={{margin:"15px", padding:"15px", border: "2px solid gray", cursor: "pointer"}}>
          <Card.Body>
            <Card.Title>College</Card.Title>
            <Card.Text>My College was Milestone College. And from this college, I achieved GPA-5.</Card.Text>
            <Card.Link href=" https://nextjs.org/docs/app/building-your-application/styling"> View Link </Card.Link> <br/>

            <Image src={Milestone} alt="" className="custom-Image" style ={{height:"60px", width:"80px"}}/>

            
          </Card.Body>
        </Card>
        <Card className="custom-card" style={{margin:"15px", padding:"15px", border: "2px solid gray", cursor: "pointer"}}>
          <Card.Body>
            <Card.Title>University</Card.Title>
            <Card.Text>I am currently studying at IUB. My major is CSE, and this is my last semester.</Card.Text>
            <Card.Link href=" https://nextjs.org/docs/app/building-your-application/styling"> View Link </Card.Link> <br/>

            <Image src={IUBlogo} alt="" className="custom-Image"  style ={{height:"60px", width:"80px"}}/>
            
          </Card.Body>
        </Card>
      </div> <br/> <br/>





     <div style={{textAlign:"center"}}> 
      <h3> Todo Item </h3> 
      <form onSubmit={handleTodoSubmit}>
        <label htmlFor="todoName">Todo Name: </label>
        <input type="text" name="todoName" value={todoName} onChange={handleTodoName} /> <br /> <br />

        <label htmlFor="todoProject">Todo Project: </label>
        <input type="text" name="todoProject" value={todoProject} onChange={handleTodoProject} /> <br /> <br />

        <button type="submit"> Add Todo </button>
      </form> <br/> <br/>

      </div>


      <div>
      <h5 style={{textAlign: 'center'}}>Initial Todo List:</h5>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {todos.map((todo) => (
          <div key={todo.id} style={{border:"2px solid red"}}> 
            <p >Todo Name: {todo.TodoName}</p> 
            <p >Todo Project: {todo.TodoProject}</p>
          </div>
        ))}
      </div>
    </div>

   
   {todoview &&(
    <div> 
    <h5> The Todo item value-</h5>
    <p> Todo Name: {todoview.todoName} </p>
    <p>Todo Project: {todoview.todoProject} </p>
   
    <button onClick={() => handleTodoRemove(todoview._id)}>Remove</button>
    <button onClick={() => handleTodoUpdate(todoview._id)}>Update</button>
    </div> 
   )}
  

      

      
    </div>
  )
}

export default page
