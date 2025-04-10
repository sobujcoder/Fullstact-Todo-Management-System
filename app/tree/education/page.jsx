"use client";

import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import React, { useState } from 'react';

const Page = () => {
    const [read, setRead] = useState([]);

    const getData = async () => {
        try {
            const reData = await axios.get("http://localhost:3007/getRead");
            setRead(reData.data);
        } catch(error) {
            console.log(error.message);
        }
    };

    const handleClick = () => {
        getData();
    };

    const handleRemove = async(row)=>{
        try{

            await axios.delete(`http://localhost:3007/deleteData/${row._id}`);
            getData();

        }catch(error){
            console.log(error.message);
        }
    }

    const [progressbar, setProgressbar]=useState(0);

    const handleProgress=()=>{
        setProgressbar(progressbar+20);

    }
    const handleReset =()=>{
        setProgressbar(0);

    }

    const getcolor=()=>{
        if(progressbar>40){
            return "red"
        }else if(progressbar<80){
            return "green"
        }
    }



    return (
        <div>
            <h2>Education Page</h2> <br/> <br/>

            <h2 style={{backgroundColor:getcolor()}}> Registration Progress: {progressbar}</h2>

            <button style={{margin:"5px", padding:"5px"}} onClick={handleProgress} > Progress</button>
            <button style={{margin:"5px", padding:"5px"}} onClick={handleReset} > Reset</button> <br/> <br/>




            <button onClick={handleClick}>Fetch Data</button>

            <Table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Skill</th>
                        <th>Email</th>
                        <th>Password</th>
                    </tr>
                </thead>
                <tbody> {/* Move mapping to tbody */}
                    {read.map(re => (
                        <tr key={re.email}> {/* Add key for each row */}
                            <td>{re.name}</td>
                            <td>{re.address}</td>
                            <td>{re.skill}</td>
                            <td>{re.email}</td>
                            <td>{re.password}</td>

                          

                            <td><button onClick={()=>{handleRemove(re)}}> Remove</button> </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default Page;
