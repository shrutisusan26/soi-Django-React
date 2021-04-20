import React,{useState,useEffect} from 'react'
import '../index.css'
import {useHistory,useParams} from 'react-router-dom'
import { Form } from "antd";
import axios from 'axios';
import Posts from '../containers/Posts';
import {
    TheSidebar,
    TheHeader,
  } from  '../containers/index'
import { MDBCol, MDBFormInline, MDBBtn,MDBRow } from "mdbreact";
import { Button } from 'react-bootstrap';
import { get } from 'local-storage';

function Browsing(props) {
    const[posts, setPosts] = useState([]);
    const[loading, setLoading] = useState(false);
    const[profiles,setProfiles]=useState([]);
    const[searchTerm,setSearchTerm]=useState('');
    const[getlinks,setLinks]=useState('http://localhost:8000/soi/startup/signup/');
    const [getProfilelinks,setProfileLink]=useState('http://localhost:8000/soi/startup/profile/')
    const [pagenum,setPagenum]=useState(1);
    const [totalcount,setCount]=useState(0);
    const [pageBtn,setPageButton] = useState(true)
    useEffect(() => {
        const fetchPosts = async () => {
          if(pageBtn==true){
            setLoading(true);
            const res= await axios.get(`http://localhost:8000/soi/startup/signup/?page=${pagenum}`)
            const results=await axios.get(`http://localhost:8000/soi/startup/profile/?page=${pagenum}`)
            setCount(res.data.count)
            setLinks(res.data.links.next)
            setPosts(res.data.results);
            setProfileLink(results.data.links.next);
            setProfiles(results.data.results);
            setLoading(false);
            setPageButton(false)
          }
          
        };
    
        fetchPosts();
      }, [pageBtn]);
    
    const clickPageBtn = (e) => {
        e.preventDefault();
        setPageButton(true)
    }
    return (
    
        <div className="c-app c-default-layout">
            <TheSidebar/>
            <div className="c-wrapper">

            <TheHeader/>
            <div className="c-body">
              <div className="forms">
                <span     style={{  display:"inline-block"}}>
                <MDBCol md="12">
                <MDBFormInline className="md-form mr-auto mb-4">
                  <input className="form-control mr-sm-2"  type="text" placeholder="Search" aria-label="Search" onChange={(e)=>{setSearchTerm(e.target.value)}} />
                  <MDBBtn rounded color = "primary"  rounded size="sm" type="submit" className="mr-auto" rounded>
                    Search
                  </MDBBtn>
                
                </MDBFormInline>
                </MDBCol>
              </span>
              <span     style={{ display:"inline-block"}}>
                <MDBCol md="12">
                <MDBFormInline  className="md-form mb-4">
                  <input className="form-control mr-sm-2"  type="text" placeholder="Enter page number" aria-label="Pagenum" onChange={(e)=>{setPagenum(e.target.value)}} />
                  <MDBBtn rounded color = "primary"  rounded size="sm" type="submit" className="mr-auto" rounded onClick={(e)=>clickPageBtn(e)}>
                    Submit
                </MDBBtn><br/>
                <span style={{display:"inline-block",padding:'10'}} >Enter between 1-{ Math.floor(totalcount/7)}</span>
                </MDBFormInline>
                </MDBCol>
              </span>
            </div>
            
            <Posts posts = {posts} loading = {loading} prof={profiles} filter={searchTerm} links={getlinks}/>
            </div>
            </div>
   
     
     </div>
    )
}

export default Browsing;
