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
import { Button,Dropdown } from 'react-bootstrap';
import { get } from 'local-storage';
import { Select } from 'antd';
const { Option } = Select;
function Browsing(props) {
    const[posts, setPosts] = useState([]);
    const[loading, setLoading] = useState(false);
    const[searchTerm,setSearchTerm]=useState('');
    const [pagenum,setPagenum]=useState(1);
    const [totalcount,setCount]=useState(0);
    const [pageBtn,setPageButton] = useState(true)
    const [dropdownop,setDropdown]=useState('')
    const [searchBtn,setSearchButton] = useState(true)
    useEffect(() => {
        const fetchPosts = async () => {
          if(pageBtn==true || searchBtn==true|| dropdownop=="none" ){
            setLoading(true);
            await axios.get(`http://localhost:8000/soi/startup/profile/?${dropdownop}=${searchTerm}&page=${pagenum}`)
            .then(resp=>{
              setCount(resp.data.count)
              setPosts(resp.data.results);
              setLoading(false);
              setPageButton(false);
              setSearchButton(false);
            }).catch(errors=>console.log(errors))

           
          };         
        };
    
        fetchPosts();
      }, [pageBtn,searchBtn,dropdownop]);
    
    const clickPageBtn = (e) => {
        e.preventDefault();
        setSearchButton(true)
    }
    const clickSearch = (e) => {
      e.preventDefault();
      setPageButton(true)
    }
    function handleChange(value) {
      setPagenum(1);
      setDropdown(value);
    }
    return (
    
        <div className="c-app c-default-layout">
            <TheSidebar/>
            <div className="c-wrapper">

            <TheHeader/>
            <div className="c-body">
              <div className="forms">
          
                <Select defaultValue="Filter by" style={{marginLeft:'5px', width:120 }} onChange={handleChange}>
                  <Option value="tags">Tags</Option>
                  <Option value="place">Place</Option>
                  <Option value="profile_user">Startup</Option>
                  <Option value="none">None</Option>
                </Select>  

                <span     style={{  display:"inline-block"}}>
                <MDBCol md="12">
                <MDBFormInline className="md-form mr-auto mb-4">
                  <input className="form-control mr-sm-2"  type="text" placeholder="Search" aria-label="Search" onChange={(e)=>{setSearchTerm(e.target.value)}} />
                  <MDBBtn rounded color = "primary"  rounded size="sm" type="submit" className="mr-auto" rounded onClick={(e)=>clickSearch(e)}>
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
                { Math.floor(totalcount/6) ? <span style={{ marginLeft:"10px",display:"inline-block"}} >Enter between 1- {Math.floor(totalcount/6) }</span>:<span style={{ marginLeft:"10px"}}>Page 1 of 1</span>}
                </MDBFormInline>
                </MDBCol>
              </span>
            </div>
         
            {posts.length!==0 || loading==true ?<div><Posts posts = {posts} loading = {loading}/> </div>:<div style={centerElem}>No exact matches found </div>}
            </div>
            </div>
   
     
     </div>
    )
}

export default Browsing;
const centerElem = {
  margin: "50px 0 80px 350px",
  fontFamily:'Oswald',
  fontSize:"40px"

}
