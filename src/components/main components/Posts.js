import React, { useState } from 'react';
import PostItem from './PostItem';
import { useAuth } from '../contexts/AuthContext';

import { Button, Form } from 'react-bootstrap';

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
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const addNewPost = () => {
    const newPost = {
      id: Date.now(),
      title,
      content,
      sign: (currentUser ? currentUser.email : 'Guest'),
    };
    setPosts([...posts, newPost]);
    setTitle('');
    setContent('');
  };

  return (
    <div>
      {showForm ? (
        <div>
          <Button className='btn-success post__btn' onClick={removeForm}>
            Return
          </Button>
          <div>
            <Form className='post__form bg-light'>
              <Form.Label>Enter Show Name</Form.Label>
              <Form.Control
                className='post__form--input text-dark'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              ></Form.Control>
              <Form.Label>Enter Your Impressions</Form.Label>
              <Form.Control
                value={content}
                onChange={(e) => setContent(e.target.value)}
                as='textarea'
                className='post__form--textarea text-dark'
                style={{ height: '10rem' }}
              ></Form.Control>
              <Button
                className='btn post__form--btn'
                onClick={(e) => {
                  e.preventDefault();
                  addNewPost();
                  removeForm();
                }}
              >
                Submit
              </Button>
            </Form>
          </div>
        </div>
      ) : (
        <div>
          <Button className='btn-success post__btn' onClick={handleForm}>
            + CreatePost
          </Button>
          {posts.map((posts) => (
            <PostItem posts={posts} />
          ))}
        </div>
      )}
    </div>
  );
}
