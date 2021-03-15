import React from "react";
import { connect, styled, css } from "frontity";
import Link from "../components/Link";

const Movies = ({state, actions}) => {

    // Set Movie objects into an array to iterate through
    // This will allow you to set the values into an Array
    const allMovies = Object.values(state.source.movies);
    const filterMovies = allMovies.filter((movie) => movie.title.rendered.toLowerCase().includes(state.theme.searchInputValue.toLowerCase()))

    return(

      <>
        { !filterMovies.length > 0 && <p>No results found matching: {state.theme.searchInputValue}</p>}
        { filterMovies.reverse().map( (movie) => {
          const movieC = movie.categories[0];
          const movieCategories = state.source.category[movieC];

          return(
            <>
              <Link href={movie.link}>
                  <h2 key={movie.id}>{movie.title.rendered}</h2>
              </Link>
              <p>Category: {movieCategories.name}</p>
              
            </>
          )
        }) }
      </>
    )
}

export default connect(Movies);