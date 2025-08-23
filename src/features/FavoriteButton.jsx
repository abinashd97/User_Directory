import React from "react";
import { useDispatch } from "react-redux";
import { toggleFavorite } from "./usersSlice.jsx";

function FavoriteButton({ userId, isFavorite }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleFavorite(userId));
  };

  return (
    <button
      className={`favorite-btn ${isFavorite ? "" : "inactive"}`}
      aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
      onClick={handleClick}
      title={isFavorite ? "Unfavorite" : "Favorite"}
    >
      ★
    </button>
  );
}

export default FavoriteButton;
