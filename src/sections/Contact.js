
import { useSpring, animated } from 'react-spring'

import { Div, H1, GetInTouch, P, Socials} from '../styles/Contact.styled'

const Contact = () => {
  return (
    <Div>
      <H1>Contact</H1>
      <GetInTouch>
        <P>Get In Touch</P>
      </GetInTouch>
      <Socials></Socials>
    </Div>
  )
}

export default Contact;