"use client"
import React, { useState } from 'react'
import MobileNav from '../MobileNav/MobileNav'
import Nav from '../Nav'

const ResponsiveNav = () => {
  const [showNav, setShowNav] = useState(false)

  const showNavHandler = () => setShowNav(true)
  const closeNavHandler = () => setShowNav(false)

  return (
    <div>
      <Nav openNav={showNavHandler} />
      {/* Pass showNav as a boolean and closeNav as the handler */}
      <MobileNav showNav={showNav} closeNav={closeNavHandler} />
    </div>
  )
}

export default ResponsiveNav