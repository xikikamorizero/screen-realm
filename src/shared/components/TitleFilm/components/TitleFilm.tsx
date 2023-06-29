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
      <AgeRating>{props.ageRating}</AgeRating>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 15px;
  justify-content: space-between;
`;

const Name = styled.div`
  color: var(--white);
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 52px;
`;

const AgeRating = styled.div`
  margin-top: 10px;
  min-width: ${({ width }: Props) => (width ? width : "30px")};
  max-height: ${({ height }: Props) => (height ? height : "30px")};
  color: var(--white);

  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 10px;
  background-color: var(--secondary);
`;
