import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
`;

const Text = styled.div`
  max-height: auto;
  overflow: hidden;

  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 22px;
  color: var(--white);

  @media (max-width: 700px) {
    font-size: 13px;
    line-height: 18px;
    max-height: ${({ full }:Props) => (full ? "auto" : "75px")};
  }
`;

const FullText = styled.a`
display: none;
  margin-left: 5px;
  background-color: black;

  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 0px;

  text-decoration-line: underline;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  /* identical to box height, or 0% */
  text-decoration-line: underline;
  color: var(--white);

  @media (max-width: 700px) {
   display: block;
  }
`;

type Props = {
  text?: string;
  full?: boolean;
};

export const FilmDescription = ({...props}:Props) => {
  const [full, setFull] = useState(false);

  const handleToggleFullText = () => {
    setFull(!full);
  };

  return (
    <Container>
      <Text full={full}>{props.text}</Text>
      {props.text? props.text.length > 110 && (
        <FullText onClick={handleToggleFullText}>
          {full ? "Свернуть" : "Развернуть"}
        </FullText>
      ) :null}
    </Container>
  );
};

export default FilmDescription;
