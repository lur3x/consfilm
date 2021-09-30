import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

const ErrorNotFound = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (loaded) {
    return (
      <Fragment>
        <div className="error404 bg-light">
          <h2 className="text-danger">OOPS!..</h2>
          <p>404 Error! Page not found</p>
          <Link to="/" className="home-link">Go Home</Link>
        </div>
      </Fragment>
    );
  } else {
    return (
      <div>
        <p>Loading About</p>
      </div>
    );
  }
};

export default ErrorNotFound;
