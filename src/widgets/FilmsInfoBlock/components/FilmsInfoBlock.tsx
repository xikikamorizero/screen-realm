import React, { useContext, useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useMovie } from "../lib/hook";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { MainFilm } from "../../../entities";
import { Context } from "../lib/context";
import { Loader } from "../../../shared/components";

export const FilmInfoBlock = observer(() => {
  const location = useLocation();
  const { store } = useContext(Context);
  store.setMovieId(Number(location.pathname.split("/")[2]));

  const result = useMovie();
  if (store.loader) {
    return <Loader />;
  }
  return (
    <MainFilm
      image={result.film?.posterUrl}
      name={result.film?.nameRu}
      description={result.film?.description}
      rating={result.film?.ratingKinopoisk}
      countRating={result.film?.ratingKinopoiskVoteCount}
      ageRating={result.film?.ratingAgeLimits}
      budget={result.box_office?.budget}
      worldwideBoxOffice={result.box_office?.worldwideBoxOffice}
      screenshot={result.screenshot}
      similars={result.similar}
    />
  );
});

const Container = styled.div``;
