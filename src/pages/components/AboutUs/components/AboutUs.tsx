import React from "react";
import { TPages } from "gears-react";
import styled from "styled-components";

const AboutUs = () => {
  return (
    <Container>
      <TitleMain>Позвольте немного рассказать о нас:</TitleMain>
      <Text>
        Добро пожаловать на страницу "О нас" сайта Screen-Realm! Screen-Realm -
        это проект, созданный с целью демонстрации моих навыков веб-разработки и
        представления моего портфолио. Наш сайт посвящен миру кино и предлагает
        уникальные возможности для любителей фильмов.
      </Text>
      <ContainerText>
        <Title>Цель проекта</Title>
        <Text>
          Цель Screen-Realm заключается в предоставлении пользователю удобного и
          информативного ресурса для получения сведений о различных фильмах. Мы
          стремимся предоставить всю необходимую информацию о фильмах и
          обеспечить приятный пользовательский опыт.
        </Text>
      </ContainerText>
      <ContainerText>
        <Title>Некоммерческий характер</Title>
        <Text>
          Важно отметить, что Screen-Realm является сугубо некоммерческим
          проектом. Мы не преследуем коммерческие цели и не предоставляем
          возможность просмотра или загрузки фильмов. Наш главный акцент — это
          предоставление полезной информации о фильмах и связанных с ними
          данных.
        </Text>
      </ContainerText>
      <ContainerText>
        <Title>Бекенд на основе Kinopoisk Api Unofficial</Title>
        <Text>
          Screen-Realm был разработан на основе бекенда, использующего API
          Kinopoisk Unofficial. Это популярное и надежное API, которое
          предоставляет доступ к различным данным о фильмах, таким как описание,
          рейтинги, актеры и многое другое. Благодаря этому мы можем
          предоставить вам самую актуальную информацию о фильмах.
        </Text>
      </ContainerText>
      <ContainerText>
        <Title>Ваше мнение имеет значение</Title>
        <Text>
          Мы всегда стремимся улучшить наш сайт и предложить вам лучший опыт
          использования. Если у вас есть вопросы, предложения или отзывы,
          пожалуйста, свяжитесь с нами через форму обратной связи на странице
          контактов. Ваше мнение очень важно для нас! Благодарим вас за
          посещение Screen-Realm и надеемся, что вы найдете наш сайт полезным и
          интересным. Желаем приятного просмотра фильмов!
        </Text>
      </ContainerText>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding-bottom: 20px;
`;
const TitleMain = styled.div`
  color: var(--secondary);
  font-size: 35px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const Text = styled.div`
  color: var(--footerTextColor);
  font-size: 20px;
  font-style: normal;
  font-weight: 300;
  line-height: 26px;
  letter-spacing: 0.7px;
`;
const Title = styled.div`
  padding-bottom: 10px;
  color: var(--white);
  font-size: 30px;
  font-style: normal;
  font-weight: 300;
  line-height: 26px;
  letter-spacing: 0.7px;
  border-bottom: 1px solid silver;
`;
const ContainerText = styled.div`
  padding: 10px 20px 10px 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #1a1b22;
  border-radius: 20px;
`;

export const aboutUs: TPages = [<AboutUs />];
