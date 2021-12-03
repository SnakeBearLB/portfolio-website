
import { Div, H1, P, Socials} from "../styles/Home.styled"
import { useSpring, animated } from 'react-spring'

const Home = ({props1}) => {

  const props = useSpring ({
    delay: 700
  })

  console.log(props1.x.id)

  return (
    <Div>
      <animated.div style={props1}>
        <H1>lance brackett</H1>
      </animated.div>
      <animated.div style={props}>
        <P>I like to say that I'm a software engineer and blockchain developer. I create, develop, design, and build software. Even get paid for it sometimes.</P>
      </animated.div>
      <Socials></Socials>
    </Div>
  )
}

export default Home