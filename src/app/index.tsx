import React from "react";
import { useLocation } from "react-router-dom";
import "./styles/index.css";
import "./styles/colors.css";
import { CheckAccountAccess } from "../processes";
import { BrowserRouter } from "react-router-dom";
import { protected_routers, public_routers } from "./routers";
import { Container, HeaderBanner } from "../shared/components";
import { MainHeader } from "../entities/MainHeader";
import styled from "styled-components";
import { MainFooter } from "../entities/MainFooter";

const App = () => {
  return (
    <AppContainer>
      <MainHeader />
      <Center>
        <BrowserRouter>
          <CheckAccountAccess
            protectedRoutes={protected_routers}
            publicRoutes={public_routers}
          />
        </BrowserRouter>
      </Center>
      <MainFooter />
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
  padding-top: 90px;
`;
export default App;
