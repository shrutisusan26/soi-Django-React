import React,{useEffect,useState} from 'react'
import APIService from '../APIService'
import {useHistory} from 'react-router-dom'
import ls from "local-storage"
import {
    Button,
    NavItem,
    NavLink,
    Nav,
    TabContent,
    TabPane,
    Container,
    Row,
    Col,
    UncontrolledTooltip,
  } from "reactstrap";
import ExamplesNavbar from "../components/Navbars/ExamplesNavbar";
import DefaultFooter from "../components/Footers/DefaultFooter";
import DarkFooter from "../components/Footers/DarkFooter";
import StartupHeader from "../components/Headers/StartupLoginHeader";
import StartupLoginHeader from '../components/Headers/StartupLoginHeader';

function SubmitProfile() {
    const [pills, setPills] = React.useState("2");
    React.useEffect(() => {
      document.body.classList.add("profile-page");
      document.body.classList.add("sidebar-collapse");
      document.documentElement.classList.remove("nav-open");
      window.scrollTo(0, 0);
      document.body.scrollTop = 0;
      return function cleanup() {
        document.body.classList.remove("profile-page");
        document.body.classList.remove("sidebar-collapse");
      };
    }, []);
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
        <>
         <ExamplesNavbar />
        <div className="wrapper">
        <StartupLoginHeader />
        <div className="section">
          <Container>
            <div className="button-container">
              
            </div>
            
            <Row>
              <Col className="ml-auto mr-auto" md="6">
                {/* <h4 className="title text-center">My Portfolio</h4> */}
                <div className="nav-align-center">
                  <Nav
                    className="nav-pills-info nav-pills-just-icons"
                    pills
                    role="tablist"
                  >
                    <NavItem>
                     
                    </NavItem>
                    <NavItem>
                      
                    </NavItem>
                    <NavItem>
                    
                    </NavItem>
                  </Nav>
                </div>
              </Col>
              <TabContent className="gallery" activeTab={"pills" + pills}>
                <TabPane tabId="pills1">
                  <Col className="ml-auto mr-auto" md="10">
                    <Row className="collections">
                      <Col md="6">
                        <img
                          alt="..."
                          className="img-raised"
                         
                        ></img>
                        <img
                          alt="..."
                          className="img-raised"
                         
                        ></img>
                      </Col>
                      <Col md="6">
                        <img
                          alt="..."
                          className="img-raised"
                          
                        ></img>
                        <img
                          alt="..."
                          className="img-raised"
                         
                        ></img>
                      </Col>
                    </Row>
                  </Col>
                </TabPane>
                <TabPane tabId="pills2">
                  <Col className="ml-auto mr-auto" md="10">
                    <Row className="collections">
                     
                     
                    </Row>
                  </Col>
                </TabPane>
                <TabPane tabId="pills3">
                  <Col className="ml-auto mr-auto" md="10">
                    <Row className="collections">
                      <Col md="6">
                        <img
                          alt="..."
                          className="img-raised"
                        //   src={bg3}
                        ></img>
                        <img
                          alt="..."
                          className="img-raised"
                        //   src={bg8}
                        ></img>
                      </Col>
                      <Col md="6">
                        <img
                          alt="..."
                          className="img-raised"
                        //   src={bg7}
                        ></img>
                        <img
                          alt="..."
                          className="img-raised"
                        //   src={bg6}
                        ></img>
                      </Col>
                    </Row>
                  </Col>
                </TabPane>
              </TabContent>
            </Row>
          </Container>
        <div>
            <div  style={centerElem}>

                <h1 style={centerElem}> Complete Your Profile</h1>
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
    </div>
    <DefaultFooter />
    </div>
    </>
    )
}

const centerElem = {
    margin: "auto",
    width: "50%",
    padding: "10px"
}


export default SubmitProfile
