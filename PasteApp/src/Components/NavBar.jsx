import React from 'react'
import { createBrowserRouter, RouterProvider, NavLink } from 'react-router-dom'


function NavBar() {
  return (
    <div className='flex gap-4'>
      <NavLink to="/">
        Home
      </NavLink>

      <NavLink to="/pastes">
        Pastes
      </NavLink>
    </div>
  )
}

export default NavBar