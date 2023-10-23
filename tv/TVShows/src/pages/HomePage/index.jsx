// start here from inporting react and writing a function
//

import React from 'react'
// import links to use them
import { Link } from 'react-router-dom'


const linkStyle = {color: "# 1746A2"}

export default function index() {
  return (
   <>
    <h1>Top TV</h1>
    <em> All about TV</em>
    <ul>
      <li>
        <Link to="/shows" style={linkStyle}>Shows</Link>
      </li>
      <li>
        <Link to="/search" style={linkStyle}>Search</Link>
      </li>
    </ul>
   </>
  )
}
