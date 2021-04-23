import React from "react";
import Faq from "react-faq-component";
import ExamplesNavbar from "./components/Navbars/ExamplesNavbar.js";
import DarkFooter from "./components/Footers/DarkFooter.js";
import FaqPageHeader from "../src/components/Headers/FaqPageHeader";
import {
    
    NavItem,
    Nav,
    TabContent,
    TabPane,
    Container,
    Row,
    Col,
  } from "reactstrap";
const data = {
    title: "Everything you need to know so you can use SOI like a pro",
    rows: [
        {
            title: "How to reset a lost or forgotten password",
            content: `1. From the sign in page, click Forgot password?.<br />2. Enter Your registered email id<br />3. Check your email for a password reset link and do the needful for resetting your password.
            Incase you haven't received an email please check you spam folder or get in touch with us at soinvestments@gmail.com
            `,
          
        },
        {
          title: "Where can I see the Startups?",
          content:
              `The dashboard contains the "Catalog" menu which has list of startups belonging to different backgrounds.`,
      },
        {
            title: "How to notify Startups?",
            content:
                "1. After getting logged in, into your respective accounts, a list of startups will appear in the catalog.<br /> 2. Every startup has a button called 'Notify Startup', after clicking it, the particular startup will get notification that you are interested into it.",
        },
        {
            title: "How recommendation works?",
            content: `Our recommendation model is very intelligent, depending upon your interests it lists startups on your screen. Once you click "Notify Startup" button, it will show startups of that particular type on your catalog screen the next time you visit. `,
        },
        {
            title: "How to update Startup description?",
            content: `1. Once you are logged in, into you account, go to "Update Description" option in the side menu. <br />2. A page will appear where you can update the description you previously added.`,
        },
        {
            title: "How to Delete Startup description?",
            content: `1. After you log in, you can see "Delete Description" option in the sidebar of the dashboard. <br /> 2. Open that page and you can delete the description.`,
        },
        {
            title: "How to Chat?",
            content: `1. Once you log in, you can see the "Chat" option in the left sidebar. <br /> 2. Open it and you will be redirected to chat section, where you enter the username and start chatting with other users of the application. `,
        },
        {
            title: "How to get Market News?",
            content: `Market News option comes after you have logged in, into the application. The left sidebar of the Dashboard contains "market news" which gets different current news of the market. `,
        },

        {
          title: "How to reach out to, developers?",
          content: `1 .On the Home page of the application, there is "About us" menu on the navigation bar. <br /> 2. Open that page to reach out to developers.`,
      },
    
        {
            title: "What is the tech stack of this application",
            content: `Frontend: ReactJs<br />Backend: Django<br />Database: MongoDB`,
        },
    ],
};

const styles = {
    // bgColor: 'white',
    titleTextColor: "blue",
    rowTitleColor: "blue",
    // rowContentColor: 'grey',
    // arrowColor: "red",
};

const config = {
    // animate: true,
    // arrowIcon: "V",
    // tabFocus: true
};

function FAQ(){
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
        <FaqPageHeader />
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
            <Faq
                data={data}
                styles={styles}
                config={config}
            />
        </div>
       </div>
        </div>
        <DarkFooter />
        </>
    );
}
export default FAQ;