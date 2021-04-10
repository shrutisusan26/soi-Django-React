import React from 'react';

import {
    TheSidebar,
    TheHeader,
   
    TheFooter
  } from  '../containers/index'
import TheContent from './TheContent'
import SearchBar from './SearchBar'
const InvestorDashboard = (props) => {
  return (
    <div className="c-app c-default-layout">
      <TheSidebar/>
      <div className="c-wrapper">
        <TheHeader/>
        <div className="c-body">
        <SearchBar />
          <TheContent/>
          
        </div>
        <TheFooter/>
      </div>
    </div>
  )
}

export default InvestorDashboard;