import { io } from "socket.io-client";
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

function Chat() {

    const [message,setMessage]=useState({"text":""});
    var socket;
  useEffect(() => {
    // Initialize the socket connection once when the component mounts
    socket = io("http://localhost:8000", {
      path: "/my-custom-path/"
    });

    // Listen for connect event
    socket.on("connect", () => {
      console.log("Connected to server:", socket.id);
    });

    // Listen for disconnect event
    socket.on("disconnect", () => {
      console.log("Disconnected from server");
    });

    // Cleanup the connection when the component unmounts
    return () => {
      socket.disconnect();
    };
  }, []); // Empty dependency array to ensure this only runs on mount/unmount

  const onch=(e)=>{
    e.preventDefault();
    setMessage({...message,[e.target.name]:e.target.value});

  }

  const sendMessage=()=>{
    console.log(message);
    socket.emit("AD",message);
    socket.on("AD",(msg)=>{
      console.log("Returned",msg);
    })
  }
    
  return (
    <div style={{display:'flex',flexDirection:'row'}}>
        <div style={{border:'2px solid black',height:'100vh',backgroundColor:"#4e4f51",width:'30%',right:'0',paddingTop:'100px'}}>
            <div style={{display:'flex',flexDirection:'column',textAlign:'center'}}>
                <Link className="my-2" style={{color:'white',textDecoration:'none',border:'1px solid white',borderRadius:'10px',height:'40px',alignItems:'center',display:'flex',justifyContent:'center',fontWeight:'bold'}}>Doctor</Link>
                <Link className="my-2" style={{color:'white',textDecoration:'none',border:'1px solid white',borderRadius:'10px',height:'40px',alignItems:'center',display:'flex',justifyContent:'center',fontWeight:'bold'}}>Guardian1</Link>
            </div>
        </div>
        <div style={{border:'2px solid black',height:'100vh',width:'70%',right:'0'}}>
          <div style={{bottom:'0',display:'flex',flexDirection:'row',marginTop:'530px'}}>
          <input type="text"  name="text" onChange={onch} placeholder="Type a new message" style={{width:'70%',marginLeft:'70px'}}/>
          <button className="btn btn-success mx-2" onClick={sendMessage}>Send</button>
          </div>
        </div>
    </div>
  );
}

export default Chat;
