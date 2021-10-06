import React from 'react';
import '../styles.css';

export default function PostItem({posts}) {
  return (
    <div className='post bg-light'>
      <h3 className='post__title text-center'>Film: {posts.title}</h3>
      <div className='post__content'>{posts.content}</div>
      <p className='post__creator text-center'>
        Created by: {posts.sign}
      </p>
    </div>
  );
}
