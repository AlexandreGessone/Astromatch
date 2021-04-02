import React from 'react';
import axios from "axios";




function ResetButton() {

const resetMatches = () => {
  axios.put(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/darvas/clear`).then(response => {
    
  }).catch(err => {
    
  })

}



  return (
        <div>
            <button onClick={resetMatches}>Resetar Curtidas e Matches</button>
        </div>
      );
}

export default ResetButton;