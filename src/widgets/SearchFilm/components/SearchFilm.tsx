import React, { useState, useContext, useEffect, ChangeEvent } from "react";
import styled from "styled-components";
import { observer } from "mobx-react-lite";
import { ContainerGrid } from "../../../shared/components";
import { Film } from "../../../shared/api/types";
import { GridPoster } from "../../../shared/components";
import { Input } from "../../../shared/components";
import { Context as globalContext } from "../../../shared/api/context";
import { Context } from "../lib/context";
import { Loader } from "../../../shared/components";
import search from "../assets/search.png";
import filter from "../assets/filter.png";

export const SearchFilm = observer(() => {
  const { store } = useContext(Context);
  const global = useContext(globalContext);
  const [delayTimeout, setDelayTimeout] = useState<NodeJS.Timeout | null>(null);
  const [filterSearch, setFilterSearch] = useState(false);
  const [filterState, setFilterState] = useState(false);

  const handleSelectGenre = (event: ChangeEvent<HTMLSelectElement>) => {
    store.setGenres([Number(event.target.value)]);
  };
  const handleSelectCountry = (event: ChangeEvent<HTMLSelectElement>) => {
    store.setCountries([Number(event.target.value)]);
  };

  const cancelPreviousRequest = () => {
    if (delayTimeout) {
      clearTimeout(delayTimeout);
    }
  };

  const Search = () => {
    cancelPreviousRequest();

    const timeout = setTimeout(() => {
      store.setLoader(true);
      global.store.list.getFilmsFilter
        .request({
          keyword: store.getKeyword,
          page: store.getPage,
          countries: store.getCountries,
          genres: store.getGenres,
          order: store.getOrder,
          type: store.getType,
          ratingFrom: store.getRatingFrom,
          ratingTo: store.getRatingTo,
          yearFrom: store.getYearFrom,
          yearTo: store.getYearTo,
        })
        .then((response) => {
          store.setList([...response.data.items]);
          store.setLoader(false);
        });
    }, 300);

    setDelayTimeout(timeout);
  };

  useEffect(() => {
    if (store.getKeyword !== "") {
      Search();
    } else {
      store.setList([]);
    }
  }, [store.getKeyword, filterSearch]);

  return (
    <Container>
      <ContainerSearch>
        <Icon icon={search} />
        <Input
          type={"text"}
          placeholder={"Поиск..."}
          onChange={(e) => {
            store.setKeyword(String(e.target.value));
          }}
        />
        <FilterIcon
          onClick={() => {
            setFilterState(!filterState);
          }}
          icon={filter}
        />
      </ContainerSearch>

      {filterState ? (
        <Filter>
          <ContainerFilterPanel>
            <ContainerInput>
              <Title>Год</Title>
              <InputFilter
                onChange={(e) => {
                  store.setYearFrom(Number(e.target.value));
                }}
                type={"number"}
                placeholder={"от"}
              />
              <InputFilter
                onChange={(e) => {
                  store.setYearTo(Number(e.target.value));
                }}
                type={"number"}
                placeholder={"до"}
              />
            </ContainerInput>
            <ContainerInput>
              <Title>Рейтинг</Title>
              <InputFilter
                onChange={(e) => {
                  store.setRatingFrom(Number(e.target.value));
                }}
                type={"number"}
                placeholder={"от"}
              />
              <InputFilter
                onChange={(e) => {
                  store.setRatingTo(Number(e.target.value));
                }}
                type={"number"}
                placeholder={"до"}
              />
            </ContainerInput>
          </ContainerFilterPanel>

          <ContainerFilterPanel>
            <TypeContainer>
              <Title>Type</Title>
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
                  background={store.getType == "TV_SERIES"}
                  onClick={() => {
                    store.setType("TV_SERIES");
                  }}
                >
                  TV_SERIES
                </Tag>
                <Tag
                  background={store.getType == "MINI_SERIES"}
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
              <Title>Sort</Title>
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
                  background={store.getOrder == "NUM_VOTE"}
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

          <ContainerFilterPanel style={{ justifyContent: "space-between" }}>
            <SelectContainer>
              <TypeContainer>
                <Title>Жанры</Title>
                <Select
                  value={store.getGenres.length == 0 ? 0 : Number(store.getGenres[0])}
                  onChange={handleSelectGenre}
                >
                  <option value="">Выберите жанр</option>
                  <option value="1">триллер</option>
                  <option value="2">драма</option>
                  <option value="5">детектив</option>
                  <option value="6">фантастика</option>
                  <option value="7">приключения</option>
                  <option value="11">боевик</option>
                  <option value="12">фэнтези</option>
                  <option value="13">комедия</option>
                  <option value="24">аниме</option>
                </Select>
              </TypeContainer>

              <TypeContainer>
                <Title>Страны</Title>
                <Select
                  value={
                    store.getCountries.length == 0 ? 0 : Number(store.getCountries[0])
                  }
                  onChange={handleSelectCountry}
                >
                  <option value="">Выберите страну</option>
                  <option value="1">США</option>
                  <option value="2">Швейцария</option>
                  <option value="3">Франция</option>
                  <option value="5">Великобритания</option>
                  <option value="7">Индия</option>
                  <option value="9">Германия</option>
                  <option value="10">Италия</option>
                  <option value="14">Канада</option>
                  <option value="16">Япония</option>
                  <option value="21">Китай</option>
                  <option value="34">Россия</option>
                </Select>
              </TypeContainer>
            </SelectContainer>

            <FilterButton
              onClick={() => {
                setFilterSearch(!filterSearch);
              }}
            >
              Filter
            </FilterButton>
          </ContainerFilterPanel>
        </Filter>
      ) : null}
      {store.getKeyword !== ""? <Title>Результат поиска:</Title>: null}
      {store.getLoader ? (
        <Loader loaderSearch={true} />
      ) : (
        <ContainerGrid>
          {store.getList.map((a: Film, i) => (
            <GridPoster
              image={a.posterUrl}
              creator={a.nameEn}
              name={a.nameRu}
              id={a.filmId}
              key={i}
            />
          ))}
        </ContainerGrid>
      )}
    </Container>
  );
});

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
type Props = {
  icon?: string;
  useList?: (s: string) => void;
};

