import React, { useState, useEffect } from 'react'
import { Card, Badge, Button, Collapse } from 'react-bootstrap'
import cslogo from '../Images/cslogo.png'
import APIService from '../APIService'
import ls from "local-storage"
export default function Startups(props) {
    const s_pk=props.props.user.username;
    const i_pk= ls.get('username');
    console.log(i_pk)
    console.log(s_pk)
    const NotifButton=()=>{
        APIService.NotifSubmit(s_pk,i_pk)
        .then(resp=> {
        if(resp.token){
            console.log('added')
        }
        else{ 
           console.log('oops')
        }
      })
      }
  
    const [open, setOpen] = useState(false)
    
    return (
        <Card className="mb-3">
            <Card.Body>
                <div className="d-flex justify-content-between">
                    <div>
                        <Card.Title>
                        <h1>{props.props.startup_name}</h1>
                        </Card.Title>
                        <Card.Subtitle className="text-muted mb-2">
                            {/* {new Date(job.created_at).toLocaleDateString()} */}
                            3/2/20121
                        </Card.Subtitle>
                        <Badge variant="secondary" className="mr-2">Startup</Badge>
                        <Badge variant="secondary">Pune</Badge>
                        <div style={{ wordBreak: 'break-all' }}>
                            {/* <ReactMarkdown source={job.how_to_apply} /> */}
                            
                        </div>
                    </div>
                    <img className="d-none d-md-block" height="50"  src= {cslogo} />
                </div>
                <Card.Text>
                    <Button
                        onClick={() => setOpen(prevOpen => !prevOpen)}
                        variant="primary"
                    >
                        {open ? 'Hide Details' : 'View Details'}
                    </Button>
                    <Button onClick={NotifButton}>Notify Startup </Button>
                </Card.Text>
                <Collapse in={open}>
                    <div className="mt-4">
                        {/* <ReactMarkdown source={job.description} /> */}
                        <p>{props.props.startup_description}</p>
                    </div>
                </Collapse>
            </Card.Body>
        </Card>
    )
}