import React, { useState, useEffect, useRef } from 'react';
import { Form, Button, Card, Alert, Container } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';

const UpdateProfile = () => {
  const [loaded, setLoaded] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const { currentUser, updateEmail, updatePassword } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords do not match');
    }

    const promises = [];
    setError('');
    setLoading(true);

    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value));
    }
    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value));
    }

    Promise.all(promises)
      .then(() => {
        setLoading(false);
        history.push('/dashboard');
      })
      .catch((err) => {
        setLoading(false);
        setError('Failed to Update');
        throw err;
      });
    //   .finally(() => {
    //     setLoading(false);
    //   });
  };

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (loaded) {
    return (
      <>
        <Container
          style={{ minHeight: '100vh' }}
          className="d-flex align-items-center justify-content-center"
        >
          <div style={{ maxWidth: '400px' }} className="w-100">
            <Card className="cardClass text-light">
              <Card.Body>
                <h2 className="text-center mb-4">Update Profile</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                  <Form.Group id="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      className="bg-dark"
                      type="email"
                      ref={emailRef}
                      required
                      defaultValue={currentUser.email}
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group id="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      className="bg-dark"
                      type="password"
                      ref={passwordRef}
                      placeholder="Leave blank to keep the same"
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group id="passwordConfirm">
                    <Form.Label>Password Confirmation</Form.Label>
                    <Form.Control
                      className="bg-dark"
                      type="password"
                      ref={passwordConfirmRef}
                      placeholder="Leave blank to keep the same"
                    ></Form.Control>
                  </Form.Group>
                  <Button
                    disabled={loading}
                    type="submit"
                    className="w-100 btn-light"
                  >
                    Update
                  </Button>
                </Form>
                <div className="w-100 text-center bottomText mt-3">
                  <Link to="/dashboard">Cancel</Link>
                </div>
              </Card.Body>
            </Card>
            <div className="w-100 text-center text-light bottomText">
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

export default UpdateProfile;
