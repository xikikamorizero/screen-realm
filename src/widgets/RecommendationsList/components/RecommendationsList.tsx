import React from "react";
import { ContainerGrid } from "../../../shared/components";
import { GridPoster } from "../../../shared/components";
import { observer } from "mobx-react-lite";
import { Film } from "../../../shared/api/types";
import { useList } from "../lib/hook";

export const RecommendationsList = observer(() => {
  const list = useList();
  return (
    <ContainerGrid>
      {list.map((a: Film, i) => (
        <GridPoster
          image={a.posterUrl}
          creator={a.nameEn}
          name={a.nameRu}
          id={a.filmId}
          key={i}
        />
      ))}
    </ContainerGrid>
  );
});
