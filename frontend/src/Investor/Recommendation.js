import React, { useState,useEffect } from 'react';
import ls from 'local-storage';
import APIService from '../APIService'
import '../index.css';
import {
    TheSidebar,
    TheHeader,
  } from  '../containers/index'
import { Card, Badge, Button, Collapse } from 'react-bootstrap'
import cslogo from '../Images/cslogo.png'
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
export default function Recommendation() {
    const [recommendation,setRecommendation]=useState([]);
    const i_pk=ls.get('username');
    const [open, setOpen] = useState(false)
    const[loading, setLoading] = useState(false);
    useEffect(()=>{
        setLoading(true);
        APIService.getRecommendations(i_pk).then(resp=>{
           setRecommendation(resp.interested_startups);
           setLoading(false);
        })
        
    },[]);
    return(<div>
            {/* {console.log(recommendation)} */}
            <div className="c-app c-default-layout">
            <TheSidebar/>
            <div className="c-wrapper">
            <TheHeader/>
            <div className="title" style={{marginLeft:'0px'}}>
                <h2>Recommendations</h2>
                <div className="underline"></div>
            </div>
            <div className="c-body">
                {loading && <Loader style={{marginLeft:'350px'}} 
                type="ThreeDots"
                color="#1F2DB2"
                height={600}
                width={500}/>}
                {recommendation && recommendation.map(startup=>
                    (
                       
                        <Card className="mb-3">
                        <Card.Body>
                        <div className="d-flex justify-content-between">
                            <div>
                                <Card.Title>
                                <h1 style={{fontFamily:'Helvetica'}}>{startup.startup_name}</h1>
                                </Card.Title>
                                
                                <Badge variant="secondary">{startup.place && startup.place}</Badge>
                                <div style={{ wordBreak: 'break-all' }}>
                                    
                                </div>
                            </div>
                            <img className="d-none d-md-block" height="50"  src= {cslogo} />
                        </div>
                        {<Card.Text>
                            <Button
                                onClick={() => setOpen(prevOpen => !prevOpen)}
                                variant="primary"
                            >
                             {open ? 'Hide Details' : 'View Details'}
                            </Button>
                        </Card.Text>}
                       
                        <Collapse in={open}>
                            <div className="mt-4">
                                <p style={{fontFamily:'Helvetica'}}>Tags: {startup && startup.tags}</p><br/>
                                <p style={{fontFamily:'Helvetica'}}>HomePage: <a>{startup && startup.logo_url}</a></p><br/>
                                <p style={{fontFamily:'Helvetica'}}>Description: {startup.startup_description}</p>
                            </div>
                        </Collapse>
                    </Card.Body>
                </Card>
            ))}
            </div>
            </div>
           
        </div>
        </div>
    )
}
const centerElem = {
    margin: "30px 0 0px 400px",
    fontFamily:'Oswald',
    fontSize:"40px"

  }
  