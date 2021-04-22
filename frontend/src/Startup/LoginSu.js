import React,{useEffect,useState} from 'react'
import APIService from '../APIService'
import {useCookies} from 'react-cookie';
import {useHistory,Link} from 'react-router-dom'
import StartupDashboard from './StartupDashboard';
import ls from "local-storage";
import LoginFail from "../LoginFail"
import './styles.css';

import ExamplesNavbar from "./../components/Navbars/ExamplesNavbar";
import StartupLoginHeader from "../components/Headers/StartupLoginHeader";
import DarkFooter from "./../components/Footers/DarkFooter";
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
function LoginSu() {
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
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const [startup_name,setstartup_name]=useState('')
    const [startup_description,setDescription]=useState('')
    const [email,setEmail]=useState('')
    const [isLogin,setIsLogin]=useState(true)
    const [cookies, setCookie, removeCookie] = useCookies(['mytoken']);
    const [isError,setisError]=useState(false)
    const [response,setisResponse]=useState('');
    let history=useHistory()
    const [isAttempt,setisAttempt] = useState(false);
    const [isPasswordVisible,setPassVisibility] = useState(false);
    useEffect(()=>{

        if(isError){
            setisError(false)
            history.push('/startuplogin')
        }
        else if(isLogin==true && cookies['mytoken']){
            history.push({
                pathname: '/startup/dashboard',
                state: { user_id: response }
            })
        }
        else if(isLogin==false &&  cookies['mytoken']){
            console.log("inside profile");
            history.push({
                pathname: '/startup/profile',
                state: { user_id: response }
            })
        }
    },[cookies,isError])
    const togglePassword=()=>{
        setPassVisibility(!isPasswordVisible);
    }
    const RegisterButton=()=>{
        const user={username,password,email}
        
        APIService.RegisterStartUp({user,startup_name,startup_description})
        .then(resp=> {
            loginButton()
        })
        .catch(error=> console.log(error))
    }
    const loginButton=()=>{
        APIService.LoginStartup({username,password})
        .then(resp=> {
           
            if(resp.token){
                ls.set('username',resp['user_id']);
                ls.set('token',resp.token);
                ls.set('startup',resp.is_startup);
                setCookie('mytoken',resp.token,"/")
            }
            else{ 
                setisError(true)
                setisAttempt(true)
            }
    })
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
            <div className="login" style={centerElem}>
                <br/>
                <br/>
                
                <div>
                  {isLogin? <h1 style={{fontFamily:'Oswald',margin:'auto',width:'100%',textAlign:"center"}}>Login for Startups</h1>: <h1 style={{fontFamily:'Oswald',margin:'auto',width:'100%',textAlign:"center"}}>Registration for Startups</h1>}
                  <br/>
                </div>
                <div className="mb-3" style={centerElem}>
                    <label htmlFor="username" className="form-label">Username</label>
                    <input type="text"  className="form-control" id="username" value={username} placeholder="Enter username" onChange={(e)=>setUsername(e.target.value)}/>
                    <br/>
        
                    <div className="password">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input  className="form-control" id="password" placeholder="Enter password" value={password} onChange={(e)=>setPassword(e.target.value) }type={isPasswordVisible?"text":"password"}/>
                    <i className={`fa ${isPasswordVisible? "fa-eye-slash":"fa-eye"}  password-icon`} onClick={togglePassword}/></div>
                </div>
                
                {!isLogin?
                <div>     
                    <div className="mb-3" style={centerElem}>
                        <label htmlFor="startup_name" className="form-label">Company Name</label>
                        <input type="text" className="form-control" id="companyNum" value={startup_name} placeholder="Enter your firstName" onChange={(e)=>setstartup_name(e.target.value)}/>
                        <br/>
                        <label htmlFor="startup_description" className="form-label">Company Description:</label>
                        <input type="text" className="form-control" id="startup_description" placeholder="Enter the last name" value={startup_description} onChange={(e)=>setDescription(e.target.value) }/>
                        <br/>
                        <label htmlFor="email" className="form-label">Email:</label>
                        <input type="text" className="form-control" id="email" placeholder="Enter your email" value={email} onChange={(e)=>setEmail(e.target.value) }/>
                        <br/>
                        <button className="btn btn-primary" onClick={RegisterButton} style={buttonStyles}>Register</button>
                    </div>             
                </div>
                :
                <div style={centerElem}>
                    <button style={buttonStyles} className="btn btn-primary" onClick={loginButton}>Login</button> 
                </div>
                
}
                {isLogin?
                <div className="mb-3" style={centerElem}>
                    <br/>
                    <p style={{color:"var(--clr-grey-5)", marginBottom:"0"}}>Don't have an account?</p>
                    <button className="btn btn-primary" onClick={()=>setIsLogin(false)} style={buttonStyles}>Register Here!</button>
                    <p >Forgot Password ?<Link to={'/forgotpass'}> Reset Password</Link></p>

                </div>:
                <div className="mb-3" style={centerElem}>
                    <p style={{color:"var(--clr-grey-5)", marginBottom:"0"}}> If you have an account,</p>
                    <button className="btn btn-primary" onClick={()=>setIsLogin(true)} style={buttonStyles}>Login</button>
                    
                </div>
                }
                {isAttempt?
                    <div className="mb-3" style={centerElem}>
                        <LoginFail/>
                    </div>:
                    <br/>
                }
               
            </div>
        </div>
        </div>
        <DarkFooter />
        </div>
      </>
       
    )
}

const centerElem = {
    margin: "auto",
    width: "50%",
    padding: "10px"
}
const buttonStyles = {
    width:"100%",
}

export default LoginSu
