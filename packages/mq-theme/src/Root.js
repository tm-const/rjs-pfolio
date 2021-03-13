import React, {useEffect} from "react";
import {connect} from "frontity";
import Header from "./components/Header";
import Post from "./components/Post";
import Movies from "./Pages/Movies";

const Root = ({state, actions}) => {

    const data = state.source.get(state.router.link)
      
    // Use effect will load the movies data on load in state
    useEffect(() => {
      actions.source.fetch("/movies")
    }, [])

    return(
      <>
        <Header />
        <hr />
        {data.isFetching && <p>Fetching...</p>}
        {data.isHome && <p>We are Home</p>}
        {data.isMovies && <Post element="movie"/>}
        {data.isMoviesArchive && <Movies />}
      </>
    );
};

export default connect(Root);