import React, { useEffect, useContext } from "react";
import { TPages } from "gears-react";
import {
  SlaiderPopular,
  SlaiderBest,
  SlaiderRecommendations,
} from "../../../../widgets";
import { Context } from "../../../../shared/api";
import { routers } from "../../../../shared/const";
import styled from "styled-components";
import { MainBanner } from "../../../../entities";
import { AnimBanner } from "../../../../entities";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";

export const Main = () => {
  const { store } = useContext(Context);
  useEffect(() => {
    store.error = 0;
  }, []);
  return (
    <Container>
      <AnimBanner />
      <SlaiderPopular
        text={"Популярные"}
        navigate={routers.general.path.top100film}
      />
      <SlaiderBest
        text={"Классические"}
        navigate={routers.general.path.top250film}
      />
      <SlaiderRecommendations
        text={"Рекомендованные"}
        navigate={routers.general.path.award}
      />
      <BannerContainer>
        <MainBanner
          text={"У нас вы найдете интересные факты о ваших любимых фильмах."}
          icon={icon1}
        />
        <MainBanner
          text={"У нас собраны оценки от тысячи пользователей."}
          icon={icon2}
        />
        <MainBanner text={"Screen-Realm смотри кино с нами."} icon={icon3} />
      </BannerContainer>
    </Container>
  );
};

const Container = styled.div`
  padding-top: calc(100vh + 50px);
  padding-bottom: 50px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 100px;
`;
const BannerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
`;

export const main: TPages = [<Main />];
