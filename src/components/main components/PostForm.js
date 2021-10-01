import React from 'react';
import { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';

export default function PostForm() {
  const showNameRef = useRef();
  const showContentRef = useRef();
  return (
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
        <Button className="btn post__form--btn" onClick>
          Submit
        </Button>
      </Form>
    </div>
  );
}
