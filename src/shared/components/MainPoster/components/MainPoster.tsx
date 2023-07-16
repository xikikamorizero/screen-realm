import React, { CSSProperties, useContext } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { Context } from "../../../api";
import { Bookmarks } from "../../../api/types";
import error from "../assets/errorImage.jpg";
import bookmarksOn from "../assets/bookmarksOn.png";
import bookmarksOff from "../assets/bookmarksOff.png";

type Props = {
  image?: string;
  creator?: string;
  name?: string;
  style?: CSSProperties;
  id?: number;
};

export const MainPoster = observer(({ ...props }: Props) => {
  const { store } = useContext(Context);
  let navigate = useNavigate();

  const filmObjectData: Bookmarks = {
    filmId: props.id,
    rating: props.creator? props.creator : '',
    name: props.name? props.name : '',
    image: props.image? props.image : '',
  };

  return (
    <Block>
        <BookmarksButton
          image={
            store.bookmarks.some(
              (item) => item.filmId === filmObjectData.filmId
            )
              ? bookmarksOn
              : bookmarksOff
          }
          onClick={() => {
              store.toggleBookmark(filmObjectData);
          }}
        />
      <Container
        onClick={() => {
          if (props.id) {
            navigate(`/films/${props.id}`);
          }
        }}
      >
        <Image image={props.image} style={props.style} />
        <Creator>{props.creator}</Creator>
        <Name>{props.name}</Name>
      </Container>
    </Block>
  );
});

const Image = styled.div`
  width: 100%;
  height: 17vw;
  background-color: var(--creator);
  background: url(${({ image }: Props) => (image ? image : error)});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 10px;

  :hover {
    opacity: 0.7;
  }

  @media (max-width: 700px) {
    height: 25vw;
  }
  @media (max-width: 500px) {
    height: 30vw;
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

  @media (max-width: 700px) {
    font-size: 13px;
  }
`;
const Block = styled.div`
  position: relative;
  min-width: calc(20% - 10px);

  @media (max-width: 700px) {
    min-width: calc(25% - 10px);
  }
  @media (max-width: 500px) {
    min-width: calc(100% / 3 - 10px);
  }
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

const BookmarksButton = styled.div`
  top: 2%;
  right: 3%;
  position: absolute;
  width: 35px;
  height: 35px;
  background: url(${({ image }: Props) => (image ? image : "")});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 30px;
  background-color: var(--secondary);
  border-radius: 10px;
  z-index: 5;
  cursor: pointer;

  @media (max-width: 700px) {
    width: 25px;
    height: 25px;
    background-size: 20px;
    border-radius: 10px;
  }
`;
