import React from 'react';
import styled from "styled-components";

const ProfileCardContainer = styled.div`
margin: 16px;
border: 1px solid black;

`
const ProfilePicture = styled.img`
width: 100%;
max-height: 350px;
`

function ProfileCard(props) {
    const profile = props.profile
  return (
        <ProfileCardContainer>
            <ProfilePicture src={profile.photo}/>
            <p>{profile.name}, {profile.age}</p>
            <p>{profile.bio}</p>
        </ProfileCardContainer>
      );
}

export default ProfileCard;