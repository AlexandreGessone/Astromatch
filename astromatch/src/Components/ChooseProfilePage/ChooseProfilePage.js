import axios from 'axios';
import React, {useState, useEffect} from 'react';
import ChooseButtons from './ChooseButtons';
import ProfileCard from './ProfileCard';


function ChooseProfilePage() {

  const [profile, setProfile] = useState(undefined)

  const getProfiles = () => {
    axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/darvas/person`).then(response => {
          setProfile(response.data.profile)
      }).catch(err => {
          alert("Erro ao carregar os perfis")
      })

  }

  useEffect(()=>{
      getProfiles()
  }, []);

  
const onClickToChoose = (choice) => {
  const body = {
    id: profile.id,
    choice: choice
  }

  axios.post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/darvas/choose-person`, body).then(response=>{
    console.log(response)
  })

  getProfiles()
}

    const onClickNo = () => {
      onClickToChoose(false)
    }

    const onClickYes = () => {
     onClickToChoose(true)
    }

  return (
        <div>
          {profile ? (<>
            <ProfileCard profile={profile}/>
            <ChooseButtons onClickYes={onClickYes} onClickNo={onClickNo}/>
          </>): <p>Carregando...</p>
          }
        </div>
      );
}

export default ChooseProfilePage;