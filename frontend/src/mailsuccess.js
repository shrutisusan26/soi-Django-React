import React,{useState} from 'react'
import APIService from "./APIService"
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
import EmailHeader from "./components/Headers/EmailHeader";
function Mailsuccess() {
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
    return (
        <>
         <ExamplesNavbar />
        <div className="wrapper">
        <EmailHeader />
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
            We've sent a mail on the registered emailID, please check your email for a password reset link and do the needful for
            resetting your password.<br/>
            Incase you haven't received an email please check you spam folder or get in touch with us at soinvestments@gmail.com
            <br/>
            <br/>
            Sincerely,
            Team SOI
        </div>
        </div>
        <br />
        
        <DefaultFooter />
        </div>
        </>
    )
}

export default Mailsuccess
