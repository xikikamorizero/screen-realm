import React, { useState, useContext, useEffect, ChangeEvent } from "react";
import styled from "styled-components";
import { observer } from "mobx-react-lite";
import { ContainerGrid } from "../../../shared/components";
import { Film } from "../../../shared/api/types";
import { GridPoster } from "../../../shared/components";
import { Input } from "../../../shared/components";
import { Context as globalContext } from "../../../shared/api/context";
import { Context } from "../lib/context";
import search from "../assets/search.png";
import filter from "../assets/filter.png";

export const SearchFilm = observer(() => {
  const { store } = useContext(Context);
  const global = useContext(globalContext);
  const [delayTimeout, setDelayTimeout] = useState<NodeJS.Timeout | null>(null);
  const [filterSearch, setFilterSearch] = useState(false);
  const [filterState, setFilterState] = useState(false);

  const handleSelectGenre = (event: ChangeEvent<HTMLSelectElement>) => {
    store.genres = [Number(event.target.value)];
  };
  const handleSelectCountry = (event: ChangeEvent<HTMLSelectElement>) => {
    store.countries = [Number(event.target.value)];
  };

  const cancelPreviousRequest = () => {
    if (delayTimeout) {
      clearTimeout(delayTimeout);
    }
  };

  const Search = () => {
    cancelPreviousRequest();

    const timeout = setTimeout(() => {
      global.store.list.getFilmsFilter
        .request({
          keyword: store.keyword,
          page: store.page,
          countries: store.countries,
          genres: store.genres,
          order: store.order,
          type: store.type,
          ratingFrom: store.ratingFrom,
          ratingTo: store.ratingTo,
          yearFrom: store.yearFrom,
          yearTo: store.yearTo,
        })
        .then((response) => {
          store.list = [...response.data.items];
        });
    }, 300);

    setDelayTimeout(timeout);
  };

  useEffect(() => {
    if (store.keyword !== "") {
      Search();
    } else {
      store.list = [];
    }
  }, [store.keyword, filterSearch]);

  return (
    <Container>
      <ContainerSearchinput>
        <Icon icon={search} />
        <Input
          type={"text"}
          placeholder={"Поиск..."}
          onChange={(e) => {
            store.keyword = String(e.target.value);
          }}
        />
        <FilterIcon onClick={()=>{setFilterState(!filterState)}} icon={filter} />
      </ContainerSearchinput>

{filterState?
      <Filter>
        <ContainerNumberRating>
          <ContainerInput>
            <Title>Год</Title>
            <InputFilter
              onChange={(e) => {
                store.yearFrom = Number(e.target.value);
              }}
              type={"number"}
              placeholder={"от"}
            />
            <InputFilter
              onChange={(e) => {
                store.yearTo = Number(e.target.value);
              }}
              type={"number"}
              placeholder={"до"}
            />
          </ContainerInput>
          <ContainerInput>
            <Title>Рейтинг</Title>
            <InputFilter
              onChange={(e) => {
                store.ratingFrom = Number(e.target.value);
              }}
              type={"number"}
              placeholder={"от"}
            />
            <InputFilter
              onChange={(e) => {
                store.ratingTo = Number(e.target.value);
              }}
              type={"number"}
              placeholder={"до"}
            />
          </ContainerInput>
        </ContainerNumberRating>

        <SelectContainer>
          <TypeContainer>
            <Title>Жанры</Title>
            <Select
              value={store.genres.length == 0 ? 0 : Number(store.genres[0])}
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
                store.countries.length == 0 ? 0 : Number(store.countries[0])
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

        <ContainerNumberRating>
          <TypeContainer>
            <Title>Type</Title>
            <TagContainer>
              <Tag
                background={store.type == "FILM"}
                onClick={() => {
                  store.type = "FILM";
                }}
              >
                FILM
              </Tag>
              <Tag
                background={store.type == "TV_SHOW"}
                onClick={() => {
                  store.type = "TV_SHOW";
                }}
              >
                TV_SHOW
              </Tag>
              <Tag
                background={store.type == "TV_SERIES"}
                onClick={() => {
                  store.type = "TV_SERIES";
                }}
              >
                TV_SERIES
              </Tag>
              <Tag
                background={store.type == "MINI_SERIES"}
                onClick={() => {
                  store.type = "MINI_SERIES";
                }}
              >
                MINI_SERIES
              </Tag>
              <Tag
                background={store.type == "ALL"}
                onClick={() => {
                  store.type = "ALL";
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
                background={store.order == "RATING"}
                onClick={() => {
                  store.order = "RATING";
                }}
              >
                RATING
              </Tag>
              <Tag
                background={store.order == "NUM_VOTE"}
                onClick={() => {
                  store.order = "NUM_VOTE";
                }}
              >
                NUM_VOTE
              </Tag>
              <Tag
                background={store.order == "YEAR"}
                onClick={() => {
                  store.order = "YEAR";
                }}
              >
                YEAR
              </Tag>
            </TagContainer>
          </TypeContainer>
        </ContainerNumberRating>
        <FilterButton
          onClick={() => {
            setFilterSearch(!filterSearch);
          }}
        >
          Filter
        </FilterButton>
      </Filter> : null
}

      <ContainerGrid>
        {store.list.map((a: Film, i) => (
          <GridPoster
            image={a.posterUrl}
            creator={a.nameEn}
            name={a.nameRu}
            id={a.filmId}
            key={i}
          />
        ))}
      </ContainerGrid>
    </Container>
  );
});

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
type Props = {
  icon?: string;
  useList?: (s: string) => void;
};

const ContainerSearchinput = styled.div`
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
  width: 100%;
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const InputFilter = styled.input`
  width: 100%;
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
  width: 100%;
  gap: 10px;
`;
const Title = styled.div`
  color: var(--white);
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const ContainerNumberRating = styled.div`
  width: 80%;
  display: flex;
  gap: 25px;
  justify-content: space-between;
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
  width: 80%;
  display: flex;
  gap: 20px;
`;
const FilterButton = styled.div`
  color: var(--white);
  text-align: center;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: 0px;

  cursor: pointer;

  padding: 20px;
  border-radius: 20px;
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