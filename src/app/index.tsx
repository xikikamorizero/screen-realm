import React, { useContext } from "react";
import "./styles/index.css";
import "./styles/colors.css";
import { CheckAccountAccess } from "../processes";
import { BrowserRouter } from "react-router-dom";
import { protected_routers, public_routers } from "./routers";
import { Container } from "../shared/components";
import { MainHeader } from "../entities";
import styled from "styled-components";
import { MainFooter } from "../entities";
import { Context } from "../shared/api";

const App = () => {
  const { store } = useContext(Context);
  console.log(store.error);
  return (
    <AppContainer>
      <BrowserRouter>
        <MainHeader />
        <Center
          style={
            store.error == 402 ? { maxHeight: "93vh", overflow: "hidden" } : {}
          }
        >
          <CheckAccountAccess
            protectedRoutes={protected_routers}
            publicRoutes={public_routers}
          />
        </Center>
        <MainFooter />
      </BrowserRouter>
    </AppContainer>
  );
};

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
