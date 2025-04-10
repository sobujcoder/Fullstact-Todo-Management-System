"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import web from "/public/WebData.jpg";
import axios from 'axios';
import { useRouter } from 'next/navigation'; // Import useRouter from next/router

const Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter(); // Use useRouter hook

  const handleEmail = (e) => {
    setEmail(e.target.value);
  }

  const handlePassword = (e) => {
    setPassword(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const reLogin = await axios.post("http://localhost:3007/login", {
        email,
        password,
      });
      if (reLogin.data.success) {
        // Redirect to /tree/home on successful login
        router.push("/tree/home");
      } else {
        alert("The login failed. Please try again.");
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Login Process</h2> <br />
      <div style={{ display: "flex", flexDirection: "row", margin: "50px", padding: "40px", border: "2px solid gray" }}>
        <div style={{ flex: 1, padding: "20px" }}>
          <h3>Kawshik Rahman Kabbo</h3>
          <Image src={web} alt="" style={{ height: "100px", width: "120px", border: "2px solid green", borderRadius: "5px" }} /> <br /> <br />
        </div>

        <div className="line"></div>



        <div style={{ flex: 1, padding: "20px" }}>
          <form method="post" onSubmit={handleSubmit}>
            <label htmlFor='email'>Email</label>
            <input type="text" name="email" value={email} onChange={handleEmail} /> <br /> <br />
            <label htmlFor='password'>Password</label>
            <input type="password" name="password" value={password} onChange={handlePassword} /> <br /> <br />
            <button type="submit">Login</button>
          </form> <br />
          <button> <Link href="/reg">Registration</Link></button>
        </div>
      </div>
    </div>
  )
}

export default Page;
