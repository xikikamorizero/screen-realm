import React, { useContext } from "react";
import { ContainerGrid, GridPosterSkeleton } from "../../../shared/components";
import { GridPoster } from "../../../shared/components";
import { observer } from "mobx-react-lite";
import { Film } from "../../../shared/api/types";
import { useList } from "../lib/hook";
import { Context } from "../lib/context";

export const RecommendationsList = observer(() => {
  const list = useList();
  const { store } = useContext(Context);
  const SkeletonArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  if (store.loader) {
    return (
      <ContainerGrid>
        {SkeletonArray.map((i) => (
          <GridPosterSkeleton key={i} />
        ))}
      </ContainerGrid>
    );
  }
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
