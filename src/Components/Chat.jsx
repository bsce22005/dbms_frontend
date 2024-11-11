import { io } from "socket.io-client";
import React, { useEffect } from 'react';

function Chat() {
  useEffect(() => {
    // Initialize the socket connection once when the component mounts
    const socket = io("http://localhost:8000", {
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

  return (
    <div>Chat</div>
  );
}

export default Chat;
