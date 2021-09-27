import React, { useState, useEffect, useRef } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';
import './styles.css';

const SignUp = () => {
  const [loaded, setLoaded] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const { signUp } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords do not match');
    }

    try {
      setError('');
      setLoading(true);
      await signUp(emailRef.current.value, passwordRef.current.value);
      setLoading(false);
      history.push('/dashboard');
    } catch (err) {
      setError('Failed to create an account');
      setLoading(false);
      throw err;
    }
  };

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (loaded) {
    return (
      <>
        <h1 className="text-center mb-5 text-light ">Welcome to Consfilm</h1>
        <Card className="text-light border-dark cardClass">
          <Card.Body>
            <h2 className="text-center mb-4">Sign Up</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  className="bg-dark"
                  type="email"
                  placeholder="Enter Email"
                  ref={emailRef}
                  required
                ></Form.Control>
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  className="bg-dark"
                  type="password"
                  placeholder="Enter Password"
                  ref={passwordRef}
                  required
                ></Form.Control>
              </Form.Group>
              <Form.Group id="passwordConfirm">
                <Form.Label>Password Confirmation</Form.Label>
                <Form.Control
                  className="bg-dark"
                  type="password"
                  ref={passwordConfirmRef}
                  placeholder="Confirm Password"
                  required
                ></Form.Control>
              </Form.Group>
              <Button
                disabled={loading}
                type="submit"
                className="w-100 btn-light"
              >
                Sign Up
              </Button>
            </Form>
          </Card.Body>
        </Card>
        <div className="w-100 text-center text-light bottomText">
          Already have an account? <Link to="/login">Log In</Link>
        </div>
      </>
    );
  } else {
    return (
      <div>
        <p>Loading</p>
      </div>
    );
  }
};

export default SignUp;
