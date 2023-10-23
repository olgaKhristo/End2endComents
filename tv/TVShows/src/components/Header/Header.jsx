// start rfc for bacic component
// next step is to create index.jsx in components folder 

import React from 'react'
// you need NavLink to do links in your nav
import { NavLink, Outlet } from 'react-router-dom'



export default function Header() {
    //this bit will underline the active link you currently on
    const styles = ({isActive}) => ({
        textDecoration: isActive ? 'underline' : 'none'
    })

  return (
   <>
    <header>
        <nav>
            <NavLink to="/" style={styles}>Home</NavLink>
            <NavLink to="/show" style={styles}>Show</NavLink>
            <NavLink to="/search" style={styles}>Search</NavLink>
           
            
        </nav>
    </header>
    {/* this is where you will render your pages */}
    <Outlet/>
   </>
  )
}
