import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { CSSProperties } from "react";
import error from "../assets/errorImage.jpg";

type Props = {
  id?:number;
  image?: string;
  creator?: string;
  name?: string;
};

export const GridPoster = ({ ...props }: Props) => {
  
let navigate = useNavigate()

  return (
    <Container onClick={()=>{navigate(`/films/${props.id}`)}}>
      <Image image={props.image} />
      <Creator>{props.creator}</Creator>
      <Name>{props.name}</Name>
    </Container>
  );
};

const Image = styled.div`
  width: 100%;
  height: 17vw;
  background: url(${({ image }: Props) => (image ? image : error)});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
  border-radius: 15px;

  :hover {
    opacity: 0.7;
  }

  @media (max-width: 900px) {
    height: 20vw;
  }
  @media (max-width: 750px) {
    height: 30vw;
  }
`;

const Creator = styled.div`
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 18px;
  color: var(--creator);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const Name = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 21px;
  color: var(--white);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  @media (max-width: 500px) {
    font-size: 18px;
  }
`;

const Container = styled.div`
  min-width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;

  cursor: pointer;

  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;
