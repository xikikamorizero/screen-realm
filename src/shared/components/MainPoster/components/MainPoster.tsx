import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { CSSProperties } from "react";
import error from "../assets/errorImage.jpg";
import Skeleton from "react-loading-skeleton";

type Props = {
  image?: string;
  creator?: string;
  name?: string;
  style?: CSSProperties;
  id?:number;
};

export const MainPoster = ({ ...props }: Props) => {
  let navigate = useNavigate()
  return (
    <Block onClick={()=>{if(props.id){navigate(`/films/${props.id}`)}}}>
      <Container>
        <Image image={props.image} style={props.style} />
        <Creator>{props.creator}</Creator>
        <Name>{props.name}</Name>
      </Container>
    </Block>
  );
};

const Image = styled.div`
  width: 100%;
  height: 17vw;
  background: url(${({ image }: Props) => (image ? image : error)});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 20px;

  :hover {
    opacity: 0.7;
  }
`;

const Creator = styled.div`
  width: 100%;
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
  width: 100%;
  font-style: normal;
  font-weight: 500;
  font-size: 21px;
  color: var(--white);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const Block = styled.div`
  min-width: calc(20% - 10px);
`;

const Container = styled.div`
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