const ContainerSearch = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  border-bottom: 1px solid silver;
  padding-bottom: 10px;
`;
const Icon = styled.div`
  min-width: 60px;
  min-height: 60px;
  background: url(${({ icon }: Props) => icon});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 60px;
`;
const FilterIcon = styled.div`
  min-width: 60px;
  min-height: 60px;
  background: url(${({ icon }: Props) => icon});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 60px;

  cursor: pointer;
`;
const Filter = styled.div`
  width: 80%;
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const InputFilter = styled.input`
  width: 100%;
  min-width: 100px;
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
`;
const ContainerFilterPanel = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 40px;
`;
const TypeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
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
  padding: 5px 7px 5px 7px;
  border-radius: 20px;
  background-color: ${({ background }: Tag) =>
    background ? "var(--secondary)" : "#5456605f"};
  cursor: pointer;

  -moz-user-select: none;
  -khtml-user-select: none;
  user-select: none;
`;
const Select = styled.select`
  background-color: var(--main);
  border: 1px solid var(--white);
  border-radius: 10px;
  color: var(--white);
  padding: 5px;
`;
const SelectContainer = styled.div`
  display: flex;
  gap: 20px;
`;
const FilterButton = styled.div`
  width: 100px;
  height: 50px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: var(--white);
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: 0px;

  cursor: pointer;

  border-radius: 10px;
  border: 1px solid silver;
  background-color: var(--secondary);
  -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);

  :active {
    -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;
    -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;
    box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;
  }

  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;
