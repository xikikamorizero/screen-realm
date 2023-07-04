import React from "react";
import styled from "styled-components";

export const Banner1 = () => {
  return (
    <Container>
      <ContainerBanner>
        <Title>Супер братья Марио</Title>
        <RatingFilm color={"var(--highRating)"}>10</RatingFilm>
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
      <Background
        background={
          "https://www.film.ru/sites/default/files/filefield_paths/smnq.jpg"
        }
      />
    </Container>
  );
};

export const Banner3 = () => {
  return (
    <Container>
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
type Rating = {
  color?: string;
};
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
  opacity: 0.6;
`;

const ContainerBanner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: absolute;
  top: 25%;
  left: 5%;
  opacity: 1;
  z-index: 9999;
`;
const Title = styled.div`
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 52px;
  color: var(--white);
`;
const RatingFilm = styled.div`
  border-radius: 20px;
  font-style: normal;
  font-weight: 700;
  font-size: 42px;
  line-height: 52px;
  color: ${({ color }: Rating) => (color ? color : "var(--creator)")};

  @media (max-width: 700px) {
    font-size: 25px;
  }
`;
