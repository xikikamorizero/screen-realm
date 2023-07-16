import React, { useEffect, useState } from "react";
import styled from "styled-components";

type Props = {
  rating?: number;
  count?: number;
  color?: string;
};

export const Rating = ({ ...props }: Props) => {
  const [color, setColor] = useState("");

  useEffect(() => {
    if (props.rating) {
      if (props.rating > 7) {
        setColor("var(--highRating)");
      } else if (props.rating < 7 && props.rating > 4) {
        setColor("var(--secondary)");
      } else {
        setColor("var(--lowRating)");
      }
    }
  }, [props.rating, color]);
  return (
    <Container>
      <RatingFilm color={color}>{props.rating ? props.rating : "?"}</RatingFilm>
      <TextContainer>
        <div>Рейтинг аудитерии:</div>
        <div>{props.count} оценок</div>
      </TextContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 7px;
  align-items: center;
`;
const RatingFilm = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 42px;
  line-height: 52px;
  color: ${({ color }: Props) => (color ? color : "var(--creator)")};

  @media (max-width: 700px) {
    font-size: 25px;
  }
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: var(--white);
  @media (max-width: 700px) {
    line-height: 10px;
    font-size: 8px;
  }
`;
