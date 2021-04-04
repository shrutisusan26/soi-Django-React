import React, { useState, useEffect } from 'react'
import { Card, Badge, Button, Collapse } from 'react-bootstrap'
import cslogo from '../Images/cslogo.png'
import APIService from '../APIService'
import ls from "local-storage"
export default function Startups(props) {

    const s_pk=props.props.user.username.replace(/['"]+/g, '');
    const i_pk= ls.get('username').replace(/['"]+/g, '');
    const [investor,setInvestor]=useState([]);

    const NotifButton=()=>{
        APIService.NotifSubmit(s_pk,i_pk)
        .then()
      }
    const NotifRemoveButton=()=>{
        APIService.NotifRemove(s_pk,i_pk)
        .then()
    }
    useEffect(()=>{
        APIService.getNotifInvestors(s_pk).then(resp=>{
            setInvestor(resp.interested_investors.filter(investor=>investor===i_pk));

        })
     })
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
                        <Badge variant="secondary">{props.prof[0] && props.prof[0].place}</Badge>
                        <div style={{ wordBreak: 'break-all' }}>
                            
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
                    {investor.length!==0 ? <Button onClick={NotifRemoveButton}>Remove Notification</Button>:<Button onClick={NotifButton}>Notify Startup </Button>}
                </Card.Text>
                <Collapse in={open}>
                    <div className="mt-4">
                        <p>Tags: {props.prof[0] && props.prof[0].tags}</p><br/>
                        <p>Logo Url: {props.prof[0] && props.prof[0].logo_url}</p><br/>
                        <p>Description:{props.props.startup_description}</p>
                    
                    </div>
                </Collapse>
            </Card.Body>
        </Card>
    )
}