import React from "react";
import styled from "styled-components";
import { FilmDescription, Poster, Rating, TitleFilm } from "../../../shared/components";

type Props = {
  image?:string;
  name?:string;
  description?:string;
  rating?:number;
  countRating?:number;
  ageRating?:string;
}

export const MainFilm = ({...props}:Props) => {
  return (
    <Container>
      <Poster image={props.image} />
      <InfoBlock>
        <TitleFilm name={props.name} ageRating={props.ageRating} />
        <SecondaryInfoBlock>
          <Rating rating={props.rating} count={props.countRating} />
        </SecondaryInfoBlock>
        <FilmDescription text={props.description} />
      </InfoBlock>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  justify-content: space-between;
`;
const InfoBlock = styled.div`
  max-width: 60%;
`;
const SecondaryInfoBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
