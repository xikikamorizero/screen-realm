import React from "react";
import styled from "styled-components";

type Props = {
  width?: string;
  height?: string;
  name?: string;
  ageRating?: string;
};

export const TitleFilm = ({ ...props }: Props) => {
  let age: string | undefined;

  if (props.ageRating) {
    const match = props.ageRating.match(/\d+/);
    age = match ? match[0] : undefined;
  }

  return (
    <Container>
      <Name>{props.name? props.name:'undefined'}</Name>
      <AgeRating>{props.ageRating? age + '+': '?+'}</AgeRating>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 15px;
  align-items: center;
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
    font-size: 23px;
    line-height: 25px;
  }
`;

const AgeRating = styled.div`
  min-width: max-content;
  color: var(--white);
  padding: 5px 5px;

  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 5px;
  background-color: var(--secondary);

  @media (max-width: 700px) {
    padding: 2px 3px 2px 3px;
    font-size: 8px;
    border-radius: 5px;
  }
`;
