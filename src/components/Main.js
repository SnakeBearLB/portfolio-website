import { useRef } from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import Home from '../sections/Home'
import About from '../sections/About'
import Contact from '../sections/Contact'
import Experience from '../sections/Experience'

// styling
import { Ul, Li, NavLinkP } from '../styles/Main.styled'

const Main = () => {

  const homeRef = useRef()
  const aboutRef = useRef()
  const experienceRef = useRef()
  const contactRef = useRef()

  const selectHome = () =>  {
    homeRef.current.scrollIntoView({ behavior: 'smooth'})
  }

  const selectAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: 'smooth'})
  }

  const selectExperience = () => {
    experienceRef.current.scrollIntoView({ behavior: 'smooth'})
  }

  const selectContact = () => {
    contactRef.current.scrollIntoView({ behavior: 'smooth'})
  }

  return (
    <>
      <div>
        <Ul>
          <Li>
            <Link exact to="/" onClick={selectHome} style={{textDecoration:"none",
              color: "white",
            }} ><NavLinkP>HOME</NavLinkP>
            </Link>
          </Li>
          <Li>
            <Link to="/about" onClick={selectAbout} style={{textDecoration:"none",
              color: "white",
            }} ><NavLinkP>ABOUT</NavLinkP>
            </Link>
          </Li>
          <Li>
            <Link to="/experience"  onClick={selectExperience} style={{textDecoration:"none",
              color: "white"
            }} ><NavLinkP>EXPERIENCE</NavLinkP>
            </Link>
          </Li>
          <Li>
            <Link to="/contact" onClick={selectContact} style={{textDecoration:"none",
              color: "white"
            }} ><NavLinkP>CONTACT</NavLinkP>
            </Link>
          </Li>
        </Ul>
      </div>
      <div>
        <Routes>
          <Route exact path="/" component={Home}/>
          <Route path="about" component={About}/>
          <Route path="contact" component={Contact}/>
          <Route path="experience" component={Experience}/>
        </Routes>
      </div>
      <div ref={homeRef}>
        <Home/>
      </div>
      <div ref={aboutRef}>
        <About/>
      </div>
      <div ref={contactRef}>
        <Contact/>
      </div>
      <div ref={experienceRef}>
        <Experience />
      </div>
    </>
  )
}

export default Main;