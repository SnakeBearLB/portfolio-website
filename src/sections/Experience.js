import { Div, H1, H2, ProjectDiv } from '../styles/Experience.styled'


const Experience = () => {
  return (
    <Div>
      <H1  style={{color: 'white'}}>Experience</H1>
      <ProjectDiv>
        <H2>Project 1</H2>
      </ProjectDiv>
      <ProjectDiv>
        <H2>Project 2</H2>
      </ProjectDiv>
      <ProjectDiv>
        <H2>Project 3</H2>
      </ProjectDiv>
    </Div>
  )
}

export default Experience