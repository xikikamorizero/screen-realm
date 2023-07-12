import React from "react";
import styled from "styled-components";

export const Banner1 = () => {
  return (
    <Container>
      <ContainerBanner width={"600px"} top={"35%"} left={"5%"}>
        <Title>
          У нас вы найдете информацию о всех новых премьерах мирового кино
        </Title>
      </ContainerBanner>
      <Background
        background={
          "https://newcdn.igromania.ru/mnt/news/d/5/0/d/8/d/125395/12b0b736a5c4b4d1_original.webp"
        }
      />
    </Container>
  );
};

export const Banner2 = () => {
  return (
    <Container>
        <ContainerBanner width={"580px"} top={"60%"} left={"5%"}>
        <Title>
        Интересные факты о съемках ваших любимых фильмов и сериалов
        </Title>
      </ContainerBanner>
      <Background
        background={
          "https://www.soyuz.ru/public/uploads/files/2/7481175/20220408150437fd3d274f29.jpg"
        }
      />
    </Container>
  );
};

export const Banner3 = () => {
  return (
    <Container>
       <ContainerBanner width={"600px"} top={"60%"} right={"5%"} >
        <Title style={{}}>
          Наш сайт поможет вам выбрать какой фильм посмотреть на выходных
        </Title>
      </ContainerBanner>
      <Background
        background={
          "https://riviera-mall.uz/wp-content/uploads/riviera-mall__cinema-bg.jpg"
        }
      />
    </Container>
  );
};

type Props = {
  background: string;
};
type ContainerBannerType = {
  width:string;
  top:string;
  left?:string;
  right?:string;
}
const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
`;

const Background = styled.div`
  width: 100%;
  height: 100vh;

  background-image: url(${({ background }: Props) => background});
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
  opacity: 0.3;
`;

const ContainerBanner = styled.div`
  width: ${({ width }: ContainerBannerType) => width};
  top:${({ top }: ContainerBannerType) => top};
  left: ${({ left }: ContainerBannerType) => left? left : ''};
  right: ${({ right }: ContainerBannerType) => right? right : ''};
  display: flex;
  justify-content: center;
  align-self: center;
  gap: 20px;
  position: absolute;
  opacity: 1;
  z-index: 2;
  padding: 20px 0px 20px 0px;
  background-color: #00000067;

  @media (max-width: 700px) {
    max-width: 330px;
  }

  @media (max-width: 500px) {
    top:50%;
    left:50%;
    transform: translate(-50%);
  }
`;
const Title = styled.div`
  width: 85%;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 52px;
  color: var(--white);

  @media (max-width: 700px) {
    font-size: 28px;
    line-height: 30px;
  }
`;