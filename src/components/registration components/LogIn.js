import React, { useState, useEffect, useRef } from 'react';
import { Form, Button, Card, Alert, Container } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
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
        <Container
          style={{ minHeight: '93vh' }}
          className="d-flex align-items-center justify-content-center"
        >
          <div style={{ maxWidth: '400px' }} className="w-100">
            <Card className="card-class text-light">
              <Card.Body>
                <h2 className="text-center mb-4">Log In</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                  <Form.Group id="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      placeholder="Enter Email"
                      type="email"
                      ref={emailRef}
                      required
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group id="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      placeholder="Enter Password"
                      type="password"
                      ref={passwordRef}
                      required
                    ></Form.Control>
                  </Form.Group>
                  <Button
                    disabled={loading}
                    type="submit"
                    className="w-100 btn-light"
                  >
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
          </div>
        </Container>
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
