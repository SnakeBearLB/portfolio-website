import styled from 'styled-components'
import { IoClose } from 'react-icons/io5'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import {Link} from 'react-router-dom'






export const Ul = styled.ul`
  margin: 0;
  padding: 0;
  right: 0;
  top: 100px;
  position: fixed;
  z-index: 998;
  height: 300px;
  width: 150px;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  border: solid 2px white;
  border-radius: 5px;
  background: black;
`

export const NavLink = styled(Link)`
  text-decoration: none;
`

export const Li = styled.li`
  text-decoration: none;
  color: white;
  padding-left: 30px;
`

export const P = styled.p`
  margin: 0 auto;
  text-align: center;
  width: 100%
  color: white;
`

export const Hamburger = styled.div`
  margin-right: 30px;
  margin-top: 20px;
  z-index: 999;
  display: flex;
  justify-content: end;
  position: absolute;
  top: 10px;
  right: 0;
  margin: auto;
`

export const MenuIcon = styled(HiOutlineMenuAlt4)`
  color: white;
  font-size: 40px;
  margin-right: 30px;
  margin-top: 20px;
  z-index: 999;
  display: flex;
  justify-content: end;
  position: fixed;
  top: 10px;
  right: 10px;
`

export const ClosedIcon = styled(IoClose)`
  color: white;
  font-size: 40px;
  margin-right: 30px;
  margin-top: 20px;
  z-index: 999;
  display: flex;
  justify-content: end;
  position: fixed;
  top: 10px;
  right: 10px;
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
  margin: auto;
`

export const ResumeLink = styled.a `
  text-decoration: none;
  color: white;
`