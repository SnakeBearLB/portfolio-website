import styled from "styled-components"


export const Main = styled.div `
  width: 100%;
`

export const MainGrid = styled.div `
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: repeat(9, 1fr);
  grid-template-areas: 
    ". . . . . . . . ."
    ". . . . . . . . ."
    ". . . . . . . . ."
    ". . . . . . . . ."
    ". GitHub GitHub . Name . GetInTouch GetInTouch ."
    ". . . . . . . . ."
    ". . . . . . . . ."
    ". . . . . . . . ."
    ". . . . . . . . ."
`

export const Name = styled.h1 `
  color: white;
  margin: 0;
  align-self: center;
  justify-content: center;
  text-align: center;
  grid-area: Name;
`

export const GitHub = styled.div `
  width: 150px;
  height: 50px;
  border: solid 2px white;
  border-radius: 5px;
  grid-area: GitHub;
  align-self: center;
  justify-self: center;
  margin: 0;
`

export const GetInTouch = styled.div `
  width: 150px;
  height: 50px;
  border: solid 2px white;
  border-radius: 5px;
  grid-area: GetInTouch;
  align-self: center;
  justify-self: center;
  margin: 0;
`

export const H1 = styled.h1 `
  color: white;
`

export const Div = styled.div `
  height: 100vh;
`