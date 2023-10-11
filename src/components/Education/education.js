import React from "react"
import "./education.css"
import iOSdesign from '../../assets/sfsu.png';
import webdesign from '../../assets/aws.png';
import reactdesign from '../../assets/peace.png';
import Mcc from '../../assets/MCC.png';

const Education = () =>{
    return(
        <section id ="myEducation">   
        <span className ="eduTitle"> My Educations <br></br> </span> 
        <span className ="eduDesc">I am a recent graduate from Sanfrancisco State University and holding a degree in Mass Communication as well, 
        I possess a unique blend of technical expertise and effective communication skills. With a strong foundation in programming, data structures, and 
        algorithms, combined with the ability to convey complex concepts clearly, I am ready to excel in the world of software development, fostering innovation, and facilitating collaboration.<br></br></span>
        <div className ="educationList">
            <div className ="certificationList">
               <img src ={iOSdesign} alt="Sfsu" className ="Certificates"/>
                <div className ="certificationListDesc">
                    <h2> San Francisco State University </h2>
                    <p> Recently graduated from SFSU with bachelor in computer science</p>
                </div>
            </div>

            <div className ="certificationList">
                <img src ={webdesign} alt="AWS" className ="Certificates"/>
                <div className ="certificationListDesc">
                    <h2> AWS Certification Course</h2>
                    <p> Embarked on a journey of learning about AWS cloud and certification Course</p>
                </div>
            </div>

            <div className ="certificationList">
                <img src ={reactdesign} alt="ConflictResolution" className ="Certificates"/>
                <div className ="certificationListDesc">
                    <h2> Conflict resolution and Peace building</h2>
                    <p> Finished the certification course with new found interest and importance of communication.</p>
                </div>
            </div>

            <div className ="certificationList">
                <img src ={Mcc} alt="ConflictResolution" className ="Certificates"/>
                <div className ="certificationListDesc">
                    <h2> Madras Christian College</h2>
                    <p> graduated with bachelor in journalism </p>
                </div>
            </div>

        </div>
        </section>
    );
}

export default Education