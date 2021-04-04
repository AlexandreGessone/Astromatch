import React, {useEffect, useState} from 'react';
import axios from "axios";



export function useMatches() {
    const [matches, setMatches] = useState ([])

    useEffect(()=>{
        axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/darvas/matches`).then(response => {
            setMatches(response.data.matches)
        }).catch(err => {
            alert("Erro ao carregar os perfis")
        })
    }, []);

    return matches
    

}

