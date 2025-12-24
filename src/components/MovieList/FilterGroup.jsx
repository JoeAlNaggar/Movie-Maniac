import React from "react";

const FilterGroup = ({ minRating, onRatingClick, ratings }) => {
  return (
    <ul className="movie_filter align_center">
      {ratings.map((rating) => (
        <li
          key={rating}
          className={
            minRating === rating
              ? "movie_filter_item active"
              : "movie_filter_item"
          }
          onClick={() => onRatingClick(rating)}
        >
          {rating}+ stars
        </li>
      ))}
    </ul>
  );
};

export default FilterGroup;
