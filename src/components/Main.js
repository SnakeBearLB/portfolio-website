
import React, { useRef, useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import {
  useSpring,
  animated,
  config,
  useSpringRef,
  useTransition
} from "react-spring";
import Home from "../sections/Home";
import About from "../sections/About";
import Contact from "../sections/Contact";
import Experience from "../sections/Experience";
import { easeQuadInOut } from "d3-ease";

// styling

import "../styles/styles.css";
import { Ul, Li, NavLinkP, NavBar } from "../styles/Main.styled";

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

  // useRef for intersection observer
  const containerRef = useRef();

  // const springRef = useSpringRef();

  // callback function
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

  // useEffect for intersection observer

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
    // state shouldn't have to be repeated multiple times
    from: home ? { x: -300, opacity: 0 } : { x: 0, opacity: 0 },
    delay: home ? 300 : 0,
    to: home ? { x: 0, opacity: 1 } : { x: -300, opacity: 0 },
    config: home ? { easing: easeQuadInOut, duration: 1500 } : 0
  });

  const props2 = useSpring({
    // state shouldn't have to be repeated multiple times
    from: about ? { x: -300, opacity: 0 } : { x: 0, opacity: 0 },
    delay: about ? 300 : 0,
    to: about ? { x: 0, opacity: 1 } : { x: -300, opacity: 0 },
    config: about ? { easing: easeQuadInOut, duration: 1500 } : 0
  });

  const props3 = useSpring({
    // state shouldn't have to be repeated multiple times
    from: experience ? { x: -300, opacity: 0 } : { x: 0, opacity: 0 },
    delay: experience ? 300 : 0,
    to: experience ? { x: 0, opacity: 1 } : { x: -300, opacity: 0 },
    config: experience ? { easing: easeQuadInOut, duration: 1500 } : 0
  });

  const props4 = useSpring({
    // state shouldn't have to be repeated multiple times
    from: contact ? { x: -300, opacity: 0 } : { x: 0, opacity: 0 },
    delay: contact ? 300 : 0,
    to: contact ? { x: 0, opacity: 1 } : { x: -300, opacity: 0 },
    config: contact ? { easing: easeQuadInOut, duration: 1500 } : 0
  });

  return (
    <>
      {/* 
        //////////////////////    
        //~~~ Navigation ~~~//
        //////////////////////
      */}

      <NavBar>
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
        </Ul>
      </NavBar>

      {/* 
      ////////////////////    
      //~~~ Sections ~~~//
      ////////////////////
      */}

      <div class="home" ref={homeRef}>
        {/* <animated.div style={props1}> */}
          <Home props1={props1} />
        {/* </animated.div> */}
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
      {/* <div className="app">
        <div className="isVisible">
          {isVisible ? "IN VIEWPORT" : "NOT IN VIEWPORT"}
        </div>
      </div> */}
    </>
  );
};

export default Main;
