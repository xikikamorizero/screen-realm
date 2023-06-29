import React, { useState, useEffect,useRef } from "react";
import styled from "styled-components";

type Props = {
  text?: string;
  full?: boolean;
};

export const FilmDescription = ({ ...props }: Props) => {
  const [full, setFull] = useState(false);
  const blockRef = useRef<HTMLDivElement>(null);
  const [isTextOverflowed, setIsTextOverflowed] = useState(false);

  useEffect(() => {
    if (blockRef.current) {
      const blockHeight = blockRef.current.offsetHeight;
      const textHeight = blockRef.current.scrollHeight;

      setIsTextOverflowed(textHeight > blockHeight);
    }
  }, []);

  return (
    <Container>
      <Text ref={blockRef} full={full}>{props.text}</Text>
      {isTextOverflowed?   <FullText
        onClick={() => {
          setFull(!full);
        }}
      >
        {full ? "Свернуть" : "Развернуть"}
      </FullText>:null}
    
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
`;
const Text = styled.div`
  max-height: ${({ full }: Props) => (full ? "auto" : "110px")};
  overflow: hidden;

  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 22px;
  color: var(--white);
`;
const FullText = styled.a`
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
`;
