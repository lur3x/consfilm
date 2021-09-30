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
        <div className="error404">
          <div id="notfound">
            <div class="notfound">
              <div class="notfound-404">
                <h3>Oops! Page not found</h3>
                <h1>
                  <span>4</span>
                  <span>0</span>
                  <span>4</span>
                </h1>
              </div>
              <h2>we are sorry, but the page you requested was not found</h2>
              <Link to="/" className="home-link">
                Go Home
              </Link>
            </div>
          </div>
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
