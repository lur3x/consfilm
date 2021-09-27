import React, { useState, useEffect, useRef } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useAuth } from './contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';

const Login = () => {
  const [loaded, setLoaded] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const { logIn } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      await logIn(emailRef.current.value, passwordRef.current.value);
      setLoading(false);
      history.push('/dashboard');
    } catch (err) {
      setError('Failed to log in');
      setLoading(false);
      // throw err;
    }
  };

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (loaded) {
    return (
      <>
      
        <Card className="bg-dark text-light cardClass">
          <Card.Body>
            <h2 className="text-center mb-4">Log In</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  placeholder="Enter Email"
                  className="bg-dark"
                  type="email"
                  ref={emailRef}
                  required
                ></Form.Control>
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  placeholder="Enter Password"
                  className="bg-dark"
                  type="password"
                  ref={passwordRef}
                  required
                ></Form.Control>
              </Form.Group>
              <Button disabled={loading} type="submit" className="w-100 btn-light">
                Log In
              </Button>
            </Form>
            <div className="w-100 text-center mt-3">
              <Link to="/forgotpassword">Forgot Password</Link>
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

export default Login;
