import React, {useState, useEffect} from 'react';
import { Card, Badge, Button, Collapse } from 'react-bootstrap';
import Startups from './Startups';
// import Browsing from '../Investor/Browsing';
function Posts({ posts, loading ,prof,filter,links}) {
  const [open, setOpen] = useState(false)
    if (loading) {
    return <h2>Loading...</h2>;
  }
  
  return (
      <div>
        
      {console.log(posts)}
      {posts.filter((val)=>{
          if (filter==""){
            return val
          }
          else if(val.startup_description.toLowerCase().includes(filter.toLowerCase())){
            return val
          }
      }).map((post,idx) => (
        //  console.log(post)
         <Startups key={idx} props = {post} prof={prof.filter(data=>data.profile_user===post.user.username)}/>
        
      ))}
    
</div>

  );
};

export default Posts;