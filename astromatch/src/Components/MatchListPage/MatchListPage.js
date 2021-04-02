import React from 'react';
import MatchListItem from './MatchListItem';
import styled from "styled-components";
import { useMatches } from '../Hooks/UseMatches';

const ItemContainer = styled.div`
padding: 15px;
`

function MatchListPage() {

  const matches = useMatches([])

  return (
        <ItemContainer>
            {matches.map((profile)=>{
              return <MatchListItem
              key={profile.id}
              photo={profile.photo}
              name={profile.name}
              />
            })}
        </ItemContainer>
      );
}

export default MatchListPage;