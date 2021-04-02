import React from "react";
import styled from 'styled-components'
import Main from "./Components/Main/Main";
import ResetButton from "./Components/ResetButton/ResetButton";



const MainContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
background-color: white;
height: 1500px;
`

function App() {
  return (
    <MainContainer>
     <Main/>
     <ResetButton/>
    </MainContainer>
  );
}

export default App;
