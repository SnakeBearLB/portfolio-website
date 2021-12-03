import { Div, H1, H2, ProjectDiv, DataMoonDiv, Img, ImgLink } from '../styles/Experience.styled'
import DataMoon from '../Assets/DataMoon.svg'
import { useSpring, animated } from 'react-spring'
import { useState } from 'react';

const Experience = () => {

  const [active, setActive] = useState(false);

  const props = useSpring ({
    from: active ? {width: "20em"} : {width: "20em"},
    to: active ? {width: "21em"} : {width: "20em"}
  })

  return (
    <Div>
      <H1>Projects</H1>
        <DataMoonDiv>
            <ImgLink  target="_blank" href="https://sad-kirch-12188b.netlify.app/">
              <Img src={DataMoon}/>
            </ImgLink>
        </DataMoonDiv>
    </Div>
  )
}

export default Experience