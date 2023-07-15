import React, { useContext } from "react";
import "./styles/index.css";
import "./styles/colors.css";
import { observer } from "mobx-react-lite";
import { Route, Routes } from "react-router-dom";
import { protected_routers, public_routers } from "./routers";
import { Container } from "../shared/components";
import { MainHeader } from "../entities";
import styled from "styled-components";
import { MainFooter } from "../entities";
import { Context } from "../shared/api";
import {
  aboutUs,
  film,
  main,
  Main,
  top100film,
  top250film,
  recommendations,
  search,
  error,
  bookmarks,
  catalog
} from "../pages";
import {FilmInfoBlock} from '../widgets';

const App = observer(() => {
  const { store } = useContext(Context);
  console.log(store.error);
  return (
    <AppContainer>
      <MainHeader />
      <Center
        style={
          store.error == 402 ? { maxHeight: "93vh", overflow: "hidden" } : {}
        }
      >
          <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/films/*" element={<FilmInfoBlock />} />
        </Routes>
      </Center>
      <MainFooter />
    </AppContainer>
  );
});

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Center = styled(Container)`
  min-height: 93vh;
  padding: 100px 0px 90px 0px;
`;
export default App;
