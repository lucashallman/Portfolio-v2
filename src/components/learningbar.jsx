import React, { useState, useEffect } from 'react';

function ChangingTextExample() {
    const messages = ["React", "CSS", "Full Stack Programming", "Mind Reading"];
    const [index, setIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % messages.length);  // Cycle through messages
      }, 2000);  // Change message every 2 seconds
  
      return () => clearInterval(interval);  // Cleanup on unmount
    }, []);  // Run once on mount
  
    return (
      <div>
        <p>Lucas is learning {messages[index]}!</p>
      </div>
    );
  }
  
  export default ChangingTextExample;