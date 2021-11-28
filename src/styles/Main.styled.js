import styled from "styled-components"


export const Div = styled.div `
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`

export const Div1 = styled.div`
  width: 33.3vw;
`

export const NameDiv = styled.div `
  width: 33.3vw;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Name = styled.h1 `
  width: 100%;
  color: #ffffff;
  text-align: center;
`

export const ContactDiv = styled.div`
  width: 33.3vw;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ContactGrid = styled.div`
  width: 33.3vw;
  display: grid;
  grid-template-column: 20vw 20vw 20vw;
  grid-template-rows: auto;
  grid-template-areas: 
    "ContactEmail . LinkedIn"
    "GetInTouchLine GetInTouch ."
    ". Twitter .";
`

export const ContactEmail = styled.div`
  width: 50px;
  height: 50px;
  border: solid 2px #ffffff;
  border-radius: 100%;
  margin: auto;
  margin-top: 30px;
  margin-bottom: 30px;
  grid-area: ContactEmail;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const LinkedIn = styled.div `
  width: 50px;
  height: 50px;
  border: solid 3px #ffffff;
  border-radius: 100%;
  margin: auto;
  margin-top: 60px;
  grid-area: LinkedIn;
  align-self: bottom;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const GetInTouch = styled.div`
  width: 150px;
  height: 50px;
  border: solid 2px white;
  margin: auto;
  grid-area: GetInTouch;
  display: flex;
  align-items: center;
  justify-content: center;

`

export const Twitter = styled.div`
  width: 50px;
  height: 50px;
  border: solid 3px #ffffff;
  border-radius: 100%;
  margin: auto;
  margin-top: 60px;
  grid-area: Twitter;
  align-self: bottom;
  display: flex;
  align-items: center;
  justify-content: center;
`


