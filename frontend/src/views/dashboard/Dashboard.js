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
  })
  return (
    <>
     

      {Notifs.length!==0 && Notifs.map(info => <main>
        <CCard>
        <CCardBody>
        <CCardHeader>
            Notifications
        </CCardHeader>
          <CRow className="text-center">
          <CCol ml="20" >
          <div className="block" >
            <h4 className="block-element" style={{fontWeight:"normal",margin:"10px"}}>{info} viewed your profile</h4>
          </div>
          </CCol>
          </CRow>
        </CCardBody>
        </CCard>
        </main>
      )}

      {Notifs.length===0 && 
        <CCard>
        <CCardBody>
        <CCardHeader>
            Notifications
        </CCardHeader>
        </CCardBody>
        </CCard>
      }

    </>
  )
}

export default StartupDashboard
