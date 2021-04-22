import React, { useState, useEffect,useRef } from 'react'
import { Card, Badge, Button, Collapse } from 'react-bootstrap'
import cslogo from '../Images/cslogo.png'
import APIService from '../APIService'
import ls from "local-storage"
 function Startups(props) {

    const s_pk=props.props.profile_user.user.username.replace(/['"]+/g, '');
    const i_pk= ls.get('username').replace(/['"]+/g, '');
    const [investor,setInvestor]=useState(props.props.profile_user.interested_investors.filter(investor=>investor===i_pk));
    const [btn,setBtn]=useState("");
    const [firstUpdate,setUpdate]=useState(true);
    const [notifyButton,setNotifyButton] = useState("Notify Startup")
    useEffect(() => {

        if (firstUpdate) {
            setUpdate(false);
            return;
        }
        APIService.getNotifInvestors(s_pk).then(resp=>{
            setInvestor(resp.interested_investors.filter(investor=>investor===i_pk));
        }); 
    }, [btn]);
    
    const NotifButton=()=>{
        
        APIService.addtoRecommendations(i_pk,s_pk);
        APIService.NotifSubmit(s_pk,i_pk).then(resp=> setBtn(true));
    }
    const NotifRemoveButton=()=>{
        setNotifyButton("Remove Notification")
        APIService.NotifRemove(s_pk,i_pk)
        .then(resp=> setBtn(false))
        
    }
    
    const [open, setOpen] = useState(false)
    
    return (
        <Card className="mb-3">
            <Card.Body>
                <div className="d-flex justify-content-between">
                    <div>
                        <Card.Title>
                        <h1 style={{fontFamily:'Helvetica'}}>{props.props.profile_user.startup_name}</h1>
                        </Card.Title>
                        <Badge variant="secondary" style={{fontFamily:'Helvetica'}}>{props.props.place}</Badge>
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
                    {investor.length!==0 ? <Button onClick={NotifRemoveButton}>{notifyButton}</Button>:<Button onClick={NotifButton}>{notifyButton}</Button>}
                </Card.Text>
                <Collapse in={open}>
                    <div className="mt-4">
                        <p style={{fontFamily:'Helvetica'}}>Tags: {props.props.tags}</p><br/>
                        <p style={{fontFamily:'Helvetica'}}>HomePage: <a>{props.props.logo_url}</a></p><br/>
                        <p style={{fontFamily:'Helvetica'}}>Description: {props.props.profile_user.startup_description}</p>
                    
                    </div>
                </Collapse>
            </Card.Body>
        </Card>
    )
}
export default Startups;