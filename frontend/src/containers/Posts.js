import React, {useState, useEffect} from 'react';
import { Card, Badge, Button, Collapse } from 'react-bootstrap';
import Startups from './Startups';

function Posts({ posts, loading }) {
  const [open, setOpen] = useState(false)
    if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
      <div>
    {/* <ul className='list-group mb-4'> */}
      {posts.map(post => (
        // <li key={post.id} className='list-group-item'>
         <Startups title = {post.title}/>
 ))}
    {/* </ul> */}
    
</div>

  );
};

export default Posts;