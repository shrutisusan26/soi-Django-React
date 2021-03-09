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
const Dashboard = () => {
  return (
    <>
      <CCard>
        <CCardBody>
        <CCardHeader>
            Notifications
        </CCardHeader>
          <CRow className="text-center">

            {Notifs.map(info => <main>
            <CCol ml="20" >
            <div className="block">
              <h4 className="block-element" >{info.username} viewed your profile</h4>
              <button className="btn btn-primary">View</button>
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

export default Dashboard
