import React, {useContext} from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Context } from "../../../api";
import { observer } from "mobx-react-lite";
import { Bookmarks } from "../../../api/types";
import error from "../assets/errorImage.jpg";
import bookmarksOn from "../assets/bookmarksOn.png";
import bookmarksOff from "../assets/bookmarksOff.png";

type Props = {
  id?: number;
  image?: string;
  creator?: string;
  name?: string;
  bok?:boolean;
};

export const GridPoster = observer(({ ...props }: Props) => {
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
            store.bookmarks.some(item => item.filmId === filmObjectData.filmId)
              ? bookmarksOn
              : bookmarksOff
          }
          onClick={() => {
              store.toggleBookmark(filmObjectData);
          }}
        />
      <Container
        onClick={() => {
          navigate(`/films/${props.id}`);
        }}
      >
        <Image image={props.image} />
        <Creator>{props.creator}</Creator>
        <Name>{props.name}</Name>
      </Container>
    </Block>
  );
});

const Block = styled.div`
  min-width: 100%;
  max-width: 100%;
  position: relative;
`;
const Image = styled.div`
  width: 100%;
  height: 17vw;
  background-color: var(--creator);
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
  width: 100%;
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
  z-index: 4;
  cursor: pointer;

  @media (max-width: 700px) {
    width: 25px;
    height: 25px;
    background-size: 20px;
    border-radius: 5px;
  }
`;
