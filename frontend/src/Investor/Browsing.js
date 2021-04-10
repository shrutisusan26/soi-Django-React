import React,{useState,useEffect} from 'react'
import '../index.css'
import {useHistory} from 'react-router-dom'
import axios from 'axios';
import Posts from '../containers/Posts';
import Pagination from '../containers/Pagination';
import {
    TheSidebar,
    TheHeader,
  } from  '../containers/index'
import { MDBCol, MDBFormInline, MDBBtn } from "mdbreact";

function Browsing() {
    const[posts, setPosts] = useState([]);
    const[loading, setLoading] = useState(false);
    const[currentPage, setCurrentPage] = useState(1);
    const[postsPerPage, setPostsPerPage] = useState(10);
    const[profiles,setProfiles]=useState([]);
    const[searchTerm,setSearchTerm]=useState('');
    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    useEffect(() => {
        const fetchPosts = async () => {
          setLoading(true);
          const res = await axios.get('http://127.0.0.1:8000/soi/startup/signup/');
          const prof = await axios.get('http://127.0.0.1:8000/soi/startup/profile/');
          setPosts(res.data);
          setProfiles(prof.data);
          setLoading(false);
        };
    
        fetchPosts();
      }, []);
      const paginate = pageNumber => setCurrentPage(pageNumber);
    return (
    
        <div className="c-app c-default-layout">
            <TheSidebar/>
            <div className="c-wrapper">

            <TheHeader/>
            <div className="c-body">
            <MDBCol md="12">
              <MDBFormInline className="md-form mr-auto mb-4">
                <input className="form-control mr-sm-2"  type="text" placeholder="Search" aria-label="Search" onChange={(e)=>{setSearchTerm(e.target.value)}} />
                <MDBBtn rounded color = "success"  rounded size="sm" type="submit" className="mr-auto" rounded>
                  Search
                </MDBBtn>
              
              </MDBFormInline>
            </MDBCol>
            <Posts posts = {currentPosts} loading = {loading} prof={profiles} filter={searchTerm}/>
            <Pagination postsPerPage = {postsPerPage} totalPosts = {posts.length}   paginate={paginate}/>

            </div>
            </div>
   
     
     </div>
    )
}

export default Browsing;
