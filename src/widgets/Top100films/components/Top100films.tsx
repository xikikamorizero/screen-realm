import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import styled from "styled-components";
import { ContainerGrid } from "../../../shared/components";
import { GridPoster } from "../../../shared/components";
import { Film } from "../../../shared/api/types";
import { useList } from "../lib/hook";
import { Context } from "../lib/context";
import { GridPosterSkeleton } from "../../../shared/components";
import { Loader } from "../../../shared/components";

export const Top100films = observer(() => {
    const list = useList();
    const { store } = useContext(Context);
    const SkeletonArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    if (store.loader === 1) {
        return (
            <ContainerGrid>
                {SkeletonArray.map((i) => (
                    <GridPosterSkeleton key={i} />
                ))}
            </ContainerGrid>
        );
    }
    return (
        <Container>
            <Title>Популярные:</Title>
            <ContainerGrid>
                {list.map((a: Film, i) => (
                    <GridPoster
                        id={a.filmId}
                        name={a.nameRu ? a.nameRu : a.nameEn}
                        creator={a.rating}
                        image={a.posterUrl}
                        key={i}
                    />
                ))}
            </ContainerGrid>
            {store.loader !== false && store.loader !== 1 ? (
                <Loader loaderSearch={true} />
            ) : null}
        </Container>
    );
});

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;
const Title = styled.div`
    width: 100%;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    color: var(--secondary);
`;
