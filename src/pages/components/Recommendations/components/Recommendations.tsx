import React from "react";
import styled from "styled-components";
import { TPages } from "gears-react";
import { RecommendationsList } from "../../../../widgets";

const Recommendations = () => {
  return (
    <Container>
      <RecommendationsList />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;
export const recommendations: TPages = [<Recommendations />];
