import React , { useRef }from "react";
import "./contact.css";
import emailjs from '@emailjs/browser';


const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
         e.preventDefault();
    
        emailjs.sendForm('service_78egm7z', 'template_dw0jq88', form.current, 'fxvLI34TIVoJY7joA')
          .then((result) => {
              console.log(result.text);
              e.target.reset();
              alert('   Email Send Successfully  ')
          }, (error) => {
              console.log(error.text);
          });
      };

    return ( 
       <section id = "contactMe">

            <span className ="contactDesc"> Please leave a message. Your feedback and insights would be greatly appreciated. <br></br> </span> 
           
           <form ref={form}   className ="textForm" onSubmit = {sendEmail}>
                
               <h1 className = "contactTitle"> Contact me </h1>
               
                <div className = "contactBox">
                <input type="text" className="smallBox"  placeholder = "Your Name" name ="your_name" /><br/>
                </div>
                <div className = "contactBox">
                <input type="text" className="smallBox"  placeholder = " email " name ="from_email" /><br/>
                </div>
                <div className = "contactBox">
                <textarea type="text" className="bigBox" cols="55" rows="10"  placeholder = " Type you message here "  name = "message" /><br/>
                </div>
                
                <button type= "submit" className= "submitButton" >Submit</button>
                
           </form>
           
       </section>
    );
}

export default Contact