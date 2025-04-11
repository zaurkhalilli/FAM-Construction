import React from 'react'
import styled from "../Navbar/Navbar.scss";
import { Link } from 'react-router-dom';
import { CiMenuBurger } from "react-icons/ci";
import { useState } from "react";
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="container">
            <div className="row">
                <div className="col-xl-3">
                    <img src="https://famgroupconstruction.az/templates/az/images/logo.jpg" alt="" />
                </div>
                <div className="col-xl-9">
                   <div className="link">
                   <a href="">ANA SƏHİFƏ</a>
                    <a href="">HAQQIMIZDA</a>
                    <a href="">XİDMƏTLƏR</a>
                    <a href="">LAYİHƏLƏR</a>
                    <a href="">ƏLAQƏ</a>
                   </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar