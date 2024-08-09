import React from 'react'
import Navbar from './Navbar'

import { Outlet } from 'react-router-dom'

const Rootlayout = () => {
  return (
    <>
      <Navbar />;
      <div className='layout' style={{ display: 'flex' }}>
        <Outlet />
      </div>
    </>
  )
}

export default Rootlayout
