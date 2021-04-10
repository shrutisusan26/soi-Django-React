import React from 'react';

import {
    TheSidebar,
    TheHeader,
   
    TheFooter
  } from  '../containers/index'
import TheContent from './TheContent'
const InvestorDashboard = (props) => {
  return (
    <div className="c-app c-default-layout">
      <TheSidebar/>
      <div className="c-wrapper">
        <TheHeader/>
        <div className="c-body">
     
          <TheContent/>
          
        </div>
        <TheFooter/>
      </div>
    </div>
  )
}

export default InvestorDashboard;