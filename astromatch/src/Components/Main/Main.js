import React, { useState } from 'react';
import AppBar from '../AppBar/AppBar';
import ChooseProfilePage from '../ChooseProfilePage/ChooseProfilePage';
import MatchListPage from '../MatchListPage/MatchListPage';
import styled from "styled-components";

const MainContainer = styled.div`
border: 1px solid black;
border-radius: 3px;
width: 400px;
height: 600px;
margin: 30px;
display: flex;
flex-direction: column;
`



function Main() {

  const [page, setPage] = useState("chooseProfile")

  const handlePage = () => {
    if(page === "chooseProfile"){ 
      return <ChooseProfilePage/>
    } else {
      return <MatchListPage/>
    }
  };

  const goToProfilePage = () => {
    setPage("chooseProfile")
  };
  const goToMatchPage = () => {
    setPage("matchPage")
  };

  return (

        <MainContainer>
            <AppBar
            profilePage={goToProfilePage}
            matchPage={goToMatchPage}
            />
            {handlePage()}
        </MainContainer>
      );
}

export default Main;