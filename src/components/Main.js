
import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  useSpring,
  animated,
  useSpringRef,
} from "react-spring";
import Home from "../sections/Home";
import About from "../sections/About";
import Contact from "../sections/Contact";
import Experience from "../sections/Experience";
import { easeQuadInOut } from "d3-ease";
import Resume from '../Assets/lance-brackett-resume.pdf'

import { Ul, Li, NavLinkP, NavBar, LogoDiv, Logo, Socials, IconLink, LinkedIn, Github, Twitter, ResumeDiv, P, ResumeLink} from "../styles/Main.styled";
import logo from '../logo.svg'

const Main = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);

  const [home, homeToggle] = useState(false);
  const [about, aboutToggle] = useState(false);
  const [experience, experienceToggle] = useState(false);
  const [contact, contactToggle] = useState(false);

  const springRef = useSpringRef();

  const selectHome = () => {
    homeRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const selectAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const selectExperience = () => {
    experienceRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const selectContact = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const containerRef = useRef();

  const homeCallBack = (entries) => {
    const [entry] = entries;
    homeToggle(entry.isIntersecting);
  };

  const aboutCallBack = (entries) => {
    const [entry] = entries;
    aboutToggle(entry.isIntersecting);
  };

  const experienceCallBack = (entries) => {
    const [entry] = entries;
    experienceToggle(entry.isIntersecting);
  };

  const contactCallBack = (entries) => {
    const [entry] = entries;
    contactToggle(entry.isIntersecting);
  };

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1
  };

  useEffect(() => {
    const observer = new IntersectionObserver(homeCallBack, options);

    if (homeRef.current) {
      observer.observe(homeRef.current);
    }

    return () => {
      if (homeRef.current) {
        observer.unobserve(homeRef.current);
      }
    };
  }, [homeRef, options]);

  useEffect(() => {
    const observer = new IntersectionObserver(aboutCallBack, options);

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, [aboutRef, options]);

  useEffect(() => {
    const observer = new IntersectionObserver(experienceCallBack, options);

    if (experienceRef.current) {
      observer.observe(experienceRef.current);
    }

    return () => {
      if (experienceRef.current) {
        observer.unobserve(experienceRef.current);
      }
    };
  }, [experienceRef, options]);

  useEffect(() => {
    const observer = new IntersectionObserver(contactCallBack, options);

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, [contactRef, options]);

  const props1 = useSpring({
    from: home ? { opacity: 0 } : { opacity: 0 },
    delay: home ? 300 : 0,
    to: home ? { opacity: 1 } : { opacity: 0 },
    config: home ? { easing: easeQuadInOut, duration: 1500 } : 0
  });

  const props2 = useSpring({
    from: about ? { opacity: 0 } : { opacity: 0 },
    delay: about ? 300 : 0,
    to: about ? { opacity: 1 } : { opacity: 0 },
    config: about ? { easing: easeQuadInOut, duration: 1500 } : 0
  });

  const props3 = useSpring({
    from: experience ? { opacity: 0 } : { opacity: 0 },
    delay: experience ? 300 : 0,
    to: experience ? { opacity: 1 } : { opacity: 0 },
    config: experience ? { easing: easeQuadInOut, duration: 1500 } : 0
  });

  const props4 = useSpring({
    from: contact ? { opacity: 0 } : { opacity: 0 },
    delay: contact ? 300 : 0,
    to: contact ? { opacity: 1 } : { opacity: 0 },
    config: contact ? { easing: easeQuadInOut, duration: 1500 } : 0
  });

  return (
    <>
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

      <div class="home" ref={homeRef}>
        <Home props1={props1} />
      </div>
      <div class="about" ref={aboutRef}>
        <animated.div style={props2}>
          <About />
        </animated.div>
      </div>
      <div class="experience" ref={experienceRef}>
        <animated.div style={props3}>
          <Experience />
        </animated.div>
      </div>
      <div class="contact" ref={contactRef}>
        <animated.div style={props4}>
          <Contact />
        </animated.div>
      </div>

      <Socials>
        <IconLink target="_blank" href="https://www.linkedin.com/in/lancebrackett/">
          <LinkedIn></LinkedIn>
        </IconLink>
        <IconLink target="_blank" href="https://github.com/SnakeBearLB">
          <Github></Github>
        </IconLink>
        <IconLink target="_blank" href="https://twitter.com/lancebrackett/">
          <Twitter></Twitter>
        </IconLink>

      </Socials>
    </>
  );
};

export default Main;
