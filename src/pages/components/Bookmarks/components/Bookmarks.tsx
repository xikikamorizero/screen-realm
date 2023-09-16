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
    const global = useContext(GlobalContext);

    useEffect(() => {
        global.store.error = 0;
    }, []);

    return (
        <Container>
            <Title>Мои закладки:</Title>
            {store.bookmarks.length !== 0 ? (
                <ContainerGrid>
                    {store.bookmarks.map((a: Bookmarks, i) => (
                        <GridPoster
                            id={a.filmId}
                            name={a.name}
                            creator={a.rating}
                            image={a.image}
                            key={i}
                        />
                    ))}
                </ContainerGrid>
            ) : (
                <NoData>У вас нет закладок :)</NoData>
            )}
        </Container>
    );
});

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 25px;
    @media (max-width: 600px) {
        gap: 35px;
    }
`;
const Title = styled.div`
    width: 100%;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    color: var(--secondary);
`;
const NoData = styled.div`
    width: 100%;
    font-size: 29px;
    font-style: normal;
    color: var(--white);
`;

export const bookmarks: TPages = [<BookmarksPage />];
