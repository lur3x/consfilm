import React, { useState, useEffect, useRef } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useAuth } from './contexts/AuthContext';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  const [loaded, setLoaded] = useState(false);
  const emailRef = useRef();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const { resetUserPassword } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setMessage('');
      setError('');
      setLoading(true);
      await resetUserPassword(emailRef.current.value);
      setMessage('Check your inbox for further instructions');
      setLoading(false);
    } catch (err) {
      setError('Failed to reset password');
      setLoading(false);
      //   throw err;
    }
  };

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (loaded) {
    return (
      <>
      
        <Card className="cardClass text-light">
          <Card.Body>
            <h2 className="text-center mb-4">Password Reset</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            {message && <Alert variant="success">{message}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  className="bg-dark"
                  placeholder="Enter Email"
                  type="email"
                  ref={emailRef}
                  required
                ></Form.Control>
              </Form.Group>
              <Button
                disabled={loading}
                type="submit"
                className="w-100 btn-light"
              >
                Reset Password
              </Button>
            </Form>
            <div className="w-100 text-center mt-3 bottomText">
              <Link to="/login">Log In</Link>
            </div>
          </Card.Body>
        </Card>
        <div className="w-100 text-center bottomText text-light">
          Need an account? <Link to="/signup">Sign Up</Link>
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

export default ForgotPassword;
