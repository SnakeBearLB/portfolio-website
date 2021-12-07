

import {useState} from 'react'

import {Hamburger, P, Ul, Li, ClosedIcon, MenuIcon, NavLink, ResumeDiv, ResumeLink} from '../styles/MobileNav.styled'
import Resume from '../Assets/lance-brackett-resume.pdf'

const MobileNav = ({selectHome, selectAbout, selectExperience, selectContact}) => {

  const [ open, setOpen ] = useState(false);

  const closeMenu = () => setOpen(false);

  const openIcon = <MenuIcon onClick={() => setOpen(!open)}/>

  const closeIcon = <ClosedIcon onClick={() => setOpen(!open)}/>

  const homeClick = () => {
    closeMenu();
    selectHome();
  }
  const aboutClick = () => {
    closeMenu();
    selectAbout();
  }
  const experienceClick = () => {
    closeMenu();
    selectExperience();
  }
  const contactClick = () => {
    closeMenu();
    selectContact();
  }

  const Navlinks = () => {
    return (
      <>
        <Ul>
          <NavLink exact to="/" style={{textDecoration:"none"}} >
            <Li onClick={homeClick}>
              <p>HOME</p>
            </Li>
          </NavLink>
          <NavLink to="/about" style={{textDecoration:"none"}}>
            <Li onClick={aboutClick}>
              <p>ABOUT</p>
            </Li>
          </NavLink>
          <NavLink to="/experience" style={{textDecoration:"none"}} >
            <Li onClick={experienceClick}>
              <p>EXPERIENCE</p>
            </Li>
          </NavLink>
          <NavLink to="/contact" style={{textDecoration:"none"}} >
            <Li onClick={contactClick}>
              <p>CONTACT</p>
            </Li>
          </NavLink>
          <ResumeLink target="_blank" href={Resume}>
            <ResumeDiv>
              <P>Resume</P>
            </ResumeDiv>
          </ResumeLink>
        </Ul>
      </>
    )
  }

  return (
    <>
      <Hamburger>
        {open ? closeIcon : openIcon}
      </Hamburger>
      <nav>
        <div>
          {open && Navlinks()}
        </div>
      </nav>
    </>
  )
}

export default MobileNav;