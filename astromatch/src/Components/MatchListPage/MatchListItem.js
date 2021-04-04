import React from 'react';
import styled from "styled-components";

const ItemContainer = styled.div`
 display: flex;
 align-items: center;
 border-bottom: 1px solid lightgray;

 :hover{
     background-color: rgba(0,0,0,0.1)
 };
`
const Avatar = styled.img`
border-radius: 50%;
margin-right: 8px;
max-height: 30px;
`


function MatchListItem(props) {
  return (
        <ItemContainer>
            <Avatar src={props.photo}/>
            <p>{props.name}</p>
        </ItemContainer>
      );
}

export default MatchListItem;