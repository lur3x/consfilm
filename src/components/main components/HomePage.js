import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className='homepage text-light text-center'>
      <div className='homepage__content pt-2'>
        <h1 className='homepage__title '>CONSFILM</h1>
        <div className='pt-2'>
          <Link to='/login' className='login-link'>
            Log In
          </Link>
          <Link to='/search' className='search-link'>
            Search
          </Link>
        </div>
      </div>
    </div>
  );
}
