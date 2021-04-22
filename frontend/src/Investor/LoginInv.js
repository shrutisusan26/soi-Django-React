import React,{useState,useEffect} from 'react'
import APIService from '../APIService'
import {useCookies} from 'react-cookie';
import {useHistory,Link} from 'react-router-dom'
import ls from "local-storage"
import LoginFail from "../LoginFail"
import './styles.css';
import DefaultFooter from "./../components/Footers/DefaultFooter";
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


import ExamplesNavbar from "./../components/Navbars/ExamplesNavbar";

import InvestorLoginHeader from "../components/Headers/InvestorLoginHeader";
function LoginInv() {
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
    const [first_name,setFirstName]=useState('')
    const [last_name,setLastName]=useState('')
    const [email,setEmail]=useState('')
    const [isLogin,setIsLogin]=useState(true)
    const [cookies, setCookie, removeCookie] = useCookies(['mytoken']);
    const [isError,setisError]=useState(false)
    const [isAttempt,setisAttempt] = useState(false);
    const [isPasswordVisible,setPassVisibility] = useState(false);
    let history=useHistory()
    
    useEffect(()=>{
        if(isError){
            setisError(false)
            //history.push('/home')
        }
        else if(cookies['mytoken']){
            setisAttempt(true)
            history.push('/investor/catalog')
        }
    },[cookies,isError])
    const togglePassword=()=>{
        setPassVisibility(!isPasswordVisible);
    }
    const RegisterButton=()=>{
        const user={username,password,email}
        APIService.RegisterInvestor({user,first_name,last_name})
        .then(resp=> {
            loginButton()
        })
        .catch(error=> console.log(error))
    }
    const loginButton=()=>{
        APIService.LoginInvestor({username,password})
        .then(resp=> {
        console.log(resp.token)
        if(resp.token){
            ls.set('username',resp['user_id']);
            console.log(resp)
            ls.set('token',resp.token);
            setCookie('mytoken',resp.token,"/")
            ls.set('startup',resp.is_startup);
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
        <InvestorLoginHeader />
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
                  {isLogin? <h1 style={{fontFamily:'Bebas Neue',margin:'auto',width:'100%',textAlign:"center"}}>Login for Investors</h1>: <h1 style={{fontFamily:'Bebas Neue',margin:'auto',width:'100%',textAlign:"center"}}>Register for investors</h1>}
                  <br/>
                </div>

                <div className="mb-3" style={centerElem}>
                    
                    <label htmlFor="username" className="form-label">Username</label>
                    <input type="text" className="form-control" id="username" value={username} placeholder="Enter username" onChange={(e)=>setUsername(e.target.value)}/>
                    <br/>
                    <div className="password">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input  className="form-control" id="password" placeholder="Enter password" value={password} onChange={(e)=>setPassword(e.target.value) }type={isPasswordVisible?"text":"password"}/>
                    <i className={`fa ${isPasswordVisible? "fa-eye-slash":"fa-eye"}  password-icon`} onClick={togglePassword}/>
                    </div>
                </div>

                {!isLogin?
                <div> 
                    <div className="mb-3" style={centerElem}>
                        <label htmlFor="firstName" className="form-label">First Name:</label>
                        <input type="text" className="form-control" id="firstname" value={first_name} placeholder="Enter your firstName" onChange={(e)=>setFirstName(e.target.value)}/>
                        <br/>

                        <label htmlFor="lastName" className="form-label">Last Name:</label>
                        <input type="text" className="form-control" id="lastname" placeholder="Enter the last name" value={last_name} onChange={(e)=>setLastName(e.target.value) }/>
                        <br/>

                        <label htmlFor="email" className="form-label">Email:</label>
                        <input type="text" className="form-control" id="email" placeholder="Enter your email" value={email} onChange={(e)=>setEmail(e.target.value) }/>
                        <br/>
                        <button className="btn btn-primary" onClick={RegisterButton} style={buttonStyles}>Register</button></div>
                    </div> 
                :
                    <div style={centerElem}>
                        <button className="btn btn-primary" onClick={loginButton} style={buttonStyles}>Login</button> 
                    </div>
                }
                {isLogin?
                <div className="mb-3" style={centerElem}>
                    <p style={{color:"var(--clr-grey-5)", marginBottom:"0"}}> Don't Have An Account?</p>
                    <button className="btn btn-primary" onClick={()=>setIsLogin(false)} style={buttonStyles}>Register Here!</button>
                    <p >Forgot Password?<Link to={'/forgotpass'}> Reset Password</Link></p>
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
            <br/>
            <br/>
            
           
        </div>
          
        </div>
        <DarkFooter />
      </div>
        </>
    )
}

export default LoginInv

const centerElem = {
    margin: "auto",
    width: "50%",
    padding: "10px"
}

const buttonStyles = {
    width:"100%",
}