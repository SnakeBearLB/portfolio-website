
import { useSpring, animated } from 'react-spring'

import { Div, H1, GetInTouch, P, MailToLink} from '../styles/Contact.styled'

const Contact = () => {
  return (
    <>
      <Div>
        <H1>Let's see what we can build</H1>
          <MailToLink target="_blank" href="mailto:lanceleebrackett@gmail.com"> 
            <GetInTouch>
              <P>Get In Touch</P>
            </GetInTouch>
          </MailToLink>
      </Div>
    </>
  )
}

export default Contact;