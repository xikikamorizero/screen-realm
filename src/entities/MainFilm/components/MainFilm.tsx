import React, {useContext, useState} from "react";
import styled from "styled-components";
import { observer } from "mobx-react-lite";
import { Context } from "../../../shared/api";
import {
  FilmDescription,
  Poster,
  Rating,
  TitleFilm,
  SlaiderContainer,
  MainPoster,
  Screenshot
} from "../../../shared/components";
import * as types from "../../../shared/api/types";
import error from "../assets/errorImage.jpg";
import bookmarksOn from "../assets/bookmarksOn.png";
import bookmarksOff from "../assets/bookmarksOff.png";

type Props = {
  id?:number;
  image?: string;
  name?: string;
  description?: string;
  rating?: number;
  countRating?: number;
  ageRating?: string;
  budget?: string;
  worldwideBoxOffice?: string;
  screenshot?: types.MovieImage[];
  similars?: types.Film[];
};

export const MainFilm = observer(({ ...props }: Props) => {
  const { store } = useContext(Context);
  const [screenshot, setScreen] = useState<false|string>(false)

  const filmObjectData: types.Bookmarks = {
    filmId: props.id,
    rating: props.rating? String(props.rating) : '',
    name: props.name? props.name : '',
    image: props.image? props.image : '',
  };

  return (
    <Container>
      <ContainerHead>
        <Poster image={props.image} height={'33vw'} width={'30vw'}>
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
        </Poster>
        <InfoBlock>
          <TitleFilm name={props.name} ageRating={props.ageRating} />
          <SecondaryInfoBlock>
            {props.budget && props.worldwideBoxOffice ? (
              <Info>
                <Title>бюджет: {props.budget}</Title>
                <Title>мировые сборы: {props.worldwideBoxOffice}</Title>
              </Info>
            ) : (
              <div></div>
            )}
            <Rating rating={props.rating} count={props.countRating} />
          </SecondaryInfoBlock>
          <FilmDescription text={props.description} />
        </InfoBlock>
      </ContainerHead>

      <SlaiderContainer>
        {props.screenshot?.map((a, i) => (
          <Image image={a.imageUrl} onClick={()=>{setScreen(a.imageUrl)}} key={i}/>
        ))}
      </SlaiderContainer>

      {screenshot? <Screenshot image={screenshot} setState={setScreen} /> : null}

      {props.similars?.length !== 0 && props.similars ? (
        <Container style={{gap:'20px'}}>
          <Title style={{ fontSize: "25px" }}>Похожие фильмы</Title>
          <SlaiderContainer>
            {props.similars.map((a, i) => (
              <MainPoster
                id={a.filmId}
                image={a.posterUrl}
                name={a.nameRu}
                key={i}
              />
            ))}
          </SlaiderContainer>
        </Container>
      ) : null}
    </Container>
  );
});

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;
const ContainerHead = styled.div`
position: relative;
  width: 100%;
  display: flex;
  gap: 20px;
  justify-content: space-between;

  @media (max-width: 700px) {
    gap: 10px;
  }
`;
const InfoBlock = styled.div`
  max-width: 60%;
  display: flex;
  flex-direction: column;
  gap:25px;

  @media (max-width: 700px) {
    gap: 5px;
  }
`;
const SecondaryInfoBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap:5px;
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Title = styled.div`
  color: var(--creator);
  font-size: 16px;
  font-style: normal;
  font-weight: 200;

  @media (max-width: 700px) {
    font-size: 10px;
  }
`;

const Image = styled.div`
  min-width: calc(100% / 3);
  max-width: calc(100% / 3);
  height: 17vw;
  background: url(${({ image }: Props) => (image ? image : error)});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  -webkit-tap-highlight-color: transparent;
  
  cursor: pointer;

  :hover{
    opacity: 0.7;
  }
  :active{
    opacity: 0.5;
  }

  transition: all 0.3s;
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