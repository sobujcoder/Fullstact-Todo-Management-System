"use client"


import React, { useState } from 'react';
import axios from 'axios';

const Page = () => {
  const [task, setTask] = useState('');
  const [description, setDescription] = useState('');
  const [viewTask, setViewTask] = useState(null);

  const handleTask = (e) => {
    setTask(e.target.value);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleTaskSubmit = async (e) => {
    e.preventDefault();
    try {
      const taskResponse = await axios.post('http://localhost:3007/task', {
        task,
        description,
      });
      setViewTask(taskResponse.data);

      // Clear input fields after successful submission
      setTask('');
      setDescription('');
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleRemove = async (taskId) => {
    try {
      await axios.delete(`http://localhost:3007/taskRemove/${taskId}`);
      // After successful deletion, clear the viewTask state
      setViewTask(null);
    } catch (error) {
      console.log(error.message);
    }
  };
  

  return (
    <div>
      <h2>Skill page</h2> <br/> <br/> 
      <h4 style={{textAlign: 'center'}}>Task Management App</h4> <br/> 
      <form method="post" onSubmit={handleTaskSubmit} style={{textAlign: 'center'}}>
        <label htmlFor="task">Task App:</label>
        <input type="text" name="task" value={task} onChange={handleTask} /><br /><br />

        <textarea
          name="description"
          value={description}
          onChange={handleDescription}
          style={{ height: '100px', width: '150px', border: '2px solid gray' }}
          placeholder="Enter your description...."></textarea><br /><br /> 
       
        <button type="submit">Add Task</button>
      </form>
      {viewTask && (
        <div style={{textAlign:"center", border:"3px solid blue"}}>
          <h5>The Task info.</h5>
          <p>The Task Name: {viewTask.task}</p>
          <p>Your opinion: {viewTask.description}</p>
          <button onClick={() => handleRemove(viewTask._id)}>Remove</button>

        </div>
      )}
    </div>
  );
};

export default Page;
