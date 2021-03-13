import React,{useEffect,useState} from 'react'
import APIService from '../APIService'
import {useHistory} from 'react-router-dom'
import ls from "local-storage"

function SubmitProfile() {

    const [place,setPlace]=useState('')
    const [tags,setTags]=useState('')
    const [logo_url,setlogo_url]=useState('')
    const profile_user= ls.get('username');
    let history=useHistory()
    const ProfileSubmit=()=>{
        APIService.ProfileSubmit({profile_user,place,tags,logo_url})
        .then(resp=> {
            history.push('/startup/dashboard')
        })
        .catch(error=> console.log(error))
    }
    return (
        <div>
            <div  style={centerElem}>

                <h1 style={centerElem}> Complete your Profile</h1>
                <div>     
                    <div className="mb-3" style={centerElem}>
                        <label htmlFor="startup_name" className="form-label">Place:</label>
                        <input type="text" className="form-control" id="place" value={place} placeholder="Enter the location where your company is situated:" onChange={(e)=>setPlace(e.target.value)}/>
                        <br/>
                        <label htmlFor="startup_description" className="form-label">Tags:</label>
                        <input type="text" className="form-control" id="Tags" placeholder="Tags associated with your company:" value={tags} onChange={(e)=>setTags(e.target.value) }/>
                        <br/>
                        <label htmlFor="email" className="form-label">Logo_url:</label>
                        <input type="text" className="form-control" id="Logo" placeholder="Enter the url of your logo:" value={logo_url} onChange={(e)=>setlogo_url(e.target.value) }/>
                        <br/>
                        <button className="btn btn-primary" onClick={ProfileSubmit}>Next</button>
                    </div>             
                </div>
        </div>
    </div>
    )
}

const centerElem = {
    margin: "auto",
    width: "50%",
    padding: "10px"
}


export default SubmitProfile
