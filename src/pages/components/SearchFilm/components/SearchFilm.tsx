import React from "react";
import { TPages } from "gears-react";
import styled from "styled-components";
import { SearchFilm } from "../../../../widgets";

const SearchFilms = () => {
  return (
    <Container>
      <SearchFilm />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 30px;
`;

export const search: TPages = [<SearchFilms />];
