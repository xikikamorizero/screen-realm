import React from "react";
import { useLocation } from "react-router-dom";
import "./styles/index.css";
import "./styles/colors.css";
import { CheckAccountAccess } from "../processes";
import { BrowserRouter } from "react-router-dom";
import { protected_routers, public_routers } from "./routers";
import { Container } from "../shared/components";
import { MainHeader } from "../entities";
import styled from "styled-components";
import { MainFooter } from "../entities";

const App = () => {
  return (
    <AppContainer>
      <BrowserRouter>
      <MainHeader />
      <Center>
        
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
