import React, { useContext } from "react";
// import "./app/styles/index.css";
// import "./app/styles/colors.css";
// import { CheckAccountAccess } from "./processes";
// import { Route, Routes } from "react-router-dom";
// import { observer } from "mobx-react-lite";
// import { protected_routers, public_routers } from "./app/routers";
// import { Container } from "./shared/components";
// import { MainHeader } from "./entities";
// import styled from "styled-components";
// import { MainFooter } from "./entities";
// import { Context } from "./shared/api";
// import {
//     Main,
//     Top100FilmList,
//     Top250Films,
//     Recommendations,
//     SearchFilms,
//     AboutUs,
//     BookmarksPage,
//     Catalog,
//   } from "./pages";
//   import {FilmInfoBlock} from './widgets';

// const App = observer(() => {
//   const { store } = useContext(Context);
//   console.log(store.error);
//   return (
//     <AppContainer>
//       <MainHeader />
//       <Center
//         style={
//           store.error == 402 ? { maxHeight: "93vh", overflow: "hidden" } : {}
//         }
//       >
//          <Routes>
//           <Route path='/' element={<Main />} />
//           <Route path='/films/*' element={<FilmInfoBlock />} />
//           <Route path='/popular_films' element={<Top100FilmList />} />
//           <Route path='/best_films' element={<Top250Films />} />
//           <Route path='/recommendations' element={<Recommendations />} />
//           <Route path='/search' element={<SearchFilms />} />
//           <Route path='/aboutUs' element={<AboutUs />} />
//           <Route path='/bookmarks' element={<BookmarksPage />} />
//           <Route path='/catalog' element={<Catalog />} />
//         </Routes>
//       </Center>
//       <MainFooter />
//     </AppContainer>
//   );
// });

// const AppContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// const Center = styled(Container)`
//   min-height: 93vh;
//   padding: 100px 0px 90px 0px;
// `;
// export default App;