import React, { useState, useEffect } from 'react'
import { Card, Badge, Button, Collapse } from 'react-bootstrap'
import cslogo from '../Images/cslogo.png'
export default function Startups({ title }) {
    const [open, setOpen] = useState(false)

    return (
        <Card className="mb-3">
            <Card.Body>
                <div className="d-flex justify-content-between">
                    <div>
                        <Card.Title>
                            Credit Suisse - <span className="text-muted font-weight-light">{title}</span>
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
                </Card.Text>
                <Collapse in={open}>
                    <div className="mt-4">
                        {/* <ReactMarkdown source={job.description} /> */}
                        <p>RMLS is the largest Realtor®-owned Multiple Listing Service (MLS) in the Northwest. RMLS exists to provide its subscribers with accurate and timely information on listings, the means to analyze the market, and state-of-the art professional tools. Our database contains virtually every property offered for sale by our subscribers with over two million total listings and more than two million tax records. It is the priority of RMLS to lead with accuracy, deliver exceptional service and support, and to be driven by integrity in everything we do.

RMLS knows that our success depends on our employees. We cultivate a culture of teamwork, friendliness, and exceptional service and support for our team and subscribers. We like to have fun, hustle hard, and are committed to cultivating a healthy work-life balance.</p>
                    </div>
                </Collapse>
            </Card.Body>
        </Card>
    )
}