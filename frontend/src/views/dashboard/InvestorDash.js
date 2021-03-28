import React, { lazy } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CRow,
  CCol,
} from '@coreui/react'
import '../../index.css'
const Notifs=[
  {
      'username':'Investor_1'
  },
  {
      'username':'Investor_2'
  },
  {
      'username':'Investor_3'
  },
  {
    'username':'Investor_4'
}
]
const StartupDashboard = () => {
  return (
    <>
      <CCard>
        <CCardBody>
        <CCardHeader>
            Notifications1
        </CCardHeader>
          <CRow className="text-center">

            {Notifs.map(info => <main>
            <CCol ml="20" >
            <div className="block" style={{borderStyle:"solid",borderColor:"black",borderWidth:"1px"}}>
              <h4 className="block-element" style={{fontWeight:"normal",margin:"10px"}}>{info.username} viewed your profile</h4>
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
