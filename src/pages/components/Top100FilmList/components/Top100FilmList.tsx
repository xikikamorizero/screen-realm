import React from "react";
import styled from "styled-components";
import { TPages } from "gears-react";
import { Top100films } from "../../../../widgets";

export const Top100FilmList = () => {
  return (
    <Container>
      <Top100films />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;

export const top100film: TPages = [<Top100FilmList />];