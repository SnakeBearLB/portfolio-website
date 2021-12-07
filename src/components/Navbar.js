
import { Link } from "react-router-dom";
import { Ul, Li, NavLinkP, Logo, ResumeDiv, P, ResumeLink, NavBar} from "../styles/Main.styled";

import logo from '../logo.svg'

import Resume from '../Assets/lance-brackett-resume.pdf'

const Navbar = ({selectHome, selectAbout, selectExperience, selectContact}) => {

  return (
    <NavBar>
      <Logo src={logo}/>
        <Ul>
          <Li>
            <Link
              exact
              to="/"
              onClick={selectHome}
              style={{ textDecoration: "none", color: "white" }}
            >
              <NavLinkP>HOME</NavLinkP>
            </Link>
          </Li>
          <Li>
            <Link
              to="/about"
              onClick={selectAbout}
              style={{ textDecoration: "none", color: "white" }}
            >
              <NavLinkP>ABOUT</NavLinkP>
            </Link>
          </Li>
          <Li>
            <Link
              to="/experience"
              onClick={selectExperience}
              style={{ textDecoration: "none", color: "white" }}
            >
              <NavLinkP>EXPERIENCE</NavLinkP>
            </Link>
          </Li>
          <Li>
            <Link
              to="/contact"
              onClick={selectContact}
              style={{ textDecoration: "none", color: "white" }}
            >
              <NavLinkP>CONTACT</NavLinkP>
            </Link>
          </Li>
          <Li>
            <ResumeLink target="_blank" href={Resume}>
              <ResumeDiv>
                <P>Resume</P>
              </ResumeDiv>
            </ResumeLink>
          </Li>
        </Ul>
    </NavBar>
  )
}

export default Navbar;