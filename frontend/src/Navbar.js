import React,{useState,useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import {useCookies} from 'react-cookie';
import ls from "local-storage"
const Navbar = (props) => {
  const [token,setToken,removeToken]=useCookies(['mytoken','csrftoken'])
  const [showLogout,setshowLogout]=useState(false)
  useEffect(()=>{
    if(token['mytoken']){
       setshowLogout(true);
    }
  },[token])
  let history=useHistory()
  const Logout=()=>{
      removeToken(['mytoken','csrftoken'])
      setshowLogout(false)
      ls.clear()
      history.push('/')
  };

  return( <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
  <div className="container">
  <a className="navbar-brand js-scroll-trigger" href="#page-top">SOI</a>
  
  <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
    Menu
    
  
  </button>
  <div className="collapse navbar-collapse" id="navbarResponsive">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <a className="nav-link js-scroll-trigger" href="#download">About</a>
      </li>
      <li className="nav-item">
        <a className="nav-link js-scroll-trigger" href="/news">News</a>
      </li>
      <li className="nav-item">
        <a className="nav-link js-scroll-trigger" href="/#">FAQ</a>
      </li>
      <li className="nav-item">
        
        {showLogout ?<a className="nav-link js-scroll-trigger" href="/" onClick={Logout}>Logout</a>:<></>}
      </li>
    </ul>
  </div>
</div>
</nav>)
}

export default Navbar