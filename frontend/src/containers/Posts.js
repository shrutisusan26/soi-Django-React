import React, {useState, useEffect} from 'react';
import { Card, Badge, Button, Collapse } from 'react-bootstrap';
import Startups from './Startups';
// import Browsing from '../Investor/Browsing';
function Posts({ posts, loading,links}) {
  const [open, setOpen] = useState(false)
    if (loading) {
    return <h2 style={{fontFamily:"Oswald"}}>Loading...</h2>;
  }
    
  return (
      <div>
      {posts.map((post,idx) => (
         <Startups key={idx} props = {post}/>
        
      ))}
    
</div>

  );
};

export default Posts;