import React, { useState, useEffect } from 'react'

import Navbar from "./Navbar";
import MobileNav from "./MobileNav";
import {Logo} from '../styles/MobileNav.styled'
import logo from '../logo.svg'

const Header = ({selectHome, selectAbout, selectExperience, selectContact}) => {

  const [width, setWindowWidth] = useState(0);

  useEffect(() => {
    updateDimensions();

    window.addEventListener("resize", updateDimensions);

    return () =>
      window.removeEventListener("resize", updateDimensions);

  }, [])


  const updateDimensions = () => {
    const width = window.innerWidth
    setWindowWidth(width)
  }

  return (
    <>
      <div>
        <Logo src={logo}/>
      </div>
      <div>
        {width < 600 ? <MobileNav 
          selectHome={selectHome}
          selectAbout={selectAbout}
          selectExperience={selectExperience}
          selectContact={selectContact}
        /> : 
        <Navbar
          selectHome={selectHome}
          selectAbout={selectAbout}
          selectExperience={selectExperience}
          selectContact={selectContact}
        />}
      </div>
    </>
  )

}

export default Header;