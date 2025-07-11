import React, { useState } from "react";
import styled from "styled-components";
import { styled as styledMui } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { motion, AnimatePresence } from "framer-motion";
import { Select, MenuItem, FormControl } from "@mui/material";
import { observer } from "mobx-react-lite";
import { ContainerGrid } from "../../../shared/components";
import { MovieFilterResponse } from "../../../shared/api/types";
import { GridPoster } from "../../../shared/components";
import { Input } from "../../../shared/components";
import { useFilter } from "../lib/hook/useFillter";
import { useSearchParamsSync } from "../lib/hook/useSearchParamsSync";
import { Loader } from "../../../shared/components";
import search from "../assets/search.png";
import filter from "../assets/filter.png";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 3.5 + ITEM_PADDING_TOP,
            width: 250,
            color: "#fff",
            backgroundColor: "#000",
        },
    },
};

const CustomInput = styledMui(InputBase)(({ theme }) => ({
  '& .MuiInputBase-input': {
    padding:"15px",
    '&:focus': {
      borderColor: 'red',
    },
  },
}));

export const SearchFilm = observer(() => {
    const { genreArrayData, countriesArrayData, store } = useFilter();
    useSearchParamsSync();

    const [filterState, setFilterState] = useState(false);

    const handleSelectGenre = (event: any) => {
        store.setGenres(
            event.target.value !== 0 ? Number(event.target.value) : null
        );
    };
    const handleSelectCountry = (event: any) => {
        store.setCountries(
            event.target.value !== 0 ? Number(event.target.value) : null
        );
    }
    return (
        <Container>
            <ContainerSearch filter={filterState? "1" : undefined}>
                <Icon icon={search} />
                <Input
                    type={"text"}
                    value={store.getKeyword}
                    placeholder={"Поиск..."}
                    onChange={(e) => {
                        store.setKeyword(String(e.target.value));
                    }}
                />
                <Icon
                    activeColor={true}
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                        setFilterState(!filterState);
                    }}
                    icon={filter}
                />
            </ContainerSearch>
            <AnimatePresence>
                {filterState && (
                    <Filter
                        layout
                        initial={{height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{height: 0 }}
                        transition={{ duration: 0.5}}
                    >
                        <ContainerFilterPanel>
                            <ContainerInput>
                                <Title>Год</Title>
                                <InputFilter
                                    onChange={(e) => {
                                        store.setYearFrom(
                                            Number(e.target.value)
                                        );
                                    }}
                                    type={"number"}
                                    value={store.getYearFrom}
                                    placeholder={"от"}
                                />
                                <InputFilter
                                    onChange={(e) => {
                                        store.setYearTo(Number(e.target.value));
                                    }}
                                    value={store.getYearTo}
                                    type={"number"}
                                    placeholder={"до"}
                                />
                            </ContainerInput>
                            <ContainerInput>
                                <Title>Рейтинг</Title>
                                <InputFilter
                                    onChange={(e) => {
                                        store.setRatingFrom(
                                            Number(e.target.value)
                                        );
                                    }}
                                    value={store.getRatingFrom}
                                    type={"number"}
                                    placeholder={"от"}
                                />
                                <InputFilter
                                    onChange={(e) => {
                                        store.setRatingTo(
                                            Number(e.target.value)
                                        );
                                    }}
                                    value={store.getRatingTo}
                                    type={"number"}
                                    placeholder={"до"}
                                />
                            </ContainerInput>
                        </ContainerFilterPanel>

                        <ContainerFilterPanel>
                            <TypeContainer>
                                <Title>Категории</Title>
                                <TagContainer>
                                    <Tag
                                        background={store.getType == "FILM"}
                                        onClick={() => {
                                            store.setType("FILM");
                                        }}
                                    >
                                        FILM
                                    </Tag>
                                    <Tag
                                        background={store.getType == "TV_SHOW"}
                                        onClick={() => {
                                            store.setType("TV_SHOW");
                                        }}
                                    >
                                        TV_SHOW
                                    </Tag>
                                    <Tag
                                        background={
                                            store.getType == "TV_SERIES"
                                        }
                                        onClick={() => {
                                            store.setType("TV_SERIES");
                                        }}
                                    >
                                        TV_SERIES
                                    </Tag>
                                    <Tag
                                        background={
                                            store.getType == "MINI_SERIES"
                                        }
                                        onClick={() => {
                                            store.setType("MINI_SERIES");
                                        }}
                                    >
                                        MINI_SERIES
                                    </Tag>
                                    <Tag
                                        background={store.getType == "ALL"}
                                        onClick={() => {
                                            store.setType("ALL");
                                        }}
                                    >
                                        ALL
                                    </Tag>
                                </TagContainer>
                            </TypeContainer>
                            <TypeContainer>
                                <Title>Сортировка</Title>
                                <TagContainer>
                                    <Tag
                                        background={store.getOrder == "RATING"}
                                        onClick={() => {
                                            store.setOrder("RATING");
                                        }}
                                    >
                                        RATING
                                    </Tag>
                                    <Tag
                                        background={
                                            store.getOrder == "NUM_VOTE"
                                        }
                                        onClick={() => {
                                            store.setOrder("NUM_VOTE");
                                        }}
                                    >
                                        NUM_VOTE
                                    </Tag>
                                    <Tag
                                        background={store.getOrder == "YEAR"}
                                        onClick={() => {
                                            store.setOrder("YEAR");
                                        }}
                                    >
                                        YEAR
                                    </Tag>
                                </TagContainer>
                            </TypeContainer>
                        </ContainerFilterPanel>

                        <ContainerFilterPanel just={"space-between"}>
                            <SelectContainer>
                                <TypeContainer>
                                    <Title>Жанры</Title>
                                    <FormControl
                                        sx={{
                                            border: "1px solid var(--secondary)",
                                        }}
                                    >
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={
                                                store.getGenres !== null
                                                    ? store.getGenres
                                                    : 0
                                            }
                                            onChange={handleSelectGenre}
                                            MenuProps={MenuProps}
                                            sx={{
                                                width: 300,
                                                color: "var(--secondary)",
                                                "& svg": {
                                                    color: "var(--secondary)",
                                                },
                                            }}
                                            input={<CustomInput />}
                                        >
                                            <MenuItem value={0}>
                                                Выберите жанр
                                            </MenuItem>
                                            {genreArrayData.map((a, i) => (
                                                <MenuItem
                                                    value={String(a.id)}
                                                    key={i}
                                                >
                                                    {a.genre}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </TypeContainer>

                                <TypeContainer>
                                    <Title>Страны</Title>
                                    <FormControl
                                        sx={{
                                            border: "1px solid var(--secondary)",
                                        }}
                                    >
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={
                                                store.getCountries !== null
                                                    ? store.getCountries
                                                    : 0
                                            }
                                            onChange={handleSelectCountry}
                                            MenuProps={MenuProps}
                                            sx={{
                                                width: 300,
                                                color: "var(--secondary)",
                                                "& svg": {
                                                    color: "var(--secondary)",
                                                },  
                                            }}
                                            input={<CustomInput />}
                                        >
                                            <MenuItem value={0}>
                                                Выберите страну
                                            </MenuItem>
                                            {countriesArrayData.map((a, i) => (
                                                <MenuItem
                                                    value={String(a.id)}
                                                    key={i}
                                                >
                                                    {a.country}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </TypeContainer>
                            </SelectContainer>
                        </ContainerFilterPanel>
                    </Filter>
                )}
            </AnimatePresence>
            <SilverLine />
                {store.getKeyword !== "" ? (
                    <Title>Результат поиска:</Title>
                ) : null}
                {store.getLoader === true ? (
                    <Loader loaderSearch={true} />
                ) : store.getList?.length == 0 ? (
                    <NoResult>Результаты не найдены</NoResult>
                ) : (
                    <motion.div style={{ width: "100%" }}>
                        <ContainerGrid>
                            {store.getList?.map((a: MovieFilterResponse, i) => (
                                <GridPoster
                                    id={a.kinopoiskId}
                                    name={a.nameRu? a.nameRu:a.nameOriginal}
                                    image={a.posterUrl}
                                    creator={String(a.ratingKinopoisk)}
                                    key={i}
                                />
                            ))}
                        </ContainerGrid>
                        {store.getLoader ? (
                            <Loader loaderSearch={true} />
                        ) : null}
                    </motion.div>
                )}
        </Container>
    );
});

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
type Props = {
    icon?: string;
    useList?: (s: string) => void;
    activeColor?: boolean;
};

const ContainerSearch = styled(motion.div)<{filter?:string}>`
    width: 100%;
    display: flex;
    gap: 20px;
    margin-bottom: ${(props)=>props.filter? 20:0}px;
`;
const SilverLine = styled.div`
    width: 100%;
    height: 1px;
    background-color: silver;
    margin-top: 20px;
`
const Icon = styled.div`
    min-width: 60px;
    min-height: 60px;
    background: url(${({ icon }: Props) => icon});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 45px;
    transition: background-color 1s;
    border-radius: 50%;

    :active {
        background-color: ${({ activeColor }: Props) =>
            activeColor ? "#47474795" : ""};
    }

    @media (max-width: 700px) {
        min-width: 40px;
        min-height: 40px;
        background-size: 33px;
    }
`;
const Filter = styled(motion.div)`
    overflow: hidden;
    width: 80%;
    display: flex;
    gap: 20px;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 444px) {
        width: 96%;
    }
`;
const InputFilter = styled.input`
    width: 100%;
    min-width: 70px;
    padding: 5px;
    background-color: var(--main);
    border: 1px solid var(--white);
    border-radius: 10px;
    color: var(--white);
    font-size: 20px;
    :focus {
        outline: none;
        border-color: var(--white);
    }

    @media (max-width: 700px) {
        padding: 2px;
        font-size: 17px;
    }
`;
const ContainerInput = styled.div`
    display: flex;
    width: 45%;
    min-width: 300px;
    gap: 10px;
`;
const Title = styled.div`
    color: var(--white);
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-align: center;
    @media (max-width: 700px) {
        font-size: 27px;
    }
`;
type ContainerFilterPanel = {
    just?: string;
};
const ContainerFilterPanel = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: ${({ just }: ContainerFilterPanel) =>
        just ? just : "center"};
    gap: 40px;
    @media (max-width: 700px) {
        justify-content: center;
    }
`;
const TypeContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;
const TagContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    row-gap: 10px;
    column-gap: 5px;
`;

type Tag = {
    background: boolean;
};
const Tag = styled.div`
    color: var(--white);
    font-size: 21px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 17px 8px 17px;
    border-radius: 20px;
    background-color: ${({ background }: Tag) =>
        background ? "var(--secondary)" : "#5456605f"};
    cursor: pointer;

    -moz-user-select: none;
    -khtml-user-select: none;
    user-select: none;

    @media (max-width: 700px) {
        font-size: 17px;
    }
`;
const SelectContainer = styled.div`
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
`;
const NoResult = styled.div`
    text-align: center;
    font-size: 33px;
    font-style: normal;
    font-weight: 700;
    line-height: 52px;
    color: var(--secondary);
`;
