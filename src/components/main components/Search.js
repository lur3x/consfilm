import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useState, useContext } from 'react';
import Alert from './Alert';
import ShowsContext from '../contexts/shows/ShowsContext';
import AlertsContext from '../contexts/alerts/AlertsContext';

export default function Search() {
  const [searchTerm, setSearchTerm] = useState();
  const { searchShows } = useContext(ShowsContext);
  const { alert, setAlert } = useContext(AlertsContext);
  const onSearchHandler = (e) => {
    e.preventDefault();
    if (searchTerm === '') {
      setAlert('Please enter something', 'danger');
    } else {
      searchShows(searchTerm);
    }
  };
  return (
    <div>
      <div className="mb-5">
        <h1 className="text-center mb-5 search__title">TYPE TO SEARCH</h1>
        {alert ? <Alert message={alert.message} type={alert.type} /> : null}
        <Form>
          <Form.Control
            className="searchbar text-dark"
            placeholder="Type to search"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          ></Form.Control>
          <Button
            className="btn btn-dark search-btn mt-3"
            onClick={onSearchHandler}
          >
            SEARCH
          </Button>
        </Form>
      </div>
    </div>
  );
}
