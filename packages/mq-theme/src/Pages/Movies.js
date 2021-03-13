import React from "react";
import {connect} from "frontity";
import Link from "../components/Link";
import Featured from "../components/Featured";
import Search from "../components/Search";

const Movies = ({state, actions}) => {
    
    const data = state.source.get(state.router.link);
    console.log(state.source)
    // Set Movie objects into an array to iterate through
    // This will allow you to set the values into an Array
    const allMovies = Object.values(state.source.movies);
    const filterMovies = allMovies.filter((movie) => movie.title.rendered.toLowerCase().includes(state.theme.searchInputValue.toLowerCase()))

    return(
      <>
        <h2>Video</h2>
        <p>There ios somethio9ng here that will show for the mioviue.</p>
        <p>There are ({data.items.length})</p>

        <pre>Contador: {state.theme.counter}</pre>
        <button onClick={actions.theme.setPlusCounter}>Add 1</button>

        <hr />

        <Search />

        <hr />
        { !filterMovies.length > 0 && <p>No results found matching: {state.theme.searchInputValue}</p>}
        { filterMovies.reverse().map( (movie) => {
          
          return(
            <>
              <Link href={movie.link}>
                  <h2 key={movie.id}>{movie.title.rendered}</h2>
              </Link>
            </>
            
          )
        }) }

        <hr />

        <h3>Static Old Data below</h3>


        { data.items.map( ({id}) => {
          
          const movies = state.source.movies[id];

          return(
            <div key={id}>
              <Link href={movies.link} exact>
                <Featured imgID={movies.featured_media} element="movies"></Featured>
                <h2 dangerouslySetInnerHTML={{__html: "Post title: " + movies.title.rendered }}></h2>
              </Link>
                <span dangerouslySetInnerHTML={{ __html: movies.excerpt.rendered }}></span>
                <p>Company: {movies.acf.company || "None"}</p>
                <p>Crypto EXchanges: {movies.acf.crypto}</p>
              <hr />
            </div>
          )
        }) }
      </>
    )
}

export default connect(Movies);