import React from 'react';
import '../styles.css';

export default function PostItem(props) {
  return (
    <div className="post bg-light">
      <h3 className="post__title text-center">Film: {props.posts.title}</h3>
      <div className="post__content">{props.posts.content}</div>
      <p className="post__creator text-center">Created by: {props.posts.sign}</p>
    </div>
  );
}
