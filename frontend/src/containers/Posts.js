import React, {useState, useEffect} from 'react';
import { Card, Badge, Button, Collapse } from 'react-bootstrap';
import Startups from './Startups';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

// import Browsing from '../Investor/Browsing';
function Posts({ posts, loading}) {

  const [open, setOpen] = useState(false)
    if (loading) {
    return <Loader style={{marginLeft:'350px'}}
    type="ThreeDots"
    color="#1F2DB2"
    height={600}
    width={500}
  
  />
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
const centerElem = {
  margin: "50px 0 250px 470px",
  fontFamily:'Oswald',
  fontSize:"40px"

}
