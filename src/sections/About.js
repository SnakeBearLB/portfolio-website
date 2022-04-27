import {useState, useEffect} from 'react'
import { useSpring, animated, config} from 'react-spring'
import {H1, H2, Div, RecentTechDiv, P, Li} from '../styles/About.styled'


const About = () => {

  return (
    <Div>
      <H1>About</H1>
      <P>I'm a Full Stack Software Engineer and Blockchain Developer. I find great enjoyment in transversing technology and humanity. I'm captivated by the next possibility. I believe technology is a deeply human narrative. I desire to use my time in helping bring big ideas to life, with conscientious and thoughtful planning, in hopes to contribute to our beautiful story.</P>

      <RecentTechDiv>
        <H2>Tech that's been capturing me lately</H2>
        <ul>
          <Li>Functional Programming Languages (Haskell, Rust)</Li>
          <Li>Javascript</Li>
          <Li>React</Li>
          <Li>React Native</Li>
          <Li>DApps(decentralized applications)</Li>
          <Li>Smart Contracts</Li>
        </ul>
      </RecentTechDiv>
    </Div>
  )
}

export default About;