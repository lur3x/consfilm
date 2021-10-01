import React, { useState, useContext, useRef } from 'react';
import PostItem from './PostItem';
import { useAuth } from '../contexts/AuthContext';
import ShowsContext from '../contexts/shows/ShowsContext';
import { Button, Form } from 'react-bootstrap';
import PostForm from './PostForm.js';

export default function Posts() {
  const { currentUser } = useAuth();

  const [showForm, setShowForm] = useState(false);
  const handleForm = () => {
    setShowForm(true);
  };
  const removeForm = () => {
    setShowForm(false);
  };
  const [posts, setPosts] = useState([]);
  const showNameRef = useRef();
  const showContentRef = useRef();
  console.log(posts);
  return (
    <div>
      {showForm ? (
        <div>
          <Button className="btn-success post__btn" onClick={removeForm}>
            Return
          </Button>
          <div>
            <Form className="post__form bg-light">
              <Form.Label>Enter Show Name</Form.Label>
              <Form.Control
                className="post__form--input text-dark"
                ref={showNameRef}
              ></Form.Control>
              <Form.Label>Enter Your Impressions</Form.Label>
              <Form.Control
                as="textarea"
                className="post__form--textarea text-dark"
                style={{ height: '10rem' }}
                ref={showContentRef}
              ></Form.Control>
              <Button className="btn post__form--btn">Submit</Button>
            </Form>
          </div>
        </div>
      ) : (
        <div>
          <Button className="btn-success post__btn" onClick={handleForm}>
            + CreatePost
          </Button>
          {posts.map((post) => (
            <PostItem post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
