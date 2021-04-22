import React, { useState,useEffect } from 'react';
import ls from 'local-storage';
import APIService from '../APIService'
import {
    TheSidebar,
    TheHeader,
  } from  '../containers/index'
import { Card, Badge, Button, Collapse } from 'react-bootstrap'
import cslogo from '../Images/cslogo.png'
export default function Recommendation() {
    const [recommendation,setRecommendation]=useState([]);
    const i_pk=ls.get('username');
    const [open, setOpen] = useState(false)
    useEffect(()=>{
        APIService.getRecommendations(i_pk).then(resp=>{
           setRecommendation(resp.interested_startups)
        })
    },[]);
    return(<div>
            {/* {console.log(recommendation)} */}
            <div className="c-app c-default-layout">
            <TheSidebar/>
            <div className="c-wrapper">
            <TheHeader/>
            <h1 style={{marginLeft:370,width:'50%',fontFamily:'Oswald',paddingTop:15}}>Recommendations</h1>
            <div className="c-body">
    
                {recommendation && recommendation.map(startup=>
                    (
                       
                        <Card className="mb-3">
                        <Card.Body>
                        <div className="d-flex justify-content-between">
                            <div>
                                <Card.Title>
                                <h1 style={{fontFamily:'Helvetica'}}>{startup.startup_name}</h1>
                                </Card.Title>
                                <Badge variant="secondary" className="mr-2">Startup</Badge>
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
    margin: "auto",
    width: "50%",
    padding: "10px"
}