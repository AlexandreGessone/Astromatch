import React from 'react';
import styled from "styled-components";

const ButtonContainer = styled.div`
display: flex;
justify-content: space-around;
`


function ChooseButtons(props) {

  return (
        <ButtonContainer>
           <button onClick={props.onClickYes}>Sim</button>
           <button onClick={props.onClickNo}>Não</button>
        </ButtonContainer>
      );
}

export default ChooseButtons;