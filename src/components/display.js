import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Col, Card, CardTitle, CardText, Row } from 'react-bootstrap';

function Display() {
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
      setLoading(true); 
      axios.get('http://localhost:8080/comments')
        .then(res => {
          setComments(res.data);
          setLoading(false); // Set loading to false after fetching
        })
        .catch(err => {
          console.error('Error fetching comments:', err);
          setLoading(false); // Set loading to false on error
        });
    }, []);
  
    if (loading) {
      return <p>Loading comments...</p>; // Or your loading component
    }
 

 
 

 
 
 
 

  return (
    <Row>
      <Col md={6} sm={12} className="mb-3" >
        <Card>
          <Card.Body className='text-align-centor m-3'>
            <CardTitle><h1>Customer Reviews</h1></CardTitle>
            <CardText className="center p-3 m-4">
              {comments.map((comment, index) => (
                <div key={index} className="mb-3">
                  <p> {comment.comment}</p><strong>-{comment.name}-</strong>
                </div>
              ))}
            </CardText>
           
          </Card.Body>
        </Card>
      </Col>
      <Col md={6} sm={12} className="mb-3 container-fluid">
        <img src="fruit.jpeg" alt="comment" height={350}   className="mt-5 mb-5 rounded ms-sm-5" />
      </Col>
    </Row>
  );
}

export default Display;