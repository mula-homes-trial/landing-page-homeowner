import './App.css'
import React, { useState } from "react";
import ReactDOM from "react-dom";
import {
    Link
} from "react-router-dom";
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import 'survey-core/modern.min.css';
import { StylesManager, Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import { useCallback } from 'react';

StylesManager.applyTheme("modern");

const SURVEY_ID = 1;


function App () {


    // Survery questions
    const surveyJson = {
      elements: [{
        name: "Name",
        title: "Enter your name:",
        type: "text"
      }, {
        name: "Phone Number",
        title: "Enter your Phone Number:",
        type: "text"
      }, {
        name: "Address",
        title: "Enter your Address:",
        type: "text"
      }, {
        name: "Email",
        title: "Enter your Email:",
        type: "text"
      }, {
        name: "How much do you think your house is worth?",
        title: "Enter the price you think your house is worth:",
        type: "number"
      }, {
        name: "How much of your house would you sell to us (in %) at the value you suggested?",
        title: "Enter the percentage:",
        type: "number"
      }]
    };

    const survey = new Model(surveyJson);

    // const surveyComplete = useCallback((sender) => {
    //   saveSurveyResults(
    //     "https://your-web-service.com/" + SURVEY_ID,
    //     sender.data
    //   )
    // }, []);

    const alertResults = useCallback((sender) => {
      const results = JSON.stringify(sender.data);
      alert(results);
    }, []);
  
    survey.onComplete.add(alertResults);
  
    // survey.onComplete.add(surveyComplete);

    return <Survey model={survey} />;


    //     // React States
    // const [errorMessages, setErrorMessages] = useState({});
    // const [isSubmitted, setIsSubmitted] = useState(false);
  
    // // User Login info
    // const database = [
    //   {
    //     username: "user1",
    //     password: "pass1"
    //   },
    //   {
    //     username: "user2",
    //     password: "pass2"
    //   }
    // ];
  
    // const errors = {
    //   uname: "invalid username",
    //   pass: "invalid password"
    // };
  
    // const handleSubmit = (event) => {
    //   //Prevent page reload
    //   event.preventDefault();
  
    //   var { uname, pass } = document.forms[0];
  
    //   // Find user login info
    //   const userData = database.find((user) => user.username === uname.value);
  
    //   // Compare user info
    //   if (userData) {
    //     if (userData.password !== pass.value) {
    //       // Invalid password
    //       setErrorMessages({ name: "pass", message: errors.pass });
    //     } else {
    //       setIsSubmitted(true);
    //     }
    //   } else {
    //     // Username not found
    //     setErrorMessages({ name: "uname", message: errors.uname });
    //   }
    // };
  
    // // Generate JSX code for error message
    // const renderErrorMessage = (name) =>
    //   name === errorMessages.name && (
    //     <div className="error">{errorMessages.message}</div>
    //   );
  
    // // JSX code for login form
    // const renderForm = (
    //   <div className="form">
    //     <form onSubmit={handleSubmit}>
    //       <div className="username-wrapper">
    //         <input type="text" placeholder="Username" name="uname" required />
    //         {renderErrorMessage("uname")}
    //       </div>
    //       <div className="password-wrapper">
    //         <LockIcon/>
    //         <input type="password" placeholder="Password" name="pass" requiredsd />
    //         {renderErrorMessage("pass")}
    //       </div>
    //       <div className="accept-wrapper">
    //         <input type="checkbox" name="terms"/>
    //         <label>Accept the terms and conditions</label>
    //       </div>
    //       <div className="signup-button-wrapper">
    //       <input type="submit">
    //         {/* <div className="login-text"> */}
    //           {/* Login */}
    //         {/* </div> */}
    //       </input> 
    //       </div>
    //     </form>
    //   </div>
    // );
  
    // return (
    //     <div className="app-screen">
    //         <div className="center-side">
    //           <div className="welcome">Welcome Back</div>
    //           <div className="welcome">Welcome Back</div>
    //           <div className="welcome-login">Sign in to your Account</div>
    //           {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
        
    //           <div className="new-user">Don't have an account? Sign Up here</div>
        
    //         </div>
        
          

    //     </div>
    // );
  
}

function saveSurveyResults(url, json) {
  const request = new XMLHttpRequest();
  request.open('POST', url);
  request.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
  request.addEventListener('load', () => {
    // Handle "load"
  });
  request.addEventListener('error', () => {
    // Handle "error"
  });
  request.send(JSON.stringify(json));
}

export default App;
