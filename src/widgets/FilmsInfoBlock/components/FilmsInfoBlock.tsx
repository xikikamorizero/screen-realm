import React from 'react';
import { observer } from "mobx-react-lite";
import { useMovie } from '../lib/hook';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { MainFilm } from '../../../entities';


export const FilmInfoBlock =observer(()=>{
    const location = useLocation();
    const id = Number(location.pathname.split("/")[2]);
    const film = useMovie(id);
 
    console.log(film?.posterUrl)
    return(
     <MainFilm image={film?.posterUrl} name={film?.nameOriginal} description={film?.description} 
     rating={film?.ratingKinopoisk} countRating={film?.ratingKinopoiskVoteCount} ageRating={film?.ratingAgeLimits} />
    )
})

const Container = styled.div`
    
`