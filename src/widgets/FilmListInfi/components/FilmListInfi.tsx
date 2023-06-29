import React from "react";
import { ContainerGrid } from "../../../shared/components";
import { GridPoster } from "../../../shared/components";
import { observer } from "mobx-react-lite";
import { Film } from "../../../shared/api/types";
import { useList } from "../lib/hook";

type Props = {
  type: "TOP_250_BEST_FILMS" | "TOP_100_POPULAR_FILMS" | "TOP_AWAIT_FILMS";
};

export const FilmListInfi = observer(({ type }: Props) => {
  const list = useList(type);
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
