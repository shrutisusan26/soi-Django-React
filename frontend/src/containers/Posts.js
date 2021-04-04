import React, {useState, useEffect} from 'react';
import { Card, Badge, Button, Collapse } from 'react-bootstrap';
import Startups from './Startups';

function Posts({ posts, loading ,prof}) {
  const [open, setOpen] = useState(false)
    if (loading) {
    return <h2>Loading...</h2>;
  }
  
  return (
      <div>
   
      
      {posts.map((post,idx) => (
         
         <Startups key={idx} props = {post} prof={prof.filter(prof=>prof.profile_user===post.user.username)}/>
      ))}
    
</div>

  );
};

export default Posts;