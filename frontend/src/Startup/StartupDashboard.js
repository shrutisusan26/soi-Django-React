import React, { Component } from 'react';

import {
    TheSidebar,
    TheHeader
  } from  '../containers/index'

const StartupDashboard = () => {

  return (
    <div className="c-app c-default-layout">
    <TheSidebar/>
    <div className="c-wrapper">
      <TheHeader/>
    </div>
  </div>
  )
}

export default StartupDashboard