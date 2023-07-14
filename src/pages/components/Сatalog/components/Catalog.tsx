import React from "react";
import { TPages } from "gears-react";
import { Route, Routes } from "react-router-dom";
import { SlaiderCatalogMenu } from "../../../../entities";
import styled from "styled-components";
import { CatalogListFilms } from "../../../../widgets";

const Catalog = () => {
  return (
    <Container>
      <SlaiderCatalogMenu />
      <ContainerWidgets>
        <CatalogListFilms />
      </ContainerWidgets>
    </Container>
  );
};

export const catalog: TPages = [<Catalog />];

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const ContainerWidgets = styled.div`
  width: 100%;
`;
