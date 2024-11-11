import React, {useEffect, useRef, useState } from 'react'
import './Signin.css'
import Navbar from './Nabar'
// import {useNavigate } from 'react-router-dom'
// import Alert from '@mui/material/Alert';
// import { bindActionCreators } from 'redux';
// import {actionCreators} from './state/index'
// import { useDispatch } from 'react-redux';

function Signup() {
  useEffect(() => {
    // Scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, []);
//   const logSetter=useDispatch();
//   const action=bindActionCreators(actionCreators,logSetter);
//   const authSetter=useDispatch();
//   const token=bindActionCreators(actionCreators,authSetter);
  

//     const navigate=useNavigate();
//     const [data,setData]=useState({"email":"","password":""})
//     const [status,setStatus]=useState("");
//     const [confirm,setConfirm]=useState(true)


//     const signup = async (email, password) => {
//         const response = await fetch("https://backend-j6gf.onrender.com/api/auth/signup", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//            },
//           body: JSON.stringify({ email,password}),
//         });
    
//         const json= await response.json();
//       if(!json.success)
//       {
//           setStatus(json.message);
//           setConfirm(false);
          
//           setTimeout(() => {
//             setConfirm(true);
//           }, 1500);


//       }else{
//         setConfirm(true);
//         token.setAuthToken(json.authToken);
//         action.loginChecker(true);
//         navigate("/");
//       }    
//     };
  
//   const onchange=(e)=>{
//       setData({...data,[e.target.name]:e.target.value})       
//   }

//   const submit=(e)=>{
//       e.preventDefault();
//       signup(data.email,data.password);        
//   }



  return (
    <div>
    <Navbar/>
    <div style={{display:'flex',justifyContent:'center',marginTop:'75px',backgroundColor:'#4e4f51', height:'100vh',width:'100vw'}}>
    <form class="form">
        <p class="title">Sign In </p>
        <p class="message">Signin now and get full access to our app. </p>
        <div className='my-3'>
          <label >
            <input style={{width:'300px'}} class="input" type="email" placeholder="" required=""/>
            <span>Email</span>
        </label> 
        </div>
        <div className='my-4'>   
           <label>
            <input style={{width:'300px'}} class="input" type="password" placeholder="" required=""/>
            <span>Password</span>
        </label>
        </div> 
        <button class="submit">Submit</button>
    </form>
    </div>
    </div>
  )
}

export default Signup
