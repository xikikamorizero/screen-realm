import React, { useContext, useEffect } from "react";
import { TPages } from "gears-react";
import { observer } from "mobx-react-lite";
import styled from "styled-components";
import { ContainerGrid, GridPoster } from "../../../../shared/components";
import { Context } from "../../../../shared/api";
import { Context as GlobalContext } from "../../../../shared/api";
import { Bookmarks } from "../../../../shared/api/types";

export const BookmarksPage = observer(() => {
  const { store } = useContext(Context);
  const global = useContext(GlobalContext)

  useEffect(()=>{
    global.store.error = 0;
  },[])
  
  return (
    <Container>
        <Title>Мои закладки:</Title>
      <ContainerGrid>
        {store.bookmarks.length!==0? store.bookmarks.map((a: Bookmarks, i) => (
          <GridPoster
            id={a.filmId}
            name={a.name}
            creator={a.rating}
            image={a.image}
            key={i}
          />
        )) : <NoData>
        У вас нет закладок :)
      </NoData>}
      </ContainerGrid>
    </Container>
  );
});

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap:20px;
`;
const Title = styled.div`
  width: 100%;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  color:var(--secondary)
`;
const NoData = styled.div`
  width: 100%;
  font-size: 29px;
  font-style: normal;
  font-weight: 700;
  color:var(--white)
`;

export const bookmarks: TPages = [<BookmarksPage />];
