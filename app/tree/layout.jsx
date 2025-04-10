"use client"

import React from 'react';
import { usePathname } from 'next/navigation';



import Link from 'next/link';
import "../globals.css";

import Image from 'next/image';

import kabbo from "/public/kabbologo.jpg";

import { FaGithub, FaFacebook, FaInstagram, FaLinkedin  } from 'react-icons/fa';



const Layout = ({ children }) => {

  const pathname =usePathname();

 
  
  return (
    <div>
      <ul className="navbar">
        <Image src={kabbo} alt=" " style={{height:"60px", width:"70px"}}/>
        <li>
          <Link href="/tree/home" className ={`$ {pathname === "/tree/home" ? "active": " "}`}>Home
          </Link>
        </li>
        <li>
          <Link href="/tree/education"
             className={` $ { pathname === "/tree/education" ? "active" : " "}`}>Education
          </Link>
        </li>
        <li>
          <Link href="/tree/skill"
             className={`$ {pathname === "/tree/skill" ? "active" : " "}`}>Skill 
          </Link>
        </li>
      </ul>

     
      {children}

      <footer className="footer">
        <ul className="social-icons">
          <li><a href="https://github.com/kabboWebData">  <FaGithub /> </a> </li>
          <li><a href="https://web.facebook.com/kawshikrahman.kabbo">  <FaFacebook />  </a>  </li>
          <li><a href="https://www.instagram.com/kawshikrahmankabbo/">  <FaInstagram/>  </a>  </li>

          <li><a href="https://www.linkedin.com/in/kawshik-kabbo-72a76b297/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">  <FaLinkedin/>  </a>  </li>
        </ul>
      </footer>
    </div>
  );
};

export default Layout;