import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {useCookies} from 'react-cookie';
import {useHistory} from 'react-router-dom'
import ls from 'local-storage'
// routes config
import routes from '../routes'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {
  CHeader,
  CToggler,
  CHeaderBrand,
  CHeaderNav,
  CHeaderNavItem,
  CHeaderNavLink,
  CSubheader,
  CBreadcrumbRouter,
  CLink
} from '@coreui/react'
import CIcon from '@coreui/icons-react'


const TheHeader = () => {
  let history=useHistory()
  const dispatch = useDispatch()
  const [cookies, setCookie, removeCookie] = useCookies(["mytoken"]);
  const sidebarShow = useSelector(state => state.sidebarShow)

  const toggleSidebar = () => {
    const val = [true, 'responsive'].includes(sidebarShow) ? false : 'responsive'
    dispatch({type: 'set', sidebarShow: val})
  }

  const toggleSidebarMobile = () => {
    const val = [false, 'responsive'].includes(sidebarShow) ? true : 'responsive'
    dispatch({type: 'set', sidebarShow: val})
  }
  const Logout=()=>{
    removeCookie(['mytoken']);
    ls.clear()
    history.push('/home');
  };
  return (
    <CHeader withSubheader>
      <CToggler
        inHeader
        className="ml-md-3 d-lg-none"
        onClick={toggleSidebarMobile}
      />
      <CToggler
        inHeader
        className="ml-3 d-md-down-none"
        onClick={toggleSidebar}
      />
      <CHeaderBrand className="mx-auto d-lg-none" to="/">
        <CIcon name="logo" height="48" alt="Logo"/>
      </CHeaderBrand>

      <CHeaderNav className="d-md-down-none mr-auto">
        <CHeaderNavItem className="px-3" >
          <CHeaderNavLink to="/home" >Home</CHeaderNavLink>
        </CHeaderNavItem>
        <CHeaderNavItem className="px-3" >
          <CHeaderNavLink   onClick={Logout}>Logout</CHeaderNavLink>
        </CHeaderNavItem>
      </CHeaderNav>
    <AccountCircleIcon style={{ fontSize: 50}} ></AccountCircleIcon>
    <CHeaderNavItem className="px-2" style={{ paddingTop: '15px',fontFamily:'Helvetica'}} >
        Welcome {localStorage.getItem('username').replace(/['"]+/g, '')}
      </CHeaderNavItem>
    </CHeader>
  )
}
const style={
  width:"80px"
}
export default TheHeader
