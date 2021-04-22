import React,{useState} from 'react'
import APIService from "./APIService"
import {useHistory} from 'react-router-dom'
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
import ExamplesNavbar from "./components/Navbars/ExamplesNavbar";
import DefaultFooter from "./components/Footers/DefaultFooter";
import DarkFooter from "./components/Footers/DarkFooter";
import ForgotHeader from "./components/Headers/ForgotHeader";
function ForgotPass() {
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
    let history=useHistory();
    const [email,setEmail]=useState('');
    const handleSubmit=()=>{
          
        APIService.password_reset({email})
        .then(resp=> {
            console.log('mail sent')
        })
        history.push('/success');
    }
    
    return (
        <>
        <ExamplesNavbar />
        <div className="wrapper">
        <ForgotHeader />
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
            <div className="login" style={centerElem}>
                <br/>
                <br/>
                
                <div style={centerElem}>
                    <h2>Forgot Password</h2>
                </div>

                <div className="mb-3" style={centerElem}>
                    
                    <label htmlFor="username" className="form-label">Email</label>
                    <input type="text" className="form-control" id="email" value={email} placeholder="Enter the email you registered with" onChange={(e)=>setEmail(e.target.value)}/>
                    <br/>
                    <button className="btn btn-primary" onClick={()=>handleSubmit()}>Change Password</button>
                </div>
        </div>
        </div>
        </div>
        <DarkFooter />
        </div>
        </>
    )
}

export default ForgotPass
const centerElem = {
    margin: "auto",
    width: "50%",
    padding: "10px"
}