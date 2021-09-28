import React, { useState, useEffect } from 'react';
import { Button, Card, Alert, Container } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';

const Dashboard = () => {
  const [loaded, setLoaded] = useState(false);
  const history = useHistory();
  const [error, setError] = useState('');

  const handleLogout = async () => {
    setError('');

    try {
      await logOut();
      history.push('/login');
    } catch (err) {
      setError('Failed to logout');
    }
  };

  const { currentUser, logOut } = useAuth();

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
                <h2 className="text-center mb-4">Profile</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <strong>Email: {currentUser.email}</strong>
                <Link to="/updateprofile" className="btn btn-light w-100 mt-3">
                  Update Profile
                </Link>
              </Card.Body>
            </Card>
            <div className="w-100 text-center bottomText">
              <Button variant="link" onClick={handleLogout}>
                Log Out
              </Button>
            </div>
          </div>
        </Container>
      </>
    );
  } else {
    return (
      <div>
        <p>Loading About</p>
      </div>
    );
  }
};

export default Dashboard;
