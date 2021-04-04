import React, { lazy, useState,useEffect } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CRow,
  CCol,
} from '@coreui/react'
import '../../index.css'
import APIService from '../../APIService'
import ls from 'local-storage'

const StartupDashboard = () => {
  const [Notifs,setisNotif]=useState([])
  const username=ls.get('username').replace(/['"]+/g, '');
  console.log(username);
  useEffect(()=>{
     APIService.getNotifInvestors(username).then(resp=>{
       console.log(resp)
     
       setisNotif(resp.interested_investors)
        console.log(Notifs)
     })
  },[])
  return (
    <>
      <CCard>
        <CCardBody>
        <CCardHeader>
            Notifications
        </CCardHeader>
          <CRow className="text-center">

            {Notifs && Notifs.map(info => <main>
            <CCol ml="20" >
            <div className="block" style={{borderStyle:"solid",borderColor:"black",borderWidth:"1px"}}>
              <h4 className="block-element" style={{fontWeight:"normal",margin:"10px"}}>{info} viewed your profile</h4>
              <button className="btn btn-primary" style={{height:"40px",position:"relative",top:"5px"}}>View</button>
            </div>
            </CCol>
            </main>
         )}
          </CRow>
          </CCardBody>
          </CCard>
    </>
  )
}

export default StartupDashboard
