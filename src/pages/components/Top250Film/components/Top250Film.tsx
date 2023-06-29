import React from "react";
import styled from "styled-components";
import { TPages } from "gears-react";
import { Top250films } from "../../../../widgets";

const Top250Films = () => {
  return (
    <Container>
      <Top250films />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;
export const top250film: TPages = [<Top250Films />];
