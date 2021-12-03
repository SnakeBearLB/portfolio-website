
import { Div, H1, P} from "../styles/Home.styled"
import { useSpring, animated } from 'react-spring'

const Home = ({props1}) => {

  const props = useSpring ({
    delay: 700
  })

  return (
    <Div>
      <animated.div style={props1}>
        <H1>lance brackett</H1>
        <P>Software engineer and blockchain developer</P>
      </animated.div>
    </Div>
  )
}

export default Home