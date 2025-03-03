import React, { useState } from 'react';
import axios from 'axios';

function Form() {
 
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');
    const [setSuccessMessage] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();

 
 

 
 
 
 

   
   
    axios.post('http://localhost:8080/comments/add', { name, comment })
      .then(res => {
        console.log('Axios POST success:', res.data);
        setName('');
        setComment('');
        setSuccessMessage('CUSTOMER REVIEW ADDED SUCCESSFULLY'); // Set message
        setTimeout(() => {
          setSuccessMessage(''); // Clear message after 3 seconds
        }, 3000);
      })
   
   
   
   
   
   
   
   
      .catch(err => {
        console.error('Axios POST error:', err);
        if (err.response) {
          console.error('Server response:', err.response.data);
        }
      });
  };

  return (
    <div style={{
      padding: '20px',
      maxWidth: '400px',
      margin: '20px auto',
      borderRadius: '5px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      backgroundColor: 'white'
    }}>
      <h2>Add a Comment</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{
            width: '100%',
            padding: '8px',
            marginBottom: '10px',
            boxSizing: 'border-box',
            borderRadius: '3px',
            border: '1px solid #ccc'
          }}
        />
        <textarea
          placeholder="Your Comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          style={{
            width: '100%',
            padding: '8px',
            marginBottom: '15px',
            boxSizing: 'border-box',
            height: '100px',
            borderRadius: '3px',
            border: '1px solid #ccc'
          }}
        />
        <button
          type="submit"
          style={{
            width: '100%',
            padding: '10px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            borderRadius: '3px'
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;












































































