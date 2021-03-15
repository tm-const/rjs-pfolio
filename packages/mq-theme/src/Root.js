import React, {useEffect} from "react";
import {connect, styled, css} from "frontity";

// Componenets
import Header from "./components/Header";
import Post from "./components/Post";

// Global Styles
import Base from "./styles/Base";

// Pages
import Movies from "./Pages/Movies";
import Home from "./Pages/Home"

const Root = ({state, actions}) => {

  const data = state.source.get(state.router.link)
      
  // Use effect will load the movies data on load in state
  useEffect(() => {
    actions.source.fetch("/movies")
  }, [])

    return(
      <>
        <MainWrapper>

          <Base />
          <Header />

          <MainBodyWrapper>

              {data.isMoviesArchive && <Movies />}
              {data.isHome && <Home />}
              {data.isFetching && <p>Fetching...</p>}
              {data.isMovies && <Post element="movie"/>}

          </MainBodyWrapper>

        </MainWrapper>
      </>
    );
};

const MainWrapper = styled.div`
  display:flex;
  justify-content:flex-start;
  align-items: flex-start;
`;

const MainBodyWrapper = styled.div`
  display:flex;

  width: 85%;
  height:100vh;
`;

export default connect(Root);