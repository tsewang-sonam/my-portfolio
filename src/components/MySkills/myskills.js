import React from 'react'
import './myskills.css';
import VideoPlayer from '../../components/Videoplayer/videoplayer';

const Skills = () => {
    return (
        <section id ="mySkill">   
        <span className ="skillTitle"> My Projects <br></br> </span> 
        <span className ="skillDesc">I would greatly appreciate it if you could take a moment to review some of the projects I've completed. 
        Your feedback and insights would be invaluable to me as I continue to grow and excel in my field. So, please leave the meessage in contact section. Thank you .<br></br></span>
        <div className ="skillList">

            <div className ="individualSkills"> 
                 <VideoPlayer className = "customizeVideo"/> 
                 <br></br>
              {/*  <img src ={iOSdesign} alt="IOSdesign" className ="IOSimage"/> */}
                    <h2> IOS Project </h2><br/>
                    <p> I have worked on an IOS project making an app called Tsundue that is build to help children to learn Tibetan Language in a fun way. 
                        The app focus on four main task namely story, wordsearch,vocabulary and quiz.</p>
                
            </div>

            <div className ="individualSkills">
                 <VideoPlayer className = "customizeVideo"/> 
                 <br></br>
                 {/*  <img src ={webdesign} alt="Webdesign" className ="IOSimage"/> */}
                    <h2> Web Project</h2><br/>
                    <p> Created an app that works a dictionary, word search, story reading and quiz.Created an app that works a dictionary, word search, story reading 
                        and quiz.Created an app that works a dictionary, word search, story reading and quiz.</p>
            </div>

            <div className ="individualSkills">

                 <VideoPlayer className = "customizeVideo"/> 
                 <br></br>
                {/*   <img src ={reactdesign} alt="Reactdesign" className ="IOSimage"/> */}
                    <h2> React Project </h2><br/>
                    <p> Created an app that works a dictionary, word search, story reading and quiz.Created an app that works a dictionary, word search, story reading 
                        and quiz.Created an app that works a dictionary, word search, story reading and quiz.</p>
               
            </div>

        </div>
        </section>
    );
}

export default Skills