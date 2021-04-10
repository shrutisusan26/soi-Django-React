import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav =  [
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
    name: 'Catalog',
    to: '/investor/catalog',
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
    to: '/contactform',
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

export default _nav
