import React, {useState, useEffect} from 'react';
import { Card, Badge, Button, Collapse } from 'react-bootstrap';
import Startups from './Startups';

function Posts({ posts, loading ,prof,filter}) {
  const [open, setOpen] = useState(false)
    if (loading) {
    return <h2>Loading...</h2>;
  }
  
  return (
      <div>
   
      
      {posts.filter((val)=>{
          if (filter==""){
            return val
          }
          else if(val.startup_description.toLowerCase().includes(filter.toLowerCase())){
            return val
          }
      }).map((post,idx) => (
         
         <Startups key={idx} props = {post} prof={prof.filter(data=>data.profile_user===post.user.username)}/>
      ))}
    
</div>

  );
};

export default Posts;