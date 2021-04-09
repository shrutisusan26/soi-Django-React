import React from 'react';

import {
    TheStartupSidebar,
    TheHeader,
    TheContent,
    TheFooter
  } from  '../containers/index'

const StartupDashboard = (props) => {
  return (
    <div className="c-app c-default-layout">
      <TheStartupSidebar/>
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