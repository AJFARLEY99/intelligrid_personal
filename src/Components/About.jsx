import React from "react";
import './Home_css.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import parvania_pic from './Images/masood_pic5.jpg'
import jairo_pic from './Images/jairo_pic5.png'
import alba_pic from './Images/alba_pic.jpg'
import alex_pic from './Images/alex_pic.jpg'
import majid_pic from './Images/majid_pic.png'

import NavigationBar from "./navbar";


function About() {
  
  return (
    <>
    <NavigationBar />
    <div class='row' className='home' style={{marginTop:'50px', marginBottom:'50px'}}>
        <div>
          <h1  style={{fontSize:'60px', textAlign:'left', marginBottom:'30px', marginTop:'30px'}}>IntelliGrid
           works towards a more sustainable, intelligent, and equitable energy system.</h1>
          <h3 style={{fontSize:'35px', textAlign:'left', color:'#406325', marginBottom:'30px'}}>
              IntelliGrid's mission is to create innovative technology solutions
              that help communities, industries, and utilities
              to integrate
              clean, affordable, and resilient electricity
              services.
          </h3>
        </div>
    </div>

    <div id='contact' className="home" style={{backgroundColor: '#bac7b0', marginBottom:'50px'}}>
        <h2 style={{fontSize:'50px', color:'black',marginTop:'50px', marginBottom:'50px'}}>Our team</h2>
        <div class='row' style={{marginTop:'50px', marginBottom:'50px'}}>
            <div class='col-sm-4 my-auto' style={{textAlign:'center', borderRight: '2px solid black'}}>
                <img src={parvania_pic} alt="pic1" style={{width: '200px',borderRadius:'50%'}} />
                <h2 style={{color:'black', fontSize:'20px', marginTop:'10px'}}>Masood Parvania, Ph.D.</h2>
                <p style={{color:'black'}}>Founder and President</p>
            </div>
            <div class='col-sm-4 my-auto' style={{textAlign:'center', borderRight: '2px solid black'}}>
                <img src={jairo_pic} alt="pic1" style={{width: '200px', borderRadius:'50%'}} />
                <h2 style={{color:'black', fontSize:'20px', marginTop:'10px'}}>Jairo Giraldo, Ph.D.</h2>
                <p style={{color:'black'}}>Manager, Product Development</p>
            </div>
            <div class='col-sm-4 my-auto' style={{textAlign:'center'}}>
                <img src={alba_pic} alt="pic1" style={{width: '200px', borderRadius:'50%'}} />
                <h2 style={{color:'black', fontSize:'20px', marginTop:'10px'}}>Alba González Hernando, Ph.D., PMP, PMI-ACP</h2>
                <p style={{color:'black'}}>Program Manager</p>
            </div>
        </div>
        <div class='row' style={{marginTop:'50px', marginBottom:'50px'}}>
            <div class='col-sm-2'></div>
            <div class='col-sm-4 my-auto' style={{textAlign:'center', borderRight: '2px solid black'}}>
                <img src={alex_pic} alt="pic1" style={{width: '200px', borderRadius:'50%'}} />
                <h2 style={{color:'black', fontSize:'20px', marginTop:'10px'}}>Alex Farley</h2>
                <p style={{color:'black'}}>Lead Software Developer</p>
            </div>
            <div class='col-sm-4 my-auto' style={{textAlign:'center'}}>
                <img src={majid_pic} alt="pic1" style={{width: '200px', borderRadius:'50%'}} />
                <h2 style={{color:'black', fontSize:'20px', marginTop:'10px'}}>Majid Majidi</h2>
                <p style={{color:'black'}}>Lead Algorithm Developer</p>
            </div>
            <div class='col-sm-2'></div>
        </div>
    </div>

    <div style={{backgroundColor: 'white'}} className='home'>
        <div class='row' style={{marginTop:'30px', marginBottom:'30px'}}>
          <div class='col-sm-1'></div>
          <div class='col-sm-7'>
            <h2 style={{fontSize:'70px'}}>Contact us</h2>
            <label for='chat_email' style={{fontSize:'20px'}}>Email
            <br></br>
              <input type='text' id='chat_email'></input>
            </label>
            <br></br>
            <label for='message' style={{fontSize:'20px'}}>Message
            <br></br>
              <textarea id='message' rows='5' cols='50'></textarea>
            </label>
            <br></br>
            <div className = 'chat_button' style={{textAlign:'left'}}>
              <a className="btn btn-secondary float-left">Submit</a>
            </div>
          </div>
          <div class='col-sm-4'></div>
        </div>
    </div>

    <div id='copyright' className="home" style={{backgroundColor: '#F5F5F5'}}>
        <div class='row' style={{marginTop:'30px', marginBottom:'30px', textAlign:'center'}}>
            <p> Copyright &copy; 2022 Grid Elevated. All Rights Reserved</p>
        </div>
    </div>
    </>
  );
}

export default About;
       