import React, { useEffect, useState } from "react";
import _ from "lodash";

import "./MovieList.css";
import MovieCard from "./MovieCard";
import FilterGroup from "./FilterGroup";

const MovieList = ({ type, title }) => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [minRating, setMinRating] = useState(0);
  const [sort, setSort] = useState({
    by: "default",
    order: "asc",
  });
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${type}?api_key=${API_KEY}`
      );
      const data = await response.json();
      setMovies(data.results);
      setFilteredMovies(data.results);
    };

    fetchMovies();
  }, [type]);

  useEffect(() => {
    let result = movies;

    if (minRating > 0) {
      result = result.filter((movie) => movie.vote_average >= minRating);
    }

    if (sort.by !== "default") {
      result = _.orderBy(result, [sort.by], [sort.order]);
    }

    setFilteredMovies(result);
  }, [movies, minRating, sort]);

  const handleFilter = (rating) => {
    if (rating === minRating) {
      setMinRating(0);
    } else {
      setMinRating(rating);
    }
  };
  const handleSort = (e) => {
    const { name, value } = e.target;
    setSort((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="movie_list ">
      <header className="movie_list_header align_center">
        <h2 className="movie_list_heading align_center">{title}</h2>
        <div className="movie_list_fs align_center">
          <FilterGroup
            minRating={minRating}
            onRatingClick={handleFilter}
            ratings={[8, 7, 6]}
          />

          <select
            name="by"
            id=""
            className="movie_sorting"
            onChange={handleSort}
            value={sort.by}
          >
            <option value="default">SortBy</option>
            <option value="release_date">Date</option>
            <option value="vote_average">Rating</option>
          </select>

          <select
            name="order"
            id=""
            className="movie_sorting"
            onChange={handleSort}
            value={sort.order}
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </header>

      <div className="movie_cards">
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
};

export default MovieList;
