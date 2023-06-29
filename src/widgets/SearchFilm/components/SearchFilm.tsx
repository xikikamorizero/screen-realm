import React, { useState, useContext, KeyboardEvent } from "react";
import styled from "styled-components";
import { observer } from "mobx-react-lite";
import { ContainerGrid } from "../../../shared/components";
import { Film } from "../../../shared/api/types";
import { GridPoster } from "../../../shared/components";
import { Input } from "../../../shared/components";
import icon from "../assets/search.png";
import { Context as globalContext } from "../../../shared/api/context";
import { Context } from "../lib/context";

export const SearchFilm = observer(() => {
  const { store } = useContext(Context);
  const global = useContext(globalContext);
  const [delayTimeout, setDelayTimeout] = useState<NodeJS.Timeout | null>(null);

  const cancelPreviousRequest = () => {
    if (delayTimeout) {
      clearTimeout(delayTimeout);
    }
  };

  const Search = (value: string) => {
    cancelPreviousRequest();

    const timeout = setTimeout(() => {
      global.store.list.getSearch
        .request({
          keyword: value,
          page: store.page,
        })
        .then((response) => {
          store.list = [...response.data.films];
        });
    }, 300);
  
    setDelayTimeout(timeout);
  };

  return (
    <Container>
      <ContainerSearchinput>
        <Icon icon={icon} />
        <Input
          type={"text"}
          placeholder={"Поиск..."}
          onChange={(e) => {
            Search(String(e.target.value));
          }}
        />
      </ContainerSearchinput>

      <ContainerGrid>
        {store.list.map((a: Film, i) => (
          <GridPoster
            image={a.posterUrl}
            creator={a.nameEn}
            name={a.nameRu}
            id={a.filmId}
            key={i}
          />
        ))}
      </ContainerGrid>
    </Container>
  );
});

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
type Props = {
  icon?: string;
  useList?: (s: string) => void;
};

const ContainerSearchinput = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  border-bottom: 1px solid silver;
  padding-bottom: 10px;
`;
const Icon = styled.div`
  min-width: 60px;
  min-height: 60px;
  background: url(${({ icon }: Props) => icon});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 60px;
`;
