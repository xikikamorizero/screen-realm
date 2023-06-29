import React from "react";
import { TPages } from "gears-react";
import {
  SlaiderPopular,
  SlaiderWidget,
  SlaiderBest,
  SlaiderRecommendations,
} from "../../../../widgets";
import { routers } from "../../../../shared/const";
import styled from "styled-components";
import { MainBanner } from "../../../../entities/MainBanner/components/MainBanner";
import { HeaderBanner } from "../../../../shared/components";
import icon1 from '../assets/icon1.png';
import icon2 from '../assets/icon2.png';
import icon3 from '../assets/icon3.png';


const Main = () => {
  return (
    <Container>
      <HeaderBanner />
      <SlaiderPopular
        text={"Popular"}
        navigate={routers.general.path.top100film}
      />
      <SlaiderBest
        text={"Best Film"}
        navigate={routers.general.path.top250film}
      />
      <SlaiderRecommendations
        text={"Recommendations"}
        navigate={routers.general.path.award}
      />
      <BannerContainer>
        <MainBanner text={'У нас вы найдете интересные факты о ваших любимых фильмах.'} icon={icon1} />
        <MainBanner text={'У нас собраны оценки от тысячи пользователей.'} icon={icon2}/>
        <MainBanner text={'Screen-Realm смотри кино с нами.'} icon={icon3} />
      </BannerContainer>
    </Container>
  );
};

const Container = styled.div`
  padding-top: calc(70vh + 50px);
  padding-bottom: 50px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 100px;
`;
const BannerContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap:10px;
`;

export const main: TPages = [<Main />];
