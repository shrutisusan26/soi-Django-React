import React from 'react';

import {
    TheSidebar,
    TheHeader,
    TheContent,
    TheFooter
  } from  '../containers/index'

const StartupDashboard = (props) => {
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

export default StartupDashboard