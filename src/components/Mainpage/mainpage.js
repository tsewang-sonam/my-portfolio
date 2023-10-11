import React from "react";
import "./mainpage.css";
import image from '../../assets/me.png';
import { Link } from 'react-scroll';


const Homepage = () =>{
    return (
        <section id= "homePage">  
        <div className ="introTextPart"> 
            <span className="welcomeTxt"> Welcome to my Page</span><br />
            <span className="myIntro"> I am <span className="myName"> Tsewang Sonam</span><br />
               IOS developer / Web Developer
            </span> <br />

            <p className ="introPara"> 
            As a recent graduate of San Francisco State University, my background in programming and mass media has instilled in 
            me a strong passion for leveraging technology to craft innovative applications and address complex challenges.
            <br /><br /></p>
            <Link><button className ="mainButton"> click </button></Link>
        </div>
        <img src ={image} alt= "" className= "mainImage" />
        </section>

        
    )
}

export default Homepage