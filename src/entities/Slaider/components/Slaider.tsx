import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../shared/components";
import { MainPoster } from "../../../shared/components";
import { SlaiderContainer } from "../../../shared/components";
import * as types from "../../../shared/api/types";

type Props = {
  text?: string;
  navigate?: string;
  array?: types.Film[];
};

export const Slaider = ({ ...props }: Props) => {
  let navigate = useNavigate();
  return (
    <Container>
      <ContainerTitleButton>
        <Title>{props.text}</Title>
        <Button
          onClick={() => {
            if (props.navigate) {
              navigate(props.navigate);
            }
          }}
          background={"var(--secondary)"}
          width={"131px"}
          color={"black"}
        >
          Смотреть все
        </Button>
      </ContainerTitleButton>
      <SlaiderContainer>
        {props.array?.map((a: types.Film, i) => (
          <MainPoster
            id={a.filmId}
            image={a.posterUrl}
            creator={a.rating}
            name={a.nameRu}
            key={i}
          />
        ))}
      </SlaiderContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ContainerTitleButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 37px;

  color: var(--white);
`;
