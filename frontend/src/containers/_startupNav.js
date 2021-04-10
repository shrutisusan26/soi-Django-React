import React from 'react'
import CIcon from '@coreui/icons-react'

const _startupNav =  [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/startup/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
    badge: {
      color: 'info',
      text: 'NEW',
    }
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Profile Update']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Update Description',
    to: '/startup/updatedesc',
    icon: 'cil-drop',
  },
  
  {
    _tag: 'CSidebarNavItem',
    name: 'Delete Description',
    to: '/theme/typography',
    icon: 'cil-pencil',
  },
  
  {
    _tag: 'CSidebarNavItem',
    name: 'Chat',
    to: '/chat',
    icon: 'cil-pencil',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Contact Us',
    to: '/contactus',
    icon: 'cil-pencil',
  },
  
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Other']
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Market News',
    to: '/News',
    icon: 'cil-drop',
  },
  
]

export default _startupNav
