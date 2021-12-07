import styled from "styled-components"
import { FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { FiGithub } from 'react-icons/fi'

export const NavBar = styled.div `
  top: 0;
  width: 100%;
  height: 10vh;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: black;
  z-index: 99;
`

export const Ul = styled.ul `
  display: flex;
  flex-direction: row;
  justify-content: end;
  margin-right: 3em;
  list-style-type: none;
`
export const Li = styled.li `
  margin: 1em;
`
export const NavLinkP = styled.p `
  font-size: 16px;
  font-weight: regular;
  color: white;
`
export const Logo = styled.img `
  width: 3em;
  margin-left: 2em;
  margin-top: 1em;
`

export const Socials = styled.div `
  width: 15em;
  height: 4em;  
  position: fixed;
  bottom: 0px; 
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: solid 2px white;
  border-left: solid 2px white;
  border-right: solid 2px white;
  border-radius: 5px;
  background: black;
  left: 50%;
  transform: translate(-50%)
`

export const LinkedIn = styled(FaLinkedinIn) `
  font-size: 2em;
  color: white;
`

export const Twitter = styled(FaTwitter) `
  font-size: 2em;
  color: white;
`

export const Github = styled(FiGithub) `
  color: white;
  font-size: 2em;
`

export const IconLink = styled.a `
  text-decoration: none;
  margin: 0 1em 0 1em;
`
export const ResumeDiv = styled.div `
  width: 5em;
  height: 2em;
  border: solid 2px white;
  margin: .5em 1em 0 1em;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`

export const P = styled.p `
  color: white;
`

export const ResumeLink = styled.a `
  text-decoration: none;
`