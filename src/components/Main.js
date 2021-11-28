
import {Routes, Route} from 'react-router-dom'
import Projects from '../pages/Projects'
import { 
  Div1, 
  Div,
  NameDiv, 
  Name, 
  ContactDiv, 
  ContactGrid, 
  ContactEmail, 
  LinkedIn,
  GetInTouch, 
  Twitter 
} from '../styles/Main.styled'
// import { FaDuotoneBsEnvelope } from "react-icons/fa"
import { BsEnvelope, BsTwitter, BsLinkedin } from "react-icons/bs"

const Main = () => {

  return (
    <div>
      {/* <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="projects" element={<Projects/>}/>
      </Routes> */}
      <Div>
        <Div1/>
        <NameDiv>
          <Name>LANCE BRACKETT</Name>
        </NameDiv>
        <ContactDiv>
          <ContactGrid>
            <ContactEmail>
              <BsEnvelope style={{
                color: "white", 
                fontSize: "30px"}}/>
            </ContactEmail>
            <LinkedIn>
              <BsLinkedin style={{
                color: "white",
                fontSize: "30px"
              }}/>
            </LinkedIn>
            <GetInTouch>
              <p style={{
                color: "white",
                fontSize: "20px",
                textAlign: "center",
                alignVertical: "center"
              }}>Get In Touch</p>
            </GetInTouch>
            <Twitter>
              <BsTwitter style={{
                color: "white",
                fontSize: "30px"
              }}/>
            </Twitter>
          </ContactGrid>
        </ContactDiv>
      </Div>
    </div>
  )
}

export default Main;