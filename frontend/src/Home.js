import React,{useState,useEffect} from 'react'
import './index.css'
import Navbar from './Navbar'
import {useHistory} from 'react-router-dom'
import axios from 'axios';
import Posts from './containers/Posts';
import Pagination from './containers/Pagination';

function Home() {
    const[posts, setPosts] = useState([]);
    const[loading, setLoading] = useState(false);
    const[currentPage, setCurrentPage] = useState(1);
    const[postsPerPage, setPostsPerPage] = useState(10);
    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    useEffect(() => {
        const fetchPosts = async () => {
          setLoading(true);
          const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
          setPosts(res.data);
          setLoading(false);
        };
    
        fetchPosts();
      }, []);
      const paginate = pageNumber => setCurrentPage(pageNumber);
    let history=useHistory()
    const InvestorLoginPage=()=>{
        history.push('/investorlogin')
    }
    const StartupLoginPage=()=>{
        history.push('/startuplogin')
    }
    
    return (
        <div>
            <Navbar/>
            <div className="choice">
            <button className="btn btn-primary" onClick={InvestorLoginPage}>Investor</button>
            <button className="btn btn-primary" onClick={StartupLoginPage}>Startup</button>
            </div>
            <div className='container mt-5'>
     <h3 className = 'text-primary mb-3'>Seeking Online Investments Application</h3>
     <Posts posts = {currentPosts} loading = {loading}/>
     <Pagination postsPerPage = {postsPerPage} totalPosts = {posts.length}   paginate={paginate}/>
     </div>
        </div>
    )
}

export default Home
