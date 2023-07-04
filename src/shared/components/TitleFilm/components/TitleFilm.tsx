import React from "react";
import styled from "styled-components";

type Props = {
  width?: string;
  height?: string;
  name?: string;
  ageRating?: string;
};

export const TitleFilm = ({ ...props }: Props) => {
  return (
    <Container>
      <Name>{props.name}</Name>
      {props.ageRating ? <AgeRating>{props.ageRating} +</AgeRating> : null}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 15px;
  justify-content: space-between;

  @media (max-width: 700px) {
    gap: 5px;
  }
`;

const Name = styled.div`
  color: var(--white);
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 52px;
  @media (max-width: 700px) {
    font-size: 38px;
  }
`;

const AgeRating = styled.div`
  margin-top: 10px;
  min-width: 30px;
  max-height: 30px;
  color: var(--white);
  padding: 5px 10px 5px 10px;

  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 10px;
  background-color: var(--secondary);

  @media (max-width: 700px) {
    min-width: 33px;
    max-height: 20px;
    padding: 2px 3px 2px 3px;
    font-size: 8px;
    border-radius: 5px;
    margin-top: 20px;
  }
`;
