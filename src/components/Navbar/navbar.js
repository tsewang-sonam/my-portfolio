import React from "react";
import "./navbar.css";
import logo from '../../assets/logo.png';
import contactLogo from '../../assets/mailLogo.png';
import { Link } from 'react-scroll';


const Navbar = () =>{
    return (
        <nav className = "navBar">
            <img src = {logo} alt ="logo" className='logo' />
            <div className="topMenu">
               
                {/* to remember : the link ( to ='homePage')  points to id of the page */}

                <Link activeClass='active'  to='homePage' spy ={true} smooth = {true} offset= {-100} duration={800} className="topMenuLinks"> Home </Link>
                <Link activeClass='active'  to='mySkill' spy ={true} smooth = {true} offset= {-90} duration={800} className="topMenuLinks"> Projects </Link>
                <Link activeClass='active'  to='myEducation' spy ={true} smooth = {true} offset= {-90} duration={800} className="topMenuLinks"> Education</Link>
            </div>
            <button className="topMenuButton" onClick= {()=> {
                document.getElementById('contactMe').scrollIntoView();
             }   
            }>    
            <img src = {contactLogo} alt =" " className="topMenuImage" />
            contact Me </button>   

        </nav>
    )
}

export default Navbar