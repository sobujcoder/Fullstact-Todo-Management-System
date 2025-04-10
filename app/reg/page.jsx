"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import axios from 'axios';

const Page = () => {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [skill, setSkill] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
     const [responseData, setResponseData] = useState(null); // Changed initial state to null

   

    const handleName = (e) => {
        setName(e.target.value);
    };

    const handleAddress = (e) => {
        setAddress(e.target.value);
    };

    const handleSkill = (e) => {
        setSkill(e.target.value);
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        try {
            const response = await axios.post("http://localhost:3007/create", {
                name,
                address,
                skill,
                email,
                password,
            });
            setResponseData(response.data);
          
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <div>
            <h2>Kabbo WebData IT</h2> <br /> <br />
            <form onSubmit={handleSubmit} style={{ margin: "20px", padding: "20px" }}>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" value={name} onChange={handleName} /> <br /> <br />

                <label htmlFor="address">Address:</label>
                <input type="text" name="address" value={address} onChange={handleAddress} /> <br /> <br />

                <label htmlFor="skill">Skill:</label>
                <input type="text" name="skill" value={skill} onChange={handleSkill} /> <br /> <br />

                <label htmlFor="email">Email:</label>
                <input type="text" name="email" value={email} onChange={handleEmail} /> <br /> <br />

                <label htmlFor="password">Password:</label>
                <input type="text" name="password" value={password} onChange={handlePassword} /> <br /> <br />

                <button type="submit">Register</button>
            </form>

            {responseData && (
                <div>
                    <h5>The registration data is:</h5>
                    <p>Name: {responseData.name}</p>
                    <p>Address: {responseData.address}</p>
                    <p>Skills: {responseData.skill}</p>
                    <p>Email: {responseData.email}</p>
                    <p>Password: {responseData.password}</p>
                </div>
            )}

            <button>
                <Link href="/login">Back</Link>
            </button>
            
        </div>
    );
};

export default Page;
